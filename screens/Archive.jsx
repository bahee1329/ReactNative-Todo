import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Title from '../components/Title'
import Archivelist from '../components/Archivelist'

const Archive = () => {
  const temdata = [1, 2, 3, 4, 5, 6, 7]
  return (
    <SafeAreaView>
      
      <Title />

      <View>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: "900" }}>Archive</Text>
      </View>

      <View style={{ marginBottom: 100 }}>
        <FlatList
          data={temdata}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => (

            <Archivelist item={item} />

          )} />
      </View>
    </SafeAreaView>
  )
}

export default Archive
