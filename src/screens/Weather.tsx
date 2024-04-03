import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';

import { Current } from '../components/Current';
import { Forecast } from '../components/Forecast';
import { ForecastHours } from '../components/ForecastHours';
import { Search } from '../components/Search';
import { useWeatherData } from '../hooks/useWeatherData';
import { HourData } from '../services/types';
const dayBG = require('../assets/dayBG.jpeg');
const nightBG = require('../assets/nightBG.jpg');

export const Weather = () => {
  const { forecast, city, setCity, autocompleteLocations, forecastHours, setForecastHours } =
    useWeatherData();

  const isDayAtForecastLocation = forecast?.current.is_day;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={isDayAtForecastLocation ? dayBG : nightBG}
        style={styles.imgBackground}
      >
        <Search city={city} setCity={setCity} autocompleteLocations={autocompleteLocations} />
        <Current forecast={forecast} />
        {forecast && (
          <ForecastHours forecastHours={forecastHours} setForecastHours={setForecastHours} />
        )}
        <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.scroll}>
          {forecast?.forecast.forecastday[0].hour.map((hour: HourData) => {
            return <Forecast key={hour.time} hour={hour} />;
          })}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  placeholder: {
    color: 'white',
    textAlign: 'center',
  },
  forecastContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  scroll: {
    flex: 1,
  },
});
