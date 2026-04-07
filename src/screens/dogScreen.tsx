import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import React,{ useState } from 'react';
import HomeButton from '../components/HomeButton';
import ArrowButton from '../components/ArrowButton';
import HeartButton from '../components/HeartButton';
import { dogs } from '../data/dogs';

export default function DogScreen({navigation}:any){
    //NAVEGAÇÃO
    const goHome = () => {
        navigation.navigate("Home");
    }
    //LETRAS
    const [fontsLoaded] = useFonts ({
        JetBrainsMono : require ('../../assets/fonts/ttf/JetBrainsMono-Regular.ttf')
    });
    //TROCA DE PERFIS
    const [currentDogIndex, setCurrentDogIndex] = useState(0);
    const currentDog = dogs[currentDogIndex];
    const handleNext = () => {
        if(currentDogIndex<dogs.length-1){
            setCurrentDogIndex(currentDogIndex+1);
        }else{
            setCurrentDogIndex(0);
        }
    }       
    const handlePrev = () => {
        if(currentDogIndex > 0){
            setCurrentDogIndex(currentDogIndex-1);
        }else{
            (setCurrentDogIndex(dogs.length-1));
        }
    }


}