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
  const [reservations, setReservations] = useState([
    {
      id: 1,
      car: {
        id: 1,
        model: "BMW X7",
        doors: 3,
        seats: 4,
        luggage: 0,
        transmission: "Automatic",
        airConditioning: true,
        age: 0,
        pricePerHour: 50,
        fuelType: "Diesel",
        builtIn: true,
        image: [
          "https://carrental-v3-backend.herokuapp.com/files/display/16022a7e-840f-447f-ab09-fcec24a74686",
        ],
      },
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
        id: 2,
        model: "Mercedes GLC",
        doors: 5,
        seats: 4,
        luggage: 0,
        transmission: "Automatic",
        airConditioning: false,
        age: 0,
        pricePerHour: 45,
        fuelType: "Diesel",
        builtIn: true,
        image: [
          "https://carrental-v3-backend.herokuapp.com/files/display/adfa72f1-3e38-4251-9ce0-7e25d00e7f9b",
        ],
      },
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
        id: 3,
        model: "Audi Q5",
        doors: 5,
        seats: 4,
        luggage: 0,
        transmission: "Manuel",
        airConditioning: true,
        age: 0,
        pricePerHour: 60,
        fuelType: "Benzin",
        builtIn: true,
        image: [
          "https://carrental-v3-backend.herokuapp.com/files/display/4e1e497b-13d1-4d4f-b765-3d66763aba9e",
        ],
      },
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
        id: 4,
        model: "Audi Q7",
        doors: 3,
        seats: 4,
        luggage: 0,
        transmission: "Manuel",
        airConditioning: true,
        age: 0,
        pricePerHour: 100,
        fuelType: "Benzin",
        builtIn: true,
        image: [
          "https://carrental-v3-backend.herokuapp.com/files/display/4e1e497b-13d1-4d4f-b765-3d66763aba9e",
        ],
      },
      userId: 0,
      pickUpTime: "2024-08-16T20:00:50.407Z",
      dropOffTime: "2024-09-20T20:00:50.407Z",
      pickUpLocation: "İstanbul",
      dropOffLocation: "Adana",
      status: "CREATED",
      totalPrice: 0,
    },
  ]);

  const [sortDirection, setSortDirection] = useState("descending");
  const sortDirectionHandler = () => {
    if (sortDirection === "descending") {
      setSortDirection("ascending");
    } else {
      setSortDirection("descending");
    }
  }

   
  //car, picuplocation, picupdate

  return (
    <ScrollView style={styles.container}>
      <ProfileCard page={"reservations"} />

      <DataTable style={styles.table}>
        <DataTable.Header>
          <DataTable.Title>Car</DataTable.Title>
          <DataTable.Title>Pickup Location</DataTable.Title>
          <DataTable.Title sortDirection= {sortDirection}  onPress={sortDirectionHandler} >Pickup Date</DataTable.Title>
        </DataTable.Header>
        {reservations.map((reservation) => (
          <DataTable.Row key={reservation.id}>
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