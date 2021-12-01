import { useReducer } from 'react';
import { combineReducers } from 'redux';
window.inc = 0;
const PHONE_BUFFER = {
    contacts:[

],
    favourite:[],
    history:[]
}

const BufferReducer = (state=PHONE_BUFFER, action)=>{
    const {contacts,favourite,history} = state;
    switch(action.type){

        

        case 'ADD_CONTACTS':
            let familyName = (action.payload.NAME[0]).toUpperCase();
            let col = '';
            let phone_user = (action.payload.PHONE_NUM)
            let user = action.payload.NAME;
            var len = 0;
            for(var con = 0; con<=10e50; con++){
                if(contacts[con] == undefined){
                    break;
                }else{
                    len++;
                    len = len;
                }
            }
            console.log(inc)
            if(familyName == 'M'){
                col = '#ffc13b';
            }
            if(familyName == 'H'){
                col = '#12a4d9';
            }
            if(familyName == 'A'){
                col = '#ff6e40';
            }

        
            if(user && phone_user){

                contacts[len] = ({name:user,color:col, family:familyName, phone:phone_user})
                favourite.push({name:user,color:col, family:familyName, phone:phone_user})
                len = 0;
                }
           
            return state;
            
            case 'REFRESH_CONTACTS':
                console.log('refresh...')
                return state;

        default:
            return state
    }
}

export default combineReducers({
    PHONE_STATE: BufferReducer
})