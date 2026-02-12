import { View, Text, ScrollView } from "react-native";
import CarDetails from "../components/common/CarDetails";
import {List} from 'react-native-paper';
import colors from "../constants/colors";
import moment from "moment";
import React from "react";

const ReservationDetailsScreen = ( { route }) => {
  const reservation = route.params.reservation;
  console.log(reservation);

  const dateTimeFormatter = (dateTime) => {
    const date = moment.utc(dateTime);
    const formattedDate = date.format("MM/DD/YYYY");
    const formattedTime = date.format("HH:mm");
    return "Date: " + formattedDate + " Time: " + formattedTime;
  };

  return (
    <ScrollView>
      <CarDetails details={reservation.car} />
      <List.Item
          title= "Pickup Location"
          titleStyle= {{fontWeight: "bold"}}
          description= {reservation.pickUpLocation}
          left= {(props) => <List.Icon {...props} icon="map-marker-plus" color={colors.color1} />}
          />

      <List.Item
          title= "Drop Off Location"
          titleStyle= {{fontWeight: "bold"}}
          description= {reservation.dropOffLocation}
          left= {(props) => <List.Icon {...props} icon="map-marker-minus" color={colors.color1} />}
          />

      <List.Item
          title= "Pickup Date"
          titleStyle= {{fontWeight: "bold"}}
          description= {dateTimeFormatter(reservation.pickUpTime)}
          left= {(props) => <List.Icon {...props} icon="clock" color={colors.color1} />}
          />

      <List.Item
          title= "Drop Off Date"
          titleStyle= {{fontWeight: "bold"}}
          description= {dateTimeFormatter(reservation.dropOffTime)}
          left= {(props) => <List.Icon {...props} icon="clock" color={colors.color1} />}
          />
    </ScrollView>
  );
};

export default ReservationDetailsScreen;
