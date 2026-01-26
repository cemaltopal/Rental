import { View, Text } from 'react-native';
import ProfileCard from '../components/account/ProfileCard';
import React from 'react'

const ProfileScreen = () => {
  return (
    <View>
      <ProfileCard page={"profile"} />
    </View>
  )
}

export default ProfileScreen