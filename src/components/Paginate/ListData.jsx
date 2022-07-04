import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

function ListData(props) {
  return (
    <div className='listData'>
        {props.data.map(function(value, index){
            return (
                <Card hoverable style={{width: 240}}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title={value.ProductName} description={'Price:'+value.Price} />
                    <p>Storage: {value.Storage}</p>
                </Card>
            )
        })}
    </div>
  )
}

export default ListData