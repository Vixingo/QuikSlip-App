import { View, Text } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
import { myTheme } from "../../utils/globalStyle";

const CustomCheckBox = ({ label, icon, op }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "flex-start",
                gap: 8,
                paddingRight: 20,
            }}
        >
            <View
                style={{
                    borderWidth: 1,
                    borderRadius: 8,
                    width: 24,
                    height: 24,
                    borderColor: myTheme.color.primary,
                    backgroundColor: myTheme.color.white,
                }}
            >
                <IconButton
                    icon={icon}
                    iconColor={myTheme.color.primary}
                    size={24}
                    style={{
                        position: "absolute",
                        top: -15,
                        left: -15,
                    }}
                    onPress={op}
                />
            </View>
            <Text style={{ fontSize: 16, color: myTheme.color.primary }}>
                {label}
            </Text>
        </View>
    );
};

export default CustomCheckBox;
