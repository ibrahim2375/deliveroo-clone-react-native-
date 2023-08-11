import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[t.absolute,t.top0]}>Open up App.js to start working on yours app!</Text>
      <StatusBar style="auto" />
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
});
