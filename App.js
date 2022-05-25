import 'react-native-gesture-handler'
import { View, Text, StatusBar, useColorScheme, SafeAreaView } from 'react-native'
import React, {useEffect,useState} from 'react'
import { Provider } from 'react-redux';
import StackNavigation from './Instagram/Navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Store from './Instagram/Redux/Store';
import AnimatedLottieView from "lottie-react-native"; 
import RNPicker from './Instagram/common/RNPicker'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const store = Store();
  const [startPage, setStartPage] = useState(true)
  useEffect(()=> {
    setTimeout(()=>{
      setStartPage(false);
    },9000)
  })

 


  return (
    <View style={{flex:1,backgroundColor:'black'}}>
    {startPage ?
      <AnimatedLottieView source={require('./animations/stayhome.json')} autoPlay loop/>
      :
      <Provider store = {store}>
        <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
          <StatusBar
            backgroundColor={isDarkMode ? 'black' : 'black'}
            animated={true}
          />
            <NavigationContainer>
              <RNPicker />
            </NavigationContainer> 
          </SafeAreaView>
      </Provider>
    }
    </View>
  )
}

export default App



// import React, { useRef } from "react";
// import { View, Button,Text } from "react-native";
// import RBSheet from "react-native-raw-bottom-sheet";
// import AnimatedLottieView from "lottie-react-native"; 
// import { useEffect } from 'react';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// export default function App() {
//   const refRBSheet = useRef();




//   const onSubmit = () => {
//     console.log("data")
//     AsyncStorage.setItem('any_key_here',value);
//     alert('Data saved')
//   }

//   const getItemvalue = () => {
//     console.log("get Item")
//     AsyncStorage.getItem('any_key_here').then((value) => {
//       alert(value)
//     })
//   }

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "white"
//       }}
//     >
//       <Text>Nikhil</Text>
//       <Button 
//         title = "Login"
//         onPress={() => onSubmit()}
//       />
//       <Button 
//         title = "Click to get data"
//         onPress={() => getItemvalue()}
//       />
//       {/* <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} /> */}
//       {/* <AnimatedLottieView source={require('./animations/stayhome.json')} autoPlay loop/> */}
//       {/* <RBSheet  
//         ref={refRBSheet}
//         closeOnDragDown={true}
//         closeOnPressMask={false}
//         customStyles={{
//           wrapper: {
//             backgroundColor: "transparent",
//           },
//           draggableIcon: {
//             backgroundColor: "#000",
//           },
//         }}
//       >
//         <Text style={{color:'black'}}>Nikhil</Text>
//       </RBSheet> */}

//     </View>
//   );
// }

