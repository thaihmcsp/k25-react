import React, { Component } from 'react'

export class Cart extends Component {

    constructor (props){
        super(props)
        this.state = {
            cart: [
                {ten: 'quan bo', soLuong: 99},
                {ten: 'ao phong', soLuong: 20},
            ],
        }
    }

    increase = (index) => {
        let clone = [...this.state.cart]
        clone[index].soLuong += 1
        this.setState({cart: clone})
    }

    componentDidUpdate(oldProps, oldState){
        if(oldState.cart !== this.state.cart){
            this.state.cart.forEach(element => {
                for(let i = 0; i < this.props.product.length; i++){
                    if(element.ten === this.props.product[i].ten && element.soLuong > this.props.product[i].soLuong){
                        alert('khong du ton kho')
                        return
                    }
                }
            });
        }
    }

    render() {
        return (
        <div>
            <h1>{this.props.count}</h1>
            {this.state.cart.map((value, index)=>{
                return (
                    <div key={index}>
                        <span>{value.ten}</span>
                        <span>{value.soLuong}</span>
                        <button onClick={()=>{this.increase(index)}}>+</button>
                    </div>
                )
            })}
        </div>
        )
    }
}

export default Cart