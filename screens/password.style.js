import { StyleSheet } from "react-native";
import { COLORS } from "../constants";


const styles = StyleSheet.create({
   
   heading:{
     fontSize: 20, 
     fontWeight: 'bold',
     marginTop: 30, 
     color: COLORS.blue, 
     textAlign: "center"
   },
   activity:{
     flexDirection: "row", 
     alignItems: "center",
     gap: 5, 
     backgroundColor: "#d0d0d0", 
     paddingVertical: 5, 
     borderRadius: 5, 
     marginTop: 30,
     marginHorizontal:20
   },
   inputtext:{
      color: COLORS.gray, 
      marginVertical: 8, 
      width: 300,
      fontSize:20,
      fontWeight:'900' 
   },button:{
       width: 100,
       backgroundColor: COLORS.blue, 
       borderRadius: 50, 
       marginLeft: "auto", 
       marginRight: "auto", 
       marginTop: 30, 
       padding: 15 
   }
})

export default styles