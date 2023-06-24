import React from "react";
import { Button } from "react-native-paper";
import { myTheme } from "../../utils/globalStyle";
import { useNavigation } from "@react-navigation/native";

const LogOut = () => {
    const navigation = useNavigation();
    return (
        <Button
            mode="outlined"
            compact={true}
            style={{
                width: 72,
                borderRadius: 8,
                backgroundColor: myTheme.color.white,
                margin: 10,
            }}
            labelStyle={{
                marginVertical: 8,
                margin: 0,
                fontWeight: 400,
            }}
            onPress={() => {
                navigation.popToTop();
            }}
        >
            Log Out
        </Button>
    );
};

export default LogOut;
