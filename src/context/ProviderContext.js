import React from 'react'
import context from './context'

function ProviderContext(props) {
    const Provider = context.Provider;
    return (
        <Provider value={props.data}>
            {props.children}
        </Provider>
    )
}

export default ProviderContext