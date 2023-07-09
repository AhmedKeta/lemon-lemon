import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import details from "../../screens/details";

export default NavBar = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer >
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{ title: "Home" }} />
        <Tab.Screen
          name="Details"
          component={details}
          options={{ title: "Details" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
