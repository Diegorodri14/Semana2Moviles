import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
 
//importamos el componente PokemonScreen que se encargará de mostrar la pantalla de los Pokémon
import PokemonScreen from './src/screens/PokemonScreen';
 
export default function App() {
  return (
    <View style={styles.container}>
      <PokemonScreen />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 50,
  },
});r