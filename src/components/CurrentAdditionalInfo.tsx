import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CurrentWeatherData, ForecastDay } from '../services/types';
import { getTemperatureColor } from '../utils/getTemperatureColor';

interface CurrentAdditionalInfoProps {
  current?: CurrentWeatherData;
  today?: ForecastDay;
}

export const CurrentAdditionalInfo: React.FC<CurrentAdditionalInfoProps> = ({ current, today }) => {
  const lowTemperatureColor = useMemo(
    () => getTemperatureColor(today?.day.mintemp_c),
    [today?.day.mintemp_c],
  );
  const highTemperatureColor = useMemo(
    () => getTemperatureColor(today?.day.maxtemp_c),
    [today?.day.maxtemp_c],
  );
  const feelsTemperatureColor = useMemo(
    () => getTemperatureColor(current?.feelslike_c),
    [current?.feelslike_c],
  );

  if (!current || !today) {
    return null;
  }

  return (
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
            <Text style={styles.details}>{current.precip_mm > 0 ? current.precip_mm : '0'} MM</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
