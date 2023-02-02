import React, { useState } from 'react'
import { Button, Row, InputNumber, Input, Slider, Card, Space, Typography, Col } from 'antd';
import { CloseCircleOutlined, SearchOutlined } from '@ant-design/icons';
const { Text } = Typography
const ProductFilters = (props) => {
    const { initialFilters, onSearch, onClear } = props;
    const [filters, setFilters] = useState(initialFilters);
    const [keyword, setKeyword] = useState(null);

    const handleKeywordChange = (e) => {
        const value = e.target.value;
        setKeyword(value);
        setFilters({
            ...filters,
            name: { $regex: value, $options: 'i' }
        })
    }

    const handleSearch = () => {
        onSearch(filters)
    }
    const handleClearSearch = () => {
        setKeyword(null);
        setFilters(initialFilters);
        onClear();
    }

    return (
        <Row gutter={[8, 8]} style={{ padding: 10 }}>
            <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={3} >
                <Input placeholder='Enter keyword' onChange={handleKeywordChange} />
            </Col>
            <Col xs={24} sm={12} md={12} lg={6} xl={5} xxl={5} >
                Category
            </Col>

            <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6} >
                <Row gutter={4} align='middle'>
                    <Col span={5}>
                        <Text>Price From</Text>
                    </Col>
                    <Col span={13}>
                        <Slider min={1} max={100} value={filters.price.$gte} />
                    </Col>
                    <Col span={4}>
                        <InputNumber min={1} max={20} value={filters.price.$gte} />
                    </Col>
                </Row>
            </Col>

            <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6} >
                <Row gutter={4} align='middle'>
                    <Col span={5}>
                        <Text>Price To</Text>
                    </Col>
                    <Col span={13}>
                        <Slider min={1} max={100} value={filters.price.$lte} />
                    </Col>
                    <Col span={4}>
                        <InputNumber min={1} max={20} value={filters.price.$lte} />
                    </Col>
                </Row>
            </Col>

            <Col xs={24} sm={12} md={12} lg={6} xl={4} xxl={4} >
                <Button type='primary' icon={<SearchOutlined />} onClick={handleSearch} style={{ width: '45%', marginRight: 10 }}>Search</Button>
                <Button type='default' icon={<CloseCircleOutlined />} onClick={handleClearSearch} style={{ width: '45%' }}>Clear</Button>

            </Col>
        </Row>
    )
}

export default ProductFilters