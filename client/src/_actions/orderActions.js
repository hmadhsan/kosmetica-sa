import axios from 'axios';
import { useDispatch } from 'react-redux';
import {CHECKOUT, GET_ORDER_HISTORY} from './types';

const useOrders = () => {
    const token = localStorage.getItem("customerToken");
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    const dispatch = useDispatch();
    const checkout = async (data) => {
        const result = await axios.post('/orders/checkout', data, config).then((res) => {
            return res.data;
        }).catch((err) => {
            return err.response.data
        })
        return {
            type: CHECKOUT,
            payload: result
        }
    }

    const getOrderHistory = async () => {
        const result = await axios.get('/orders/orderHistory', config).then((res) => {
            return res.data;
        }).catch((err) => {
            return err.response.data
        });
        dispatch({
            type: GET_ORDER_HISTORY,
            payload: result
        })
        return {
            checkout,
            getOrderHistory
        }
    }
}

export default useOrders;