import React from 'react'
import { PageHeader, Table, Space, Image, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Cart = () => {
    const navigate = useNavigate();
    const cartItems = useSelector((state => state.cart.cartItems?.cartDetails));

    const renderCartItems = () => {
        return (
            <Table columns={columns} dataSource={cartItems} scroll={{ x: 1300 }} />
        )
    }

    const columns = [
        {
            title: 'Product',
            width: 80,
            dataIndex: '_product',
            key: 'name',
            render: (item) => {
                return (
                    <Space direction='vertical'>
                        <Typography.Text strong>
                            {item?.name}
                        </Typography.Text>
                        <Image src={item?.image} alt='img' width={80} />
                    </Space>
                )
            },
            fixed: 'left'
        },
        {
            title: 'Price ($)',
            width: 100,
            dataIndex: 'price',
            key: 'price',
            align: 'right'
        },
        {
            title: 'Quantity',
            width: 100,
            dataIndex: 'quantity',
            key: 'quantity',
            align: 'right'
        },
        {
            title: 'Amount ($)',
            width: 100,
            dataIndex: 'amount',
            key: 'amount',
            align: 'right'
        }
    ]
    return (
        <>
            <PageHeader title='Your Cart' onBack={() => navigate(-1)} />
            <div className='page-wrapper'>
                {renderCartItems()}
            </div>
        </>
    )
}

export default Cart;