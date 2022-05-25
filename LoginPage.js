import { View, Text, TouchableOpacity, ScrollView, useColorScheme, StyleSheet, TextInput, ActivityIndicator } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import users from '../jsondata/users.json'
import { useEffect,useState } from 'react'
import { userProfile } from '../Redux/commonAction'
import { dimension, dimensionVertical } from '../PixelScaling'
import AnimatedLottieView from 'lottie-react-native'

const LoginPage = (props) => {
  useEffect(()=> {
    props.userProfile(users)
  },[])

  const [username,setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [indicator, setIndicator] = useState(false)

  const onChangeText = (val) => {
    setUsername(val)
  }
  const onChangeText1 = (val) => {
    setPassword(val)
  }

  const goToMainPage=()=>{
    props.navigation.navigate('HomePage')
    // setTimeout(()=>{
    //   setIndicator(false)
    //   props.navigation.navigate('HomePage')
    // },3000)
  }

  const isDarkMode = useColorScheme() === 'dark';

  return (
    
    <View style={styles.mainContainer}> 
      {/* {indicator ? 
      <View>
        <ActivityIndicator size={dimension(50)} color={"white"}/> 
      </View> :
      <View> */}
      <View style={styles.headerContainer}>
        <Text style={styles.logoContainer}>Social Media</Text>
      </View>
      <View style={styles.TextInputContainer}>
        <TextInput 
          placeholder='Mobile number'
          style={styles.username}
          placeholderTextColor={'white'}
          keyboardType='numeric'
          value={username}
          onChangeText={(val)=>onChangeText(val)}
        />
        <TextInput 
          placeholder='Password'
          style={styles.password}
          placeholderTextColor={'white'}
          value={password}
          onChangeText={(val)=>onChangeText1(val)}
        />
      </View>
      <View style={styles.loginContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={goToMainPage}>
          <Text style={{color:'white',fontSize:dimension(15),fontWeight:'bold'}}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={{fontSize:dimension(15),color:'cyan'}}>Fogot Password ?</Text>
        </TouchableOpacity>
       <TouchableOpacity>
          <Text style={{color:'cyan',fontSize:dimension(15)}}>Get help for login ?</Text>
       </TouchableOpacity>
      </View> 
      {/* </View>} */}
    </View>
  )
}

const mapStateToProps = state => {
  console.log("state data", state)
  return{
    state : state
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    userProfile : ((val) => dispatch(userProfile(val)))
  }
}

const styles = StyleSheet.create({
  mainContainer : {
    flex:1,
    backgroundColor : 'black',
    paddingHorizontal:dimension(20),
    paddingVertical:dimensionVertical(40)
  },
  headerContainer : {
    alignItems:'center',
    paddingVertical : dimensionVertical(40)
  },
  logoContainer:{
    color:'white',
    fontSize:dimension(25),
    fontFamily:'cursive',
    fontWeight:'bold'
  },
  username:{
    backgroundColor:'grey',
    borderRadius:dimension(5),
    height:dimensionVertical(80),
    fontSize:dimension(15)
  },
  password:{
    backgroundColor:'grey',
    borderRadius:dimension(5),
    height:dimensionVertical(80),
    marginTop:dimension(20),
    fontSize:dimension(15)
  },
  loginContainer:{
    marginVertical:dimension(20)
  },
  loginBtn:{
    width:'100%',
    height:dimension(48),
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red',
    borderRadius:dimension(5)
  },
  forgotContainer : {
    justifyContent:'space-between',
    flexDirection:'row'
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)