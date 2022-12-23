// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";

import Home from "./screens/Home/Home";
import Profile from "./screens/Profile/Profile";
import Recycle from "./screens/Recycle/Recycle";
import Deposit from "./screens/Deposit/Deposit";
import CarbonInfo from "./screens/CarbonInfo/CarbonInfo";

import AdminHome from "./screens/AdminHome/Adminhome";
import UserSpace from "./screens/UserSpace/UserSpace";
import Approve from "./screens/Approve/Approve";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SingIn" component={SignIn} />
        <Stack.Screen name="SingUp" component={SignUp} />

        <Stack.Screen name="Home" component={Home} />
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
