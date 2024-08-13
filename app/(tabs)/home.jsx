import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context"; // I use this so that the app can start below the notch since phones have notches these days

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <View style={{ width: "99%", flex: 1 }}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
