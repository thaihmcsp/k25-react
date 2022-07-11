import React, { useContext, useState } from 'react'
import context from '../../context/context'
import ProviderContext from '../../context/ProviderContext'
import TestLevel2 from './TestLevel2'

function TestLeve1() {
    const data = useContext(context)
    const [user, setUser] = useState({name: 'thai'})
    return (
        <ProviderContext data={{user, data}}>
            <div>
                <h1>TestLeve1</h1>
                <TestLevel2 user={user}/>
            </div>
        </ProviderContext>
    )
}

export default TestLeve1