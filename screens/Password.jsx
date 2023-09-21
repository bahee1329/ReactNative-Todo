import { SafeAreaView, StyleSheet, Text, View,TextInput,Pressable,KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '../constants'
import Title from '../components/Title'
import styles from './password.style'
import { useNavigation } from '@react-navigation/native';

const Password = () => {
    const navigation =useNavigation();
  return (
    <SafeAreaView>
        <View  style={{marginTop:50}}>
            <Title/>
        </View>
        

        <KeyboardAvoidingView>
                    <View>
                        <Text style={styles.heading}>Enter your Password</Text>
                    </View>

                    <View style={{marginTop:10}}>
                        <View style={styles.activity}>
                            <MaterialIcons style={{ marginLeft: 10, color: COLORS.blue }} name="lock" size={30} color="black" />
                            <TextInput style={styles.inputtext} placeholder='Enter your Password' />
                        </View>
   
                    </View>

                    <Pressable style={styles.button} onPress={()=>{navigation.navigate("Archive")}}>
                        <MaterialIcons name="lock" size={28} color={COLORS.lightWhite} style={{marginLeft:"30%"}}/>
                    </Pressable>

                    <Text style={{textAlign:"justify",marginHorizontal:20,marginVertical:30,fontSize:20,color:COLORS.black}}>
                    ***************************** An archive is a collection or storage of historical records, documents, data, or other materials that are preserved for reference, research, or historical purposes. Archives are typically organized and maintained systematically to ensure the long-term preservation and accessibility of valuable information. *****************************
                    </Text>

        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Password

