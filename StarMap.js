import React, {Component} from 'react'
import { Text,View,StyleSheet,ImageBackground,StatusBar,SafeAreaView,Image,Alert,Platform} from 'react-native';
import {WebView} from 'react-native-web'

export default class StarMapScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            location:{}
        }
    } 
    componentDidMount(){
        this.getConstalationsLoction()
    }
    getConstalationsLocation=()=>{
        axios
        .get("https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true")
        .then(response=>{this.setState({location:response.data})})
        .catch(error=>{alert(error.message)})
    }
    render(){
        if(Object.keys(this.state.location).length===0){
            return(
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <Text>Loading...</Text>
                </View>
            )
        }
        else{
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.androidSafeArea}/>
                <ImageBackground source={require('../assets/bg_jpg.jpg')} style={styles.backgroundImage}/>
                    <View style={styles.titlebar}>
                        <Text style={styles.titleText}>constellations Location</Text>
                    </View>
                    <WebView 
                    ScalesPageToFit={true}
                    source={{uri:path}}
                    style={{marginTop:20,marginBottom:20}}/>

                    <View style={styles.mapContainer}>
                        <MapView style={styles.map}
                        region={{
                           constalations:this.state.location.Constalations,
                           constalationsDelta:100
                        }}>
                           
                           
                        </MapView>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>constalations: {this.state.location.constalations}</Text>
                    </View>
            </View>
        )
    }
}
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    androidSafeArea:{
        marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
    },
    titleContainer:{
        flex:0.1,
        justifyContent:"center",
        alignItems:"center"
    },
    titleText:{
        fontSize:30,
        fontWeight:"bold",
        color:"white"
    },
    mapContainer:{
        flex:0.7,
    },
    map:{
        width:"100%",
        height:"100%"
    },
    infoContainer:{
        flex:0.2,
        backgroundColor:'white',
        marginTop:-10,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:30
    },
    infoText:{
        fontSize:15,
        color:"black",
        fontWeight:"bold"
    }
})
