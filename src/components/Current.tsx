import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { ForecastApiResponse, Maybe } from '../services/types';
import { getTemperatureColor } from '../utils/getTemperatureColor';

export interface CurrentProps {
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

  const temperatureColor = useMemo(() => getTemperatureColor(current.temp_c), [current.temp_c]);
  const lowTemperatureColor = useMemo(
    () => getTemperatureColor(today?.day.mintemp_c),
    [today?.day.mintemp_c],
  );
  const highTemperatureColor = useMemo(
    () => getTemperatureColor(today?.day.maxtemp_c),
    [today?.day.maxtemp_c],
  );
  const feelsTemperatureColor = useMemo(
    () => getTemperatureColor(current.feelslike_c),
    [current.feelslike_c],
  );

  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.location}>
          {location?.name}, {location?.country}
        </Text>
      </View>
      <View style={styles.weatherContainer}>
        <View style={styles.weatherDetails}>
          <FastImage
            source={{ uri: `https:${current?.condition.icon}` }}
            style={styles.weatherIcon}
            resizeMode={'contain'}
          />
          <Text style={[styles.currentTemp, { color: temperatureColor }]}>
            {Math.round(current.temp_c)}
            °C
          </Text>
        </View>
        <Text style={styles.weatherDescription}>{current?.condition.text}</Text>
      </View>
      <View style={styles.additionalInfoContainer}>
        <View style={styles.additionalInfoRow}>
          <View style={styles.infoBox}>
            <Text style={styles.label}>Feels</Text>
            <Text style={[styles.details, { color: feelsTemperatureColor }]}>
              {current && Math.round(current.feelslike_c)}
              °C
            </Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.label}>Low</Text>
            <Text style={[styles.details, { color: lowTemperatureColor }]}>
              {today && Math.round(today?.day.mintemp_c)}
              °C
            </Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.label}>High</Text>
            <Text style={[styles.details, { color: highTemperatureColor }]}>
              {today && Math.round(today.day.maxtemp_c)}
              °C
            </Text>
          </View>
        </View>
        <View style={styles.additionalInfoRow}>
          <View style={styles.infoBox}>
            <Text style={styles.label}>Wind</Text>
            <Text style={styles.details}>{current && current.wind_kph} kph</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.label}>Humidity</Text>
            <Text style={styles.details}>{current && current.humidity}%</Text>
          </View>
          {current && (
            <View style={styles.infoBox}>
              <Text style={styles.label}>Rain</Text>
              <Text style={styles.details}>
                {current.precip_mm > 0 ? current.precip_mm : '0'} MM
              </Text>
            </View>
          )}
        </View>
      </View>
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
  weatherContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 16,
    padding: 8,
  },
  weatherDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  currentTemp: {
    color: 'white',
    fontSize: 60,
    marginTop: 10,
  },
  weatherDescription: {
    color: 'white',
    textTransform: 'capitalize',
  },
  additionalInfoContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    width: '95%',
    maxWidth: 478,
  },
  additionalInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 4,
    width: '100%',
  },
  infoBox: {
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: 'white',
  },
  details: {
    fontSize: 12,
    color: 'white',
  },
});
