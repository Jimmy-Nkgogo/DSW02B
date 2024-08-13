import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context"; // I explained in the home page why I used it, please read there for reference
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const Profile = () => {
  const [image, setImage] = useState();
  // I copied this function from the documentation link i put below
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // on the docs it says .All but I changed it to .Images because we only want to get images
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <View style={{ width: "99%" }}>
        <Text>View Profile</Text>
        <View
          style={{ alignItems: "center", width: "100%", marginVertical: 50 }}
        >
          {/*
                Here is the link to docs of the image picker,
                npx expo install expo-image-picker is the command to install it
            https://docs.expo.dev/versions/latest/sdk/imagepicker/ */}

          <TouchableOpacity style={styles.selectImage}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ height: 100, width: 100, borderRadius: 99 }}
              />
            ) : (
              <MaterialCommunityIcons name="account" size={50} color="white" />
            )}
          </TouchableOpacity>
        </View>
        <Button title="Select Image" onPress={pickImage} />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  selectImage: {
    backgroundColor: "navy",
    width: 100,
    height: 100,
    borderRadius: 99,
    justifyContent: "center",
    alignItems: "center",
  },
});
