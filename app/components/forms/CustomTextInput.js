import React from "react";
import { Chip, Button, Text, TextInput } from "react-native-paper";

import { globalStyles, myTheme } from "../../utils/globalStyle";
const CustomTextInput = ({ label, icon, value, oct }) => {
    return (
        <TextInput
            outlineColor={myTheme.color.primary}
            label={label}
            value={value}
            style={globalStyles.textinput}
            textColor={myTheme.color.primary}
            contentStyle={{ paddingTop: 0, paddingBottom: 0 }}
            mode="outlined"
            left={
                <TextInput.Icon
                    icon={icon}
                    style={{ top: 5 }}
                    iconColor={myTheme.color.primary}
                />
            }
            onChangeText={oct}
        />
    );
};

export default CustomTextInput;
