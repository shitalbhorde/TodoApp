import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';

function App() {

  const [listTodo,setListTodo] = useState([]);

  let addList = (inputText) =>{
    if(inputText!=='')    //blank item pass nahi honar
    setListTodo([...listTodo,inputText]);
  }
  
  const deleteListItem = (key) =>{
     let newListTodo = [...listTodo];
     newListTodo.splice(key,1)
     setListTodo([...newListTodo])
  }
  return (
    
    <div className='main-container'>
      <div className='center-container'>
       <h1>TODO</h1>
       <hr />
        <TodoInput addList={addList}/>
        {listTodo.map((listItem,i) =>{
          return(
            <TodoList key={i} index={i} item ={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  )
}

export default App
