import { Tabs } from "expo-router";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "blue", // this colour is the one we use when you are on that tab
        tabBarInactiveTintColor: "grey", // and this is the colour that shows when you are not on that tab
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
