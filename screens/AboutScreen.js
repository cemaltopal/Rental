import { View, Text, StyleSheet, Linking, ScrollView } from "react-native";
import React from "react";
import { Button, Card, List } from "react-native-paper";
import colors from "../constants/colors";
import sizes from "../constants/sizes";
import aboutUs from "../store/aboutUs";

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
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
      
      {aboutUs.map((item) => (
        
          <List.Item
            key={item.id}
            title= {item.title}
            titleStyle={{ fontWeight: "bold" }}
            description= {item.description}
            left={(props) => <List.Icon {...props} icon="information" color={colors.color1} style={{marginTop: 10}} />}
          />
        
      ))}
      <View style={{height: 50}}></View>
    </ScrollView>
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
