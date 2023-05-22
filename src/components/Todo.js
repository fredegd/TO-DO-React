import {React, useState, useEffect} from 'react'
//
//here import the icons
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons'
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
        <p>{task.task}</p>
        <div className='icon-container'>
      <FontAwesomeIcon icon={faPencil} onClick={()=> openTaskNameEditor(task.id)}/>
      <FontAwesomeIcon icon= {faTrashCan} onClick={() => deleteTodo(task.id)}/>
        </div>
      </div>
    )
}
