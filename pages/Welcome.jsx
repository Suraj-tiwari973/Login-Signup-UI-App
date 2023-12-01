import { View, Text, SafeAreaView,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import styles from '../styles/Welcome'
import { useNavigation } from '@react-navigation/native'




const Welcome = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>
                Let's Get Started!
            </Text>
        </View>
        <View style={styles.imageContainer}>
            <Image style={{height:350,width:350}} source={require('../assets/images/welcome.png')}/>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.signupContainer} onPress={()=>navigation.navigate('Signup')}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'#000000'}}>
                    Signup
                </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.loginText}>
            <Text style={{fontWeight:'bold'}}>
                Already have an account ? 
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text style={{color:'#f4ce14',fontWeight:'bold',marginLeft:5,textDecorationLine:'underline'}}>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Welcome