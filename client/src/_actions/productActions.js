import axios from "axios";
import { useDispatch } from "react-redux";
import { PRODUCT_LIST } from "./types";

const useProducts = () => {
    const dispatch = useDispatch();
    const getProductList = () => {
        const result = axios.post("/products").then((res) => {
            return res.data
        }).catch((err) => {
            return err.response.data
        })
        dispatch({
            type: PRODUCT_LIST,
            payload: result
        });
    };
    return {
        getProductList
    }

}


export default useProducts