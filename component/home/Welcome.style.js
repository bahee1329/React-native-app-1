import {StyleSheet} from 'react-native';
import {COLORS,SIZES} from "../../constants/index";


const styles= StyleSheet.create({
 container:{
    
    width:'100%'
 },
 welcometxt:(color)=>({
    fontFamily:"bold",
    fontSize:SIZES.xxLarge -10,
    marginTop:SIZES.xSmall,
    color:color,
    marginHorizontal:12
 }),
 serchcontainer:{
   flexDirection:"row",
   alignItems:'center',
   justifyContent:"center",
   backgroundColor:COLORS.secondary,
   marginVertical:SIZES.medium,
   height:40,
   marginHorizontal:SIZES.small
 },
 serchicon:{
   marginHorizontal:10,
   color:COLORS.gray,
 },
 serchwrapper:{
   flex:1,
   backgroundColor:COLORS.secondary,
   marginRight:SIZES.small,
   borderRadius:SIZES.small,
 },
 searchinput:{
   fontFamily:'regular',
   width:"100%",
   height:'100%',
   paddingHorizontal:SIZES.small,
   
 },
 searchbtn:{
   backgroundColor:COLORS.primary,
   width:50,
   height:'100%',
   borderRadius:SIZES.medium,
   alignItems:'center',
   justifyContent:"center",
 }
});

export default styles;