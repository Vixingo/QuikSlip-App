import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../../utils/globalStyle";

const ProfileLayout = ({ children }) => {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.pxWrap}>{children}</View>
        </View>
    );
};

export default ProfileLayout;
