import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { CurrentWeatherData } from '../services/types';
import { getTemperatureColor } from '../utils/getTemperatureColor';

interface CurrentWeatherBoxProps {
  current?: CurrentWeatherData;
}

export const CurrentWeatherBox: React.FC<CurrentWeatherBoxProps> = ({ current }) => {
  const temperatureColor = useMemo(() => getTemperatureColor(current?.temp_c), [current?.temp_c]);

  if (!current) {
    return null;
  }

  return (
    <View style={styles.weatherContainer}>
      <View style={styles.weatherDetails}>
        <FastImage
          source={{ uri: `https:${current.condition.icon}` }}
          style={styles.weatherIcon}
          resizeMode={'contain'}
        />
        <Text style={[styles.currentTemp, { color: temperatureColor }]}>
          {Math.round(current.temp_c)}
          °C
        </Text>
      </View>
      <Text style={styles.weatherDescription}>{current.condition.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
