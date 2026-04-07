import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import React,{useState} from "react";
import { cats } from "../data/cats";
import HomeButton from "../components/HomeButton";
import ArrowButton from "../components/ArrowButton";
import HeartButton from "../components/HeartButton";


export default function CatScreen({ navigation }: any) {
    //Implementação para navegação entre Cat e Home
    const goHome = () => {
        navigation.navigate("Home");
    }
    
    //Aqui é onde eu acrescento as fontes de letras não padrões VSCODE
    const [fontsLoaded] = useFonts({
        JetBrainsMono: require('../../assets/fonts/ttf/JetBrainsMono-Regular.ttf')
    });
    
    const [currentCatIndex, setCurrentCatIndex] = useState(0);
    const currentCat = cats[currentCatIndex];
    //Função para avançar os gatos
    
    const handleNext = () => {
        if(currentCatIndex<cats.length -1){ 
            setCurrentCatIndex(currentCatIndex+1);
        }else{
            setCurrentCatIndex(0);
        }
    }
    //Função para voltar os perfis dos Gatos
    const handlePrev = () => {
        if(currentCatIndex > 0 ){
            setCurrentCatIndex(currentCatIndex-1);
        }else{
            setCurrentCatIndex(cats.length-1);
        }
    }
    if (!fontsLoaded) {
        return null;
    }
    
    return(
        <View style={styles.container}>
        <View style={styles.homeContainer}>
        <HomeButton size = {38} onPress={goHome}/>
        </View>
        <View style={styles.imageContainer}>
        <Image source={currentCat.image} style = {styles.catImage}/>
        </View>
        <View style={styles.descriptionContainer}>
        <Text style={styles.catName}>{currentCat.name}</Text>
        <Text style={styles.catDescription}>{currentCat.description}</Text>
        </View>
        <View style = {styles.bottonMenu}>
        <ArrowButton direction="left" size={70} onPress={handlePrev}/> 
        <HeartButton size ={70}/>
        <ArrowButton direction="right" size={70} onPress={handleNext}/>
        </View>
        </View>   
    )
}

const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container:{ flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#ffffff"},
    homeContainer:{
        position:'absolute',
        top:60,
        left:30,
        zIndex:10,
    },
    imageContainer:{
        width: "100%",
        height: screenHeight * 0.55,
        maxHeight: 450,
        alignItems:'center',
        justifyContent:'center',
        marginTop:120
    },
    catImage:{
        width:'90%',
        height:"100%",
        borderRadius:20,
        maxHeight: 450,
    },
    descriptionContainer:{
        width:"90%",
        backgroundColor: "#f5f5f5",
        borderRadius:15,
        padding:15,
        marginTop:10,
    },
    catName:{
        fontSize:22,
        //fontWeight: 'bold',
        fontFamily:'JetBrainsMono',
        color:'#020202',
        width:"90%",
        textAlign:'left',
    },
    catDescription:{
        fontFamily:'JetBrainsMono',    
        fontSize: 14,
        color:"#333",
        textAlign: "justify",
        lineHeight: 20,
        marginTop:10
    },
    bottonMenu:{
        position:'absolute',
        bottom:30,
        width:"100%",
        flexDirection: 'row',
        justifyContent: "center",
        gap: 40,
        alignItems:'center'   
    }
})
    