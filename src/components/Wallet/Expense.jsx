import React from 'react'

function Expense(props) {
    function confirmDelete (){
        const choose = window.confirm('co chac muon xoa')
        if(choose) props.deleteExpense(props.index)
    }

    function openModal (){
        props.showModal()
        props.selectToUpdate(props.index)
    }
    return (
        <div className='expense'>
            <div className="expenseInfo" onClick={openModal}>
                <div>{props.expense.content}</div>
                <div>{props.expense.money}</div>
            </div>
            <div onClick={confirmDelete}>X</div>
        </div>
    )
}

export default Expense