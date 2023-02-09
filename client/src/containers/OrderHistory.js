import React, { useEffect } from 'react';
import { PageHeader, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useOrders from '../_actions/orderActions';
import moment from 'moment'
const OrderHistory = () => {
    const navigate = useNavigate();
    const { getOrderHistory } = useOrders();
    const orderHistory = useSelector(state => state.order?.orderHistory);
    const renderOrderList = () => {
        return (
            <Table columns={columns} dataSource={orderHistory} />
        )
    }

    const columns = [
        { title: 'id', key: '_id', dataIndex: '_id' },
        {
            title: 'Date', key: 'orderDate', dataIndex: 'orderDate', align: 'center',
            render: (value) => {
                const dateFormat = moment(value).format('DD-MM-YYYY');
                return dateFormat;
            },
        },
        { title: 'Total Order ($)', key: 'totalAmount', dataIndex: 'totalAmount', align: 'right' }
    ]

    return (
        <>
            <PageHeader title='Your Order History' onBack={() => navigate(-1)} />
        </>
    )
}

export default OrderHistory;