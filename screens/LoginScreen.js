import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import colors from '../constants/colors';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const LoginScreen = () => {

  const navigation = useNavigation();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required()
      .label('Email'),
    password: Yup.string()
      .min(4)
      .label('Password')
      .required()
  });

  const initialValues = {
    email: '',
    password: '', 
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  return (
    <View style={{padding: 15, paddingTop: 40}}>
      <TextInput
            placeholder= "Email"
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            backgroundColor={colors.color7}
            style={{ padding: 5 }}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            />
          <HelperText type="error" visible={formik.errors.email}>
            {formik.errors.email}
          </HelperText>
      <TextInput
            placeholder="Password"
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
            backgroundColor={colors.color7}
            style={{ padding: 5 }}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
            />
          <HelperText type="error" visible={formik.errors.password}>
            {formik.errors.password}
          </HelperText>

          <Button 
          mode="contained" 
          style={styles.button}
          onPress={formik.handleSubmit}
          >
            <Text style={{color: "black"}}>LOGİN </Text>
          </Button>

          <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")} 
          
          style={styles.registerText}
          >
           <Text>Don't have an account?</Text> 
          </TouchableOpacity>
          
    </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: colors.color1,
    color: "black",
  },
  registerText: {
    marginTop: 20,
    alignItems: "center",
  }
})