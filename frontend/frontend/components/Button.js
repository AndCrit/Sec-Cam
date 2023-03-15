import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label,  theme, onPress }) {
  if (theme === "primary") {
    return (
    <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, { backgroundColor: '#fff' }]}
          
          onPress={onPress}>
            <Text>{label}</Text>
        </Pressable>
      </View>
  );
}
}

const styles = StyleSheet.create({
  // Styles from previous step remain unchanged.
  buttonContainer: {
    width: 320,
    height: 58,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
