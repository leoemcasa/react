import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputConteiner}>
        <TextInput style={styles.inputText} placeholder="Your goal!" />
        <Button title="Add Goal" />
      </View>
        <Text>Goals...</Text>
      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputConteiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    paddingLeft: 8,
    marginRight: 8
  }
});
