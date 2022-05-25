import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Drusya from '../assets/Drusya.jpeg'
import { dimension } from '../PixelScaling'
import Entypo from 'react-native-vector-icons/Entypo'
import {ChildLoginUser} from '../jsondata/post'

const ChildLoginPage = (props) => {
  return (
    <View style={styles.mainContainer}>
        <View style={{paddingVertical:dimension(30)}}>
            <Text style={{color:'#ffecbd',fontSize:dimension(30),alignSelf:'center',fontFamily:'serif'}}>Social Media</Text>
        </View>
        {ChildLoginUser.map((item,index)=>{
            console.log("item index",item)
            return(
                <View style={styles.userContainer} key={index}>
                    <View style={styles.imageContainer}>
                        <Image 
                            source={item.image}
                            style={{width:dimension(30),height:dimension(30),borderRadius:dimension(50)}}
                        />
                        <Text style={{color:'white',fontSize:dimension(14),fontWeight:'bold',fontFamily:'normal',marginLeft:dimension(10)}}>{item.name}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity style={styles.loginButtonContainer} onPress={() => props.navigation.navigate('RefreshHomePage')}>
                            <Text style={{color:'white',fontSize:dimension(14),paddingVertical:1,paddingHorizontal:10}}>Login</Text>
                        </TouchableOpacity>
                        <View style={{marginLeft:dimension(10)}}>
                            <Entypo name='dots-three-vertical' size={dimension(20)} color={'white'} />
                        </View>
                    </View>
                </View>
            )
        })}
        <View style={styles.bottomContainer}>
            <TouchableOpacity style={{alignItems:'center',justifyContent:'center',color:'white'}}>
                <Text style={{color:'#ffecbd',fontSize:dimension(14),fontWeight:'bold',fontFamily:'monospace'}}>Switch Accounts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center',justifyContent:'center',color:'white'}}>
                <Text style={{color:'#ffecbd',fontSize:dimension(14),fontWeight:'bold',fontFamily:'monospace'}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer : {
        flex:1,
        backgroundColor:'black'
    },
    userContainer : {
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:dimension(20),
        alignItems:'center',
        paddingVertical : dimension(10)
    },
    imageContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    loginButtonContainer : {
        borderWidth:1,
        borderColor:'white',
        borderRadius:2  
    },
    bottomContainer : {
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        //backgroundColor:'white',
        width:'100%',
        justifyContent:'space-around',
        //paddingHorizontal:dimension(20),
        borderTopColor:'#ffecbd',
        borderTopWidth:1,
        height:dimension(48),
    }
})


export default ChildLoginPage