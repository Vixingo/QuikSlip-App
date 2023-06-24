import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const TextButton = ({ label, op, textColor, mv }) => {
    return (
        <Button
            mode="text"
            style={{ borderRadius: 8, marginVertical: mv ? mv : 16 }}
            textColor={textColor}
            labelStyle={{
                fontSize: 16,
                fontWeight: 700,
                textDecorationLine: "underline",
                marginVertical: 16,
            }}
            onPress={op}
        >
            {label}
        </Button>
    );
};

export default TextButton;
