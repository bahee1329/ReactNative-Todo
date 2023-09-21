import { StyleSheet } from "react-native";
import { COLORS } from "../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";


const styles = StyleSheet.create({
   container:{
    backgroundColor:COLORS.gray,
    paddingVertical:32,
    paddingHorizontal:16,
    borderRadius:15,
    marginHorizontal:12,
    marginVertical:30,
    alignItems:'center',
    width:200,
    height:260
   },
   container1:{
      width:193,
      height:250,
      marginTop:-27,
      borderRadius:10,
      backgroundColor:COLORS.blue
   },
   icons:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:15
   }

})

export default styles