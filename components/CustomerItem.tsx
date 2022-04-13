import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { pascalCase } from "change-case";

export default function CustomerItem({ item }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.nama}</Text>
      <Text style={styles.dom}>{item.domisili}</Text>
      <Text style={styles.gender}>{pascalCase(item.jenis_kelamin)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderColor: "#aaa",
  },
  name: {
    flex: 1.5,
  },
  dom: {
    flex: 1,
    textAlign: "center",
  },
  gender: {
    flex: 1,
    textAlign: "right",
  },
});
