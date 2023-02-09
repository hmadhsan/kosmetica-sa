import React from 'react';
import { PageHeader } from 'antd';
import { useNavigate } from 'react-router-dom';
const OrderHistory = () => {
    const navigate = useNavigate();
    return (
        <>
            <PageHeader title='Your Order History' onBack={() => navigate(-1)} />

        </>
    )
}

export default OrderHistory;