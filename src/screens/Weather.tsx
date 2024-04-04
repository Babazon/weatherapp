import moment from 'moment';
import { ImageBackground, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Current } from '../components/Current';
import { Forecast } from '../components/Forecast';
import { ForecastHours } from '../components/ForecastHours';
import { Placeholder } from '../components/Placeholder';
import { Search } from '../components/Search';
import { SearchError } from '../components/SearchError';
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
    onForecastHoursPress,
    onAutocompleteLocationPress,
    fetchForecast,
    isSearchError,
  } = useWeatherData();

  const isDayAtForecastLocation = forecast?.current.is_day;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.scroll}
      refreshControl={
        // Prevent pull down on each fetch
        <RefreshControl refreshing={false} onRefresh={() => fetchForecast(forecast?.location)} />
      }
    >
      <ImageBackground
        source={isDayAtForecastLocation ? dayBG : nightBG}
        style={styles.imgBackground}
      >
        <Search
          city={city}
          setCity={setCity}
          autocompleteLocations={autocompleteLocations}
          onAutocompleteLocationPress={onAutocompleteLocationPress}
          fetchForecast={fetchForecast}
        />
        <SearchError isSearchError={isSearchError} />
        <Placeholder showPlaceholder={!forecast} />
        <Current forecast={forecast} />
        <ForecastHours
          forecastHours={forecastHours}
          onForecastHoursPress={onForecastHoursPress}
          showForecastHours={!!forecast}
        />
        <View style={styles.scrollContainer}>
          {forecast?.forecast.forecastday[0].hour.map((hour: HourData) => {
            return <Forecast key={hour.time} hour={hour} />;
          })}
        </View>
        {forecast && (
          <Text style={styles.lastUpdated}>
            Last updated: {moment(forecast?.current.last_updated).fromNow(true)} ago
          </Text>
        )}
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
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
  lastUpdated: {
    color: 'white',
  },
});
