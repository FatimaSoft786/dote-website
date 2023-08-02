import {FRIEND_GET_SUCCESS,MESSAGE_GET_SUCCESS} from "../types/messangerType";

const messengerState = {
     friends : [],
     message : [],
}

export const messengerReducer = (state=messengerState,action) => {
     const {type,payload} = action;


     if(type === FRIEND_GET_SUCCESS){
          return {
               ...state,
               friends : payload.friends
          }
     }

     if(type === MESSAGE_GET_SUCCESS){
          return {
               ...state,
               message_get_success : true,
               message : payload.message
          }
     }



     return state;
}