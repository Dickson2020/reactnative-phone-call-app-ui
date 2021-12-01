export const add_contacts =(contact)=>{
    return{
        type:'ADD_CONTACTS',
        payload: contact
    }
}

export const refresh_contacts =(index)=>{
    return{
        type:'REFRESH_CONTACTS',
    }
}

const remove_contacts =(index)=>{
      return{
          type:'REMOVE_CONTACTS',
          payload: index
      }
}

const perform_call = (index)=>{
    return{
        type:'CALL_USER',
        payload: index
    }

}

const end_call = (call_id)=>{
    return{
        type:'END_CALL',
        payload:call_id
    }
}

