import axios from "axios";
import {useDispatch} from "react-redux";
import { PRODUCT_LIST } from "./types";

 const useProducts = () => {
    const dispatch = useDispatch();
    const getProductList = async () => {
        try{
            const result = await axios.post("/products");
            return result.data;

        }catch(err){
            console.log(err.response.data)
        }
    }

    dispatch({
        type: PRODUCT_LIST,
        payload: result
    })
    return getProductList

}


export default useProducts