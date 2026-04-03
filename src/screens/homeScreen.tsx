import { View,Text,TouchableOpacity,StyleSheet,Image } from 'react-native';
import {useFonts} from 'expo-font';



export default function HomeScreen(){
    const [fontsLoaded] = useFonts({
        Bauhaus93: require('../../assets/fonts/bauhaus-93/Bauhaus93-Regular.ttf')
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
                 style={styles.button}
                >
                 <Text style={styles.label}>CAT</Text>
                 <Text style={styles.buttonHeart}>
                    <Image source={require('../../assets/image/LikeButton1.png')}
                    style={styles.buttonHeart}
                    />
                 </Text>
                </TouchableOpacity>
                <TouchableOpacity
                 style={styles.button}
                >
                 <Text style={styles.label}>DOG</Text>
                 <Text style={styles.buttonHeart}>
                    <Image source={require('../../assets/image/LikeButton1.png')}
                    style={styles.buttonHeart}
                    />
                </Text>
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
        marginBottom:10
    },
    subtitle:{
        fontSize:65,
        fontFamily:'Bauhaus93',
        color:'#ffa148',
        marginBottom: 30
    },
    buttonContainer:{
        flexDirection:"row",
        gap: 120
    },
    button:{
        alignItems: "center"    
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
    baseboard:{},
    logo:{
        width: 70,
        height: 70,
        marginBottom:150
    }

})
