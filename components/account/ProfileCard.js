import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Icon, Paragraph, IconButton, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ProfileCard = ({page}) => {
    const navigation = useNavigation();

    const handleLogout = () => {
        Alert.alert(
            "Logout",
            "Are you sure you want to logout?",
            [
                {
                    text: "Cancel",
                    onPress: () => {},
                    style: "cancel",
                },
                {
                    text: "OK",
                    onPress: () => navigation.navigate("LoginScreen"),
                },
            ]
        )
       
    }
  return (
    <Card> 
        <Card.Content style={styles.content}>  
            <Avatar.Icon size={100} icon="account-circle" color='gray' />
            <Title style= {styles.title}>John DOE</Title>
            <Paragraph>admin@rentalcars.com</Paragraph>
            <View style={{
                width: "100%",
                justifyContent: "space-between",
                alignItems: "space-between",
                flexDirection: "row",

            }}>
                    <Button 
                        textColor={page === "profile" ? "green" : "black"} 
                        style={styles.button}
                        onPress={() => navigation.navigate("ProfileScreen")}
                        >
                        PROFİLE
                    </Button>
                    <Button 
                        textColor={page === "password" ? "green" : "black"} 
                        style={styles.button}
                        onPress={() => navigation.navigate("ChangePassword")}
                        >
                        PASSWORD 
                    </Button>
                    <Button 
                        textColor={page === "reservations" ? "green" : "black"} 
                        style={styles.button}
                        onPress={() => navigation.navigate("Reservations")}
                        >
                        RESERVATIONS
                    </Button>
            </View>
            <IconButton
            icon="logout"
            style={styles.logout}
            iconColor="white"
            onPress={handleLogout}
            />

        </Card.Content>
        </Card>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
    content: {
        alignItems: "center",
    },
    title: {
       fontWeight: "bold", 
    },
    button: {
        margin: 5,
        marginTop: 10,
        borderWidth: 1,
        borderBlockColor: "lightgray",
        borderRadius: 5,
    },
    logout: {
        position: "absolute",
        top: 5,
        right: 5,
        backgroundColor: "gray",
        
        
    }

})