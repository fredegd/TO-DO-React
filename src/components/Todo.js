import React from 'react'
//
//here must import the icons
//
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task}) => {
  return (
    <div className='Todo'>
      <p>{task.task}</p>
      
      <div>
    <FontAwesomeIcon icon={faPenSquare}/>
    <FontAwesomeIcon icon={faTrash}/>
      </div>
    </div>
  )
}
