import { StyleSheet, Text, View, FlatList} from 'react-native'
import React, { useState, useContext } from 'react';
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

      {
        "id": 1, 
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

      {
      "id": 3, 
      "model": "Bugatti", 
      "doors": 3, 
      "seats": 4, 
      "transmission": "Automatic", 
      "airConditioning": true, 
      "pricePerHour": 40,
      "fuelType": "Diesel", 
      "builting": true,
      "image": require('../assets/cars/bugatti.jpg')},

      {
      "id": 4, 
      "model": "RangeRover", 
      "doors": 3, 
      "seats": 4, 
      "transmission": "Automatic", 
      "airConditioning": true, 
      "pricePerHour": 80,
      "fuelType": "Diesel", 
      "builting": true,
      "image": require('../assets/cars/rangerover.jpg')},
  ]);

  const {searchActive} = useContext(AppContext);
  const [filteredCars, setFilteredCars] = useState(cars);

  const handleSearch = (txt) => {
    if (txt.length >= 3) {
      const filtered = cars.filter((car) => {
        returncar.model.toLowerCase().includes(txt.toLowerCase())
      });
      setFilteredCars(filtered);
    } else {
      setFilteredCars(cars);
    }
  }

  return (
    
    <View>
      {searchActive && (
        <SearchBar 
        style={styles.searchBar} 
        onChangeText={(txt) => {
          handleSearch(txt);
        }}
        />
      )}
      <FlatList
        data={filteredCars}
        renderItem={({item}) => <Car data={item}/>}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{paddingBottom: 100}}
        />
   
    </View>
  )
};

const styles = StyleSheet.create({
  searchBar: {
    margin: 15,
  }
})

export default CarsScreen;

