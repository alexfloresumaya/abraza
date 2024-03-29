import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./src/Screens/Navigation/BottomTabs";
import Login from "./src/Screens/Login";
import { ClerkProvider } from "@clerk/clerk-expo";
// import Signup from "./src/Screens/SignUp/Signup";
import SignUp from "./src/Screens/Navigation/SignUp";
import Notifications from "./src/Screens/Notification";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Signup"
            component={SignUp}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={BottomTabs}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Notifications"
            component={Notifications}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ClerkProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
