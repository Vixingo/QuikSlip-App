import { View } from "react-native";
import React, { useState } from "react";
import ProfileLayout from "../../components/layouts/ProfileLayout";
import Heading2 from "../../components/texts/Heading2";
import CustomTextInput from "../../components/forms/CustomTextInput";
import CpButton from "../../components/buttons/CpButton";

import {
  Button,
  Dialog,
  Portal,
  PaperProvider,
  Text,
} from "react-native-paper";
import { globalStyles } from "../../utils/globalStyle";
import TextButton from "../../components/buttons/TextButton";
import { useNavigation } from "@react-navigation/native";

import DelGuestButton from "../../components/buttons/DelGuestButton";
import DelVehicleButton from "../../components/buttons/DelVehicleButton";

const ModifyGuestScreen = ({ route }) => {
  const navigation = useNavigation();
  const [save, setSave] = useState(false);
  const { title, subtitle, name, email, model, plate, add } = route.params;

  const [user, setUser] = useState({
    name: name,
    email: email,
  });

  const [cars, setCars] = useState({ model: model, plate: plate });

  return (
    <ProfileLayout>
      <Heading2 title={title} subtitle={subtitle} />
      <View style={{ gap: 40, marginTop: 24 }}>
        {add == "Guest" ? (
          <>
            <CustomTextInput
              label={"Name"}
              icon={"rename-box"}
              value={user.name}
              oct={(e) => {
                setUser({
                  ...user,
                  name: e,
                });
                setSave(true);
              }}
            />
            <CustomTextInput
              label={"Email"}
              value={user.email}
              icon={"email-outline"}
              oct={(e) => {
                setUser({
                  ...user,
                  email: e,
                });
                setSave(true);
              }}
            />
          </>
        ) : (
          <>
            <CustomTextInput
              label={"Car Make and Model"}
              icon={"steering"}
              value={cars.model}
              oct={(e) => {
                setCars({
                  ...cars,
                  model: e,
                });
                setSave(true);
              }}
            />
            <CustomTextInput
              label={"License Plate"}
              value={cars.plate}
              icon={"car"}
              oct={(e) => {
                setCars({
                  ...cars,
                  plate: e,
                });

                setSave(true);
              }}
            />
          </>
        )}

        <View>
          <CpButton
            label={"SAVE CHANGES"}
            mode={"contained"}
            disabled={!save}
            op={() => {
              navigation.goBack();
            }}
          />
          {add == "Guest" ? <DelGuestButton /> : <DelVehicleButton />}
        </View>
      </View>
    </ProfileLayout>
  );
};

export default ModifyGuestScreen;
