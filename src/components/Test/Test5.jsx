import React, { useContext, useState } from 'react'
import context from '../../context/context'
import {useSelector, useDispatch} from 'react-redux'
import { addProductAction } from '../../redux/product/productAction';

function Test5() {
    const reduxData = useSelector(function(state){
        return state.product;
    });
    const dispatch = useDispatch()
    let data = useContext(context);
    console.log(6, reduxData);

    function addProduct (){
        let id = document.querySelector('#id').value;
        let name = document.querySelector('#name').value;
        const action = addProductAction({id, name});
        dispatch(action);
    }
  return (
    <div>Test5
        <input type="text" placeholder='name' id='name'/>
        <input type="text" placeholder='id' id='id'/>
        <button onClick={addProduct}>click</button>
        {reduxData.map(function(value, index){
            return <div key={index}>{value.id} / {value.name}</div>
        })}
    </div>
  )
}

export default Test5