import React, { useState } from "react";
import { StyleSheet, Text, Button, TextInput, View } from "react-native";

export default function App() {
  const [value, onChangeText] = React.useState("Enter Something");

  return (
    <View style={styles.container}>
      <TextInput onChangeText={(text) => onChangeText(text)} value={value} />
      <Text>{value == "" ? "Type Something" : value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
