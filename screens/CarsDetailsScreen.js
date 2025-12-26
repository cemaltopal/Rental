import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useCallback } from 'react';
import { Card, Title, Paragraph, Button, TextInput } from 'react-native-paper'
import colors from '../constants/colors';
import sizes from '../constants/sizes';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DatePickerModal } from 'react-native-paper-dates';

const CarsDetailsScreen = ({route}) => {
  const data = route.params.data;
  const {id, model, doors, seats, transmission, airConditioning, pricePerHour, fuelType, builting, image} = data;
  
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
    <ScrollView style= {styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={image} />
        <Card.Content style={styles.cardContent}>
          <Title style={styles.title}>{model}</Title>
          <Text> <Icon name="car-door" size={24} color={colors.color1} /> {doors} {" "} 
               doors  |  <Icon name="car-seat" size={24} color={colors.color1} /> {" "} 
               {seats} seats
          </Text>
          <TouchableOpacity style={styles.button}>
           <Text style={styles.buttonText}> ${pricePerHour} / hour </Text>
            </TouchableOpacity>
            <View style={styles.icons}>
                  <View>
                    <Icon name="car-shift-pattern" size={sizes.carDetailIconSize} color={colors.color1} />
                    <Text>{transmission}</Text>
                  </View>
                  {airConditioning &&
                  <View>
                    <Icon name="snowflake" size={sizes.carDetailIconSize} color={colors.color1} />
                    <Text>Air Cond</Text>
                  </View>
                  }
                  <View>
                    <Icon name="gas-station" size={sizes.carDetailIconSize} color={colors.color1} />
                    <Text>{fuelType}</Text>
                  </View>
            </View>
        </Card.Content>
      </Card>
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
      
    </ScrollView>
  );
};

export default CarsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  cardContent: {  
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  card: {
    marginTop: 20,
    paddingBottom: 20,
  },
  button: {
    marginTop: 5,
    width: "100%",
    padding: 10,
    borderRadius: 30,
    backgroundColor: colors.color4,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
  },
  icons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
  },
  dateTimeButton: {
    borderRadius: 5,
    padding: 10,
  },

})