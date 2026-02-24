import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import CarReservationForm from "../components/home/CarReservation";
import CarDetailsCard from "../components/common/CarDetails";
import { createContext } from "react";
import { PaperProvider } from "react-native-paper";

const CarReserveAndDetailsScreen = ({ route }) => {
  const data = route.params.data;
  const {
    id,
    model,
    doors,
    seats,
    transmission,
    airConditioning,
    pricePerHour,
    fuelType,
    builting,
    image,
  } = data;

  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <CarDetailsCard details={data} />
        <CarReservationForm data={data} />
      </ScrollView>
    </PaperProvider>
  );
};

export default CarReserveAndDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
