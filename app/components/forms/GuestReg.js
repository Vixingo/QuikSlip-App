import { View } from "react-native";
import React, { useEffect } from "react";
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

const GuestReg = ({ navigation }) => {
    const [formdata, setFormdata] = React.useState({
        name: "",
        email: "",
        car: "",
        license: "",
        check1: "",
        check2: "",
    });
    useEffect(() => {
        if (formdata.name.length == 0) {
            setreg(true);
        } else if (formdata.email.length == 0) {
            setreg(true);
        } else if (formdata.car.length == 0) {
            setreg(true);
        } else if (formdata.license.length == 0) {
            setreg(true);
        } else if (formdata.check1.length == 0) {
            setreg(true);
        } else if (formdata.check2.length == 0) {
            setreg(true);
        } else {
            setreg(false);
        }
    });
    const [regnow, setreg] = React.useState(true);
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
                maxWidth: 504,
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
                value={formdata.car}
                oct={(e) =>
                    setFormdata({
                        ...formdata,
                        car: e,
                    })
                }
            />
            <CustomTextInput
                label="License Plate"
                icon="car-side"
                value={formdata.license}
                oct={(e) =>
                    setFormdata({
                        ...formdata,
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
                value={formdata.name}
                oct={(e) =>
                    setFormdata({
                        ...formdata,
                        name: e,
                    })
                }
            />
            <CustomTextInput
                label="Email"
                icon="email-outline"
                value={formdata.email}
                oct={(e) =>
                    setFormdata({
                        ...formdata,
                        email: e,
                    })
                }
            />
            <View></View>
            <Text style={globalStyles.h3}>Communication Preference</Text>
            <CustomCheckBox
                label="I agree to receive a confirmation email"
                icon={formdata.check1 ? "check" : ""}
                op={() => {
                    setFormdata({ ...formdata, check1: !formdata.check1 });
                }}
            />
            <CustomCheckBox
                label="I agree to receive a notification for an expiring guest pass"
                icon={formdata.check2 ? "check" : ""}
                op={() => {
                    setFormdata({ ...formdata, check2: !formdata.check2 });
                }}
            />
            <CpButton
                mode="contained"
                label={"REGISTER VEHICLE"}
                disabled={regnow}
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
