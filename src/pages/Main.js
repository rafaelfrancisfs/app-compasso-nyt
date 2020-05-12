import React from 'react'
import { 
    View, 
    Image, 
    Text, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native';
import Constants from 'expo-constants';

function Main( {navigation} ){
    return (<>
            <View> 
                <Image style={style.logoNy} source={{ uri: 'https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png'}} /> 
            </View>
            <View style={style.container}>
                
                <TouchableOpacity style={style.button} 
                    onPress={()=> navigation.navigate('Science')} >
                    <Text style={style.text}>
                    Ir para noticias de Ciências
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button} onPress={()=> navigation.navigate('Technology')} >
                    <Text style={style.text}>
                    Ir para noticias de Tecnologia
                    </Text>

                </TouchableOpacity>
            </View>
            <View >
                <Image style={style.logo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>
            </View>
        </>
    )
   
}

const style = StyleSheet.create({
   
    container:{
        flex: 4,    
        backgroundColor: "#DDDDDD",
        marginTop: 15
    },
    button:{
        alignItems: "center",
        backgroundColor: "#FFF",
        padding: 10,
        marginTop: 5,
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 5,
        alignSelf: 'center'
        
   },
   logoNy: {
        width: 390,
        height: 50,
        marginTop: Constants.statusBarHeight,
       
    }
})

export default Main