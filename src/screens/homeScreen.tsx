import { View,Text,TouchableOpacity,StyleSheet,Image } from 'react-native';
import {useFonts} from 'expo-font';
import {useState} from 'react';
import HeartButton from '../components/HeartButton';


export default function HomeScreen({ navigation }: any){
    const goToCats = () => {
        navigation.navigate("Cat");
    }
    const goToDogs =() =>{
        navigation.navigate("Dog");
    }
    const [fontsLoaded] = useFonts({
        Bauhaus93: require('../../assets/fonts/bauhaus-93/Bauhaus93-Regular.ttf'),
        JetBrainsMono: require('../../assets/fonts/ttf/JetBrainsMono-Regular.ttf')
    });
    if(!fontsLoaded){
        return null;
    }

    return(
        <View style={styles.container}>
               
         <Text style={styles.title}>tinder</Text>
            <Image
                source={require('../../assets/image/LogoTinder1.png')}
                style={styles.logo}
            />
          <View style={styles.buttonContainer}>
                <TouchableOpacity
                 style={styles.button}>
                 <Text style={styles.label}>CAT</Text>
                    <HeartButton size={70} onPress={goToCats}/>
                </TouchableOpacity>
                <TouchableOpacity
                 style={styles.button}>
                 <Text style={styles.label}>DOG</Text>
                    <HeartButton size={70} onPress={goToDogs}/>
                </TouchableOpacity>
           </View>
           <View> 
                <TouchableOpacity >
                    <Text style={styles.link}>saiba mais</Text>
                </TouchableOpacity>
           </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center"
    },
    title:{
        fontSize:80,
        color: "#ff4f69",
        fontFamily:'Bauhaus93',
        marginBottom:20
    },
    subtitle:{
        fontSize:65,
        fontFamily:'Bauhaus93',
        color:'#ffa148',
        marginBottom: 30
    },
    buttonContainer:{
        flexDirection:"row",
        //gap: 120,
    },
    button:{
        alignItems: "center" ,
        paddingHorizontal: 35,
    },
    label:{
        fontSize:25,
        fontFamily:'Bauhaus93',
        marginBottom:10,
        color:"#ff4f69"

    },
    buttonHeart:{
        width: 70,
        height: 70,
       
    },
    link:{
        fontSize:12,
        color:'#656464',
        fontFamily:'JetBrainsMono',
        marginTop:100
            
    },
    linkAtivo:{
        textDecorationLine: 'underline'    
    },
    logo:{
        width: 70,
        height: 70,
        marginBottom:150
    },
})
