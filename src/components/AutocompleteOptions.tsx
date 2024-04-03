import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Location, Maybe } from '../services/types';

interface AutocompleteOptionsProps {
  autocompleteLocations: Maybe<Location[]>;
  setLocation: React.Dispatch<React.SetStateAction<Location | undefined>>;
}

export const AutocompleteOptions: React.FC<AutocompleteOptionsProps> = ({
  autocompleteLocations,
  setLocation,
}) => {
  if (!autocompleteLocations?.length || autocompleteLocations?.length === 1) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Did you mean: </Text>
      {autocompleteLocations.map((location: Location, index: number) => (
        <TouchableOpacity onPress={() => setLocation(location)} style={styles.button}>
          <Text style={styles.text}>
            {location.name} ({location.country})
            {index < autocompleteLocations.length - 1 ? ',' : ''}
          </Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.text}>?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '95%',
    marginVertical: 8,
    marginHorizontal: 2,
    flexWrap: 'wrap',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  citiesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'red',
    marginHorizontal: 2,
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
  button: {
    marginRight: 2,
  },
});
