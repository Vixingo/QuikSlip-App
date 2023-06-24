import { View } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";
import { globalStyles } from "../../utils/globalStyle";
import ProfileLayout from "../layouts/ProfileLayout";
import CpButton from "../buttons/CpButton";
import { useNavigation } from "@react-navigation/native";
import TextButton from "../buttons/TextButton";

const InviteBody = ({ name, email }) => {
    const navigation = useNavigation();
    return (
        <ProfileLayout>
            <View style={{ gap: 24 }}>
                <Text style={[globalStyles.h2, { textAlign: "center" }]}>
                    Invitation to {name} was sent!
                </Text>
                <View
                    style={[{ flexDirection: "column", alignItems: "center" }]}
                >
                    <Text style={globalStyles.h6}> We sent the link to</Text>
                    <Text
                        style={{
                            fontWeight: 700,
                            fontSize: 16,
                            marginVertical: 16,
                        }}
                    >
                        {email}
                    </Text>

                    <Text style={[globalStyles.h7, { textAlign: "center" }]}>
                        Don’t forget to add certain guest as favorites if they
                        visit often enough. In guest profiles star any guest to
                        put them on the top of your list.
                    </Text>
                </View>
                <CpButton
                    label={"Back to Dashboard"}
                    mode={"contained"}
                    op={() => {
                        navigation.navigate("tntDash");
                    }}
                />
            </View>
            <TextButton
                label={"Resend Email"}
                op={() => {
                    console.log("Resend Email");
                }}
            />
        </ProfileLayout>
    );
};

export default InviteBody;
