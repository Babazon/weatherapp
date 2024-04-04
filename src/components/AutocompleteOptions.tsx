import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Location, Maybe } from '../services/types';

interface AutocompleteOptionsProps {
  autocompleteLocations: Maybe<Location[]>;
  onAutocompleteLocationPress: (location: Location) => void;
}

export const AutocompleteOptions: React.FC<AutocompleteOptionsProps> = ({
  autocompleteLocations,
  onAutocompleteLocationPress,
}) => {
  if (!autocompleteLocations?.length || autocompleteLocations?.length === 1) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Did you mean: </Text>
      {autocompleteLocations.map((location: Location, index: number) => (
        <TouchableOpacity
          onPress={() => onAutocompleteLocationPress(location)}
          style={styles.button}
          key={location.id}
        >
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
  text: {
    fontSize: 14,
    color: 'white',
  },
  button: {
    marginRight: 2,
  },
});
