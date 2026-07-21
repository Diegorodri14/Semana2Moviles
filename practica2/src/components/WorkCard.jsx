import React from "react";
import { Image, StyleSheet, Text } from "react-native";
 
const WorkCard = ({ pokemon }) => {
  //Obtener el número del trabajo a partir de su URL
  const NumberWork = pokemon.url.split("/").filter(Boolean).pop();
 
  return (
    <View style={styles.card}>
      <Text style={styles.id}>#{NumberWork}</Text>
      <Text style={styles.name}>#{pokemon.name}</Text>
      <Text style={styles.work}>{pokemon.work}</Text>
      <Text style={styles.work_since}>{pokemon.work_since}</Text>
    </View>
  );
};
export default WorkCard;
 
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  number: {
    fontSize: 14,
    fontWeight: "600",
    color: "#888",
    marginTop: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});