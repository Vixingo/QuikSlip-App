import { Animated, Pressable, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from "./CustomTextInput";
import { Button, IconButton, Text } from "react-native-paper";
import { globalStyles, myTheme } from "../../utils/globalStyle";
import CustomDrop from "./CustomDrop";
import CpButton from "../buttons/CpButton";
import Heading from "../texts/Heading";

const TenantReg = ({ tendata, setTendata }) => {
    const navigation = useNavigation();

    const [add, setAdd] = useState(false);
    return (
        <View
            style={{
                gap: 16,
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 30,
            }}
        >
            <View>
                <Text style={globalStyles.h2}>Register Your Vehicle</Text>
                <Text style={{ fontSize: 14, marginTop: 8 }}>
                    Input your vehicle details below.
                </Text>
            </View>
            <CustomTextInput
                label="Car Make and Model"
                icon="steering"
                value={tendata.car}
                oct={(e) =>
                    setTendata({
                        ...tendata,
                        car: e,
                    })
                }
            />
            <CustomTextInput
                label="License Plate"
                icon="car-side"
                value={tendata.license}
                oct={(e) =>
                    setTendata({
                        ...tendata,
                        license: e,
                    })
                }
            />
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                <Button
                    mode="contained"
                    compact={true}
                    onPress={() => {
                        setAdd(!add);
                    }}
                    icon={add ? "minus" : "plus"}
                    buttonColor={
                        add ? myTheme.color.grey : myTheme.color.primary
                    }
                    labelStyle={[globalStyles.pill]}
                >
                    {!add ? "Add Vehicle" : "Remove Vehicle"}
                </Button>
            </View>
            {add ? (
                <>
                    <View>
                        <Text style={globalStyles.h2}>
                            Register Additional Vehicle
                        </Text>
                        <Text style={{ fontSize: 14, marginTop: 8 }}>
                            Input your vehicle details below.
                        </Text>
                    </View>
                    <CustomTextInput
                        label="Car Make and Model"
                        icon="steering"
                        value={tendata.car2}
                        oct={(e) =>
                            setTendata({
                                ...tendata,
                                car2: e,
                            })
                        }
                    />
                    <CustomTextInput
                        label="License Plate"
                        icon="car-side"
                        value={tendata.license2}
                        oct={(e) =>
                            setTendata({
                                ...tendata,
                                license2: e,
                            })
                        }
                    />
                </>
            ) : (
                ""
            )}
            <Heading
                title={"Tenant Vehicle Registration"}
                subtitle={"Register your vehicle with the required information"}
                chip={"See Rules"}
            />
            {/* <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                <Text style={globalStyles.h2}>Tenant Vehicle Registration</Text>
                <Text style={{ fontSize: 14, marginTop: 8 }}>
                    Register your vehicle with the required information
                </Text>
                <Text>below. </Text>
                <Text style={[globalStyles.chip2]}>See Rules</Text>
            </View> */}
            <CustomTextInput
                label="Name"
                icon="rename-box"
                value={tendata.name}
                oct={(e) =>
                    setTendata({
                        ...tendata,
                        name: e,
                    })
                }
            />
            <CustomTextInput
                label="Email"
                icon="email-outline"
                value={tendata.email}
                oct={(e) =>
                    setTendata({
                        ...tendata,
                        email: e,
                    })
                }
            />

            <CustomDrop />
            <CpButton
                label={"REGISTER VEHICLE"}
                mode={"contained"}
                op={() => {
                    navigation.navigate("thankYou", {
                        being: "register",
                        name: "Eric Brown",
                    });
                }}
            />
        </View>
    );
};

export default TenantReg;
