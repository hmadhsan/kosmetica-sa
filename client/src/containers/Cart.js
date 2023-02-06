import React, { useState } from 'react'
import { PageHeader, Table, Space, Image, Typography, InputNumber, message, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteTwoTone, EditTwoTone, SaveTwoTone, ReloadOutlined, DollarOutlined } from '@ant-design/icons';
import useCarts from '../_actions/cartActions';
import useOrders from '../_actions/orderActions';
import { sumBy } from 'lodash';
import StripeCheckOut from 'react-stripe-checkout';

const Cart = () => {
    const [editItem, setEditItem] = useState(null);
    const [quantity, setQuantity] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { updateCartItem, removeCartItem, clearCart } = useCarts();
    const { checkout } = useOrders();

    const cartItems = useSelector((state => state.cart.cartItems?.cartDetails));
    const auth = useSelector((state) => state.customer.auth);
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
        setQuantity(item.quantity);
    }

    const handleQuantityChange = (value) => {
        setQuantity(value);
    }

    const handleRemove = (item) => {
        dispatch(removeCartItem(item?._product?._id)).then(res => {
            if (res.payload.status) {
                message.success(res.payload.message);
            } else {
                message.error(res.payload.message);
            }
        })
    }

    const handleUpdateCartItem = (item) => {
        const data = {
            _productId: item?._product?._id,
            quantity,
        };
        dispatch(updateCartItem(data)).then((res) => {
            console.log(data)
            if (res.payload.status) {
                message.success(res.payload.message);
                setEditItem(null)
            } else {
                message.error(res.payload.message);
            }
        })
    }

    //handle payout

    const handlePayout = (token, total) => {
        console.log('hellllllllllllo', token)
        console.log('hellllllllllllo', total)

        dispatch(checkout({ token, total })).then(res => {
            if (res.payload.status) {
                clearCart();
            } else {
                message.error(res.payload.message)
            }
        })
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
            //dataIndex: 'quantity',
            //key: 'quantity',
            align: 'right',
            render: (item) => {
                if (editItem?._product?._id === item?._product?._id) {
                    return (
                        <InputNumber size='small' min={1} value={quantity} onChange={handleQuantityChange} />
                    )
                }
                return <span> {item?.quantity} </span>
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
            render: (item) => {
                return (
                    <>
                        {editItem?._product?._id === item?._product?._id ? (
                            <span style={{ marginRight: 4 }}>
                                <SaveTwoTone style={{ marginRight: 4, fontSize: 16 }} onClick={() => handleUpdateCartItem(item)} />
                                <ReloadOutlined style={{ color: 'green', fontSize: 16 }} onClick={handleReset} />

                            </span>
                        ) : <EditTwoTone style={{ marginRight: 4, fontSize: 16 }} twoToneColor='red' onClick={() => handleEdit(item)} />
                        }
                        <DeleteTwoTone style={{ marginRight: 4, fontSize: 16 }} twoToneColor='blue' onClick={() => handleRemove(item)} />

                    </>
                )
            }
        }
    ];

    const renderCheckOut = () => {
        const total = sumBy(cartItems, (item) => item.amount);
        if (cartItems?.length > 0) {
            return (
                <center>
                    <p> Total amount: ${total}</p>
                    <StripeCheckOut name='payment' email={auth?.data?.email}
                        description='Payment for products' amount={total * 100}
                        token={(token) => handlePayout(token, total)}
                        stripeKey='pk_test_51MYC5cGF1Zw88Jx9ymSxF32SQLH0sdva8PZBcpKE7eqxM6vDWdh9wbPPigEVLOVHFviYmGec5IjHM1qic6n3Wqqp00FqS1zsKg'
                    >
                        <Button type='primary' icon={<DollarOutlined />} >Checkout</Button>

                    </StripeCheckOut>
                </center>
            )
        }
    }


    return (
        <>
            <PageHeader title='Your Cart' onBack={() => navigate(-1)} />
            <div className='page-wrapper'>
                {renderCartItems()}
                {renderCheckOut()}
            </div>
        </>
    )
}

export default Cart;