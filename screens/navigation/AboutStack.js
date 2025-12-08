import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import { StyleSheet } from 'react-native';
import AboutScreen from '../AboutScreen';

const AboutStack = () => {
  const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator>
        <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{ title: "About" }}
      />
      </Stack.Navigator>
  )
}

export default AboutStack

const styles = StyleSheet.create({})