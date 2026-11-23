import { Text, View, StyleSheet } from "react-native";
import HelloWorld from "./HelloWorld";
import CoreComponents from "./CoreComponents";
import Cafe from "./CatsCafe";
import PizzaTranslator from "./PizzaTranslator";
import ScrollViewExample from "./ScrollViewExample";
import FlatListExample from "./FlatListExample";

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatListExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
