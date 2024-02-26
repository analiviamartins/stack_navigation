import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from "@react-navigation/native"
import style from "./style";

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text>Profile</Text>
      <TouchableOpacity
        style={style.navButton}
        onPress={() => navigation.navigate
          ("Home")}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}