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
        <>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              title: "Recycle Coin",
              headerTintColor: "rgba(39, 130, 100,1)",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="SingUp"
            component={SignUp}
            options={{
              title: "Kayıt Ol",
              headerTintColor: "rgba(39, 130, 100,1)",
              headerTitleAlign: "center",
            }}
          />
        </>
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Recycle"
            component={Recycle}
            options={{
              title: "Geri Dönüşüm Yap",
              headerTintColor: "rgba(39, 130, 100,1)",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Deposit"
            component={Deposit}
            options={{
              title: "Coin Gönder",
              headerTintColor: "rgba(39, 130, 100,1)",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="CarbonInfo"
            component={CarbonInfo}
            options={{
              title: "Karbon Bilgileri",
              headerTintColor: "rgba(39, 130, 100,1)",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              title: "Profil",
              headerTintColor: "rgba(39, 130, 100,1)",
              headerTitleAlign: "center",
            }}
          />
        </>
        <>
          <Stack.Screen
            name="AdminHome"
            component={AdminHome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserSpace"
            component={UserSpace}
            options={{
              title: "Kullanıcı Uzayı",
              headerTintColor: "rgba(39, 130, 100,1)",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Approve"
            component={Approve}
            options={{
              title: "Onay Sayfası",
              headerTintColor: "rgba(39, 130, 100,1)",
              headerTitleAlign: "center",
            }}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
