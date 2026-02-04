import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProfileCard from '../components/account/ProfileCard';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import React from 'react';
import { TextInput, Button, HelperText } from 'react-native-paper';
import colors from '../constants/colors';

const ChangePasswordScreen = () => {

  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string()
      .required('Current Password is required'),
    password: Yup.string()
      .label('Password')
      .required("Password Alanını Doldurunuz"),
      confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
      });

      const initialValues = {
        currentPassword: '',
        password: '',
        confirmPassword: '',
      };
      const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
          console.log(values);
        }
        
      });

      const [secureCurrentPassword, setSecureCurrentPassword] = React.useState(true);
      const [secureNewPassword, setSecureNewPassword] = React.useState(true);
      const [secureConfirmPassword, setSecureConfirmPassword] = React.useState(true);

  return (
    <ScrollView style={{padding: 10}}>
      <ProfileCard page={"password"} />

      <View style={{padding: 20}}>
      <TextInput
            placeholder= "Current Password"
            value={formik.values.currentPassword}
            onChangeText={formik.handleChange('currentPassword')}
            backgroundColor={colors.color7}
            style={{ padding: 5, justifyContent: "center", alignItems: "center" }}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            secureTextEntry={secureCurrentPassword}
            right={<TextInput.Icon icon={secureCurrentPassword ? "eye-off" : "eye"} onPress={() => setSecureCurrentPassword(!secureCurrentPassword)} />}
            />
            <HelperText type="error" visible={formik.errors.password}>
              {formik.errors.password}
            </HelperText>
      <TextInput
            placeholder= "Password"
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
            backgroundColor={colors.color7}
            style={{ padding: 5, justifyContent: "center", alignItems: "center" }}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            secureTextEntry={secureNewPassword}
            right={<TextInput.Icon icon={secureNewPassword ? "eye-off" : "eye"} onPress={() => setSecureNewPassword(!secureNewPassword)} />}
            />
            <HelperText type="error" visible={formik.errors.password}>
              {formik.errors.password}
            </HelperText>

      <TextInput
            placeholder= "Password (Rentry)"
            value={formik.values.confirmPassword}
            onChangeText={formik.handleChange('confirmPassword')}
            backgroundColor={colors.color7}
            style={{ padding: 5, justifyContent: "center", alignItems: "center" }}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            secureTextEntry={secureConfirmPassword}
            right={<TextInput.Icon icon={secureConfirmPassword ? "eye-off" : "eye"} onPress={() => setSecureConfirmPassword(!secureConfirmPassword)} />}
            />
            <HelperText type="error" visible={formik.errors.confirmPassword}>
              {formik.errors.confirmPassword}
            </HelperText>

          <Button 
          style={styles.button} 
          mode="contained" 
          onPress={formik.handleSubmit}
          disabled={!formik.isValid}
          >
            Save Password
          </Button>

      </View>
    </ScrollView>
  )
}

export default ChangePasswordScreen;

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