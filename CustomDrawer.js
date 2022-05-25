import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Honey from '../assets/Drusya.jpeg'
import { dimension } from '../PixelScaling'

const CustomDrawer = () => {
  return (

    <View style={styles.mainContainer}>
        <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom : dimension(50)}}>
        <View style={styles.headerContainer}>
            <View style={styles.headerMiniContainer}>
                <TouchableOpacity style={styles.userIconComponent}>
                    <Image 
                        source={Honey}
                        style={{width:dimension(100),height:dimension(100),borderRadius:dimension(50)}}
                    />
                    <Text style={{color:'black',marginTop:dimension(10),fontWeight:'bold',fontSize:dimension(18)}}>Nikhil Royal</Text>
                </TouchableOpacity>
                <View style={styles.followContainer}>
                    <TouchableOpacity style={styles.followContainerTxt}>
                        <Text style={{color:'#3e2465',fontWeight:'bold',fontSize:dimension(16)}}>{"1M"}</Text>
                        <Text style={{color:'#3e2465',fontFamily:'normal',fontWeight:'bold',fontSize:dimension(16)}}>{"Fallowers"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.followContainerTxt}>
                        <Text style={{color:'#3e2465',fontWeight:'bold',fontSize:dimension(16)}}>{"0"}</Text>
                        <Text style={{color:'#3e2465',fontFamily:'normal',fontWeight:'bold',fontSize:dimension(16)}}>{"Fallowing"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{paddingVertical:dimension(10)}}>
                <TouchableOpacity style={styles.TouchableTxtComp}>
                    <Text style={styles.TouchableTxt}>Theme</Text>
                    <AntDesign name="arrowright" size={dimension(18)} color={"black"}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchableTxtComp}>
                    <Text style={styles.TouchableTxt}>Settings</Text>
                    <AntDesign name="arrowright" size={dimension(18)} color={"black"}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchableTxtComp}>
                    <Text style={styles.TouchableTxt}>Add Bank</Text>
                    <AntDesign name="arrowright" size={dimension(18)} color={"black"}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchableTxtComp}>
                    <Text style={styles.TouchableTxt}>Bill Pay</Text>
                    <AntDesign name="arrowright" size={dimension(18)} color={"black"}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchableTxtComp}>
                    <Text style={styles.TouchableTxt}>Transactions</Text>
                    <AntDesign name="arrowright" size={dimension(18)} color={"black"}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchableTxtComp}>
                    <Text style={styles.TouchableTxt}>Help</Text>
                    <AntDesign name="arrowright" size={dimension(18)} color={"black"}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchableTxtComp}>
                    <Text style={styles.TouchableTxt}>Contact Us</Text>
                    <AntDesign name="arrowright" size={dimension(18)} color={"black"}/>
                </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity style={styles.SignOutContainer}>
            <AntDesign name="logout" size={dimension(18)} color={"black"} />
            <Text style={{color:'black', marginLeft:dimension(10),fontSize:dimension(15),fontFamily:'Serif',fontWeight:'bold'}}>Sign Out</Text>
        </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    mainContainer : {
        flex:1,
        backgroundColor : '#fff',
        flexDirection:'column',
        justifyContent : 'space-between'
    },
    SignOutContainer : {
        flexDirection:'row',
        paddingVertical : dimension(10),
        paddingHorizontal : dimension(20)
    },
    headerContainer : {
        
    },
    headerMiniContainer : {
        backgroundColor : '#C0C0C0',
        paddingVertical : dimension(10),
        borderBottomLeftRadius : dimension(10),
        borderBottomRightRadius : dimension(10)
    },
    followContainer : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        paddingVertical : dimension(10)
    },
    userIconComponent : {
        paddingVertical : dimension(10),
        alignItems : 'center',
        justifyContent: 'center'
    },
    followContainerTxt : {
        alignItems:'center',
        justifyContent: 'center',
    },
    TouchableTxtComp : {
        borderRadius:dimension(10),
        backgroundColor:'#C0C0C0',
        height:dimension(50),
        marginHorizontal:dimension(10),
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:dimension(20),
        marginBottom : dimension(10)

    },
    TouchableTxt : {
        fontSize : dimension(14),
        fontWeight:'bold',
        color:'black',
        fontFamily:'monospace'
    }
})