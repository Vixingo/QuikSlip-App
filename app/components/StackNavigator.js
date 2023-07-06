import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconButton, PaperProvider, Button } from "react-native-paper";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import GuestPassScreen from "../screens/GuestPassScreen";
import ModifyScreen from "../screens/ModifyScreen";
import useAuth from "../hooks/useAuth";
import WelcomeScreen from "../screens/WelcomeScreen";
import ThankScreen from "../screens/ThankScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { globalStyles, myTheme } from "../utils/globalStyle";
import BackButton from "../components/buttons/BackButton";
import OverviewScreen from "../screens/OverviewScreen";
import ExpiredScreen from "../screens/ExpiredScreen";
import TenantScreen from "../screens/TenantScreen";
import TntDashScreen from "../screens/TntDashScreen";
import CpButton from "./buttons/CpButton";
import LogOut from "./buttons/LogOut";
import ProfileScreen from "../screens/profile/ProfileScreen";
import InfoScreen from "../screens/profile/InfoScreen";
import PassScreen from "../screens/profile/PassScreen";
import DeleteScreen from "../screens/profile/DeleteScreen";
import VehicleScreen from "../screens/vehicle/VehicleScreen";
import GuestScreen from "../screens/guest/GuestScreen";
import AddGuestScreen from "../screens/guest/AddGuestScreen";
import ModifyGuestScreen from "../screens/guest/ModifyGuestScreen";

import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Arimo_400Regular,
  Arimo_500Medium,
  Arimo_600SemiBold,
  Arimo_700Bold,
} from "@expo-google-fonts/arimo";
import LogoutBar from "./NavBars/LogoutBar";
function StackNavigator() {
  SplashScreen.preventAutoHideAsync();
  const Stack = createNativeStackNavigator();
  const { user } = useAuth();
  // const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Arimo: require("../assets/fonts/Arimo-Regular.ttf"),
    Arimo_400Regular,
    Arimo_500Medium,
    Arimo_600SemiBold,
    Arimo_700Bold,
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
          {!user ? (
            <>
              <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{
                  title: "Dev Dashboard",
                }}
              />

              <Stack.Screen
                name="guestPass"
                options={{
                  title: "",
                  headerTransparent: true,
                  headerBackTitleVisible: false,
                  contentStyle: { backgroundColor: myTheme.color.back },
                  headerLeft: () => <BackButton />,
                }}
                component={GuestPassScreen}
              />
              <Stack.Screen
                name="tenant"
                options={{
                  title: "",
                  headerTransparent: true,
                  headerBackTitleVisible: false,
                  headerLeft: () => <BackButton />,
                }}
                component={TenantScreen}
              />
              {/* <Stack.Screen
                                name="modify"
                                options={{
                                    title: "",
                                    // headerTransparent: true,
                                    headerShadowVisible: false,
                                    headerStyle: {
                                        backgroundColor: myTheme.color.back,
                                    },
                                    headerLeft: () => <BackButton />,
                                    headerRight: () => <LogOut />,
                                }}
                                component={ModifyScreen}
                            /> */}
              <Stack.Screen
                name="thankYou"
                component={ThankScreen}
                options={{
                  // presentation: "fullScreenModal",
                  headerTransparent: true,
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="overview"
                component={OverviewScreen}
                options={{
                  title: "",
                  headerTransparent: true,
                  headerShadowVisible: false,
                  headerLeft: () => <BackButton />,
                }}
              />
              <Stack.Screen
                name="expired"
                component={ExpiredScreen}
                options={{
                  headerTransparent: true,
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="tntDash"
                component={TntDashScreen}
                options={{
                  headerTitle: "",
                  headerTransparent: true,
                  // headerShown: false,
                  // headerLeft: () => <BackButton />,
                  // headerBackTitleVisible: false,
                  headerBackVisible: false,

                  headerRight: () => <LogOut />,
                }}
              />
              <Stack.Screen
                name="setting"
                component={ProfileScreen}
                options={{
                  headerTitle: "",
                  headerTransparent: false,
                  headerShadowVisible: false,
                  headerStyle: {
                    backgroundColor: myTheme.color.back,
                  },

                  headerLeft: () => <BackButton />,
                  headerRight: () => <LogOut />,
                }}
              />
              <Stack.Screen
                name="userInfo"
                component={InfoScreen}
                options={{
                  headerTitle: "",
                  headerTransparent: false,
                  headerShadowVisible: false,
                  headerStyle: {
                    backgroundColor: myTheme.color.back,
                  },
                  headerLeft: () => <BackButton />,
                  headerRight: () => <LogOut />,
                }}
              />
              <Stack.Screen
                name="userPass"
                component={PassScreen}
                options={{
                  headerTitle: "",
                  headerTransparent: false,
                  headerShadowVisible: false,
                  headerStyle: {
                    backgroundColor: myTheme.color.back,
                  },
                  headerLeft: () => <BackButton />,
                  // headerRight: () => <LogOut />,
                }}
              />
              <Stack.Screen
                name="userDelete"
                component={DeleteScreen}
                options={{
                  headerTitle: "",
                  headerTransparent: false,
                  headerShadowVisible: false,
                  headerStyle: {
                    backgroundColor: myTheme.color.back,
                  },
                  headerLeft: () => <BackButton />,
                  // headerRight: () => <LogOut />,
                }}
              />
              <Stack.Screen
                name="commonGuest"
                component={GuestScreen}
                options={{
                  header: (props) => <LogoutBar {...props} />,
                  //   headerTransparent: true,
                  headerShadowVisible: true,
                  headerStyle: {
                    backgroundColor: myTheme.color.back,
                  },
                  // headerLeft: () => <BackButton />,
                  // headerRight: () => <LogOut />,
                }}
              />
              <Stack.Screen
                name="userVehicle"
                component={VehicleScreen}
                options={{
                  headerTitle: "",
                  headerTransparent: false,
                  headerShadowVisible: false,

                  headerStyle: {
                    backgroundColor: myTheme.color.back,
                  },

                  headerLeft: () => <BackButton />,
                  headerRight: () => <LogOut />,
                }}
              />
              <Stack.Screen
                name="modifyGuest"
                component={ModifyGuestScreen}
                options={{
                  headerTitle: "",
                  headerTransparent: false,
                  headerShadowVisible: false,
                  headerStyle: {
                    backgroundColor: myTheme.color.back,
                  },
                  headerLeft: () => <BackButton />,
                  headerRight: () => <LogOut />,
                }}
              />
              <Stack.Screen
                name="addGuest"
                component={AddGuestScreen}
                options={{
                  headerTitle: "",
                  headerTransparent: false,
                  headerShadowVisible: false,
                  headerStyle: {
                    backgroundColor: myTheme.color.back,
                  },
                  headerLeft: () => <BackButton />,
                  headerRight: () => <LogOut />,
                }}
              />
              {/* delete this login in final build */}
              <Stack.Screen
                name="login"
                options={{
                  title: "login",
                  // headerTransparent: true,
                  // headerShadowVisible: false,
                }}
                component={WelcomeScreen}
              />
            </>
          ) : (
            <Stack.Screen
              name="login"
              options={{
                title: "login",
                // headerTransparent: true,
                // headerShadowVisible: false,
              }}
              component={WelcomeScreen}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default StackNavigator;
