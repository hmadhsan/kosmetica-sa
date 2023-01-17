import axios from "axios";


export const getAllBeautyProd =() => dispatch =>  {

dispatch({type: 'GET_KOSMETICS_REQUEST'})

try {
    const response = axios.get("/api/kosmetics/getbeautyproducts");
    console.log(response);
    dispatch({type: 'GET_KOSMETICS_SUCCESS', payload: response.data})
} 
  catch (error) {
  dispatch({type: 'GET_KOSMETICS_FAILED', payload: error})
    
}

}