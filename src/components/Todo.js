import {React, useState, useEffect} from 'react'
//
//here import the icons
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


//   __________
//  Todo ist the task component and contains the
//  a checkbox,  the task text,  edit and delete icons
//   ¯¯¯¯¯¯¯¯¯¯ 
//  task, toggleComplete, deleteTodo, editTodo are the props
//
export const Todo = ({task, openTaskNameEditor, toggleComplete, deleteTodo}) => {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(task.completed);
  }, [task.completed]);
  
  return (
      <div className={completed? "todo todo-done" : "todo"}>
       <input type="checkbox" id="checkbox" checked={task.completed} onChange ={() =>toggleComplete(task.id)} ></input>
        <p className={completed ? "outlined-text" : ""}>{task.task}</p>
        <div class="icon-container">
      <FontAwesomeIcon icon={faPenSquare} onClick={()=> openTaskNameEditor(task.id)}/>
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
        </div>
      </div>
    )
  
    
}
