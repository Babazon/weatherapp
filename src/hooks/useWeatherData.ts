import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

import { api } from '../services/api';
import { ForecastApiResponse, Location } from '../services/types';

export const useWeatherData = () => {
  const [forecastHours, setForecastHours] = useState<number>(5);
  const [city, setCity] = useState('');
  const [autocompleteLocations, setAutocompleteLocations] = useState<Location[]>();
  const [forecast, setForecast] = useState<ForecastApiResponse>();

  const onAutocomplete = (loc: Location) => {
    onSearch(loc);
  };

  const onSearch = async (loc?: Location) => {
    try {
      const response = await api.fetchForecastByCity({
        query: loc?.url ?? city,
        hour: forecastHours,
      });
      setForecast(response);
      setAutocompleteLocations([]);
      setCity('');
    } catch (error) {
      console.error('Error fetching location forecast:', error);
    }
  };

  useEffect(() => {
    const autocompleteCity = debounce(async (query: string) => {
      try {
        const locations = await api.autocompleteCity(query);
        if (locations.length) {
          setAutocompleteLocations(locations);
        }
      } catch (error) {
        console.error('Error fetching autocomplete data:', error);
      }
    }, 500);

    if (city) {
      autocompleteCity(city);
    }
  }, [city]);

  return {
    autocompleteLocations,
    city,
    setCity,
    forecast,
    forecastHours,
    setForecastHours,
    onAutocomplete,
    onSearch,
  };
};
