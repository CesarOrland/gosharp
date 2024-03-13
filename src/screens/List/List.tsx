import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ActivityIndicator, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable';

import { RootState, actions, useAppSelectos } from '../../redux/store/root.store'
import { COLORS } from '../../utils/Colors'

const List = () => {

  const listImage = useAppSelectos((state: RootState) => state.image.listImage)
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <ScrollView>
      <Animatable.View
        useNativeDriver
        animation={'fadeInRightBig'}
        delay={100}
        duration={1000}
        style={styles.button}>
          <Text style={styles.title} >
            Lista
          </Text>
      </Animatable.View>
        {listImage.map((data, index) => (
          <Animatable.View
            useNativeDriver
            animation={'fadeInRightBig'}
            delay={500}
            duration={1000}
            style={styles.card}
            key={index}>
            <Image source={{uri: data?.thumbnailUrl}} style={styles.img} />
            <View style={{flex: 1, justifyContent:"center", alignItems:"center"}} >
              <Text style={styles.text} >{data.id}</Text>
              <Text style={styles.text} >{data.title}</Text>
    
            </View>
          </Animatable.View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles= StyleSheet.create({
    button:{
      width: "100%",
      height: 80,
      justifyContent:"center", alignItems:"center"
    },
    container: {},
    title: {
      fontSize: 40,
      color: COLORS.WHITE,
      fontWeight: 'bold',
    },
    text:{
      fontSize: 20,
      color: COLORS.WHITE,
      fontWeight: 'bold',
      textAlign:"center"
    },
    card: {
      width: "90%",
      height: 170,
      margin: 10,
      flex: 1,
      flexDirection:"row"
    },
    img: {
      flex: 1,
      width: '100%',
      height: '100%',
      borderRadius: 20,
      borderColor: COLORS.BORDER,
      borderWidth: 1,
    },
    delete:{
      width: "90%",
      height: 40,
      backgroundColor:"red", borderRadius: 20,
      justifyContent:"center", alignItems:"center"
    }
  
  })

export default List