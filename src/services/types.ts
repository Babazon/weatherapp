
export type Maybe<T> = T | null | undefined;

export interface WeatherResponse {
    location: Location;
    current: Current;
    forecast: Forecast;
}

export interface Location {
    name: string;
    country: string;
}

export interface Current {
    condition: {
        text: string;
        icon: string;
    };
}

export interface Forecast {
    forecastday: ForecastDay[];
}

export interface ForecastDay {
    hour: Hour[];
}

export interface Hour {
    time: string; // format: "YYYY-MM-DD HH:MM"
    condition: {
        text: string;
        icon: string;
    };
}
