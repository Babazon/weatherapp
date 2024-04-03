import React, { FC } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { Location, Maybe } from '../services/types';

interface SearchProps {
  city: string;
  setCity: (value: string) => void;
  autocompleteLocations: Maybe<Location[]>;
}

export const Search: FC<SearchProps> = ({ city, setCity, autocompleteLocations }) => {
  console.log(autocompleteLocations?.map((loc: Location) => `${loc.city},${loc.country_name}`));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchCity}
        onChangeText={setCity}
        value={city}
        placeholder={'Search By City'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  searchCity: {
    height: 50,
    margin: 12,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    width: '95%',
    maxWidth: 700,
  },
});
