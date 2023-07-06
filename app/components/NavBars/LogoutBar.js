import { View, Text } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import { myTheme } from "../../utils/globalStyle";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import LogOut from "../buttons/LogOut";

const TOP_APPBAR_HEIGHT = 40;
const MEDIUM_FAB_HEIGHT = 56;
const LogoutBar = ({ route, options }) => {
  const title = getHeaderTitle(options, route.name);
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <Appbar.Header
      style={[
        {
          height: TOP_APPBAR_HEIGHT + top,
          backgroundColor: myTheme.color.back,
          // position: "absolute",
          // left: 0,
          // right: 0,
          top: 0,
          justifyContent: "space-between",
          marginRight: 16,
          overflow: "visible",
        },
      ]}
      safeAreaInsets={{ top }}
      mode="center-aligned"
    >
      <Appbar.Action
        icon={"arrow-left"}
        size={32}
        iconColor={myTheme.color.textColor}
        onPress={() => {
          navigation.goBack();
        }}
      />

      <LogOut />
    </Appbar.Header>
  );
};

export default LogoutBar;
