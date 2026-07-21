import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WorkCard = ({ work }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.id}>ID: {work.id}</Text>
      <Text style={styles.name}>Nombre: {work.name}</Text>
      <Text style={styles.work}>Trabajo: {work.work}</Text>
      <Text style={styles.work_since}>Desde: {work.work_since}</Text>
    </View>
  );
};

export default WorkCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  id: {
    fontSize: 14,
    fontWeight: "600",
    color: "#888",
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2,
  },
  work: {
    fontSize: 16,
    color: "#333",
  },
  work_since: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
});