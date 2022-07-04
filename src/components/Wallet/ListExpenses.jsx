import React from 'react'
import Expense from './Expense'

function ListExpenses(props) {
    return (
        <div className='listExpenses'>
            {props.Expenses.map(function(value, index){
                return <Expense key={index} index={index} expense={value} 
                deleteExpense={props.deleteExpense} showModal={props.showModal} selectToUpdate={props.selectToUpdate}/>
            })}
        </div>
    )
}

export default ListExpenses