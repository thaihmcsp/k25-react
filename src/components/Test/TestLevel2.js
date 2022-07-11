import React from 'react'
import ProviderContext from '../../context/ProviderContext'
import TestLevel3 from './TestLevel3'

var test2 = 111

function TestLevel2(props) {
    return (
        <div>
            <h1>TestLevel2</h1>
            <TestLevel3 user={props.user}/>
        </div>
    )
}

export default TestLevel2