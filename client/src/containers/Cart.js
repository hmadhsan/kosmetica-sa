import React, { useState } from 'react'
import { PageHeader, Table, Space, Image, Typography, InputNumber } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DeleteTwoTone, EditTwoTone, SaveTwoTone, ReloadOutlined } from '@ant-design/icons"';
const Cart = () => {
    const [editItem, setEditItem] = useState(null);
    const [quantity, setQuantity] = useState(null);

    const navigate = useNavigate();
    const cartItems = useSelector((state => state.cart.cartItems?.cartDetails));

    const renderCartItems = () => {
        return (
            <Table columns={columns} dataSource={cartItems} scroll={{ x: 1300 }} />
        )
    }
///reset
const handleReset = () => {
    setEditItem(null)
}
    const handleEdit = (item) => {
        setEditItem(item);
        setQuantity(item.quanity);
    }

    const handleRemove = (item) => { }

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
            //dataIndex: 'quantity',
            //key: 'quantity',
            align: 'right',
            render: (item) => {
                if (editItem?._product._id === item?._product._id) {
                    return (
                        <InputNumber size='small' min={1} value={quantity} onChange={handleQuantityChange} />
                    )
                }
                return <span> {item?.quanity} </span>
            }
        },
        {
            title: 'Amount ($)',
            width: 100,
            dataIndex: 'amount',
            key: 'amount',
            align: 'right'
        },
        {
            title: 'Actions',
            fixed: 'right',
            width: 100,
            render: (item => {
                return (
                    <>
                        {editItem?._product._id === item?._product?._id ? (
                            <span style={{ marginRight: 4 }}>
                                <SaveTwoTone style={{ marginRight: 4, fontSize: 16 }} />
                                <ReloadOutlined style={{ color: 'green', fontSize: 16 }} onClick={handleReset} />

                            </span>
                        ) : <EditTwoTone style={{ marginRight: 4, fontSize: 16 }} twoToneColor='red' onClick={() => handleEdit(item)} />
                        }
                        <DeleteTwoTone style={{ marginRight: 4, fontSize: 16 }} twoToneColor='red' onClick={() => handleRemove(item)} />

                    </>
                )
            })
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