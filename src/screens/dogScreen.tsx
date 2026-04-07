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
    if(!fontsLoaded){
        return null;
    }
    return(
        <View style={styles.container}>
            <View style={styles.homeContainer}>
                <HomeButton size={38} onPress={goHome}/>
            </View>
            <View style={styles.imageContainer}>
                <Image source={currentDog.image} style={styles.dogImage}/>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.dogName}>{currentDog.name}</Text>
                <Text style={styles.dogDescription}>{currentDog.description}</Text>
            </View>
            <View style = {styles.bottonMenu}>
                <ArrowButton direction='left' size={70} onPress={handlePrev}/>
                <HeartButton size={70}/>
                <ArrowButton direction='right' size={70} onPress={handleNext}/>
            </View>
        </View>
    )
}

const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center",
    backgroundColor:"#ffffff" 
},
imageContainer:{
    width:"100%",
    height: screenHeight * 0.55,
    maxHeight:450,
    alignItems:'center',
    justifyContent:'center',
    marginTop:120
},
dogImage:{
    width:"90%",
    height:"100%",
    borderRadius: 20,

},
descriptionContainer:{
    width:"90%",
    backgroundColor: "#f5f5f5",
    borderRadius:15,
    padding:15,
    marginTop:10,    
},
dogName:{
    fontSize:22,
    fontFamily:"JetBrainsMono",
    color:'#020202',
    width:'90%',
    textAlign:'left'
},
dogDescription:{
    fontSize:14,
    textAlign:'justify',
    lineHeight:20,
    marginTop:10,
    fontFamily:"JetBrainsMono",
    color:"#333"
},
bottonMenu:{
    position: 'absolute',
    bottom:30,
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
    gap: 40,
    marginTop:10    
},
homeContainer:{
    position:'absolute',
    top:60,
    left:30,
    zIndex:10,
}
})