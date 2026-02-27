import { View, Text, StyleSheet, Linking } from "react-native";
import React from "react";
import { Button, Card } from "react-native-paper";
import colors from "../constants/colors";
import sizes from "../constants/sizes";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Cover source={require("../assets/cars/rangerover.jpg")} />
        <Card.Content style={styles.content}>
          <Button
            icon={"phone"}
            mode="contained"
            style={styles.button}
            onPress={() => {
              Linking.openURL("tel:123456789");
            }}
          >
            Call Us
          </Button>

          <Button
            icon={"email"}
            mode="contained"
            style={styles.button}
            onPress={() => {
              Linking.openURL("mailto:test@example.com");
            }}
          >
            Send Email
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.containerPadding,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    backgroundColor: colors.color1,
  },
});
