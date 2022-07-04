import React, {useState} from 'react'
import { LockOutlined, UserOutlined, InstagramOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Upload  } from 'antd';
import ImgCrop from 'antd-img-crop';
import './Login.css'
import { Link } from 'react-router-dom';

function Login(props) {
    const [fileList, setFileList] = useState([])
    const onFinish = (values) => {
        values.avatar = fileList
        props.registerNewUser(values)
    };

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    
    const onPreview = async (file) => {
        let src = file.url;
    
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                console.log(30, file);

                reader.readAsDataURL(file.originFileObj);
        
                reader.onload = () => resolve(reader.result);
            });
        }

        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    async function before (file){
        const src = URL.createObjectURL(file)
        console.log(49, src);
        console.log(44, file);
        setFileList([...fileList, {url: src }])
    }

    return (
        <div>
            <Form name="normal_login" className="login-form" initialValues={{remember: true}} onFinish={onFinish}>
                <Form.Item name="username" rules={[{required: true, message: 'Please input your Username!'}]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
                },
                ]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>


            <ImgCrop rotate>
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    accept = '.jpg,.png'
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                    showUploadList = {true}
                    beforeUpload = {before}
                >
                    {fileList.length < 5 && '+ Upload'}
                </Upload>
            </ImgCrop>

            <Form.Item>
                <a className="login-form-forgot" href="">
                Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
                </Button>
                Or <a href="">register now!</a>
            </Form.Item>

            </Form>
            <InstagramOutlined />
            <Link to='/' >Home</Link>
        </div>
    )
}

export default Login