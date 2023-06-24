import { View, Text } from "react-native";
import React from "react";

import ProfileLayout from "../layouts/ProfileLayout";
import { useNavigation } from "@react-navigation/native";
import CSButton from "../buttons/CSButton";

const DeleteTop = ({ being }) => {
    const navigation = useNavigation();

    return (
        <ProfileLayout>
            <View style={{ paddingVertical: 32 }}>
                <CSButton
                    label="To QuikSlip.com"
                    op={() => {
                        navigation.navigate("home");
                    }}
                    mode="outlined"
                />
            </View>
        </ProfileLayout>
    );
};

export default DeleteTop;
