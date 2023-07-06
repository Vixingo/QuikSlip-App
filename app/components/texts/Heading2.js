import { View, ScrollView } from "react-native";
import React from "react";

import { Dialog, Portal, Button, Text } from "react-native-paper";

import { globalStyles, myTheme } from "../../utils/globalStyle";

const Heading2 = ({ title, subtitle, chip }) => {
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);
  return (
    <View style={{ alignItems: "flex-start" }}>
      <Text style={[globalStyles.h1, { marginVertical: 16 }]}>{title}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={globalStyles.h7}>{subtitle + " "}</Text>
        {!chip ? (
          ""
        ) : (
          <Button
            style={[globalStyles.chip3]}
            compact={true}
            labelStyle={globalStyles.chipLabel}
            textColor={myTheme.color.textColor}
            onPress={() => {
              setVisible(true);
            }}
          >
            {chip}
          </Button>
        )}
      </View>
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={globalStyles.Dialog}
        >
          <Dialog.ScrollArea>
            <ScrollView
              contentContainerStyle={{
                paddingHorizontal: 24,
              }}
            >
              <Text>This is a scrollable area</Text>
            </ScrollView>
          </Dialog.ScrollArea>
        </Dialog>
      </Portal>
    </View>
  );
};

export default Heading2;
