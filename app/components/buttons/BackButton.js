import * as React from "react";

import { useNavigation } from "@react-navigation/native";
import { Button, IconButton } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { globalStyles, myTheme } from "../../utils/globalStyle";

export default function BackButton() {
    const navigation = useNavigation();

    return (
        <IconButton
            icon="arrow-left"
            iconColor={myTheme.color.textColor}
            onPress={() => {
                navigation.goBack();
            }}
        />
    );
}
