import { StyleSheet } from "react-native";
import {SIZES,COLORS} from '../../constants/index'

const styles = StyleSheet.create({
 container:{
    marginBottom:12,
    marginTop:16,
    marginHorizontal:12
 },
 wrapper:{
    flexDirection:'row',
    justifyContent:'space-between',
 },
 headertitle:{
    fontFamily:'semibold',
    fontSize:SIZES.xLarge -2,
 }
})

export default styles;