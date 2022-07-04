import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Button, Modal, Checkbox, Form, Input } from 'antd';
import './Product.css'

const { Meta } = Card;
function Product() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [listProduct, setListproduct] = useState([])
    const [count, setCount] = useState(0)
    const [productId, setProductId] = useState('')

    useEffect(function(){
        axios.get('https://www.nodemy.vn/api/bootcamp-1-s')
        .then(function(data){
            console.log(data.data);
            setListproduct(data.data);
        })
        .catch(function(err){
            console.log(12, err);
        })
    }, [count])
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const showModal = (id) => {
        setProductId(id);
        setIsModalVisible(true);
    };

    const onFinish = (values) => {
        const ProductName = values.ProductName;
        const Price = values.Price;
        const Storage = values.Storage;
        if(!ProductName || !Price || !Storage) return window.alert('hay dien du thong tin')

        axios.post('https://www.nodemy.vn/api/bootcamp-1-s', {ProductName, Price, Storage})
        .then( (data) => {
            console.log(36, data);
            setCount(count + 1)
        })
        .catch( error => {
            console.log(39, error);
        })
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    
    function deleteProduct (){
        let confirm = window.confirm('co chac muon xoa')
        if(!confirm) return setIsModalVisible(false);

        axios.delete(`https://www.nodemy.vn/api/bootcamp-1-s/${productId}`)
        .then(data => {
            setCount(count + 1)
            setIsModalVisible(false);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <h1>Product</h1>
            <div className='openBtn'>
                <Button type="primary" onClick={showModal}>
                    Thêm sản phẩm
                </Button>
            </div>
            <Modal footer={null} title="Basic Modal" visible={isModalVisible} onCancel={handleCancel}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item
                        label="ProductName"
                        name="ProductName"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your ProductName!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Price"
                        name="Price"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Price!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Storage"
                        name="Storage"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Storage!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Them san pham
                        </Button>
                        <Button type="secondary" htmlType="button">
                            Update
                        </Button>
                        <Button type="warning" htmlType="button" onClick={deleteProduct}>
                            Xoa
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <div className="listProduct">
                {listProduct.map((value, index)=> {
                    return (
                        <Card hoverable style={{ width: 240 }} key={index}
                            cover={<img onClick={() => {showModal(value._id)}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title={value.ProductName} description={value.Price} />
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default Product