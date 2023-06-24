import { View } from "react-native";
import React, { useState } from "react";
import ProfileLayout from "../../components/layouts/ProfileLayout";
import Heading2 from "../../components/texts/Heading2";
import CustomCheckBox from "../../components/forms/CustomCheckBox";
import CpButton from "../../components/buttons/CpButton";
import { Button, Text } from "react-native-paper";
import { globalStyles } from "../../utils/globalStyle";
import { useNavigation } from "@react-navigation/native";
import TextButton from "../../components/buttons/TextButton";

const DeleteScreen = () => {
    const navigation = useNavigation();

    const [check, setCheck] = useState({
        check1: false,
        check2: false,
        check3: false,
        check4: false,
    });

    const [confirm, setConfirm] = useState(false);

    return (
        <ProfileLayout>
            <Heading2
                title={"Delete Account"}
                subtitle={
                    confirm
                        ? ""
                        : "Why do you want to delete your account? Select all that apply to you."
                }
            />

            {confirm ? (
                <View style={{ gap: 32 }}>
                    <Text
                        style={[
                            globalStyles.h7,
                            {
                                color: "#000000",
                                lineHeight: 16,
                                marginBottom: 32,
                            },
                        ]}
                    >
                        Deleting your account means you won’t be able to access
                        your personal vehicle permits and manage guest profiles.
                        All your QuikSlip account data will be deleted.
                    </Text>
                    <CpButton
                        label={"DELETE ACCOUNT"}
                        mode={"contained"}
                        op={() => {
                            navigation.navigate("thankYou", {
                                being: "deleted",
                            });
                        }}
                    />
                    <TextButton
                        textColor={"#000000"}
                        label={"I want to keep my account"}
                        mv={1}
                    />
                    <Text style={globalStyles.h8}>
                        You will permanently lose all your information, profile,
                        and access to invite others to park at Eric Brown
                        Holmes. After this, there is no turning back.
                    </Text>
                </View>
            ) : (
                <>
                    <View style={{ gap: 8, marginVertical: 32 }}>
                        <CustomCheckBox
                            label={"I’m moving"}
                            icon={check.check1 ? "check" : ""}
                            op={() => {
                                setCheck({ ...check, check1: !check.check1 });
                            }}
                        />
                        <CustomCheckBox
                            label={"I don’t have a car / motorcycle anymore"}
                            icon={check.check2 ? "check" : ""}
                            op={() => {
                                setCheck({ ...check, check2: !check.check2 });
                            }}
                        />
                        <CustomCheckBox
                            label={"I don’t need an account anymore"}
                            icon={check.check3 ? "check" : ""}
                            op={() => {
                                setCheck({ ...check, check3: !check.check3 });
                            }}
                        />
                        <CustomCheckBox
                            label={"I don’t like this app"}
                            icon={check.check4 ? "check" : ""}
                            op={() => {
                                setCheck({ ...check, check4: !check.check4 });
                            }}
                        />
                    </View>
                    <CpButton
                        label={"CONTINUE"}
                        mode={"contained"}
                        op={() => {
                            setConfirm(!confirm);
                        }}
                    />
                    <TextButton
                        label={"Skip"}
                        op={() => {
                            navigation.goBack();
                        }}
                        textColor={"#969696"}
                    />
                </>
            )}
        </ProfileLayout>
    );
};

export default DeleteScreen;
