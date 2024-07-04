import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subView}>texto sub-view</Text>
      </View>
      <Text style={{ margin: 20, borderWidth: 1, borderColor: 'red', padding: 10 }}>Hello World!</Text>
      <Button title="Click me" onPress={() => alert('hello')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subView: {
    borderWidth: 1,
    borderColor: '#f27bbd',
    padding: 10,
    margin: 16
  }
});
