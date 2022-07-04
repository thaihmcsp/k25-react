import React from 'react'

function Ballance(props) {
  return (
    <div className='ballance'>
        <div className="currency">USD</div>
        <div className="amount">{props.Amount}</div>
    </div>
  )
}

export default Ballance