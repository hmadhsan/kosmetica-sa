import React from 'react'
import { Modal, Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const OrderResultModal = (props) => {
    const { visible, onCancel } = props;
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/')
    }

    return (
        <Modal title='Order Result' width={700} visible={visible} onCancel={onCancel} footer={null}>
            <Result
                status='success'
                title='Successfully purchased products.'
                subTitle='Thankyou for your order'
                extra={[
                    <Button type='primary' key='console' onClick={handleGoBack}>
                        Go to Homepage
                    </Button>,
                    <Button key='close'>Close</Button>
                ]} />
        </Modal>
    )
}

export default OrderResultModal