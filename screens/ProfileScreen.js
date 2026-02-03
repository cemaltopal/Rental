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
            label= "First Name"
            value={formik.values.firstName}
            onChangeText={formik.handleChange('firstName')}
            style={{...styles.Textinput, marginTop: 20}}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            />
            <HelperText type="error" visible={formik.errors.firstName} style={{marginHorizontal: 20}}>
              {""}
              {formik.errors.firstName}{""}
            </HelperText>

      <TextInput
            label= "Last Name"
            value={formik.values.lastName}
            onChangeText={formik.handleChange('lastName')}
            style={styles.Textinput}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            />
            <HelperText type="error" visible={formik.errors.lastName} style={{marginHorizontal: 20}} >
              {formik.errors.lastName}
            </HelperText>

      <TextInput
            label= "Phone Number"
            value={formik.values.phone}
            onChangeText={formik.handleChange('phone')}
            style={styles.Textinput}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            keyboardType='numeric'

            />
            <HelperText type="error" visible={formik.errors.phone} style={{marginHorizontal: 20}}>
              {formik.errors.phone}
            </HelperText>

      <TextInput
            label= "Address"
            value={formik.values.address}
            onChangeText={formik.handleChange('address')}
            style={styles.Textinput}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            />
            <HelperText type="error" visible={formik.errors.address} style={{marginHorizontal: 20}}>
              {formik.errors.address}
            </HelperText>

      <TextInput
            label= "Zip Code"
            value={formik.values.zipCode}
            onChangeText={formik.handleChange('zipCode')}
            style={styles.Textinput}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            />
            <HelperText type="error" visible={formik.errors.zipCode} style={{marginHorizontal: 20}}>
              {formik.errors.zipCode}
            </HelperText>

            <Button
            mode="contained"
            style={styles.button}
            onPress={formik.handleSubmit}
            disabled={!formik.isValid}
            >Save Changes</Button>


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
  },
  button: {
    marginTop: 20,
    marginTop: 5,
    backgroundColor: colors.color1,
  },
})