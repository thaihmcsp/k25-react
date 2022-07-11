import React, { useContext } from 'react'
import context from '../../context/context';
import Test4 from './Test4';

function TestLevel3(props) {
    let data = useContext(context);
    console.log(6, data);
    return (
        <div>
            <h1>TestLevel3</h1>
            <Test4/>
        </div>
    )
}

export default TestLevel3