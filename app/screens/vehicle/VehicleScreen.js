import { View } from "react-native";
import React from "react";
import ProfileLayout from "../../components/layouts/ProfileLayout";
import { Button, Text } from "react-native-paper";
import Heading2 from "../../components/texts/Heading2";
import C2iconButton from "../../components/buttons/C2iconButton";

const VehicleScreen = () => {
    return (
        <ProfileLayout>
            <Heading2
                title="Your Vehicles"
                subtitle={
                    "All registered vehicles are located here to be edited or deleted from your account."
                }
            />
        </ProfileLayout>
    );
};

export default VehicleScreen;
