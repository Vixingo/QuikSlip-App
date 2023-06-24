import { View } from "react-native";
import React from "react";
import { globalStyles, myTheme } from "../../utils/globalStyle";

import { ScrollView } from "react-native";
import { Dialog, Portal, Button, Text } from "react-native-paper";
const Heading = ({ title, subtitle, chip }) => {
    const [visible, setVisible] = React.useState(false);

    const hideDialog = () => setVisible(false);

    return (
        <View
            style={{
                alignItems: "flex-start",
                // flexDirection: "row",
                // justifyContent: "flex-start",
                // flexWrap: "wrap",
            }}
        >
            <Text style={globalStyles.h2}>{title}</Text>
            <Text
                style={[
                    {
                        fontSize: 14,
                        marginTop: 8,
                        flexWrap: "wrap",
                        alignItems: "center",
                    },
                    globalStyles.h7,
                ]}
            >
                {subtitle + " "}
                {!chip ? (
                    ""
                ) : (
                    <Button
                        style={[globalStyles.chip3]}
                        compact={true}
                        labelStyle={globalStyles.chipLabel}
                        textColor={myTheme.color.textColor}
                        onPress={() => {
                            setVisible(true);
                        }}
                    >
                        {chip}
                    </Button>
                )}

                <Portal>
                    <Dialog
                        visible={visible}
                        onDismiss={hideDialog}
                        style={globalStyles.Dialog}
                    >
                        <Dialog.ScrollArea>
                            <ScrollView
                                contentContainerStyle={{
                                    paddingHorizontal: 24,
                                }}
                            >
                                <Text>This is a scrollable area</Text>
                            </ScrollView>
                        </Dialog.ScrollArea>
                    </Dialog>
                </Portal>
            </Text>
        </View>
    );
};

export default Heading;
