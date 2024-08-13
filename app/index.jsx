import { router } from "expo-router";
import { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Index() {
  useEffect(() => {
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/react-logo.png")}
        alt="React Icon"
        style={styles.img}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 200,
    width: 200,
  },
});
