import React from "react";
import {
    View,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
} from "react-native";

import GuestReg from "../components/forms/GuestReg";
import { globalStyles } from "../utils/globalStyle.js";
import ComplexTop from "../components/Cards/ComplexTop";
import TenantReg from "../components/forms/TenantReg";

const TenantScreen = () => {
    const [tendata, setTendata] = React.useState({
        name: "",
        email: "",
        car: "",
        license: "",
        apartment: "",
        check1: "",
        check2: "",
    });
    return (
        <ScrollView>
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}
            >
                <View style={globalStyles.container}>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: "#f5f5f5",
                            gap: 16,
                        }}
                    >
                        <ComplexTop />
                        <TenantReg tendata={tendata} setTendata={setTendata} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

export default TenantScreen;
