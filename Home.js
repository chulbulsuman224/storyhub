import React, {Component} from 'react'
import { Text,View,StyleSheet,SafeAreaView,TouchableOpacity,Platform,StatusBar,ImageBackground,Image  } from 'react-native'

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.androidSafeArea}/>
                <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                    <View style={styles.titlebar}>
                    <Image source={require("../assets/main-icon.png")} style={styles.iconImage}></Image>
                        <Text style={styles.titleText}>Stellar App</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} 
                    onPress={()=>this.props.navigation.navigate("Space craft")}>
                        < Text style={styles.routeText}>space crafts</Text>
                        <Text style={styles.bgDigit}>1</Text>
                        <Image source={require("../assets/space_crafts.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} 
                    onPress={()=>this.props.navigation.navigate("Star Map")}>
                        < Text style={styles.routeText}>Star Map</Text>
                        <Text style={styles.bgDigit}>2</Text>
                        <Image source={require("../assets/star_map.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                                                                                                            
                    <TouchableOpacity style={styles.routeCard} 
                    onPress={()=>this.props.navigation.navigate("Daily Picture")}>
                        < Text style={styles.routeText}>Daily Pic</Text>
                        <Text style={styles.bgDigit}>3</Text>
                        <Image source={require("../assets/daily_pictures.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    androidSafeArea:{
        marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:50,
        backgroundColor:'white'
    },
    titlebar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center'
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"white"
    },
    routeText:{
        fontSize:40,
        fontWeight:"bold",
        color:"red",
        marginTop: 20,
        paddingLeft: 250
    },
    bgDigit: {
        position: "absolute",
        color:"rgba(183,183,183,0.50)",
        fontSize:150,
        right:20,
        bottom:-15,
        zIndex:-1
    },
    iconImage:{
        position:"absolute",
        height:200,
        width:200,
        resizeMode:"contain",
        right:150,
        top:-50
    }
})
