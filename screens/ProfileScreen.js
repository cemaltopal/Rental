import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProfileCard from '../components/account/ProfileCard';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { TextInput, Button, HelperText } from 'react-native-paper';
import colors from '../constants/colors';
import sizes from '../constants/sizes';
import { userApi } from '../api/userApi';
import { useContext } from 'react';
import AppContext from '../store/AppContext';
import Toast from 'react-native-toast-message';

const ProfileScreen = () => {
  const { userInformation } = useContext(AppContext);

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
  
  let initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    zipCode: '',
  };

  useEffect(() => {
    initialValues = {
      firstName: userInformation.firstName,
      lastName: userInformation.lastName,
      phone: userInformation.phoneNumber,
      address: userInformation.address,
      zipCode: userInformation.zipCode
    }
      formik.setFieldValue('firstName', userInformation.firstName);
      formik.setFieldValue('lastName', userInformation.lastName);
      formik.setFieldValue('phone', userInformation.phoneNumber);
      formik.setFieldValue('address', userInformation.address);
      formik.setFieldValue('zipCode', userInformation.zipCode);
    }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);

      userApi.updateUserDetails({
        firstName: values.firstName,
        lastName: values.lastName,
        email: userInformation.email,
        phoneNumber: values.phone,
        address: values.address,
        zipCode: values.zipCode,
      })
        .then((response) => {
          if (response === true) {
            Toast.show({
              type: "success",
              text1: "Profile Updated Successfully",
            });
            setUserInformation({...userInformation, firstName: values.firstName, 
              lastName: values.lastName,
            });
          } else {
            Toast.show({
              type: "error",
              text1: response,
            });
          }
          
        })
        .catch((error) => {
          console.log(error);
        });

    },
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
    padding: sizes.containerPadding,
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