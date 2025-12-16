import { StyleSheet, Text, View } from 'react-native'
import { Card, Title, Paragraph, Icon } from 'react-native-paper'
import colors from '../constants/colors';

const CarsDetailsScreen = ({route}) => {
  const data = route.params.data;
  const {id, model, doors, seats, transmission, aircondition, pricePerHour, fuelType, builting, image} = data;
  
  return (
    <View>
      <Card style={styles.card}>
        <Card.Cover source={image [0]} />
        <Card.Content style={styles.cardContent}>
          <Title style={styles.title}>{model}</Title>
          <Text> <Icon name="car-door" size={24} color={colors.color1} /> {doors} {" "} 
               doors  |  <Icon name="car-seat" size={24} color={colors.color1} /> {" "} 
               {seats} seats
          </Text>
          <TouchableOpacity style={styles.button}>
           <Text style={styles.buttonText}> ${pricePerHour} / hour </Text>
            </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  )
}

export default CarsDetailsScreen;

const styles = StyleSheet.create({
  cardContent: {  
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  card: {
    marginTop: 20,
  },
  button: {
    marginTop: 25,
    width: "100%",
    padding: 10,
    borderRadius: 30,
    backgroundColor: colors.color1,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
  },
})