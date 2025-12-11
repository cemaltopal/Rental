import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import CarsDetailsScreen from '../CarsDetailsScreen';
import CarsScreen from '../CarsScreen';
import ReservationResultScreen from '../ReservationResultScreen';
import colors from '../../constants/colors';

const HomeStack = () => {
    const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="CarsScreen" 
          component={CarsScreen} 
          options={{
              title: "Select a Car", 
              headerStyle: {backgraundColor: colors},
              headerTintColor: colors.color1}} />
        <Stack.Screen 
        name="CarsDetailsScreen" 
        component={CarsDetailsScreen}
        options={{
          title: "Car Details",
          headerStyle: {backgraundColor: colors},
          headerTintColor: colors.color1
        }} />
        <Stack.Screen name="ReservationResultScreen" component={ReservationResultScreen} />
      
    
    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})