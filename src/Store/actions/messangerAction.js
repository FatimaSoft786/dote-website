import { FRIEND_GET_SUCCESS, MESSAGE_SEND_SUCCESS,MESSAGE_GET_SUCCESS } from "../types/messangerType";
import axios from "axios";


export const getFriends = () => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://192.168.1.3:5000/api/getUsers/642b1ce1dabd0b41c0d8fd98"
    );
   
    dispatch({
      type: FRIEND_GET_SUCCESS,
      payload: {
        friends: response.data.friends,
      },
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const messageSend = (data) => async(dispatch) => {
  try{
    
   const response = await axios.post("http://192.168.1.3:5000/api/sendMessage",data);
   dispatch({
        type : MESSAGE_SEND_SUCCESS,
        payload : {
             message : response.data.message
        }
   })
  }catch (error){
   console.log(error.response.data);
  }
};




export const getMessage = (id) => {
  return async(dispatch) => {
    
       try{
            const response = await axios.post(`http://192.168.1.3:5000/api/getMessage/${id}`)
            console.log(response);
           dispatch({
                type : MESSAGE_GET_SUCCESS,
                payload : {
                 message : response.data.message
                }
           })
       }catch (error){
            console.log(error.response.data)
       }
  }
}

