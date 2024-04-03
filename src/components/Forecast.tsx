import moment from 'moment';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { HourData } from '../services/types';

interface Props {
  hour: HourData;
}

export const Forecast: FC<Props> = ({ hour }) => {
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
        <Text style={styles.degree}>{Math.round(hour.temp_c)} °C</Text>
        <Text style={styles.feelsLike}>Feels{Math.round(hour.feelslike_c)} °C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hourContainer: {
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 16,
    margin: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  degree: {
    fontSize: 24,
    color: 'white',
  },
  feelsLike: {
    fontSize: 14,
    color: 'white',
  },
});
