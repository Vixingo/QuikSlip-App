import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { globalStyles } from "../utils/globalStyle";
import CpButton from "../components/buttons/CpButton";
import { Image } from "expo-image";
import ProfileLayout from "../components/layouts/ProfileLayout";

const ExpiredScreen = ({ navigation }) => {
  return (
    <ProfileLayout>
      <View
        style={[
          {
            marginTop: 96,
            gap: 40,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <ImageBackground
          style={{
            height: 264,
            width: 264,
          }}
          source={require("../assets/images/dude.png")}
          resizeMode="contain"
        ></ImageBackground>
        <Text style={{ fontWeight: 500, fontSize: 24 }}>
          Parking Pass Link Expired
        </Text>
        <Text
          style={{
            fontWeight: 300,
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Ooops, The link to your parking pass has either expired or already
          been obtained. Don’t worry, you will need your friend to resend the
          link.
        </Text>
        <CpButton
          label={"GO TO HOMEPAGE"}
          mode={"contained"}
          op={() => {
            navigation.popToTop();
          }}
        />
      </View>
    </ProfileLayout>
  );
};

export default ExpiredScreen;
