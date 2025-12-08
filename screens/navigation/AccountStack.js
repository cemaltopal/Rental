import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import ChangePasswordScreen from '../ChangePasswordScreen';
import LoginScreen from '../LoginScreen';
import ProfileScreen from '../ProfileScreen';
import RegisterScreen from '../RegisterScreen';
import ReservationDetailsScreen from '../ReservationDetailsScreen';
import ReservationScreen from '../ReservationScreen';

const AccountStack = () => {
    const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Reservations" component={ReservationScreen} />
        <Stack.Screen name="ReservationDetails" component={ReservationDetailsScreen} />
      </Stack.Navigator>
  )
}

export default AccountStack

const styles = StyleSheet.create({})