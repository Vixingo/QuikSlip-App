import { View, Text, ScrollView } from "react-native";
import React from "react";
import { globalStyles } from "../../utils/globalStyle";

const ProfileLayout = ({ children }) => {
    return (
        <ScrollView>      
        <View style={globalStyles.container}>
            <View style={globalStyles.pxWrap}>{children}</View>
        </View>
        </ScrollView>
    );
};

export default ProfileLayout;
