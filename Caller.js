import React, {Component} from 'react';
import {SafeAreaView, View, StyleSheet, TextInput, StatusBar, Text, TouchableNativeFeedback, Modal,
    Animated} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Main_page from './Main';
import { ScrollView } from 'react-native-gesture-handler';
import ALL_CONTACTS_MODULE from './AllContactsModule';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer}from 'react-navigation';
import FAVOURITE from './Favourite';
class Search extends Component{
    render(){
        const search_bar = (
            <View>

            </View>
        );
        return(
            <SafeAreaView style={app_styles.layout}>

            </SafeAreaView>
        );
    }
}
class Contacts extends Component{
    constructor(){
        super();
        
    }

    render(){
        const Top_swiper = createMaterialTopTabNavigator();
      
        
        return(
            <NavigationContainer>
                <StatusBar animated={true} barStyle='light-content'  backgroundColor='#12a4d9'/>
                <View  style={app_styles.topper}>
                <TouchableNativeFeedback onPress={()=>{
                    this.props.navigation.navigate('SearchPage')
                }}>

                    <View  style={app_styles.search_bar} >
                        <Text style={{textAlign:'center'}}>Search contacts</Text>
                    </View>
                   </TouchableNativeFeedback>

                    </View>
                <Top_swiper.Navigator
                >
                     <Top_swiper.Screen 
                    options={
                        {
                            tabBarIcon:()=>(
                                <Icon name="person-outline" size={20} color='white' />
                            ),
                          tabBarLabelStyle:{
                              fontSize:0
                          },
                          tabBarStyle:{
                            backgroundColor:'#12a4d9'
                        },
                        tabBarIndicatorStyle:{
                            backgroundColor:'white'
                        },
                        tabBarPressColor:'white'
                        
                        }
                    }
                    component={ALL_CONTACTS_MODULE} 
                    name="contacts">

                    </Top_swiper.Screen>



                    <Top_swiper.Screen 
                    options={
                        {
                            tabBarIcon:()=>(
                                <Icon name="star-outline" size={20} color='white' />
                            ),
                          tabBarLabelStyle:{
                              fontSize:0
                          },
                          tabBarStyle:{
                              backgroundColor:'#12a4d9'
                          },
                          tabBarIndicatorStyle:{
                              backgroundColor:'white'
                          },
                          tabBarPressColor:'white'
                        }

                        
                    }
                    component={FAVOURITE} 
                    name="favourite">

                    </Top_swiper.Screen>

                    <Top_swiper.Screen 
                    options={
                        {
                            tabBarIcon:()=>(
                                <Icon name="call-outline" size={20} color='white' />
                            ),
                          tabBarLabelStyle:{
                              fontSize:0
                          },
                          tabBarStyle:{
                            backgroundColor:'#12a4d9'
                        },
                        tabBarIndicatorStyle:{
                            backgroundColor:'white'
                        },
                        tabBarPressColor:'white'

                        }
                    }
                    component={Search} 
                    name="history">

                    </Top_swiper.Screen>

                   
                </Top_swiper.Navigator>
            </NavigationContainer>
        );
    }
}

const app_styles = StyleSheet.create({
    layout:{
        flex:1,
        backgroundColor:'white'
    },
    topper:{
        height:90,
        padding:30,
        backgroundColor:'#12a4d9',
        flexDirection:'row'
       
    },
    search_bar:{
        marginTop:-10,
        width:300,
        height:60,
        textAlign:'center',
        backgroundColor:'white',
        marginLeft:-19,
        borderRadius:3,
        shadowColor:'#ddd',
        shadowRadius:10,
        shadowOffset:{width:0,height:2},
        elevation:5,
        padding:20

    },
   
    contacts_ui:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white',
        padding:20,
        paddingLeft:20
      
    },
    each_contact:{
      width:330,
      height:70,
      flexDirection:'row',
      margin:2,
      padding:10

      
    },
    add_new_contact:{
        width:200,
        height:50,
        flexDirection:'row',
        marginLeft:60,
        padding:15
    },
    
   
   
    
})

const Launcher = createStackNavigator({
    Home:{
        screen:Contacts,
        navigationOptions:{
            headerShown:false
        }
    },
        SearchPage:{
            screen:Search,
            navigationOptions:{
                title:'Search contacts',
                headerTitleAlign:'left',
                headerStyle:{
                    
                    backgroundColor:'#12a4d9'
                }
                ,
             
            }
        
    },

},{initialRouteName:'Home'})

export default createAppContainer(Launcher);