import { useEffect, useState } from 'react';

import { api } from '../services/api';
import { ForecastApiResponse, Location } from '../services/types';

export const useWeatherData = () => {
  const [forecastHours, setForecastHours] = useState<number>(5);
  const [city, setCity] = useState('');
  const [autocompleteLocations, setAutocompleteLocations] = useState<Location[]>();
  const [forecast, setForecast] = useState<ForecastApiResponse>();
  const [isSearchError, setIsSearchError] = useState<boolean>(false);

  const onAutocompleteLocationPress = (loc: Location) => {
    onSearch(loc);
  };

  const onForecastHoursPress = (hours: number) => {
    setForecastHours(hours);
    onSearch();
  };

  const onSearch = async (loc?: Location) => {
    setIsSearchError(false);
    try {
      const response = await api.fetchForecastByCity({
        query: loc?.url ?? city,
        hour: forecastHours,
      });
      // Reason: Fetch by city lacks the url/id of location in response
      setForecast({
        ...response,
        location: { ...response.location, id: loc?.id, url: loc?.url },
      });
    } catch (error) {
      setIsSearchError(true);
    } finally {
      setAutocompleteLocations([]);
    }
  };

  useEffect(() => {
    const autocompleteCity = async (query: string) => {
      try {
        const locations = await api.autocompleteCity(query);
        if (locations.length) {
          setAutocompleteLocations(locations);
        }
      } catch (error) {
        console.log('Error fetching autocomplete data:', error);
      }
    };
    if (city && city.length > 2) {
      autocompleteCity(city);
    }
  }, [city]);

  return {
    autocompleteLocations,
    city,
    setCity,
    forecast,
    forecastHours,
    onForecastHoursPress,
    onAutocompleteLocationPress,
    onSearch,
    isSearchError,
  };
};
