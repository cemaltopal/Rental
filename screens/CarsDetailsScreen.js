import { StyleSheet, Text, View } from 'react-native'
import { Card, Title, Paragraph, Icon, Button } from 'react-native-paper'
import colors from '../constants/colors';
import sizes from '../constants/sizes';

const CarsDetailsScreen = ({route}) => {
  const data = route.params.data;
  const {id, model, doors, seats, transmission, airConditioning, pricePerHour, fuelType, builting, image} = data;
  
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
            <View style={styles.icons}>
                  <View>
                    <Icon name="car-shift-pattern" size={sizes.carDetailIconSize} color={colors.color1} />
                    <Text>{transmission}</Text>
                  </View>
                  {airConditioning &&
                  <View>
                    <Icon name="snowflake" size={sizes.carDetailIconSize} color={colors.color1} />
                    <Text>AİR Condition</Text>
                  </View>
                  }
                  <View>
                    <Icon name="building" size={sizes.carDetailIconSize} color={colors.color1} />
                    <Text>{builting}</Text>
                  </View>
                  <View>
                    <Icon name="gas-station" size={sizes.carDetailIconSize} color={colors.color1} />
                    <Text>{fuelType}</Text>
                  </View>
            </View>
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
    paddingBottom: 20,
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
  icons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
  },
})