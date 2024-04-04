import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Current } from '../components/Current';
import { Forecast } from '../components/Forecast';
import { ForecastHours } from '../components/ForecastHours';
import { Search } from '../components/Search';
import { useWeatherData } from '../hooks/useWeatherData';
import { HourData } from '../services/types';
const dayBG = require('../assets/dayBG.jpeg');
const nightBG = require('../assets/nightBG.jpg');

export const Weather = () => {
  const {
    forecast,
    city,
    setCity,
    autocompleteLocations,
    forecastHours,
    setForecastHours,
    onAutocomplete,
    onSearch,
  } = useWeatherData();

  const isDayAtForecastLocation = forecast?.current.is_day;

  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scroll}>
      <ImageBackground
        source={isDayAtForecastLocation ? dayBG : nightBG}
        style={styles.imgBackground}
      >
        <Search
          city={city}
          setCity={setCity}
          autocompleteLocations={autocompleteLocations}
          onAutocomplete={onAutocomplete}
          onSearch={onSearch}
        />
        {!forecast && (
          <View style={styles.placeholderContainer}>
            <Icon name="cloud-drizzle" size={60} color="white" />
            <Text style={styles.placeholder}>
              If you don't search for a city, my heart is always crying in the rain
            </Text>
          </View>
        )}
        <Current forecast={forecast} />
        {forecast && (
          <ForecastHours forecastHours={forecastHours} setForecastHours={setForecastHours} />
        )}
        <View style={styles.scrollContainer}>
          {forecast?.forecast.forecastday[0].hour.map((hour: HourData) => {
            return <Forecast key={hour.time} hour={hour} />;
          })}
        </View>
      </ImageBackground>
    </ScrollView>
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
    fontSize: 24,
  },
  placeholderContainer: {
    margin: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 200,
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
