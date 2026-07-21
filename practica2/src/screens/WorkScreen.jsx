import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import CustomButton from "../components/Button";
import WorkCard from "../components/WorkCard";
import useWorkData from "../hooks/useWork";

const WorkScreen = () => {
  const { workData, loading, loadMoreWork } = useWorkData();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trabajadores</Text>
      <Text style={styles.text}>
        En esta pantalla se muestra información de trabajadores obtenida desde
        la API de trabajos. Se cargan 5 inicialmente y puedes agregar más con el botón.
      </Text>

      {loading ? (
        <Text style={styles.loadingText}>Cargando trabajos...</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {workData.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </ScrollView>
      )}

      <CustomButton
        title="Cargar 5 trabajadores más"
        onPress={loadMoreWork}
      />
    </View>
  );
};

export default WorkScreen;

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