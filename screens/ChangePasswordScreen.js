import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProfileCard from '../components/account/ProfileCard';
import React from 'react'

const ChangePasswordScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ProfileCard page={"password"} />
    </ScrollView>
  )
}

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  }
})