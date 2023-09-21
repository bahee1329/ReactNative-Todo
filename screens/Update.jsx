import {  StyleSheet,KeyboardAvoidingView,View,Text,TextInput,Pressable} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Title from '../components/Title'
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '../constants'
import styles from './update.style'
import { useNavigation } from '@react-navigation/native';
import Carcusel from './../components/Carcusel';



const Update = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
         <Title/>

         

         <KeyboardAvoidingView>
                    <View>
                        <Text style={styles.heading}>Update your Activity</Text>
                    </View>

                    <View>
                        <View style={styles.activity}>
                            <MaterialIcons style={{ marginLeft: 10, color: COLORS.blue }} name="app-registration" size={30} color="black" />
                            <TextInput style={styles.inputtext} placeholder='Update your Activity' />
                        </View>

                        <View style={styles.activity}>
                            <MaterialIcons style={{ marginLeft: 10, color:COLORS.blue }} name="date-range" size={30} color="black" />
                            <TextInput keyboardType='numeric' style={styles.inputtext} placeholder='Update the Date' />
                        </View>
                    </View>

                    <Pressable style={styles.button} onPress={()=>{navigation.navigate('Home')}}>
                        <MaterialIcons name="update" size={35} color={COLORS.lightWhite} style={{marginLeft:"26%"}}/>
                    </Pressable>

                    
                <Carcusel/>

        </KeyboardAvoidingView>


                


           

           
         
    </SafeAreaView>
  )
}

export default Update

