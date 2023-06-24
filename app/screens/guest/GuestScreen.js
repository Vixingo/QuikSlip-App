import { View } from "react-native";
import React, { useState } from "react";
import ProfileLayout from "../../components/layouts/ProfileLayout";
import { Button, Divider, Text } from "react-native-paper";
import Heading2 from "../../components/texts/Heading2";
import C2iconButton from "../../components/buttons/C2iconButton";
import { useNavigation } from "@react-navigation/native";

const GuestScreen = ({ route }) => {
    const [modify, setModified] = useState(true);
    const navigation = useNavigation();

    const { show, title, subtitle, add } = route.params;
    // console.log(route);
    const user = [
        {
            name: "Thom Hunt",
            email: "tom@hu.com",

            key: 1,
        },
        { name: "Eric Brown", email: "tom@hu.com", key: 2 },
    ];
    const cars = [
        { model: "Honda Civic", plate: "Eric Brown", key: 3 },
        { model: "Ford Focus", plate: "Silver ", key: 4 },
    ];

    return (
        <ProfileLayout>
            <Heading2
                title={modify ? title : "Modify " + title}
                subtitle={subtitle}
            />
            <View style={{ gap: 16, marginTop: 16 }}>
                {show != "car"
                    ? user.map((d) => {
                          return (
                              <C2iconButton
                                  key={d.key}
                                  label={d.name}
                                  icon={"star-outline"}
                                  mode={"outlined"}
                                  op={() => {
                                      navigation.navigate("modifyGuest", {
                                          title: "Create Guest Profile",
                                          subtitle:
                                              "Need to update your guest email? Update all the information here.",
                                          name: d.name,
                                          email: d.email,
                                      });
                                  }}
                              />
                          );
                      })
                    : cars.map((c) => {
                          return (
                              <C2iconButton
                                  key={c.key}
                                  label={c.model}
                                  icon={"car-sports"}
                                  mode={"outlined"}
                                  op={() => {
                                      navigation.navigate("modifyGuest", {
                                          title: "Modify Vehicle Info",
                                          subtitle:
                                              "Replaced your past license plate, updated your drivers licesne, new car insurance? Change it all here.",
                                          model: c.model,
                                          plate: c.plate,
                                      });
                                  }}
                              />
                          );
                      })}

                {modify && show != "car" ? (
                    <C2iconButton
                        label={"Add " + add}
                        icon={show === "car" ? "car" : "account-plus"}
                        mode={"contained"}
                        op={() => {
                            navigation.navigate("addGuest");
                        }}
                    />
                ) : (
                    ""
                )}

                <Divider style={{ marginVertical: 8 }} />
                {show == "car" ? (
                    <C2iconButton
                        label={"Add " + add}
                        icon={show === "car" ? "car" : "account-plus"}
                        mode={"contained"}
                        op={() => {
                            navigation.navigate("addGuest");
                        }}
                    />
                ) : modify ? (
                    <C2iconButton
                        label="Modify Guest Profile"
                        icon={"pencil"}
                        mode={"outlined"}
                        color={"#595959"}
                        op={() => {
                            setModified(!modify);
                        }}
                    />
                ) : (
                    <C2iconButton
                        label="Cancel"
                        icon={"close"}
                        mode={"outlined"}
                        color={"#595959"}
                        right={true}
                        op={() => {
                            setModified(!modify);
                        }}
                    />
                )}
            </View>
        </ProfileLayout>
    );
};

export default GuestScreen;
