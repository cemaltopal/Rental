import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useCallback } from 'react';
import { Card, Title, Paragraph, Button, TextInput, HelperText } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DatePickerModal } from 'react-native-paper-dates';
import { registerTranslation, enGB } from 'react-native-paper-dates';
import  colors  from '../../constants/colors';
import {useFormik} from 'formik';
import *as Yup from 'yup';


registerTranslation('en', enGB);

const CarReservation = () => {

    const validationSchema = Yup.object().shape({
        picupLocation: Yup.string()
        .max(250)
        .required(" Bu alan Boş geçilemez"),
        dropoffLocation: Yup.string()
        .max(250)
        .required("Bu alan Boş geçilemez"),
        pickupDate: Yup.date()
        .required("Bu alan Boş gelemez"),
        
        
      });

    const formik = useFormik({
        initialValues: {
          picupLocation: "",
          dropoffLocation: "",
          pickupDate: undefined,
          dropoffDate: undefined,
        },
        onSubmit: values => {
          console.log(values);
        },
        validationSchema,
    });
    

//Date Picker States
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
      formik.setFieldValue('pickupDate', startDate);
      formik.setFieldValue('dropoffDate', endDate);
    }, 
    [setOpen, setRange] );

    //End Date Picker States
  
    const [picupLocation, setPicupLocation] = useState("");
    const [dropoffLocation, setDropoffLocation] = useState("");

  return (
    <View style={{marginTop: 10}}>
        <TextInput
            placeholder="Pickup Location"
            value={formik.values.picupLocation}
            onChangeText={formik.handleChange('picupLocation')}
            backgroundColor={colors.color7}
            style={{ padding: 5 }}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            />
          <HelperText type="error" visible={formik.errors.picupLocation}>
            {formik.errors.picupLocation}
          </HelperText>
         <TextInput
            placeholder="Drop off Location"
            value={formik.values.dropoffLocation}
            onChangeText={formik.handleChange('dropoffLocation')}
            backgroundColor={colors.color7}
            style={{ padding: 5 }}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            />
          <HelperText type="error" visible={formik.errors.dropoffLocation}>
            {formik.errors.dropoffLocation}
          </HelperText>
        {/*Zaman seçimi*/}
        <SafeAreaProvider style={{marginTop: 10, borderRadius: 10}}>
         <View
            style={{
              width: "100%",
              }}>
                      <Button
                        onPress={() => setOpen(true)}
                        uppercase={false}
                        mode="outlined"
                        style={styles.dateTimeButton} >
                        
                        <Text style={{color: "black"}}>Pick range</Text>

                        </Button>
                        <DatePickerModal
                        locale="en"
                        mode="range"
                        visible={open}
                        onDismiss={onDismiss}
                        startDate={formik.values.pickupDate}
                        endDate={formik.values.dropoffDate}
                        onConfirm={onConfirm}
                      />
                        </View>
                  </SafeAreaProvider>    
                  <HelperText type="error" visible={formik.errors.pickupDate}>
                    {formik.errors.pickupDate} {formik.errors.dropoffDate}
                  </HelperText>

                  <View style={{marginTop: 10}}>
                  <Button 
                  onPress={formik.handleSubmit} 
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