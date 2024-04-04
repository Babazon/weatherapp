import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface PlaceholderProps {
  showPlaceholder?: boolean;
}

export const Placeholder: React.FC<PlaceholderProps> = ({ showPlaceholder }) => {
  return (
    <>
      {showPlaceholder && (
        <View style={styles.placeholderContainer}>
          <Icon name="cloud-drizzle" size={60} color="white" />
          <Text style={styles.placeholder}>
            If you don't search for a city, my heart is always crying in the rain
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  placeholderContainer: {
    margin: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 200,
  },
});
