import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        fontFamily: "Arimo",
    },
    pxWrap: {
        paddingLeft: 20,
        paddingHorizontal: 20,
    },

    backButton: {
        position: "absolute",
        width: 32,
        height: 32,
        top: Platform.OS == "android" ? StatusBar.currentHeight : 60,
        left: 20,
    },

    textinput: { height: 40, borderRadius: 8, fontFamily: "Arimo_400Regular" },
    h1: {
        color: "#000000",
        lineHeight: 36,
        fontSize: 32,
        fontFamily: "Arimo_700Bold",
        // fontWeight: 700,
    },
    h2: {
        fontSize: 24,
        fontFamily: "Arimo_700Bold",
        // fontWeight: 700,
        // fontFamily: "Arimo",
    },
    h3: {
        fontSize: 20,
        fontFamily: "Arimo_700Bold",
        // fontWeight: 700,
    },
    h5: { fontSize: 16, fontFamily: "Arimo_700Bold" },
    h6: { fontSize: 16, fontFamily: "Arimo_400Regular" },
    h7: {
        fontSize: 14,
        // fontWeight: 400,
        fontFamily: "Arimo_400Regular",
    },
    h8: {
        color: "#8A8A8A",
        fontSize: 12,
        fontFamily: "Arimo_400Regular",
    },
    chip: {
        backgroundColor: "#186FE7",
        color: "#fff",
        fontSize: 14,
        // fontWeight: 700,
        padding: 4,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 8,
        overflow: "hidden",
        marginLeft: 16,
        fontFamily: "Arimo_700Bold",
    },
    chip2: {
        backgroundColor: "#cacaca",
        fontSize: 14,
        fontWeight: 400,
        padding: 4,
        borderRadius: 8,
        // marginTop: 10,
        marginRight: 20,
        overflow: "hidden",
        fontFamily: "Arimo_400Regular",
    },
    chip3: {
        marginTop: -9,
        backgroundColor: "#CACACA",
        borderRadius: 8,
    },
    chipLabel: {
        fontSize: 14,
        // fontWeight: 400,
        marginHorizontal: 4,
        marginVertical: 4,
        fontFamily: "Arimo_400Regular",
    },
    Dialog: {
        borderRadius: 8,
        backgroundColor: "#fff",
        marginHorizontal: 55,
    },
    DialogBtn: {
        width: 80,
        borderRadius: 8,
    },
    pill: {
        // backgroundColor: "#186FE7",
        fontSize: 14,
        color: "#fff",
        fontFamily: "Arimo_400Regular",
        padding: 0,
        margin: 0,
        marginHorizontal: 2,
        marginVertical: 2,

        marginRight: 10,
        // width: 156,
    },
    cbtn1: {
        borderRadius: 8,
        minHeight: 48,
        marginBottom: 16,
        justifyContent: "center",
    },

    csButton: {
        borderRadius: 8,
        minHeight: 48,
        justifyContent: "center",
    },
    cpButton: {
        borderRadius: 8,
        minHeight: 48,
        justifyContent: "center",
    },
});

export const myTheme = {
    color: {
        primary: "#186FE7",
        secondary: "#282828",
        tertiary: "#CACACA",
        white: "#ffffff",
        red: "#ff0000",
        back: "#f5f5f5",
        outline: "#186FE7",
        grey: "#969696",
        onSurface: "#282828", //text color
        textColor: "#282828",
    },
};
