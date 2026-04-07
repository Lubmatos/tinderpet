import React from "react";
import {TouchableOpacity,Image,StyleSheet } from 'react-native'

interface ArrowButtonProps {
    direction: string;
    onPress?: () => void;
    size?: number;
}

export default function ArrowButton ({direction, onPress, size =70,}:ArrowButtonProps){
    const imageSource = 
    direction === "left"
    ? require ( "../../assets/image/SetaEsq.png")
    : require ("../../assets/image/SetaDir.png");
    return(
        <TouchableOpacity onPress={onPress}>
        <Image source={imageSource} style={[styles.buttonHome,{width:size, height:size}]}/>
        </TouchableOpacity>
    )
    
}
const styles = StyleSheet.create({
    buttonHome:{
        resizeMode:"contain"
    }
})