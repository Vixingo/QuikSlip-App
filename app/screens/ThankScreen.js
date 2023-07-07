import {
    View,
    Text,
    StatusBar,
    Button,
    StyleSheet,
    Pressable,
    ScrollView,
} from "react-native";
import React from "react";
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from "react-native-safe-area-context";
import { globalStyles, myTheme } from "../utils/globalStyle";
import { IconButton } from "react-native-paper";
import OrderDetails from "../components/data/OrderDetails";

import ThanksTop from "../components/Cards/ThanksTop";

import ThanksBody from "../components/Cards/ThanksBody";
import InviteBody from "../components/Cards/InviteBody";
import DeleteTop from "../components/Cards/DeleteTop";

const ThankScreen = ({ navigation, route }) => {
    const insets = useSafeAreaInsets();
    /* 2. Get the param */
    const { being, name, email, msg } = route.params;
    // console.log("from thanks screen", route);
    return (
        <>
            <ScrollView>
                {being == "register" ? (
                    <>
                        <ThanksTop
                            name={"Eric Brown"}
                            msg={"registering yourself and vehicle."}
                        />
                        <ThanksBody />
                    </>
                ) : being === "invite" ? (
                    <>
                        <ThanksTop being={being} />
                        <InviteBody name={name} email={email} />
                    </>
                ) : being === "obtain" ? (
                    <>
                        <ThanksTop
                            being={being}
                            name={"Eric Brown"}
                            msg={"obtaining your visitor pass."}
                        />
                        <OrderDetails />
                    </>
                ) : being === "deleted" ? (
                    <>
                        <ThanksTop being={being} />
                        <DeleteTop being={being} />
                    </>
                ) : (
                    <>
                        <ThanksTop
                            name={"Eric Brown"}
                            msg={"obtaining your visitor pass."}
                        />
                        <OrderDetails />
                    </>
                )}
            </ScrollView>
        </>
    );
};

export default ThankScreen;
