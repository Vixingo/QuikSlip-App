import { View } from "react-native";
import React from "react";
import { globalStyles, myTheme } from "../../utils/globalStyle";
import { Button, Text } from "react-native-paper";
import CSButton from "../buttons/CSButton";

const OrderDetails = () => {
    return (
        <View
            style={{ backgroundColor: myTheme.color.back, paddingVertical: 24 }}
        >
            <View style={globalStyles.pxWrap}>
                <Text style={[globalStyles.h3, { marginBottom: 16 }]}>
                    Order Details
                </Text>
                <View style={{ gap: 8 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text variant="bodyLarge">Date of Permit:</Text>
                        <Text variant="bodyLarge">04:20 PM Sept 11, 2003</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text variant="bodyLarge">Order Number:</Text>
                        <Text variant="bodyLarge">123456789</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text variant="bodyLarge">Gate Code:</Text>
                        <Text variant="bodyLarge">#2145</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text
                            variant="bodyLarge"
                            style={{ color: myTheme.color.red }}
                        >
                            Pass Expires:
                        </Text>
                        <Text
                            variant="bodyLarge"
                            style={{ color: myTheme.color.red }}
                        >
                            04:20 PM Sept 12, 2003
                        </Text>
                    </View>
                </View>
                <View>
                    <Text
                        style={[
                            globalStyles.h6,
                            { marginVertical: 24, lineHeight: 18 },
                        ]}
                    >
                        We hope you enjoy your stay. Thank you for using
                        QuikSlip, every pass obtained is a big deal to our
                        startup.
                    </Text>
                    <Button
                        mode="contained"
                        style={[globalStyles.cbtn1]}
                        labelStyle={[globalStyles.h3, { lineHeight: 28 }]}
                        onPress={() => {
                            console.log("Press");
                        }}
                    >
                        Download Receipt
                    </Button>
                    <CSButton
                        mode={"outlined"}
                        label={"Add to Wallet"}
                        op={() => {
                            console.log("cbt2");
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default OrderDetails;
