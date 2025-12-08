import { StyleSheet, Text, View } from 'react-native'
import {Card, IconButton, Paragraph, Title} from 'react-native-paper';
const CarsScreen = () => {
  return (
    <Card>
      <Card.Cover source={require('../assets/cars/alfaromeo.jpg')} />
      <Card.Content>
        <Title>Cars</Title>
        <Paragraph>Find your car</Paragraph>
      </Card.Content>
      </Card>
  )
}

export default CarsScreen

const styles = StyleSheet.create({})