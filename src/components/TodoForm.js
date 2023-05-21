import  {React, useState} from 'react'

//   __________
//  todoForm contains the
//   input form  wich onSubmit calls the addTodo()
//   function (declared inside of the TodoWrapper)
//   ¯¯¯¯¯¯¯¯¯¯

export const TodoForm = ({addTodo}) => {
    const[value, setValue] = useState("")

    const handleSubmit= e =>{
        e.preventDefault();
        addTodo(value);
        setValue("");
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value}
        placeholder='Write your task here'
         onChange={(e) => setValue(e.target.value)}></input>
        {/* <button type='submit' className='todo-btn' onClick={handleSubmit} >Add Task</button> */}
        </form>
  )
}
