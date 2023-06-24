import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { myTheme } from "../../utils/globalStyle";
import { IconButton } from "react-native-paper";

const data = [
    { label: "101", value: "1" },
    { label: "102", value: "2" },
    { label: "103", value: "3" },
    { label: "104", value: "4" },
    { label: "105", value: "5" },
    { label: "106", value: "6" },
    { label: "107", value: "7" },
    { label: "108", value: "8" },
];

const CustomDrop = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, { color: myTheme.color.primary }]}>
                    Apartment
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
            {renderLabel()}
            <Dropdown
                style={[
                    styles.dropdown,
                    {
                        borderWidth: isFocus ? 2 : 1,
                        borderColor: myTheme.color.primary,
                    },
                ]}
                containerStyle={{
                    top: -15,
                    borderColor: myTheme.color.primary,
                    borderWidth: 2,
                    borderRadius: 8,
                }}
                itemTextStyle={{
                    color: myTheme.color.primary,
                    fontWeight: 500,
                }}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                // search
                dropdownPosition="top"
                maxHeight={140}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Apartment" : "..."}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    <IconButton
                        icon="home"
                        iconColor={myTheme.color.primary}
                        size={24}
                        style={{ margin: 6 }}
                    />
                )}
                renderRightIcon={() => (
                    <IconButton
                        icon={!isFocus ? "chevron-down" : "chevron-up"}
                        size={24}
                        iconColor={myTheme.color.primary}
                    />
                )}
            />
        </View>
    );
};

export default CustomDrop;

const styles = StyleSheet.create({
    container: {
        paddingTop: 8,
    },
    dropdown: {
        height: 40,
        borderColor: myTheme.color.primary,
        borderRadius: 8,
        backgroundColor: myTheme.color.white,
    },
    icon: {
        margin: 6,
        width: 40,
        height: 40,

        justifyContent: "center",
    },
    label: {
        position: "absolute",
        left: 10,
        top: 0,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 12,
        borderRadius: 8,
        backgroundColor: myTheme.color.back,
    },
    placeholderStyle: {
        color: myTheme.color.primary,
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
        color: myTheme.color.primary,
    },
    iconStyle: {
        width: 40,
        height: 40,
    },
    inputSearchStyle: {
        borderRadius: 8,
        borderColor: myTheme.color.primary,
        height: 40,
        fontSize: 14,
    },
});
