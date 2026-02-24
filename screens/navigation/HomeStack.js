import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import CarReserveAndDetailsScreen from "../CarDetailsScreen";
import CarsScreen from "../CarsScreen";
import ReservationResultScreen from "../ReservationResultScreen";
import colors from "../../constants/colors";
import Header from "../../components/common/Header";
import PaymentScreen from "../PaymentScreen";

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}
      initialRouteName="CarsScreen"

    >
      <Stack.Screen
        name="CarsScreen"
        component={CarsScreen}
        options={{
          title: "Select a Car",
          headerStyle: { backgroundColor: colors.color1 },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="CarReserveAndDetailsScreen"
        component={CarReserveAndDetailsScreen}
        options={{
          title: "Car Details",
          headerStyle: { backgroundColor: colors.color1 },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="ReservationResultScreen"
        component={ReservationResultScreen}
        options={{
          title: "Reservation Result",
          headerStyle: { backgroundColor: colors.color1 },
          headerTintColor: "#fff",
        }}
      />

      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          title: "Credit Card Payment",
          headerStyle: { backgroundColor: colors.color1 },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
