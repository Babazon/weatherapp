import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

import { constants } from '../constants';

interface ForecastHoursProps {
  forecastHours: number;
  setForecastHours: React.Dispatch<React.SetStateAction<number>>;
}

export const ForecastHours: React.FC<ForecastHoursProps> = ({
  forecastHours,
  setForecastHours,
}) => {
  const getConditionalButtonStyle = (hour: number, forecastHours: number): ViewStyle => ({
    backgroundColor: hour === forecastHours ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.5)',
  });
  const getConditionalTextStyle = (hour: number, forecastHours: number): TextStyle => ({
    fontWeight: hour === forecastHours ? 'bold' : 'normal',
    color: forecastHours ? 'white' : 'black',
  });

  return (
    <View style={styles.container}>
      {constants.api.forecastHoursOptions.map((hour: number) => {
        return (
          <TouchableOpacity
            onPress={() => setForecastHours(hour)}
            style={[styles.hourButton, getConditionalButtonStyle(hour, forecastHours)]}
            key={hour}
          >
            <Text style={[styles.hourText, getConditionalTextStyle(hour, forecastHours)]}>
              {hour}
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
    margin: 16,
  },
  hourButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hourText: {
    fontSize: 24,
  },
});
