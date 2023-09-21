import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Title = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.headingContainer}>
        <Pressable onPress={()=>{navigation.navigate("Home")}}>
        <Ionicons name="arrow-back-circle" size={30} color="black" />
        </Pressable>
          
          <Text style={{ fontSize: 60, color:COLORS.black, fontWeight: "900",fontStyle:"italic",width:"100%"}}>ToDo Act</Text>
        </View>
    </SafeAreaView>
  )
}

export default Title

const styles = StyleSheet.create({
    headingContainer:{
        marginLeft:35,
        width:"100%",
        flexDirection:"row"
    }
})