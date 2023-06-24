import { View, Text } from "react-native";
import React from "react";
import ProfileLayout from "../../components/layouts/ProfileLayout";
import Heading2 from "../../components/texts/Heading2";
import CustomTextInput from "../../components/forms/CustomTextInput";
import CustomDrop from "../../components/forms/CustomDrop";
import CpButton from "../../components/buttons/CpButton";
import { useNavigation } from "@react-navigation/native";

const InfoScreen = () => {
    const navigation = useNavigation();

    return (
        <ProfileLayout>
            <Heading2
                title={"Personal Information"}
                subtitle={
                    "Your current information on fill. Click on any bar to modify the information provided and save the changes."
                }
            />
            <View style={{ marginTop: 24, gap: 40 }}>
                <CustomTextInput label={"Name"} icon={"rename-box"} />
                <CustomTextInput label={"Email"} icon={"email-outline"} />
                <CustomDrop />
                <CpButton
                    label={"SAVE CHANGES"}
                    mode={"contained"}
                    op={() => {
                        console.log("infoScreen");
                        navigation.goBack();
                    }}
                />
            </View>
        </ProfileLayout>
    );
};

export default InfoScreen;
