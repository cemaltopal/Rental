import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Card, Title, Paragraph, Button, TextInput } from 'react-native-paper'
import colors from '../constants/colors';
import sizes from '../constants/sizes';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import CarReservation from '../components/home/CarReservation';

const CarsDetailsScreen = ({route}) => {
  const data = route.params.data;
  const {id, model, doors, seats, transmission, airConditioning, pricePerHour, fuelType, builting, image} = data;

  return (
    <ScrollView style= {styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={image} />
        <Card.Content style={styles.cardContent}>
          <Title style={styles.title}>{model}</Title>
          <Text> <Icon name="car-door" size={24} color={colors.color1} /> {doors} {" "} 
               doors  |  <Icon name="car-seat" size={24} color={colors.color1} /> {" "} 
               {seats} seats
          </Text>
          <TouchableOpacity style={styles.button}>
           <Text style={styles.buttonText}> ${pricePerHour} / hour </Text>
            </TouchableOpacity>
            <View style={styles.icons}>
                  <View>
                    <Icon name="car-shift-pattern" size={sizes.carDetailIconSize} color={colors.color1} />
                    <Text>{transmission}</Text>
                  </View>
                  {airConditioning &&
                  <View>
                    <Icon name="snowflake" size={sizes.carDetailIconSize} color={colors.color1} />
                    <Text>Air Cond</Text>
                  </View>
                  }
                  <View>
                    <Icon name="gas-station" size={sizes.carDetailIconSize} color={colors.color1} />
                    <Text>{fuelType}</Text>
                  </View>
            </View>
        </Card.Content>
      </Card>
          <CarReservation/>
      
    </ScrollView>
  );
};

export default CarsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  cardContent: {  
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  card: {
    marginTop: 20,
    paddingBottom: 20,
  },
  button: {
    marginTop: 5,
    width: "100%",
    padding: 10,
    borderRadius: 30,
    backgroundColor: colors.color4,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
  },
  icons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
  },
  dateTimeButton: {
    borderRadius: 5,
    padding: 10,
  },

})