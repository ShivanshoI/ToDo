import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Dimensions,
  TouchableOpacity,
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
        <View style={styles.TaskBox}>
          <View style={styles.TaskHeads}>
            <View style={styles.TaskBox1}>
              <Text style={styles.TaskboxText}>Personal Task</Text>
            </View>
            <View style={styles.TaskBox1}>
              <Text style={styles.TaskboxText}>Team Task</Text>
            </View>
          </View>
        </View>

            <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
          <View style={{ height: "100%", width: "90%", alignSelf: "center" }}>
            <View style={styles.TaskDetailBox}>
              <View style={styles.TaskDetailBase} />
              <View style={styles.TaskDetailPos}>
                <Text style={[styles.text, { marginLeft: 15 }]}>Heading</Text>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Text style={{ fontSize: 12, marginRight: 25 }}>
                    End Date
                  </Text>
                </View>
              </View>
            </View>
            {/* Add more content here to make the ScrollView scrollable */}
            <View style={{ height: 1000 }} />
          </View>
        </View>
      </ScrollView>
    </View>
        
        <View style={styles.addTaskBox}>
          <TouchableOpacity style={styles.addTaskButton}>
            <Text style={styles.addTaskText}>Add New Task</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

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
    borderRadius: 10,
    justifyContent: "center",
    padding: 30,
    elevation: 20,
  },

  PanelText: {
    alignItems: "left",
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
  },
  number: {
    fontSize: 16,
    fontWeight: "bold",
  },

  TaskBox: {
    height: "10%",
    width: "90%",
    // backgroundColor: "plum",
    alignSelf: "center",
  },

  TaskHeads: {
    flexDirection: "row",
    justifyContent: "left",
    // backgroundColor: "black",
    height: "70%",
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
  },

  TaskBox1: {
    height: "100%",
    width: "40%",
    backgroundColor: "#8a7bd2",
    borderRadius: 10,
    marginLeft: 20,
    alignSelf: "center",
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  TaskboxText: {
    color: "white",
    fontStyle: "italic",
    fontWeight: "bold",
  },

  TaskDetailBox: {
    height: 120,
    width: "90%",
    backgroundColor: "#8a7bd2",
    alignSelf: "center",
    borderRadius: 10,
    elevation: 10,
    marginBottom: 10,
  },
  TaskDetailBase: {
    height: 20,
    width: 20,
    borderRadius: 50,
    alignItems: "flex-end",
    backgroundColor: "white",
    position: "absolute",
  },
  TaskDetailPos: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  addTaskBox: {
    position: 'absolute',
    bottom: 10,
    left: '25%',
    width: '50%', // Set width if desired
    padding: 16,
    backgroundColor: '#8a7bd2',
    borderRadius: 10,
    elevation: 4,
  },
  addTaskButton: {
    flex: 1, 
    justifyContent: 'center',  
    alignItems: 'center',  
  },
  addTaskText: {
    fontSize: 18,  
    color: '#fff', 
    fontWeight: 'bold',  
  },
  // CreateButton: {
  //   height: "50%",
  //   width: "80%",
  //   justifyContent: "center",
  //   backgroundColor: "#8a7bd2",
  // },

  // CreateBtuText: {

  // },
});
