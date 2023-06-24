import { View } from "react-native";
import React, { useState } from "react";
import ProfileLayout from "../../components/layouts/ProfileLayout";
import Heading2 from "../../components/texts/Heading2";
import CustomTextInput from "../../components/forms/CustomTextInput";
import CpButton from "../../components/buttons/CpButton";

import {
    Button,
    Dialog,
    Portal,
    PaperProvider,
    Text,
} from "react-native-paper";
import { globalStyles } from "../../utils/globalStyle";
import TextButton from "../../components/buttons/TextButton";
import { useNavigation } from "@react-navigation/native";
const ModifyGuestScreen = ({ route }) => {
    const navigation = useNavigation();
    const [save, setSave] = useState(false);
    const [visible, setVisible] = React.useState(false);
    const { title, subtitle, name } = route.params;
    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);
    return (
        <ProfileLayout>
            <Heading2 title={title} subtitle={subtitle} />
            <View style={{ gap: 40, marginTop: 24 }}>
                <CustomTextInput
                    label={"Name"}
                    icon={"rename-box"}
                    value={name}
                />
                <CustomTextInput
                    label={"Email"}
                    icon={"email-outline"}
                    oct={() => {
                        setSave(true);
                    }}
                />
                <View>
                    <CpButton
                        label={"SAVE CHANGES"}
                        mode={"contained"}
                        disabled={!save}
                        op={() => {
                            navigation.goBack();
                        }}
                    />
                    <TextButton
                        label={"Delete Guest Profile"}
                        op={showDialog}
                    />
                </View>
                <Portal>
                    <Dialog
                        visible={visible}
                        onDismiss={hideDialog}
                        style={globalStyles.Dialog}
                    >
                        <Dialog.Title style={{ margin: 0 }}>
                            <Text
                                style={[
                                    globalStyles.h3,
                                    { textAlign: "center" },
                                ]}
                            >
                                Delete Eric Brown
                            </Text>
                        </Dialog.Title>
                        <Dialog.Content>
                            <Text
                                style={[
                                    globalStyles.h7,
                                    {
                                        textAlign: "center",
                                        alignSelf: "center",
                                    },
                                ]}
                            >
                                Are you sure you want to delete Eric Brown
                                profile from your account?{" "}
                            </Text>
                        </Dialog.Content>
                        <Dialog.Actions
                            style={{
                                justifyContent: "space-evenly",
                                alignItems: "stretch",
                            }}
                        >
                            <Button
                                mode="outlined"
                                style={globalStyles.DialogBtn}
                                onPress={hideDialog}
                            >
                                NO
                            </Button>
                            <Button
                                mode="contained"
                                style={globalStyles.DialogBtn}
                                onPress={hideDialog}
                            >
                                YES
                            </Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        </ProfileLayout>
    );
};

export default ModifyGuestScreen;
