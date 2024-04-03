import { useEffect, useState } from 'react';

import { api } from '../services/api';
import { ForecastApiResponse, Location } from '../services/types';

export const useWeatherData = () => {
  const [forecastHours, setForecastHours] = useState<number>(5);
  const [city, setCity] = useState('');
  const [autocompleteLocations, setAutocompleteLocations] = useState<Location[]>();
  const [location, setLocation] = useState<Location>();
  const [forecast, setForecast] = useState<ForecastApiResponse>();

  useEffect(() => {
    const fetchLocationForecast = async ({ query, hour }: { query: string; hour: number }) => {
      try {
        const forecast = await api.fetchForecastByCity({ query, hour });
        setForecast(forecast);
        setAutocompleteLocations([]);
      } catch (error) {
        console.error('Error fetching autocomplete data:', error);
      }
    };

    if (location) {
      fetchLocationForecast({ hour: forecastHours, query: location.url ?? city });
    }
  }, [location, city, forecastHours]);

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
    const fetchForecastData = async ({ query, hour }: { query: string; hour: number }) => {
      try {
        const response = await api.fetchForecastByCity({ query, hour });
        setForecast(response);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    if (city) {
      fetchForecastData({ query: location?.url ?? city, hour: forecastHours });
    }
  }, [city, forecastHours, location]);

  return {
    autocompleteLocations,
    city,
    setCity,
    forecast,
    forecastHours,
    setForecastHours,
    setLocation,
  };
};
