import React from "react";
import {TouchableOpacity,Image,StyleSheet}from 'react-native';

interface HeartButtonProps {
  onPress?: () => void;
  size?: number;    
}
export default function HeartButton({onPress, size = 70}: HeartButtonProps){
  return(
    <TouchableOpacity onPress={onPress}><Image
    source={require('../../assets/image/LikeButton1.png')}
    style={[styles.buttonHeart,{width: size ,height: size}]}/>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  buttonHeart: { 
    resizeMode:"contain"
  },
})