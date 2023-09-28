import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants/index";

const styles= StyleSheet.create({
    
    serchcontainer:{
      flexDirection:"row",
      alignItems:'center',
      justifyContent:"center",
      backgroundColor:COLORS.secondary,
      marginVertical:SIZES.medium +15,
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
    },
    photo:{
      resizeMode:"contain",
      height:SIZES.width ,
      width:SIZES.width ,
      marginTop:80,
      marginLeft:-30
    }
   });
   
   export default styles;