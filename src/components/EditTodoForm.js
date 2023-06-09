import  {React, useState} from 'react'


//   __________
//   editTodoForm contains the
//  input form wich appears whe the edit icon is clicked
//  onSubmit calls the editTaskName()
//   function (declared inside of the TodoWrapper)
//   ¯¯¯¯¯¯¯¯¯¯

export const EditTodoForm = ({editTaskName, task}) => {
    const[value, setValue] = useState(task.task)

    const handleSubmit= e =>{
        e.preventDefault();
        editTaskName(value, task.id);
        setValue("");
    }  
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value}
        placeholder='Update the Task'
         onChange={(e) => setValue(e.target.value)}/>
        {/* <button type='submit' className='todo-btn' onClick={handleSubmit} >Update Task</button> */}
        </form>
  )
}
