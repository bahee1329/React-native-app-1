import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SliderBox} from '../../node_modules/react-native-image-slider-box'
import {COLORS,SIZES} from '../../constants/index'

const Carcusel = () => {
    const slides =[
        "https://images.unsplash.com/photo-1611967164521-abae8fba4668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
        "https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",
        "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80",
        
    ] 
  return (
    <View style={styles.Container}>
      <SliderBox images={slides}
      dotColor={COLORS.primary}
      inactiveDotColor ={COLORS.secondary}
      ImageComponentStyle = {{borderRadius:15,marginTop:20,width:'95%'}}
      autoplay
      circleLoop
     /> 
    </View>
  )
}

export default Carcusel

const styles = StyleSheet.create({
  Container:{
    flex:1,
    alignItems:'center'
  }
})