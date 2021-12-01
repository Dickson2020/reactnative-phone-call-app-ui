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

class ALL_CONTACTS_MODULE extends Component{
    constructor(props){
        super(props);
        this.state = {
            contacts:this.props.PHONE_STATE.contacts
            ,
        isModalConatct:false,
        add_new: false,
        CONTACT_PAYLOAD:{
            NAME:'Musa jamiu',
            PHONE_NUM:1277,
        },
        refresh_contacts:false
        
         }
         this.AnimatedValue = new Animated.Value(0);
    }


    openNewContact(){
         
        this.props.addContact(this.state.CONTACT_PAYLOAD)
    }

    saveContact(){
        this.setState({
            add_new:false
        })
    }

    renderBottomInfo(Phone_Number){
        const Line = Phone_Number;
        call_user[0] = '0'+Line;
       
        this.setState({
            isModalConatct:true
        })
            
      
        this.AnimatedValue.setValue(0);
        Animated.timing(
            this.AnimatedValue,
            {
                toValue:1,
                easing:Easing.quad,
                useNativeDriver:true,
                duration:500
            }
        ).start()
    
    console.log(call_user[0])

    }


    closeBottomInfo(){
        this.setState({
            isModalConatct:false
        })
        setTimeout(() => {
            
        Animated.timing(
            this.AnimatedValue,
            {
                toValue:0,
                easing:Easing.quad,
                useNativeDriver:true,
                duration:2000
            }
        ).start()
    }, 0);
    }

    refreshContact(){
       this.props.refreshContactList("k")
    }
    render(){
        const bottomSlideUp = this.AnimatedValue.interpolate({
            inputRange:[0,1],
            outputRange:[700,400]
        })


        return(
            <SafeAreaView style={{flex:1}}>
            <ScrollView style={app_styles.contacts_ui} refreshControl={
                <RefreshControl onRefresh={this.refreshContact()} colors={["#12a4d9"]} refreshing={this.state.refresh_contacts} />
            }>
                <TouchableNativeFeedback onPress={this.openNewContact.bind(this)}>
                <View style={
                    app_styles.add_new_contact
                }>
                    <Icon name='add' size={22}color='#12a4d9'/>
                    <Text style={{fontSize:15}}>
                        Create new contact
                    </Text>
                </View>
                </TouchableNativeFeedback>
               
                {
                    this.state.contacts.map((value, index)=>(
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
                <Modal transparent={true} visible={this.state.isModalConatct}>
                 
                    <Animated.View style={{
                        flex:1,
                        height:150,
                        backgroundColor:'white',
                        transform:[{translateY:bottomSlideUp}],
                        borderTopLeftRadius:10,
                        borderTopRightRadius:10,
                        shadowOffset:{width:0,height:2},
                        shadowColor:'#ddd',
                        shadowRadius:10,
                        shadowOpacity:0.1,
                        elevation:50,
                        flexDirection:'row',
                        padding:50,
                    
                    }}>
                        <TouchableNativeFeedback onPressIn={this.closeBottomInfo.bind(this)}>
                        <Icon style={{
                            marginLeft:140,
                            position:'absolute'
                        }} name='ellipsis-horizontal' color='#ff6e40' size={50}/>
                        </TouchableNativeFeedback>
                        <View style={{
                            backgroundColor:'#ff6e40',
                            height:70,
                            width:70,
                            borderRadius:100,
                            margin:10,
                            padding:20

                        }}>
                            <Icon name='person-outline' color='white' size={30} />

                        </View>

                        <View style={{
                            backgroundColor:'#ff6e40',
                            height:70,
                            width:70,
                            borderRadius:100,
                            margin:10,
                            marginLeft:40,
                            padding:20


                        }}>
                          <Icon name='call-outline' color='white' size={30} />


                        </View>

                    </Animated.View>


                </Modal>
                
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
const mapDispatchToProps =(dispatch)=>{
    return{
        addContact:(contact_object)=>dispatch(add_contacts(contact_object)),
        refreshContactList:(index)=> dispatch(refresh_contacts(index))
    }
}
const connectApp = connect(mapStateToProps, mapDispatchToProps)
export default connectApp(ALL_CONTACTS_MODULE);