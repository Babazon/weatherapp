import { StyleSheet, Text, View } from 'react-native';

interface SearchErrorProps {
  isSearchError?: boolean;
}

export const SearchError: React.FC<SearchErrorProps> = ({ isSearchError }) => {
  return (
    <>
      {isSearchError && (
        <View style={styles.container}>
          <Text style={styles.error}>Can't fetch weather. Please check your query. </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    margin: 4,
    padding: 4,
  },
});
