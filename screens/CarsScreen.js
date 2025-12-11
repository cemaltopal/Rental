import { StyleSheet, Text, View } from 'react-native'
import {Card, IconButton, Paragraph, Title} from 'react-native-paper';
import colors from '../constants/colors';
const CarsScreen = () => {
  return (
    <Card style= {styles.card}>
      <Card.Cover source={require('../assets/cars/alfaromeo.jpg')} />
      <Card.Content
        style={styles.cardContent}>
        <View>
        <Title style={styles.title}>Alfa Romeo</Title>
        <Paragraph style={styles.parahraph}>From $20 / hour</Paragraph>
        </View>
        <IconButton icon="chevron-right" iconColor= "white" color="green" size={40} style={{backgroundColor: colors.color1}}/>
      </Card.Content>
      </Card>
  )
}

export default CarsScreen

const styles = StyleSheet.create({
  card: {
    margin: 15,
    borderRadius: 30,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5

  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  parahraph: {
    color: colors.color1,
    fontStyle: 'italic',

  }
})