import { StyleSheet } from "react-native";

import { Customer } from "../components";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function CustomerScreen({
  navigation,
}: RootTabScreenProps<"Customer">) {
  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Customer />
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
