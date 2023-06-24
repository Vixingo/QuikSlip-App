import React from "react";
import { StyleSheet, View, Alert, ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import CpButton from "../components/buttons/CpButton";
import CSButton from "../components/buttons/CSButton";

function HomeScreen({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "flex-start",
                gap: 4,
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 20,
            }}
        >
            <CpButton
                label={"2A - Guest parking flow"}
                mode="contained"
                op={() => {
                    navigation.navigate("guestPass");
                }}
            />
            <CpButton
                label={"2B - Expired Link"}
                mode="contained"
                op={() => {
                    navigation.navigate("expired");
                }}
            />
            <CpButton
                label={"2C - Tenant Registering Vehicle"}
                mode="contained"
                op={() => {
                    navigation.navigate("tenant");
                }}
            />
            <CpButton
                label={"3 - Tenant Dashboard"}
                mode="contained"
                op={() => {
                    navigation.navigate("tntDash");
                }}
            />
            <CpButton
                label={"4A - Modify/Add Guest Flow"}
                mode="contained"
                op={() => {
                    navigation.navigate("commonGuest", {
                        show: "guest",
                        title: "Guest Profiles",
                        subtitle:
                            "Here you find all the guest profiles you created for ease of access to obtain a parking pass.",
                        add: "Guest",
                    });
                }}
            />
            <CpButton
                label={"4B - Modify/Add Car Flow"}
                mode="contained"
                op={() => {
                    navigation.navigate("commonGuest", {
                        show: "car",
                        title: "Your Vehicles",
                        subtitle:
                            "All registered vehicles are located here to be edited or deleted from your account.",
                        add: "Vehicle",
                    });
                }}
            />
            <CpButton
                label={"4C - Tenant Account Settings"}
                mode="contained"
                op={() => {
                    navigation.navigate("setting");
                }}
            />
            <CpButton
                label={"Thank You obtain"}
                mode="contained"
                op={() => {
                    navigation.navigate("thankYou", { being: "obtain" });
                }}
            />
            <CpButton
                label={"Thank You Register"}
                mode="contained"
                op={() => {
                    navigation.navigate("thankYou", { being: "register" });
                }}
            />

            {/* <CpButton
                label={"Modify Pass"}
                mode="contained"
                op={() => {
                    navigation.navigate("modify");
                }}
            /> */}

            <CSButton
                label={"Login (for Future)"}
                mode="outlined"
                op={() => {
                    navigation.navigate("login");
                }}
            />
            {/* <CpButton
                label={"Overview"}
                mode="contained"
                op={() => {
                    navigation.navigate("overview");
                }}
            /> */}

            {/* <Button
                title="Modify Pass"
                onPress={() => {
                    navigation.navigate("Modify");
                }}
            />
            <Button
                title="Login as welcome"
                onPress={() => {
                    navigation.navigate("Login");
                }}
            /> */}
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         fontSize: 50,
//         color: "red",
//         fontWeight: 700,
//     },
// });

export default HomeScreen;
