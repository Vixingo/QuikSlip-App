import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native";

const WelcomeScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text style={{ fontSize: 40, textAlign: "center" }}>Welcome </Text>
            <Text style={{ paddingTop: 30, paddingBottom: 30 }}>
                This screen will come if user doesn't have any account
            </Text>
            <Button title="Login" />
            <Button title="Register" />
        </View>
    );
};

export default WelcomeScreen;
