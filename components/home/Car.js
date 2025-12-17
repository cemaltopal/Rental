import { StyleSheet, Text, View } from 'react-native'
import {Card, IconButton, Paragraph, Title} from 'react-native-paper';
import colors from '../../constants/colors';

const Car = ({data, navigation}) => {
  const {id, model, doors, seats, transmission, airConditioning, pricePerHour, fuelType, builting, image} = data;
  return (
<Card style= {styles.card}>
      <Card.Cover source= {image} />
      <Card.Content
        style={styles.cardContent}>
        <View>
        <Title style={styles.title}>{model}</Title>
        <Paragraph style={styles.parahraph}>From ${pricePerHour} / hour</Paragraph>
        </View>
        <IconButton 
        icon="chevron-right" 
        iconColor= "white" 
        color="green" size={40} 
        style={{backgroundColor: colors.color1}}
        onPress={() => navigation.navigate("CarsDetailsScreen", {data})}
        />
      </Card.Content>
      </Card>
  )
}

    export default Car;

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