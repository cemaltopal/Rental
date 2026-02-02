import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProfileCard from '../components/account/ProfileCard';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import React from 'react';
import { TextInput, Button, HelperText } from 'react-native-paper';
import colors from '../constants/colors';

const ProfileScreen = () => {

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .label('First Name')
      .required(),
    lastName: Yup.string()
      .label('Last Name')
      .required(),
    phone: Yup.string()
      .label('Phone Number')
      .required(),
    address: Yup.string()
      .min(4)
      .label('Address')
      .required(),
    zipCode: Yup.string()
      .min(4)
      .label('Zip Code')
      .required(),
  });
  
  const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    zipCode: '',
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  return (
    <ScrollView style={styles.container}>
      <ProfileCard page={"profile"} style={styles.card}/>

<TextInput
            placeholder= "First Name"
            value={formik.values.firstName}
            onChangeText={formik.handleChange('firstName')}
            backgroundColor={colors.color7}
            style={styles.Textinput}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            />
            <HelperText type="error" visible={formik.errors.firstName}>
              {""}
              {formik.errors.firstName}{""}
            </HelperText>

      <TextInput
            placeholder= "Last Name"
            value={formik.values.lastName}
            onChangeText={formik.handleChange('lastName')}
            backgroundColor={colors.color7}
            style={{ padding: 5, justifyContent: "center", alignItems: "center" }}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            />
            <HelperText type="error" visible={formik.errors.lastName}>
              {formik.errors.lastName}
            </HelperText>

      <TextInput
            placeholder= "Phone Number"
            value={formik.values.phone}
            onChangeText={formik.handleChange('phone')}
            backgroundColor={colors.color7}
            style={{ padding: 5, justifyContent: "center", alignItems: "center" }}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            />
            <HelperText type="error" visible={formik.errors.phone}>
              {formik.errors.phone}
            </HelperText>

      <TextInput
            placeholder= "Address"
            value={formik.values.address}
            onChangeText={formik.handleChange('address')}
            backgroundColor={colors.color7}
            style={{ padding: 5, justifyContent: "center", alignItems: "center" }}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            />
            <HelperText type="error" visible={formik.errors.address}>
              {formik.errors.address}
            </HelperText>

      <TextInput
            placeholder= "Zip Code"
            value={formik.values.zipCode}
            onChangeText={formik.handleChange('zipCode')}
            backgroundColor={colors.color7}
            style={{ padding: 5, justifyContent: "center", alignItems: "center" }}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            />
            <HelperText type="error" visible={formik.errors.zipCode}>
              {formik.errors.zipCode}
            </HelperText>


    </ScrollView>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginTop: 20,
    paddingBottom: 20,
  },
  Textinput: {
    padding: 5, 
    marginHorizontal: 20
  }
})