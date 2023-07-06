import React from "react";
import { Button } from "react-native-paper";
import { myTheme } from "../../utils/globalStyle";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native-web";

const LogOut = () => {
  const navigation = useNavigation();
  return (
    <Button
      mode="outlined"
      compact={true}
      style={{
        width: 72,
        borderRadius: 8,
        backgroundColor: myTheme.color.white,
        marginTop: 0,
        // marginLeft: 20,
        // height: 32,
      }}
      labelStyle={{
        marginVertical: 6,
        margin: 0,
        fontWeight: 400,
        marginHorizontal: 0,
        fontSize: 16,
      }}
      onPress={() => {
        navigation.popToTop();
      }}
    >
      Log Out
    </Button>
  );
};

export default LogOut;
