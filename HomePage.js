import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, {useContext} from 'react'
import { dimension, dimensionVertical } from '../PixelScaling'
import PlusIcon from 'react-native-vector-icons/AntDesign'
import Collection from 'react-native-vector-icons/MaterialIcons'
import MessageIcon from 'react-native-vector-icons/Feather'
import Drusya from '../assets/Drusya.jpeg'
import LikeIcon from 'react-native-vector-icons/AntDesign'
import Comment from 'react-native-vector-icons/MaterialCommunityIcons'
import Share from 'react-native-vector-icons/Feather'
import { data } from '../jsondata/post'
import ChatScreen from './ChatScreen'
import { useState } from 'react'
import SwipeUpDown from 'react-native-swipe-up-down';
import BottomSheet from 'reanimated-bottom-sheet'
import Animated, { color } from 'react-native-reanimated'
import { comments } from '../jsondata/post'
import SendBtn from 'react-native-vector-icons/AntDesign'


const HomePage = () => {

  const [popup,setPopUp] = useState(true)

  bs = React.createRef("null");
  fall = new Animated.Value(1);

  const renderInner = () => (
      <View style={{backgroundColor:'#121212'}}>
        <View style={{height:dimension(410), paddingHorizontal:dimension(20),paddingVertical:dimensionVertical(20)}}>
              <Text style={{fontSize:dimension(18),color:'white'}}>All Comments</Text>
             <View>
               <ScrollView>
                {comments.map((key,index)=>{
                  return(
                    <View key={index} style={{marginTop:dimension(10) ,flexDirection:'row',alignItems:'center',marginBottom:dimension(10)}}>
                      <Image 
                        source={key.image}
                        style={{width:dimension(50),height:dimension(50),borderRadius:dimension(50)}}
                      />
                      <View style={{marginLeft:dimension(10), backgroundColor:'gray',padding:dimension(10),borderRadius:dimension(10)}}>
                        <Text style={{fontSize:dimension(15),color:'white'}}>{key.name}</Text>
                        <Text style={{fontSize:dimension(15),color:'white'}}>{key.comment}</Text>
                      </View>
                    </View>
                  )
                })}
               </ScrollView>
             </View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                position:'absolute',
                bottom:dimension(0),
                paddingHorizontal:dimension(20),
                width:'100%'
              }}
            >
              <TextInput
                placeholder="Enter your comment"
                style={{
                  borderWidth:1,
                  borderColor:'grey',
                  width:dimension(280),
                  borderRadius:dimension(5),
                  height:dimension(50)
                }}
              />
              <TouchableOpacity style={{marginLeft:dimension(20)}}>
                <SendBtn name="rightcircleo"  size={dimension(40)} color={'white'}/>
              </TouchableOpacity>
            </View>
        </View>
      </View>
  )
  
  const renderHeader = () => (
      <View style={{backgroundColor:'#121212',paddingTop:dimension(20),borderTopLeftRadius:dimension(20),borderTopRightRadius:dimension(20)}}>
          <View style={{alignItems:'center'}}>
              <View style={{width:dimension(40),height:dimension(8),borderRadius:dimension(4),backgroundColor:'lightgrey',marginBottom:10}}></View>
          </View>
      </View>
  )



  return (
    <View style={styles.mainContainer}>
      <BottomSheet
            ref={bs}
            snapPoints={[dimension(500),0]}
            renderContent={renderInner}
            renderHeader={renderHeader}
            initialSnap={1}
            callbackNode={fall}
            enabledGestureInteraction={true}
            overdragResistanceFactor={1}
            enabledInnerScrolling={true}
            enabledHeaderGestureInteraction={true}
            enabledContentGestureInteraction={true}
            
        />
      <View style={styles.headerContainer}> 
        <View>
          <Text style={{color:'white',fontFamily:'cursive',fontWeight:'bold',fontSize:dimension(25)}}>Media Player</Text>
        </View>
        <View style={styles.headerLeftContainer}>
          <TouchableOpacity>
            <PlusIcon name="plussquareo" size={dimension(25)} color={'white'}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <MessageIcon name='message-square' size={dimension(25)} color={'white'}/>
            <Text style={styles.messageBadge}>1</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ScrollView 
          showsVerticalScrollIndicator = {false}
          contentContainerStyle={{paddingBottom:dimension(200)}}
        >

           {data.map((key,index) => {
            return(
            <View key={index}>
              <View style={styles.postContainer}>
                <View style={styles.postheaderContainer}>
                  <Image 
                    source={key.image}
                    style={{width:dimension(50),height:dimension(50),alignItems:'center',borderRadius:dimension(50)}}
                  />
                  <View style={{marginLeft:dimension(20)}}>
                    <Text style={{color:'white',fontSize:dimension(15)}}>{key.name}</Text>
                    <Text style={{color:'grey', fontSize:dimension(12)}}>3 Days ago</Text>
                  </View>
                </View>
                <View style={{marginTop:dimension(10),marginBottom:dimension(10)}}>
                  <Text style={{fontSize:dimension(15),fontFamily:'serif'}}>{key.message}</Text>
                </View>
                <View style={{marginTop:dimension(10)}}>
                  <Image 
                    source={Drusya}
                    style={{width:'100%',height:dimension(350),alignItems:'center', borderRadius:dimension(5)}}
                  />
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:dimension(10),alignItems:'center'}}>
                  <View style={{flexDirection:'row',justifyContent:'space-around',width:dimension(120),alignItems:'center'}}>
                    <TouchableOpacity>
                        <LikeIcon name='like2' size={dimension(25)} color={'white'}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                        <Comment name='comment-multiple-outline' size={dimension(25)} color={'white'}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Share name='share' size={dimension(25)} color={'white'}/>
                    </TouchableOpacity>
                  </View>
                  <View>
                  <TouchableOpacity>
                        <Collection name='collections' size={dimension(25)} color={'white'}/>
                    </TouchableOpacity>
                  </View>
              </View>
                </View>
          </View>  )
          })}
        </ScrollView>
        {popup ? <SwipeUpDown
            itemMini={(show) => <ChatScreen show={show} />}
            itemFull={(hide) => <ChatScreen hide={hide} />}
            onShowMini={() => console.log('mini')}
            onShowFull={() => console.log('full')}
            animation="spring"
            disableSwipeIcon
            extraMarginTop={100}
            iconColor='yellow'
            iconSize={30}
            style={{ backgroundColor: '#000' }} // style for swipe
        /> : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer : {
    flex:1,
    backgroundColor:'black',
    //width : '100%'
  },
  headerContainer : {
    flexDirection : 'row',
    //width : dimension(540),
    width : '100%',
    justifyContent : 'space-between',
    borderBottomColor : 'grey',
    borderBottomWidth : 0.4,
    paddingHorizontal : dimension(20),
    paddingVertical : dimensionVertical(12),
    alignItems : 'center',
    height : dimensionVertical(70)
  },
  headerLeftContainer : {
    flexDirection:'row',
    justifyContent:'space-between',
    width : dimension(70),
    alignItems:'center'
  },
  messageBadge : {
    position : 'absolute',
    marginTop : dimension(-7),
    backgroundColor : 'red',
    width : dimension(20),
    height : dimension(20),
    left : dimension(12),
    borderRadius : dimension(50),
    textAlign:'center',
    color:'white',
    //justifyContent:'center',
    //alignSelf:'center'
  },
  postContainer : {
    flex : 1,
    paddingHorizontal : dimension(20),
    paddingVertical : dimensionVertical(10),
    marginTop : dimension(10)
  },
  postheaderContainer : {
    flexDirection : 'row',
    alignItems : 'center',
  }
})

export default HomePage