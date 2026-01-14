import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useCallback } from 'react';
import { Card, Title, Paragraph, Button, TextInput } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DatePickerModal } from 'react-native-paper-dates';
import { registerTranslation, enGB } from 'react-native-paper-dates';
import  colors  from '../../constants/colors';

registerTranslation('en', enGB);

const CarReservation = () => {

    const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),  
  });
  const [open, setOpen] = useState(false);
  const onDismiss = useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  const onConfirm = useCallback(
    ({startDate, endDate}) => {
      setOpen(false);
      setRange({startDate, endDate});
    }, [setOpen, setRange] );
  
    const [picupLocation, setPicupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');

  return (
    <View>
        <TextInput
            placeholder="Pickup Location"
            value={picupLocation}
            onChangeText={text => setPicupLocation(text)}
            backgroundColor={colors.color7}
            style={{margin: 20, padding: 5 }}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            />
         <TextInput
            placeholder="Drop off Location"
            value={dropoffLocation}
            onChangeText={text => setDropoffLocation(text)}
            backgroundColor={colors.color7}
            style={{margin: 20, padding: 5 }}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            />

        <SafeAreaProvider style={{margin: 20}}>
         <View
            style={{
              width: "100%",
              }}>
                      <Button
                        onPress={() => setOpen(true)}
                        uppercase={false}
                        mode="outlined"
                        style={styles.dateTimeButton} >
                        
                        <Text style={{}}>Pick range</Text>

                        </Button>
                        <DatePickerModal
                        locale="en"
                        mode="range"
                        visible={open}
                        onDismiss={onDismiss}
                        startDate={range.startDate}
                        endDate={range.endDate}
                        onConfirm={onConfirm}
                      />
                        </View>
                  </SafeAreaProvider>    

                  <View style={{margin: 15}}>
                  <Button 
                  onPress={() => console.log("reserve")} 
                  mode="contained" 
                  style={styles.button}
                  >
                      <Text style={{color: "white"}}>Book Now</Text>
                  </Button>

                  </View>

                  </View>
  );
};

export default CarReservation;

const styles = StyleSheet.create({
    button: {
        width: "100%",
        padding: 5,
        borderRadius: 30,
        backgroundColor: colors.color4,
      },
      
})