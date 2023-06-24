import { View, ImageBackground } from "react-native";
import React from "react";

import { TextInput, Text, Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { myTheme } from "../../utils/globalStyle";
const ComplexTop = () => {
    return (
        <ImageBackground
            style={{ width: "100%", height: 360 }}
            source={require("../../assets/images/complex_bg.png")}
            resizeMode="cover"
        >
            <LinearGradient
                colors={["transparent", "rgba(0, 0, 0, 0.7)"]}
                style={{ width: "100%", height: 360 }}
            >
                <View
                    style={{
                        zIndex: 3,
                        flex: 1,
                        justifyContent: "flex-end",
                        paddingLeft: 20,
                        paddingBottom: 16,
                        // backgroundColor:
                        //     "linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 9%)",
                    }}
                >
                    <Text
                        variant="headlineSmall"
                        style={{
                            color: myTheme.color.white,
                            fontWeight: 700,
                        }}
                    >
                        Dallas Fort Worth Complex
                    </Text>
                    <Text
                        variant="bodyMedium"
                        style={{
                            color: myTheme.color.white,
                        }}
                    >
                        <Ionicons
                            name="location-sharp"
                            size={16}
                            color="white"
                        />
                        1111 Eric Brown Ave, Dallas, TX 15900
                    </Text>
                </View>
            </LinearGradient>
        </ImageBackground>
    );
};

export default ComplexTop;
