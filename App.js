import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Switch,
} from "react-native";

export default function HelloWorldApp() {
  const [value, onChangeText] = React.useState("Enter Something");
  const [isDarkTheme, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // Task 1 and Task 2
  return (
    <View style={isDarkTheme ? styles.darkMode : styles.lightMode}>
      <View>
        <Text style={isDarkTheme ? styles.headingDark : styles.headingLight}>
          {"Lab 2 Task 3"}
        </Text>
      </View>

      <View>
        <TextInput
          style={isDarkTheme ? styles.editDark : styles.editLight}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <Text style={isDarkTheme ? styles.textDark : styles.textLight}>
          {value == "" ? "Type Something" : value}
        </Text>
        <Button
          style={styles.button}
          onPress={() => onChangeText("")}
          title="Clear"
          appearance="default"
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={isDarkTheme ? styles.labelDark : styles.labelLight}>
          {"Dark Mode"}
        </Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkTheme ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDarkTheme}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lightMode: {
    flex: 1,
    justifyContent: "space-around",
    alignItem: "center",
    backgroundColor: "white",
    padding: 20,
  },

  darkMode: {
    flex: 1,
    justifyContent: "space-around",
    alignItem: "center",
    backgroundColor: "#121212",
    padding: 20,
  },

  editLight: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    textAlign: "center",
  },

  editDark: {
    height: 40,
    borderWidth: 1,
    borderColor: "white",
    color: "white",
    padding: 10,
    marginVertical: 10,
    textAlign: "center",
  },

  textLight: {
    height: 40,
    padding: 10,
    marginVertical: 10,
    textAlign: "center",
  },

  textDark: {
    color: "white",
    height: 40,
    padding: 10,
    marginVertical: 10,
    textAlign: "center",
  },

  headingLight: {
    fontSize: 30,
    marginTop: 100,
    fontWeight: "bold",
    padding: 10,
    marginVertical: 10,
    textAlign: "center",
  },

  headingDark: {
    color: "white",
    fontSize: 30,
    marginTop: 100,
    fontWeight: "bold",
    padding: 10,
    marginVertical: 10,
    textAlign: "center",
  },

  labelLight: {},

  labelDark: {
    color: "white",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
  },

  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  switch: {
    marginLeft: 10,
  },
});
