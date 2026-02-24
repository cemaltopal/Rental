import { View, Text, StyleSheet, Linking } from "react-native";
import React from "react";
import { Button, Card } from "react-native-paper";
import colors from "../constants/colors";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Cover source={require("../assets/cars/rangerover.jpg")} />
        <Card.Content style={styles.content}>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => {
              Linking.openURL("tel:123456789");
            }}
          >
            Call Us
          </Button>

          <Button
            mode="contained"
            onPress={() => {
              Linking.openURL("mailto:test@example.com");
            }}
            style={styles.button}
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
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    borderBlockColor: colors.color1,
  },
});
