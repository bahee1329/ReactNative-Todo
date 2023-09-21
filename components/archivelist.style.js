import { StyleSheet } from "react-native";
import { COLORS } from "../constants";


const styles = StyleSheet.create({
   container:{
    backgroundColor:COLORS.gray,
    paddingVertical:18,
    paddingHorizontal:0,
    borderRadius:15,
    marginHorizontal:12,
    marginVertical:30,
    alignItems:'center',
    width:'95%',
    height:120
   },
   
   icons:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15
   }

})

export default styles