import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Paragraph, Title } from 'react-native-paper'

const ProfileCard = ({page}) => {
  return (
    <Card> 
        <Card.Content style={styles.content}>  
            <Avatar.Icon size={100} icon="account-circle" color='gray' />
            <Title style= {styles.title}>John DOE</Title>
            <Paragraph>admin@rentalcars.com</Paragraph>
,
            <View style={{
                width: "100%",
                justifyContent: "space-between",
                alignItems: "space-between",
                flexDirection: "row",

            }}>
                <Card.Actions>
                    <Button textColor={page === "profile" ? "green" : "black"} style={styles.button}>PROFİLE</Button>
                    <Button textColor={page === "password" ? "green" : "black"} style={styles.button}>PASSWORD</Button>
                    <Button textColor={page === "reservations" ? "green" : "black"} style={styles.button}>RESERVATİONS</Button>

                </Card.Actions>
            </View>
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
    }
})