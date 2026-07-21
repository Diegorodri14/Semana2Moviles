import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import WorkScreen from './src/screens/WorkScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <WorkScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});