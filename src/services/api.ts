import axios, { AxiosInstance } from 'axios';
import { WeatherResponse } from './types';
import { constants } from '../constants';


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

  public async fetchWeatherData(city: string): Promise<WeatherResponse> {
    try {
      const response = await this.axiosInstance.get('/current.json', {
        params: {
          q: city,
        },
      });
      return response.data as WeatherResponse;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  }

  public async fetchForecastData(city: string): Promise<WeatherResponse> {
    try {
      const response = await this.axiosInstance.get('/forecast.json', {
        params: {
          q: city,
        },
      });
      return response.data as WeatherResponse;
    } catch (error) {
      throw new Error('Failed to fetch forecast data');
    }
  }
}

export default WeatherApi.getInstance();
