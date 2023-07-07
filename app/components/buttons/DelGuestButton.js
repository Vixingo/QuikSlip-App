import { View, Text } from "react-native";
import React from "react";
import TextButton from "./TextButton";
import { Button, Dialog, IconButton, Portal } from "react-native-paper";
import { globalStyles, myTheme } from "../../utils/globalStyle";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";

const DelGuestButton = () => {
    const showDialog = () => setVisible(true);
    const [visible, setVisible] = React.useState(false);
    const navigation = useNavigation();

    const hideDialog = () => {
        setVisible(false);
        navigation.goBack();
    };
    return (
        <View>
            <TextButton label={"Delete Guest Profile"} op={showDialog} />
            <Portal>
                <Dialog
                    visible={visible}
                    onDismiss={hideDialog}
                    style={globalStyles.Dialog}
                >
                    <View
                        style={{
                            position: "absolute",
                            top: -25,
                            right: 0,
                        }}
                    >
                        <IconButton
                            icon={"close"}
                            size={24}
                            iconColor={myTheme.color.textColor}
                            onPress={() => {
                                setVisible(false);
                            }}
                        />
                    </View>

                    <Dialog.Title
                        style={{ paddingTop: 20, textAlign: "center" }}
                    >
                        <Text
                            style={[globalStyles.h3, { textAlign: "center" }]}
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
                            Are you sure you want to delete Eric Brown profile
                            from your account?{" "}
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
    );
};

export default DelGuestButton;
