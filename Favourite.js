import React, {Component} from 'react';
import {SafeAreaView, View, StyleSheet, TextInput, StatusBar, Text, TouchableNativeFeedback, Modal,
    Animated, Easing, RefreshControl
} from 'react-native';
import { add_contacts, refresh_contacts } from './actions';

import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
window.call_user = []
class ContactFamily extends Component{


    render(){
        return(
            <View style={{
                backgroundColor: this.props.color,
                width:50,
                height:50,
                borderRadius:100,
                padding:9
            }}>
               <Text style={{
                   color:'white',
                   fontWeight:'bold',
                   textAlign:'center',
                   fontSize:20
               }}>
               {
                    this.props.family
                }
               </Text>

            </View>
        );
    }
}

class FAVOURITE extends Component{
    constructor(props){
        super(props);
        this.state = {
            fav:this.props.PHONE_STATE.favourite
            ,
        isModalConatct:false,
        add_new: false,
        CONTACT_PAYLOAD:{
            NAME:'Mai dioo',
            PHONE_NUM:1277,
        },
        refresh_contacts:false
        
         }
         this.AnimatedValue = new Animated.Value(0);
    }


   


   
    render(){
       

        return(
            <SafeAreaView style={{flex:1}}>
            <ScrollView style={app_styles.contacts_ui} >
               
               
                {
                    this.state.fav.map((value, index)=>(
                        <TouchableNativeFeedback onPress={this.renderBottomInfo.bind(this, value.phone)} key={index}>

                        <View key={index} style={app_styles.each_contact}>
                            <ContactFamily color={value.color} family={value.family} />

                        <Text style={{marginTop:10,marginLeft:20,fontSize:18, color:'black'}} key={index}>
                         {
                             value.name
                         }
                        </Text>
                        </View>
                        </TouchableNativeFeedback>

                    ))
                }
                <View style={{height:50}} />

                </ScrollView>
                
                
                </SafeAreaView>
        );
    }
}

const app_styles = StyleSheet.create({
    layout:{
        flex:1,
        backgroundColor:'white'
    },
    newContactInput:{
        backgroundColor:'white',
        width:120,
        height:10,
        borderBottomWidth:2,
        borderColor:'gray',
        color:'gray',

    },
    save_contact_button:{
        width:69,
        height:40,
        padding:2,
        marginLeft:6
        

    },
    add_text_up:{
        color:'white',
        fontSize:19,
        marginLeft:30,
        fontWeight:'bold'

    },
    top_add:{
        flex:0.05,
        backgroundColor:'#12a4d9',
        padding:14,
        flexDirection:'row',
    },
    topper:{
        height:90,
        padding:30,
        backgroundColor:'#12a4d9',
        flexDirection:'row'
       
    },
    new_contact:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white'
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
        elevation:5

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



const mapStateToProps = (state)=>{
    const {PHONE_STATE} = state;
    return {PHONE_STATE}
}

const connectApp = connect(mapStateToProps)
export default connectApp(FAVOURITE);