import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <View style={{ marginVertical: 50 }}>
        <Image
          source={require("@/assets/images/react-logo.png")}
          alt="React Icon"
          style={styles.img}
        />
      </View>
      <View style={{ width: "95%", flex: 1, gap: 15 }}>
        <View>
          <Text>Email</Text>
          <TextInput
            keyboardType="email"
            style={styles.emailInput}
            placeholder="janedoe@gmail.com"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
        </View>
        {/* View to group the password text and its textinput */}
        <View>
          <Text>Password</Text>
          <View style={styles.passwordView}>
            <TextInput
              style={{ flex: 1, paddingVertical: 8 }}
              secureTextEntry={showPassword}
              placeholder="*****"
              value={password}
              onChangeText={(e) => setPassword(e)}
            />
            {showPassword ? (
              <TouchableOpacity onPress={togglePassword}>
                <Feather name="eye" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={togglePassword}>
                <Feather name="eye-off" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/home")}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  emailInput: {
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  passwordView: {
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 12,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 99,
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
});
