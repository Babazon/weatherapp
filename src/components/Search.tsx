import React, { FC } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { Location, Maybe } from '../services/types';
import { AutocompleteOptions } from './AutocompleteOptions';

interface SearchProps {
  city: string;
  setCity: (value: string) => void;
  autocompleteLocations: Maybe<Location[]>;
  setLocation: React.Dispatch<React.SetStateAction<Location | undefined>>;
}

export const Search: FC<SearchProps> = ({ city, setCity, autocompleteLocations, setLocation }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchCity}
        onChangeText={setCity}
        value={city}
        placeholder={'Search By City'}
      />
      <AutocompleteOptions
        autocompleteLocations={autocompleteLocations}
        setLocation={setLocation}
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
