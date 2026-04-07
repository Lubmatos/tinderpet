import React from "react";
import {TouchableOpacity, Image, StyleSheet} from 'react-native'

interface HomeButtonProps {
    onPress?: () => void;
    size?: number;
}
export default function HomeButton ({onPress,size = 70}:HomeButtonProps){
    return(
        <TouchableOpacity onPress={onPress}><Image
            source={require('../../assets/image/buttonHome.png')}
            style={[styles.buttonHome,{width:size, height:size}]}/>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonHome:{
        resizeMode:"contain"
    }
})