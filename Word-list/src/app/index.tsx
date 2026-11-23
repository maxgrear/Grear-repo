import { Text, View, StyleSheet } from "react-native";
import Home from "./Home";
import WordList from "./WordList";

export default function Index() {
  return (
    <View style={styles.container}>
      <WordList />
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
