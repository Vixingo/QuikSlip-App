import { View } from "react-native";
import React, { useState } from "react";
import ProfileLayout from "../components/layouts/ProfileLayout";
import { Button, Divider, Text } from "react-native-paper";
import Heading2 from "../components/texts/Heading2";
import C2iconButton from "../components/buttons/C2iconButton";
import { useNavigation } from "@react-navigation/native";

function ModifyScreen({ route }) {
    const [modify, setModified] = useState(true);
    const navigation = useNavigation();

    const { title, subtitle } = route.params;

    const [user, setUser] = useState("Thom Hunt");
    const [user2, setUser2] = useState("Eric Brown");
    return (
        <ProfileLayout>
            <Heading2
                title={modify ? title : "Modify " + title}
                subtitle={subtitle}
            />
            <View style={{ gap: 16, marginTop: 16 }}>
                <C2iconButton
                    label={user2}
                    icon={"star-outline"}
                    mode={"outlined"}
                    op={() => {
                        navigation.navigate("modifyGuest", { name: user2 });
                    }}
                />
                <C2iconButton
                    label={user}
                    icon={"star-outline"}
                    mode={"outlined"}
                    op={() => {
                        navigation.navigate("modifyGuest", { name: user });
                    }}
                />
                {modify ? (
                    <C2iconButton
                        label="Add Guest"
                        icon={"account-plus"}
                        mode={"contained"}
                        op={() => {
                            navigation.navigate("addGuest");
                        }}
                    />
                ) : (
                    ""
                )}
                <Divider style={{ marginVertical: 8 }} />
                {modify ? (
                    <C2iconButton
                        label="Modify Guest Profile"
                        icon={"pencil"}
                        mode={"outlined"}
                        color={"#595959"}
                        op={() => {
                            setModified(!modify);
                        }}
                    />
                ) : (
                    <C2iconButton
                        label="Cancel"
                        icon={"close"}
                        mode={"outlined"}
                        color={"#595959"}
                        right={true}
                        op={() => {
                            setModified(!modify);
                        }}
                    />
                )}
            </View>
        </ProfileLayout>
    );
}

export default ModifyScreen;
