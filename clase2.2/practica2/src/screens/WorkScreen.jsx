import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
 
import CustomButton from "../components/Button";
import WorkCard from "../components/WorkCard";
 
import useWorkData from "../hooks/useWork.js";
const workScreen = () => {
  const { workData, loading, loadMoreWork } = usePokemonData();
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokemon</Text>
      <Text style={styles.text}>
        En esta pantalla cargaremos información de los trabajadores, esta información
        se obtendrá de la API de trabajos, la cual nos permitirá obtener datos
        como el nombre, tipo, habilidades y estadísticas de cada Pokémon.
        Inicialmente se mostrarán solamente 25 pokemon, pero se implementará un
        botón para cargar más trabajos a medida que el usuario lo desee.
      </Text>
      {loading ? (
        <Text style={styles.loadingText}>Cargando Trabajo...</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {workData.map((work, index) => (
            <PokemonCard key={index} pokemon={work} />
          ))}
        </ScrollView>
      )}
      <CustomButton
        title="Al dar click en este botón se cargarán 5 trabajadores más"
        onPress={() => {
          loadMoreWork();
        }}
      />
    </View>
  );
};
export default workScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
});