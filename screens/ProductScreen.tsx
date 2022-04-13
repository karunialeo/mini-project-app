import { StyleSheet } from "react-native";

import { Product } from "../components";
import { Text, View } from "../components/Themed";

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Product />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  separator: {
    height: 1,
    width: "80%",
  },
});
