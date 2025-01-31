import React from 'react'

function TodoList(props) {
  return (

    <li className='list-item'>
      {props.item}
      <span><i className="ri-delete-bin-line" onClick={e =>{
        props.deleteItem(props.index)
      }}></i></span>
    </li>

  )
}

export default TodoList
