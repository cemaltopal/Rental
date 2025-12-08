import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import CarsDetailsScreen from '../CarsDetailsScreen';
import CarsScreen from '../CarsScreen';
import ReservationResultScreen from '../ReservationResultScreen';

const HomeStack = () => {
    const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator>
        <Stack.Screen name="CarsScreen" component={CarsScreen} />
        <Stack.Screen name="CarsDetailsScreen" component={CarsDetailsScreen} />
        <Stack.Screen name="ReservationResultScreen" component={ReservationResultScreen} />
      
    
    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})