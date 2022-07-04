import React from 'react'

function Modal(props) {

    function addExpense (){
        const content = document.querySelector('#content').value
        const money = document.querySelector('#money').value

        if(!content || !money ) return alert('hay dien du thong tin')

        props.createExpense(content, money);
        props.hideModal()
    }

    function updateExpense (){
        const content = document.querySelector('#content').value
        const money = document.querySelector('#money').value

        if(!content || !money ) return alert('hay dien du thong tin')

        props.updateExpense(content, money)
        props.hideModal()
    }

    return (
        <div className='modal' style={props.isShow ? {display:'flex'} : {display:'none'} }>
            <input type="text" placeholder='noi dung chi' id='content'/>
            <input type="number" placeholder='so tien' id='money'/>
            <div>
                <button onClick={addExpense}>Add</button>
                <button onClick={updateExpense}>Update</button>
                <button onClick={props.hideModal}>Close</button>
            </div>
        </div>
    )
}

export default Modal