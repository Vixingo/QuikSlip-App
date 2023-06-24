import { View } from "react-native";
import React from "react";
import {
    Chip,
    Button,
    Text,
    TextInput,
    Checkbox,
    IconButton,
} from "react-native-paper";
import { globalStyles, myTheme } from "../../utils/globalStyle";
import CustomTextInput from "./CustomTextInput";
import CustomCheckBox from "./CustomCheckBox";
import CSButton from "../buttons/CSButton";
import CpButton from "../buttons/CpButton";
import Heading from "../texts/Heading";

const GuestReg = ({ formData, setFormData, navigation }) => {
    const [text, setText] = React.useState("");
    const [focus, setFocus] = React.useState(false);

    const [checked, setChecked] = React.useState(false);
    return (
        <View
            style={{
                gap: 16,
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 30,
            }}
        >
            <Heading
                title="Guest Parking Pass"
                subtitle="Obtain a digital permit pass."
                chip="See Rules"
            />
            {/* <View>
                <Text variant="headlineMedium" style={{ fontWeight: 700 }}>
                    Guest Parking Pass
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 4,
                    }}
                >
                    <Text>Obtain a digital permit pass.</Text>
                    <Text style={globalStyles.chip2}>See Rules</Text>
                </View>
            </View> */}
            <CustomTextInput
                label="Car Make and Model"
                icon="steering"
                value={formData.car}
                oct={(e) =>
                    setFormData({
                        ...formData,
                        car: e,
                    })
                }
            />
            <CustomTextInput
                label="License Plate"
                icon="car-side"
                value={formData.license}
                oct={(e) =>
                    setFormData({
                        ...formData,
                        license: e,
                    })
                }
            />
            <View style={{ flexDirection: "row" }}>
                <Text style={globalStyles.h3}>Length of Stay</Text>
                <Text style={globalStyles.chip}>1 Day</Text>
            </View>
            <CustomTextInput
                label="Name"
                icon="rename-box"
                value={formData.name}
                oct={(e) =>
                    setFormData({
                        ...formData,
                        name: e,
                    })
                }
            />
            <CustomTextInput
                label="Email"
                icon="email-outline"
                value={formData.email}
                oct={(e) =>
                    setFormData({
                        ...formData,
                        email: e,
                    })
                }
            />
            <View></View>
            <Text style={globalStyles.h3}>Communication Preference</Text>
            <CustomCheckBox
                label="I agree to receive a confirmation email"
                icon={formData.check1 ? "check" : ""}
                op={() => {
                    setFormData({ ...formData, check1: !formData.check1 });
                }}
            />
            <CustomCheckBox
                label="I agree to receive a notification for an expiring guest pass"
                icon={formData.check2 ? "check" : ""}
                op={() => {
                    setFormData({ ...formData, check2: !formData.check2 });
                }}
            />
            <CpButton
                mode="contained"
                label={"REGISTER VEHICLE"}
                op={() => {
                    // console.log(formData);
                    navigation.navigate("thankYou", {
                        being: "obtain",
                    });
                }}
            />
        </View>
    );
};

export default GuestReg;
