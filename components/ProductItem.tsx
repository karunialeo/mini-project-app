import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ProductItem({ item }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.nama}</Text>
      <Text style={styles.category}>{item.kategori}</Text>
      <Text style={styles.price}>{item.harga}</Text>
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
    flex: 1,
  },
  category: {
    flex: 1,
    textAlign: "center",
  },
  price: {
    flex: 1,
    textAlign: "right",
  },
});
