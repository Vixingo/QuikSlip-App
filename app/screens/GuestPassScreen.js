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
function GuestPassScreen({ navigation }) {
   
    return (
        <>
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
                                // backgroundColor: "#f5f5f5",
                                gap: 16,
                            }}
                        >
                            <ComplexTop />
                            <GuestReg        
                                navigation={navigation}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </>
    );
}

export default GuestPassScreen;
