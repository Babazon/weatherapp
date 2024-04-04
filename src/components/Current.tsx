import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ForecastApiResponse, Maybe } from '../services/types';
import { CurrentAdditionalInfo } from './CurrentAdditionalInfo';
import { CurrentWeatherBox } from './CurrentWeatherBox';

interface CurrentProps {
  forecast: Maybe<ForecastApiResponse>;
}

export const Current: React.FC<CurrentProps> = ({ forecast }) => {
  const current = forecast?.current;
  const location = forecast?.location;
  const forecastDay = forecast?.forecast.forecastday;
  const today = forecastDay?.length ? forecastDay[0] : undefined;

  if (!current) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.location}>
          {location?.name}, {location?.country}
        </Text>
      </View>
      <CurrentWeatherBox current={current} />
      <CurrentAdditionalInfo today={today} current={current} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  location: {
    fontSize: 20,
    color: 'white',
  },
  locationContainer: {
    margin: 8,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 4,
    borderRadius: 8,
  },
});
