import axios, { AxiosInstance } from 'axios';

import { constants } from '../constants';
import { AutocompleteResponse, ForecastApiResponse, Location, WeatherApiResponse } from './types';

class WeatherApi {
  private static instance: WeatherApi;
  private axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: constants.api.BASE_URL,
      params: {
        key: constants.api.API_KEY,
      },
    });
  }

  public static getInstance(): WeatherApi {
    if (!WeatherApi.instance) {
      WeatherApi.instance = new WeatherApi();
    }
    return WeatherApi.instance;
  }

  public async fetchWeatherByCity(city: string): Promise<WeatherApiResponse> {
    try {
      const response = await this.axiosInstance.get<WeatherApiResponse>('/current.json', {
        params: {
          q: city,
        },
      });

      return response.data;
    } catch (error) {
      console.log('Failed to fetch weather data by city', error);
      throw new Error('Failed to fetch weather data by city');
    }
  }

  public async fetchForecastByCity({
    city,
    hour,
  }: {
    city: string;
    hour: number;
  }): Promise<ForecastApiResponse> {
    try {
      const response = await this.axiosInstance.get<ForecastApiResponse>('/forecast.json', {
        params: {
          q: city,
          hour,
        },
      });

      return response.data as ForecastApiResponse;
    } catch (error) {
      console.log('Failed to fetch forecast data by hour', error);
      throw new Error('Failed to fetch forecast data by hour');
    }
  }

  public async autocompleteCity(query: string): Promise<Location[]> {
    try {
      const response = await this.axiosInstance.get<AutocompleteResponse>('/search.json', {
        params: {
          q: query,
        },
      });
      return response.data.locations;
    } catch (error) {
      console.error('Error fetching autocomplete data:', error);
      return [];
    }
  }
}

export const api = WeatherApi.getInstance();
