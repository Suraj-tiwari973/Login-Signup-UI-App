import { View,StyleSheet, Text,Image,SafeAreaView,Easing,Animated} from 'react-native'
import React,{useRef,useEffect} from 'react'
import styles from '../styles/Intro'

const Intro = () => {

  return (

    <SafeAreaView style={styles.container}>
        <View style= {styles.innerContainer}>
            <Image style={{height:100,width:100}} source={require('../assets/images/setting.png')}/>
        </View>
    </SafeAreaView>
  )
}

export default Intro;