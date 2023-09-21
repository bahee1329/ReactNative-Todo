import { Pressable, Text, View } from 'react-native'
import React from 'react'
import styles from './archivelist.style'
import { AntDesign, MaterialCommunityIcons, Ionicons,MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Archivelist = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={{ fontSize: 20, fontWeight: "900", color: "white", marginTop: -20, marginHorizontal: 20, }}>
                    go temple to new derdss
                </Text>

                


                <Text style={{ fontSize: 16, fontWeight: "900", color: "black", marginTop: 2,marginLeft:80 }}>
                    13-07-2020
                </Text>

                <View style={styles.icons}>

                <View >
                    <AntDesign name="checkcircle" size={30} color="white" />
                </View>

                
                    <Pressable>
                        <Text>
                            <MaterialCommunityIcons name="delete-outline" size={30} color="white" />
                        </Text>

                    </Pressable>

                    <Pressable onPress={()=>navigation.navigate('Update')}>
                        <Text>
                        <MaterialCommunityIcons name="update" size={30} color="white" />
                        </Text>

                    </Pressable>

                    <Pressable onPress={()=>navigation.navigate('Home')}>
                        <Text>
                            <MaterialIcons name="unarchive" size={30} color="white" />
                        </Text>

                    </Pressable>


                </View>


            </View>
        </View>
    )
}

export default Archivelist
