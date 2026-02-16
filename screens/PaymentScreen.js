import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, Button, HelperText } from 'react-native-paper';
import colors from '../constants/colors';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = () => {

    const navigation = useNavigation();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    cardNumber: Yup.string().max(16).required('Card Number is required'),
    expirationDate: Yup.string().required('Expiration Date is required'),
    cvv: Yup.string().max(3).required('CVV is required'),
  });

  const initialValues = {
    fullName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  return (
    <View style={styles.container}>
        <TextInput
            placeholder= "Card Holder's Name"
            value={formik.values.fullName}
            onChangeText={formik.handleChange('fullName')}
            backgroundColor={colors.color7}
            style={{ padding: 5, justifyContent: "center", alignItems: "center" }}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            />
          <HelperText type="error" visible={formik.errors.fullName}>
            {formik.errors.fullName}
          </HelperText> 

       <TextInput
            placeholder= "Card Number"
            value={formik.values.cardNumber}
            onChangeText={formik.handleChange('cardNumber')}
            backgroundColor={colors.color7}
            style={{ padding: 5, justifyContent: "center", alignItems: "center" }}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            />
          <HelperText type="error" visible={formik.errors.cardNumber}>
            {formik.errors.cardNumber}
          </HelperText>       

          <TextInput
            placeholder= "Expiration Date"
            value={formik.values.expirationDate}
            onChangeText={formik.handleChange('expirationDate')}
            backgroundColor={colors.color7}
            style={{ padding: 5, justifyContent: "center", alignItems: "center" }}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            />
          <HelperText type="error" visible={formik.errors.expirationDate}>
            {formik.errors.expirationDate}
          </HelperText> 

          <TextInput
            placeholder= "CVV Number"
            value={formik.values.cvv}
            onChangeText={formik.handleChange('cvv')}
            backgroundColor={colors.color7}
            style={{ padding: 5, justifyContent: "center", alignItems: "center" }}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            />
          <HelperText type="error" visible={formik.errors.cvv}>
            {formik.errors.cvv}
          </HelperText> 
          
    </View>
  )
}

export default PaymentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }
})