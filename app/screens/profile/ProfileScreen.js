import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../../utils/globalStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import Heading2 from "../../components/texts/Heading2";
import C2iconButton from "../../components/buttons/C2iconButton";
import { useNavigation } from "@react-navigation/native";
import ProfileLayout from "../../components/layouts/ProfileLayout";

const ProfileScreen = () => {
    const navigation = useNavigation();
    return (
        <ProfileLayout>
            <Heading2
                title="Account Settings"
                subtitle={
                    "Where you can modify and edit anything associated with your account."
                }
            />

            <View style={{ gap: 16, marginTop: 16 }}>
                <C2iconButton
                    mode={"outlined"}
                    label={"Personal Information"}
                    icon={"account-edit"}
                    op={() => {
                        navigation.navigate("userInfo");
                    }}
                />
                <C2iconButton
                    mode={"outlined"}
                    label={"Change Password"}
                    icon={"lock"}
                    op={() => {
                        navigation.navigate("userPass");
                    }}
                />
                <C2iconButton
                    mode={"outlined"}
                    label={"Delete Account"}
                    icon={"trash-can"}
                    op={() => {
                        navigation.navigate("userDelete");
                    }}
                />
            </View>
        </ProfileLayout>
    );
};

export default ProfileScreen;
