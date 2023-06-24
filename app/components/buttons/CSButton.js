import React from "react";
import { Button } from "react-native-paper";
import { globalStyles, myTheme } from "../../utils/globalStyle";

const CSButton = ({ mode, label, icon, op }) => {
    return (
        <Button
            icon={icon}
            mode={mode}
            buttonColor={myTheme.color.white}
            style={globalStyles.csButton}
            labelStyle={[globalStyles.h3, { lineHeight: 28 }]}
            onPress={op}
        >
            {label}
        </Button>
    );
};

export default CSButton;
