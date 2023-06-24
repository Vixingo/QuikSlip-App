import * as React from "react";
import {
    PaperProvider,
    MD3LightTheme,
    configureFonts,
    DefaultTheme,
} from "react-native-paper";
import StackNavigator from "./app/components/StackNavigator";
import * as SplashScreen from "expo-splash-screen";

import { myTheme } from "./app/utils/globalStyle";
import {
    useFonts,
    Arimo_400Regular,
    Arimo_500Medium,
    Arimo_600SemiBold,
    Arimo_700Bold,
} from "@expo-google-fonts/arimo";
import { Platform } from "react-native";
export default function App() {
    const [fontsLoaded] = useFonts({
        Arimo: require("./app/assets/fonts/Arimo-Regular.ttf"),
        Arimo_400Regular,
        Arimo_500Medium,
        Arimo_600SemiBold,
        Arimo_700Bold,
    });

    if (!fontsLoaded) {
        console.log("not loaded");
    } else {
        console.log("loaded");
    }

    const fontConfig = {
        customVariant: {
            fontFamily: Platform.select({
                web: "Arimo",
                ios: "Arimo",
                default: "Arimo",
            }),
        },
    };
    const theme = {
        ...MD3LightTheme,
        roundness: 8,
        colors: {
            ...MD3LightTheme.colors,
            primary: myTheme.color.primary,
            secondary: myTheme.color.secondary,
            onSurface: myTheme.color.onSurface,
            onSurfaceVariant: myTheme.color.primary,
            outline: myTheme.color.outline,
            onSurfaceDisabled: myTheme.color.white,
            secondaryContainer: myTheme.color.white,
            onSecondaryContainer: myTheme.color.primary,
        },
        fonts: configureFonts({ config: fontConfig }),
    };

    return (
        <PaperProvider theme={theme}>
            <StackNavigator />
        </PaperProvider>
    );
}
