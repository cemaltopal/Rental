import { ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import CarReservation from '../components/home/CarReservation';
import CarDetails from '../components/common/CarDetails';
import { createContext } from 'react';
import { PaperProvider } from 'react-native-paper';

const CarsDetailsScreen = ({route}) => {
  const data = route.params.data;
  const {id, model, doors, seats, transmission, airConditioning, pricePerHour, fuelType, builting, image} = data;
 
  return (
    <PaperProvider> 
    <ScrollView style= {styles.container}>
          <CarDetails details={data}/>
          <CarReservation id={id}/>
      
    </ScrollView>
    </PaperProvider>
  );
};

export default CarsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

});