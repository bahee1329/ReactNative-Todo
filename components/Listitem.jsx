import { Pressable, Text, View } from 'react-native'
import React from 'react'
import styles from './listitem.style'
import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Listitem = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={{ fontSize: 20, fontWeight: "900", color: "white", marginTop: 10, marginHorizontal: 20, textAlign: "center" }}>
                    go temple to new derdss
                </Text>

                <Text style={{ fontSize: 16, fontWeight: "900", color: "black", marginTop: 10, marginHorizontal: 20, textAlign: 'center' }}>
                    13-07-2020
                </Text>

                <View style={{ alignItems: 'center', marginVertical: 10 }}>
                    <AntDesign name="checkcircle" size={45} color="white" />
                </View>

                <View style={styles.icons}>

                    <Pressable>
                        <Text>
                            <MaterialCommunityIcons name="delete-outline" size={34} color="white" />
                        </Text>

                    </Pressable>

                    <Pressable onPress={()=>navigation.navigate('Update')}>
                        <Text>
                        <MaterialCommunityIcons name="update" size={34} color="white" />
                        </Text>

                    </Pressable>

                    <Pressable onPress={()=>navigation.navigate('Archive')}>
                        <Text>
                            <Ionicons name="md-archive" size={32} color="white" />
                        </Text>

                    </Pressable>


                </View>


            </View>
        </View>
    )
}

export default Listitem
