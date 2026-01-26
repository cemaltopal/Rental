import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import ChangePasswordScreen from '../ChangePasswordScreen';
import LoginScreen from '../LoginScreen';
import ProfileScreen from '../ProfileScreen';
import RegisterScreen from '../RegisterScreen';
import ReservationDetailsScreen from '../ReservationDetailsScreen';
import ReservationScreen from '../ReservationScreen';
import Header from '../../components/common/Header';

const Stack = createNativeStackNavigator();
const AccountStack = () => {
  return (
      <Stack.Navigator screenOptions={{
        
        header: (props) => <Header {...props}/>
        ,
      }}
      initialRouteName="ProfileScreen"

      >
        
        <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen}
        options={{ title: "Login" }} />
        <Stack.Screen 
        name="ProfileScreen" 
        component={ProfileScreen}
        options={{ title: "Profile" }} />
        <Stack.Screen 
        name="ChangePassword" 
        component={ChangePasswordScreen}
        options={{
          title: "Change Password",
        }} />
        <Stack.Screen 
        name="Reservations" 
        component={ReservationScreen}
        options={{ title: "Reservations" }} />
        <Stack.Screen 
        name="ReservationDetails" 
        component={ReservationDetailsScreen}
        options={{ title: "Reservation Details" }} />
        
        <Stack.Screen 
        name="RegisterScreen" 
        component={RegisterScreen}
        options={{ title: "Register" }} />

      </Stack.Navigator>
  )
}

export default AccountStack

const styles = StyleSheet.create({})