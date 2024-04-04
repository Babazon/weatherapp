import moment from 'moment';
import React, { FC, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { HourData } from '../services/types';
import { getTemperatureColor } from '../utils/getTemperatureColor';

interface Props {
  hour: HourData;
}

export const Forecast: FC<Props> = ({ hour }) => {
  const temperatureColor = useMemo(() => getTemperatureColor(hour.temp_c), [hour.temp_c]);

  return (
    <View style={styles.hourContainer}>
      <View style={styles.dateContainer}>
        <Text style={styles.weekhour}>Next</Text>
        <Text style={styles.weekhour}>{moment(hour.time).format('h')}</Text>
        <Text style={styles.weekhour}>hours</Text>
      </View>
      <View style={styles.iconTempView}>
        <FastImage
          source={{ uri: `https:${hour?.condition.icon}` }}
          style={styles.weatherIcon}
          resizeMode={'contain'}
        />
        <Text style={styles.weekhour}>{hour.condition.text}</Text>
      </View>
      <View style={styles.degreeView}>
        <Text style={[styles.degree, { color: temperatureColor }]}>
          {Math.round(hour.temp_c)} °C
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hourContainer: {
    padding: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 16,
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  dateContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'right',
    flex: 1,
  },
  weekhour: {
    fontSize: 16,
    textAlign: 'center',
    margin: 3,
    color: 'white',
  },
  iconTempView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    padding: 8,
  },
  weatherIcon: {
    width: 60,
    height: 60,
  },
  degreeView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  degree: {
    fontSize: 32,
    color: 'white',
  },
});
