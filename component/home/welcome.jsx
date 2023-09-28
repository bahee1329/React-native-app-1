import { StyleSheet, Text, View,TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from "./Welcome.style";
import { COLORS, SIZES } from '../../constants';
import {Feather,Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const welcome = () => {
  const navigation = useNavigation();
  return (
    <View>

    <View style={styles.container}>
      <Text style={styles.welcometxt(COLORS.black)}>
        {" "}
        Find The Most
    </Text>
    
    <Text style={styles.welcometxt(COLORS.primary)}>
        {" "}
        Luxurious Furniture</Text>
    </View>

    <View style={styles.serchcontainer}>
        <TouchableOpacity>
            <Feather name="search" size={24} style={styles.serchicon }/>
        </TouchableOpacity>

        <View style={styles.serchwrapper}>
          <TextInput
          value=''
          onPressIn={()=>{navigation.navigate('Search')}}
          style={styles.searchinput}
          placeholder='What are you looking for'/>
        </View>
        <View>
          <TouchableOpacity style={styles.searchbtn}>
            <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
    </View>

    </View>
  )
}

export default welcome

