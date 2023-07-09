import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Layout from "./components/Layout";
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Layout></Layout>
      {/* <View style={styles.container}>
        <Text style={styles.Text} id="dd">
          Ketaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </Text>
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18191a",
    alignItems: "center",
    justifyContent: "center",
    color: "#e4e6eb",
  },
  Text: {
    color: "#e4e6eb",
  },
  StatusBar: {
    color: "#e4e6eb",
    backgroundColor: "#18191a",
  },
});
