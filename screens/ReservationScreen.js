import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import ProfileCard from "../components/account/ProfileCard";
import { DataTable } from "react-native-paper";
import colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import ReservationDetailsScreen from "./ReservationDetailsScreen";
import sizes from "../constants/sizes";

const ReservationScreen = () => {

  //response.content
  const reservations = [
    {
      id: 1,
      car: {
        "id": 1, 
      "model": "BMW Black", 
      "doors": 3, 
      "seats": 4, 
      "transmission": "Automatic", 
      "airConditioning": true, 
      "pricePerHour": 40,
      "fuelType": "Diesel", 
      "builting": true,
      "image": require('../assets/cars/bmw.jpg')},
      
      userId: 0,
      pickUpTime: "2024-10-21T20:00:50.407Z",
      dropOffTime: "2024-09-20T20:00:50.407Z",
      pickUpLocation: "Manisa",
      dropOffLocation: "Kutahya",
      status: "CREATED",
      totalPrice: 0,
    },
    {
      id: 2,
      car: {
         "id": 2, 
      "model": "Mercedes Blue", 
      "doors": 3, 
      "seats": 5, 
      "transmission": "Automatic", 
      "airConditioning": true, 
      "pricePerHour": 50,
      "fuelType": "Diesel", 
      "builting": true,
      "image": require('../assets/cars/mercedes_blue.jpg')},
      
      userId: 0,
      pickUpTime: "2024-09-20T20:00:50.407Z",
      dropOffTime: "2024-09-20T20:00:50.407Z",
      pickUpLocation: "Erzurum",
      dropOffLocation: "Aydın",
      status: "CREATED",
      totalPrice: 0,
    },
    {
      id: 3,
      car: {
        "id": 3, 
      "model": "Alfa Romeo", 
      "doors": 3, 
      "seats": 5, 
      "transmission": "Manuel", 
      "airConditioning": true, 
      "pricePerHour": 60,
      "fuelType": "Benzine", 
      "builting": true,
      "image": require('../assets/cars/alfaromeo.jpg')},
      

      userId: 0,
      pickUpTime: "2024-07-18T20:00:50.407Z",
      dropOffTime: "2024-09-20T20:00:50.407Z",
      pickUpLocation: "Ankara",
      dropOffLocation: "Bursa",
      status: "CREATED",
      totalPrice: 0,
    },
    {
      id: 4,
      car: {
        "id": 4, 
      "model": "Bugatti", 
      "doors": 3, 
      "seats": 4, 
      "transmission": "Automatic", 
      "airConditioning": true, 
      "pricePerHour": 40,
      "fuelType": "Diesel", 
      "builting": true,
      "image": require('../assets/cars/bugatti.jpg')},
  

      userId: 0,
      pickUpTime: "2024-08-16T20:00:50.407Z",
      dropOffTime: "2024-09-20T20:00:50.407Z",
      pickUpLocation: "İstanbul",
      dropOffLocation: "Adana",
      status: "CREATED",
      totalPrice: 0,
    },
  ];

  const [sortedReservationList, setSortedReservationList] = useState(reservations);


  useEffect(() => {
   let sortedReservations = reservations.sort(
    (a, b) => {
      let aDateTime = new Date(a.pickUpTime);
      let bDateTime = new Date(b.pickUpTime);
      return aDateTime - bDateTime;
    }  );
 
   setSortedReservationList(sortedReservations);
},  []);

  const [sortDirection, setSortDirection] = useState("descending");
  const sortDirectionHandler = () => {
    if (sortDirection === "descending") {
      setSortDirection("ascending");
    } else {
      setSortDirection("descending");
    }
    setSortedReservationList(sortedReservationList.reverse());
  }

   
  //car, picuplocation, picupdate

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <ProfileCard page={"reservations"} />

      <DataTable style={styles.table}>
        <DataTable.Header>
          <DataTable.Title>Car</DataTable.Title>
          <DataTable.Title>Pickup Location</DataTable.Title>
          <DataTable.Title sortDirection= {sortDirection}  onPress={sortDirectionHandler} >Pickup Date</DataTable.Title>
        </DataTable.Header>
        {sortedReservationList.map((reservation) => (
          <DataTable.Row key={reservation.id} onPress={() => navigation.navigate("ReservationDetailsScreen", {reservation})}>
            <DataTable.Cell>{reservation.car.model}</DataTable.Cell>
            <DataTable.Cell>{reservation.pickUpLocation}</DataTable.Cell>
            <DataTable.Cell>{reservation.pickUpTime}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
  )
}

export default ReservationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.containerPadding,
  },
  table: {
    marginTop: 10,
  },
})