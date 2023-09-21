import { Text, View, KeyboardAvoidingView, TextInput, Pressable, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
import Title from '../components/Title'
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '../constants'
import Listitem from '../components/Listitem'

const Home = () => {

    const temdata = [1, 2, 3, 4, 5]
    return (
        <SafeAreaView style={styles.container}>
            <View>

                <Title />

                <KeyboardAvoidingView>
                    <View>
                        <Text style={styles.heading}>Add your Activity</Text>
                    </View>

                    <View>
                        <View style={styles.activity}>
                            <MaterialIcons style={{ marginLeft: 10, color: COLORS.blue }} name="app-registration" size={30} color="black" />
                            <TextInput style={styles.inputtext} placeholder='Enter your Activity' />
                        </View>

                        <View style={styles.activity}>
                            <MaterialIcons style={{ marginLeft: 10, color: COLORS.blue }} name="date-range" size={30} color="black" />
                            <TextInput keyboardType='numeric' style={styles.inputtext} placeholder='Enter the Date' />
                        </View>
                    </View>

                    <Pressable style={styles.button}>
                        <MaterialIcons name="border-color" size={28} color={COLORS.lightWhite} style={{ marginLeft: "30%" }} />
                    </Pressable>

                </KeyboardAvoidingView>
            </View>

            <View>
                <FlatList
                    data={temdata}
                    keyExtractor={item => item}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={(item) => (
                        <Listitem item={item} />
                    )} />
            </View>
        </SafeAreaView>
    )
}

export default Home

