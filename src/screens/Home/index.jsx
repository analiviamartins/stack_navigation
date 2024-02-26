import { View, Text, TouchableOpacity } from 'react-native'

import React from 'react'

import { useNavigation } from "@react-navigation/native"
import style from "./style";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text>Home</Text>
      <TouchableOpacity
        style={style.navButton}
        onPress={() => navigation.navigate
          ('Profile')}>
        <Text>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.navButton}
        onPress={() => navigation.navigate
          ('Contact')}>
        <Text>Contato</Text>
      </TouchableOpacity>
    </View>
  )
}

