// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "./src/screens/SignIn/SignIn";
import SignUp from "./src/screens/SignUp/SignUp";

import Home from "./src/screens/Home/Home";
import Profile from "./src/screens/Profile/Profile";
import Recycle from "./src/screens/Recycle/Recycle";
import Deposit from "./src/screens/Deposit/Deposit";
import CarbonInfo from "./src/screens/CarbonInfo/CarbonInfo";

import AdminHome from "./src/screens/AdminHome/Adminhome";
import UserSpace from "./src/screens/UserSpace/UserSpace";
import Approve from "./src/screens/Approve/Approve";

import useStore from "./src/store/useStore";

const Stack = createNativeStackNavigator();

function App() {
  const userInfo = useStore((state) => state.userInfo);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userInfo.token === "string" && (
          <>
            <Stack.Screen name="SingIn" component={SignIn} />
            <Stack.Screen name="SingUp" component={SignUp} />
          </>
        )}

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Recycle" component={Recycle} />
        <Stack.Screen name="Deposit" component={Deposit} />
        <Stack.Screen name="CarbonInfo" component={CarbonInfo} />
        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Screen name="AdminHome" component={AdminHome} />
        <Stack.Screen name="UserSpace" component={UserSpace} />
        <Stack.Screen name="Approve" component={Approve} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
