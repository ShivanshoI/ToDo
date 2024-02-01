import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.Heading}>
          Greetings {"\n"}
          <Text style={styles.headsubText}>Rasior</Text>
        </Text>

        <View style={styles.TaskUpdatePanel}>
          <View style={styles.PanelText}>
            <Text style={styles.text}>
              Task Completed <Text style={styles.number}>12</Text>{" "}
            </Text>
            <Text style={styles.text}>
              Task Pending <Text style={styles.number}>8</Text>{" "}
            </Text>
          </View>
        </View>

        <View style={styles.Taskbox}>
          <View></View>
          <View style={styles.TaskHeads}>
            <View style={styles.TaskBox1}>
              <Text style={styles.TaskboxText}>Personal Task</Text>
            </View>
            <View style={styles.TaskBox1}>
              <Text style={styles.TaskboxText}>Team Task</Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "red",
              height: "100%",
              width: "100%",
              // position: "absolute",
            }}
          >
            <ScrollView></ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
// abc

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  safeContainer: {
    flex: 1,
    backgroundColor: "white",
  },

  Heading: {
    padding: 40,
    paddingTop: 60,
    fontSize: 20,
  },

  headsubText: {
    fontSize: 24,
    fontWeight: "bold",
  },

  TaskUpdatePanel: {
    height: "22%",
    width: "80%",
    backgroundColor: "#8a7bd2",
    alignSelf: "center",
    borderRadius: 20,
    justifyContent: "center",
    padding: 30,
    elevation: 20,
  },

  PanelText: {
    alignItems: "left",
  },
  text: {
    fontSize: 16,
    fontFamily: "RobotoLight",
    marginBottom: 5,
    color: "white",
  },
  number: {
    fontSize: 16,
    fontWeight: "bold",
  },

  TaskHeads: {
    flexDirection: "row",
    justifyContent: "left",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    height: "12%",
    width: "80%",
    alignSelf: "center",
    marginTop: 20,
    opacity: "25%",
    borderRadius: "10",
  },

  TaskBox1: {
    height: "80%",
    width: "40%",
    backgroundColor: "#8a7bd2",
    borderRadius: 10,
    marginLeft: 20,
    alignSelf: "center",
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  Taskbox: {},
  TaskboxText: {
    color: "white",
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
