import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import ProfileLayout from "../../components/layouts/ProfileLayout";
import Heading2 from "../../components/texts/Heading2";
import CustomTextInput from "../../components/forms/CustomTextInput";
import CpButton from "../../components/buttons/CpButton";
import { useNavigation } from "@react-navigation/native";

const AddGuestScreen = ({ route }) => {
    const navigation = useNavigation();
    const [guest, setGuest] = useState({ name: "", email: "" });
    const [empty, setEmpty] = useState(true);
    useEffect(() => {
        if (guest.email == "" || guest.name == "") {
            setEmpty(true);
        } else {
            setEmpty(false);
        }
    });
    return (
        <ProfileLayout>
            <Heading2
                title="Create Guest Profile"
                subtitle={
                    "Have a common guest that often comes over to your apartment and could use a quick pass?"
                }
            />
            <View style={{ gap: 40, marginTop: 24 }}>
                <CustomTextInput
                    label={"Name"}
                    icon={"rename-box"}
                    oct={(e) =>
                        setGuest({
                            ...guest,
                            name: e,
                        })
                    }
                />
                <CustomTextInput
                    label={"Email"}
                    icon={"email-outline"}
                    oct={(e) =>
                        setGuest({
                            ...guest,
                            email: e,
                        })
                    }
                />
                <CpButton
                    label={"SEND LINK"}
                    mode={"contained"}
                    disabled={empty}
                    op={() => {
                        console.log("send link ");
                        navigation.navigate("thankYou", {
                            being: "invite",
                            name: guest.name,
                            email: guest.email,
                        });
                    }}
                />
            </View>
        </ProfileLayout>
    );
};

export default AddGuestScreen;
