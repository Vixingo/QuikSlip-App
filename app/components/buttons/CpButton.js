import React from "react";
import { Button } from "react-native-paper";
import { globalStyles, myTheme } from "../../utils/globalStyle";

const CpButton = ({ mode, label, icon, op, disabled }) => {
    return (
        <Button
            icon={icon}
            mode={mode}
            disabled={disabled}
            buttonColor={myTheme.color.primary}
            style={globalStyles.cpButton}
            labelStyle={[globalStyles.h3, { lineHeight: 28 }]}
            onPress={op}
        >
            {label}
        </Button>
    );
};

export default CpButton;
