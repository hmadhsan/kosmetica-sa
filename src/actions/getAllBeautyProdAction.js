import axios from "axios";


export const getAllBeautyProdAction =() => async dispatch =>  {

dispatch({type: 'GET_KOSMETICS_REQUEST'})

try {
    const response = await axios.get("/api/kosmetics/getallkosmetics");
    console.log(response);
    dispatch({type: 'GET_KOSMETICS_SUCCESS', payload: response.data})
} 
  catch (error) {
  dispatch({type: 'GET_KOSMETICS_FAILED', payload: error})
    
}

}