import { ScrollView, StyleSheet } from 'react-native'

import CarReservation from '../components/home/CarReservation';
import CarDetails from '../components/common/CarDetails';

const CarsDetailsScreen = ({route}) => {
  const data = route.params.data;
  const {id, model, doors, seats, transmission, airConditioning, pricePerHour, fuelType, builting, image} = data;

  return (
    <ScrollView style= {styles.container}>
          <CarDetails details={data}/>
          <CarReservation/>
      
    </ScrollView>
  );
};

export default CarsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

});