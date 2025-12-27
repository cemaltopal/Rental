import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import CarsDetailsScreen from '../CarsDetailsScreen';
import CarsScreen from '../CarsScreen';
import ReservationResultScreen from '../ReservationResultScreen';
import colors from '../../constants/colors';
import Header from '../../components/common/Header';

const HomeStack = () => {
    const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator 
      screenOptions={{
        header: (props) => <Header {...props}/>,
      }}
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
        name="CarsDetailsScreen" 
        component={CarsDetailsScreen}
        options={{
          title: "Car Details",
          headerStyle: {backgroundColor: colors.color1},
          headerTintColor: "#fff",
        }} />
        <Stack.Screen 
        name="ReservationResultScreen" 
        component={ReservationResultScreen}
        options={{
          title: "Reservation Result",
          headerStyle: { backgroundColor: colors.color1},
          headerTintColor: "#fff",
        }} />
      
    
    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})