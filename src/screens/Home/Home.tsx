import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ActivityIndicator, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable';

import { RootState, actions, useAppSelectos } from '../../redux/store/root.store'
import { COLORS } from '../../utils/Colors'

const Home = () => {


  const listImage = useAppSelectos((state: RootState) => state.image.listImage)
  const [loading, setLoading] = useState(false);

  const handleGetListImage = async () => {
    setLoading(true)
    await actions.image.getListImage();
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }

  const handleDeleteImage = async (id: number) => {
    await actions.image.deleteImages(id)
  }

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
        <TouchableOpacity onPress={() => handleGetListImage()} >
          <Text style={styles.title} >
            Obtener Lista
          </Text>
          </TouchableOpacity>
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
              <TouchableOpacity style={styles.delete} onPress={() => handleDeleteImage(data.id)} >
                <Text style={styles.text}>Borrar</Text>
              </TouchableOpacity>
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
    backgroundColor: COLORS.BORDER, borderRadius: 20, justifyContent:"center", alignItems:"center"
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

export default Home