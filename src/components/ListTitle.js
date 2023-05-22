import {React, useState, useEffect} from 'react'
//
//here import the icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'



//   __________
//  ListTitle is the title of the List and contains
//  an edit icon
//   ¯¯¯¯¯¯¯¯¯¯ 
// 
export const ListTitle = ({title, openListTitleEditor}) => {
  
    return (
     <>
      <h1>{title}</h1>
        <FontAwesomeIcon  className='icon' icon={faPencil} onClick={()=> openListTitleEditor(title.id)}/>
     </> 
    )
  
    
}
