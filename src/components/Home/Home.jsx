import React, {useState} from 'react'
import { Button, Modal } from 'antd';

function Home(props) {
    console.log(5, props.listUser);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function afterClose () {
        console.log(20);
    }

    return (
        <div>
            Home
            {props.listUser.map((value, index)=>{
                return (
                    <div>
                        {value.username.username}
                        <img src={value.username.avatar[0].url} alt="" />
                    </div>
                )
            })}
            <Button type="primary" onClick={showModal}>Open Modal</Button>
            <Modal title="DEMO" cancelText='Hủy' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} afterClose={afterClose}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}

export default Home