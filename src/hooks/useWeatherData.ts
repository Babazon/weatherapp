import { useEffect, useState } from 'react';

import { api } from '../services/api';
import { ForecastApiResponse, Location } from '../services/types';

export const useWeatherData = () => {
  const [forecastHours, setForecastHours] = useState<number>(5);
  const [city, setCity] = useState('');
  const [autocompleteLocations, setAutocompleteLocations] = useState<Location[]>();
  const [forecast, setForecast] = useState<ForecastApiResponse>();

  useEffect(() => {
    const autocompleteCity = async (city: string) => {
      try {
        const locations = await api.autocompleteCity(city);
        setAutocompleteLocations(locations);
      } catch (error) {
        console.error('Error fetching autocomplete data:', error);
      }
    };

    if (city) {
      autocompleteCity(city);
    }
  }, [city]);

  useEffect(() => {
    const fetchForecastData = async ({ city, hour }: { city: string; hour: number }) => {
      try {
        const response = await api.fetchForecastByCity({ city, hour });
        setForecast(response);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    if (city) {
      fetchForecastData({ city, hour: forecastHours });
    }
  }, [city, forecastHours]);

  return { autocompleteLocations, city, setCity, forecast, forecastHours, setForecastHours };
};
