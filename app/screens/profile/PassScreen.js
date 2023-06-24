import { View, Text } from "react-native";
import React, { useState } from "react";
import ProfileLayout from "../../components/layouts/ProfileLayout";
import Heading2 from "../../components/texts/Heading2";
import { TextInput } from "react-native-paper";
import CpButton from "../../components/buttons/CpButton";
import { useNavigation } from "@react-navigation/native";

const PassScreen = () => {
    const [cp, setCp] = useState(true);
    const [np, setNp] = useState(true);
    const navigation = useNavigation();

    return (
        <ProfileLayout>
            <Heading2
                title={"Reset Password"}
                subtitle={
                    "Your new password must be different from the previously used passwords."
                }
            />
            <View style={{ gap: 40, marginTop: 24 }}>
                <TextInput
                    label="Current Password"
                    secureTextEntry={cp}
                    mode="outlined"
                    textStyle={{ color: "#f33" }}
                    right={
                        <TextInput.Icon
                            icon="eye"
                            onPress={() => {
                                setCp(!cp);
                            }}
                        />
                    }
                />
                <TextInput
                    label="New Password"
                    secureTextEntry={np}
                    mode="outlined"
                    right={
                        <TextInput.Icon
                            icon="eye"
                            onPress={() => {
                                setNp(!np);
                            }}
                        />
                    }
                />
                <TextInput
                    label="Confirm New Password"
                    secureTextEntry={np}
                    mode="outlined"
                    right={
                        <TextInput.Icon
                            icon="eye"
                            onPress={() => {
                                setNp(!np);
                            }}
                        />
                    }
                />
                <CpButton
                    label={"UPDATE NEW PASSWORD"}
                    mode={"contained"}
                    op={() => {
                        console.log("pass");
                        navigation.goBack();
                    }}
                />
            </View>
        </ProfileLayout>
    );
};

export default PassScreen;
