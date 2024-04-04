import React, { FC } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import { Location, Maybe } from '../services/types';
import { AutocompleteOptions } from './AutocompleteOptions';

interface SearchProps {
  city: string;
  setCity: (value: string) => void;
  autocompleteLocations: Maybe<Location[]>;
  onAutocomplete: (location: Location) => void;
  onSearch: () => void;
}

export const Search: FC<SearchProps> = ({
  city,
  setCity,
  autocompleteLocations,
  onAutocomplete,
  onSearch,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchCity}
        onChangeText={setCity}
        value={city}
        placeholder={'Search By City'}
        onSubmitEditing={onSearch}
      ></TextInput>
      <TouchableOpacity onPress={onSearch} style={styles.searchButton}>
        <Icon name="search" size={32} color="gray" />
      </TouchableOpacity>
      <AutocompleteOptions
        autocompleteLocations={autocompleteLocations}
        onAutocomplete={onAutocomplete}
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
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    position: 'absolute',
    right: 16,
    bottom: 0,
    top: 24,
  },
});
