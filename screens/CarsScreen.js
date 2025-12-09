import { StyleSheet, Text, View } from 'react-native'
import {Card, IconButton, Paragraph, Title} from 'react-native-paper';
const CarsScreen = () => {
  return (
    <Card style= {styles.card}>
      <Card.Cover source={require('../assets/cars/alfaromeo.jpg')} />
      <Card.Content
        style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
        <Title>Alfa Romeo</Title>
        <Paragraph>From $20 / hour</Paragraph>
        </View>
        <IconButton icon="chevron-right" color="green" size={40} style={{backgroundColor: "green", color: "white"}}/>
      </Card.Content>
      </Card>
  )
}

export default CarsScreen

const styles = StyleSheet.create({
  card: {
    margin: 15,
  }
})