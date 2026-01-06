import { StyleSheet, Text, View, FlatList} from 'react-native'
import React, { useState } from 'react';
import Car from '../components/home/Car';
import { Button,SearchBar } from 'react-native-screens';
import AppContext from '../store/AppContext';

const CarsScreen = () => {
  const [cars, setCars] = useState([
    {
      "id": 0, 
      "model": "Alfa Romeo", 
      "doors": 3, 
      "seats": 5, 
      "transmission": "Manuel", 
      "airConditioning": true, 
      "pricePerHour": 60,
      "fuelType": "Benzine", 
      "builting": true,
      "image": require('../assets/cars/alfaromeo.jpg')},

      {"id": 1, 
      "model": "Mercedes Blue", 
      "doors": 3, 
      "seats": 5, 
      "transmission": "Automatic", 
      "airConditioning": true, 
      "pricePerHour": 50,
      "fuelType": "Diesel", 
      "builting": true,
      "image": require('../assets/cars/mercedes_blue.jpg')},

      {"id": 2, 
      "model": "BMW Black", 
      "doors": 3, 
      "seats": 4, 
      "transmission": "Automatic", 
      "airConditioning": true, 
      "pricePerHour": 40,
      "fuelType": "Diesel", 
      "builting": true,
      "image": require('../assets/cars/bmw.jpg')},

      {"id": 3, 
      "model": "Bugatti", 
      "doors": 3, 
      "seats": 4, 
      "transmission": "Automatic", 
      "airConditioning": true, 
      "pricePerHour": 40,
      "fuelType": "Diesel", 
      "builting": true,
      "image": require('../assets/cars/bugatti.jpg')},
  ]);

  const [searchActive, setSearchActive] = useState(false);
  return (
    <AppContext.Provider value={{searchActive, setSearchActive}}>
    <View>
      {searchActive && <SearchBar style={styles.searchBar}/>}
      <FlatList
        data={cars}
        renderItem={({item}) => <Car data={item}/>}
        keyExtractor={(item) => item.id}
        />
   
    </View>
    </AppContext.Provider>
  )
};

const styles = StyleSheet.create({
  searchBar: {
    margin: 10,
  }
})

export default CarsScreen;

