import { View, Text } from "react-native";
import React from "react";
import { Button, IconButton } from "react-native-paper";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { myTheme } from "../../utils/globalStyle";
import { useNavigation } from "@react-navigation/native";

const C2iconButton = ({ label, icon, mode, op, color, right }) => {
    return (
        <View>
            <MaterialCommunityIcons
                name={icon}
                size={32}
                color={
                    mode === "contained"
                        ? myTheme.color.white
                        : color
                        ? color
                        : myTheme.color.primary
                }
                style={{ position: "absolute", top: 8, left: 16, zIndex: 1 }}
            />
            <Button
                style={{
                    fontfamily: "Arimo_400Regular",
                    height: 48,
                    fontWeight: 400,
                    borderRadius: 8,
                    padding: 0,
                    borderColor: color ? color : myTheme.color.primary,
                }}
                mode={mode}
                textColor={
                    mode === "contained"
                        ? myTheme.color.white
                        : color
                        ? color
                        : myTheme.color.primary
                }
                buttonColor={
                    mode === "contained"
                        ? myTheme.color.primary
                        : myTheme.color.white
                }
                labelStyle={{
                    marginVertical: 0,
                    marginHorizontal: 0,
                    fontSize: 20,
                    marginLeft: 64,
                    fontFamily: "Arimo",
                    fontWeight: 400,

                    // height: 48,
                    // marginHorizontal: 12,
                    // textDecorationLine: "underline line-through",
                    // justifyContent: "space-between",
                    // backgroundColor: "red",
                }}
                contentStyle={{
                    flexDirection: "column",
                    alignItems: "baseline",
                    flexBasis: 48,

                    // flex: 1,
                    height: 48,
                }}
                onPress={op}
            >
                {label}
            </Button>
            {right ? (
                ""
            ) : (
                <AntDesign
                    name="right"
                    size={32}
                    color={
                        mode === "contained"
                            ? myTheme.color.white
                            : color
                            ? color
                            : myTheme.color.primary
                    }
                    style={{
                        position: "absolute",
                        top: 8,
                        right: 16,
                        zIndex: 1,
                    }}
                />
            )}
        </View>
    );
};

export default C2iconButton;
