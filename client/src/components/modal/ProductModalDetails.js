import React, { useState } from 'react';
import { Button, Row, Col, Image, InputNumber, Space, Typography, message, Modal } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
function ProductModalDetails(props) {
    const {product, visible, onCancel} = props;
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (value) => {
        setQuantity(value)
    }
    return (
        <Modal title={product?.name} width={700} visible={visible} onCancel={onCancel} footer={null}>
            <Row gutter={12}>
                <Col xs={24} sm={12} md={12} lg={12}>
                    <Image src={product?.image} />
                </Col>
                <Col xs={24} sm={12} md={12} lg={12}>
                    <Space direction='vertical'>
                        <Title level={5}> {product?.name} </Title>
                        <Text type='secondary'> {product?._category.name} </Text>
                        <Text type='success'> ${product?.price} </Text>
                        <Text italic> ${product?.description} </Text>
                        <Space direction='horizontal'>
                            <InputNumber min={1} value={quantity} onChange={handleQuantityChange} />
                            <Button type='primary' icon={<ShoppingCartOutlined style={{ fontSize: 18 }} />}>Add to cart</Button>
                        </Space>
                    </Space>
                </Col>
            </Row>
        </Modal>
    )
}

export default ProductModalDetails;