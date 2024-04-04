import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

import { constants } from '../constants';

interface ForecastHoursProps {
  forecastHours: number;
  onForecastHoursPress: (hours: number) => void;
  showForecastHours: boolean;
}

export const ForecastHours: React.FC<ForecastHoursProps> = ({
  forecastHours,
  onForecastHoursPress,
  showForecastHours,
}) => {
  if (!showForecastHours) {
    return null;
  }

  const getConditionalButtonStyle = (hour: number, forecastHours: number): ViewStyle => ({
    backgroundColor: hour === forecastHours ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)',
  });
  const getConditionalTextStyle = (hour: number, forecastHours: number): TextStyle => ({
    fontWeight: hour === forecastHours ? 'bold' : 'normal',
  });

  return (
    <View style={styles.container}>
      {constants.api.forecastHoursOptions.map((hour: number) => {
        return (
          <TouchableOpacity
            onPress={() => onForecastHoursPress(hour)}
            style={[styles.hourButton, getConditionalButtonStyle(hour, forecastHours)]}
            key={hour}
          >
            <Text style={[styles.hourText, getConditionalTextStyle(hour, forecastHours)]}>
              {hour}h
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
  },
  hourButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hourText: {
    fontSize: 20,
    color: 'white',
  },
});
