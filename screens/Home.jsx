import { StyleSheet, Text, View,TouchableOpacity, ScrollView  } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import styles from './home.style'
import { Ionicons,Fontisto } from '@expo/vector-icons';
import { Welcome,Headings,Carcusel } from '../component';
import Productcardrow from '../component/products/Productcardrow';


const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24}/>

          <Text style={styles.location}>Shanghai China</Text>

          <View style={{alignItems:'flex-end'}}>
            <View style={styles.cardcount}>
              <Text style={styles.cardnumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView>
        <Welcome/>
        <Carcusel/>
        <Headings/>
        <Productcardrow/>
      </ScrollView>
        
      
        
    </SafeAreaView>
  )
}

export default Home

