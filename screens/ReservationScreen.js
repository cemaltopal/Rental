import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfileCard from '../components/account/ProfileCard';

const ReservationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ProfileCard page={"reservations"} />
    </ScrollView>
  )
}

export default ReservationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  }
})