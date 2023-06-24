import { View } from "react-native";
import React from "react";
import { globalStyles } from "../../utils/globalStyle";

import { Text } from "react-native-paper";

const Heading2 = ({ title, subtitle }) => {
    return (
        <View>
            <Text style={[globalStyles.h1, { marginVertical: 16 }]}>
                {title}
            </Text>
            <Text style={globalStyles.h7}>{subtitle}</Text>
        </View>
    );
};

export default Heading2;
