import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/AppNavigation';
import Welcome from './pages/Welcome';
import Intro from './pages/Intro';


export default function App() {

  const [isLoaded,setIsLoaded] = useState(false);

  setTimeout(()=>{
    setIsLoaded(true);
  },1000);

  return (

    isLoaded ? <AppNavigation/> : <Intro/>
    // <AppNavigation/>
      
  );
}

