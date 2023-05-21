// import react
import React, { useState } from "react";
//import an Universally Unique Identifier (UUID) generator
import { v4 as uuidv4 } from "uuid";
// import the todoForm and Todo components
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { EditTodoForm } from "./EditTodoForm";
import { ListTitle } from "./ListTitle";
import { EditListTitleForm } from "./EditListTitleForm";


// initialize the uuid
uuidv4();

//   __________
//  todoWrapper contains the
//  list title, input form, an the todoItems
//   ¯¯¯¯¯¯¯¯¯¯

export const TodoWrapper = () => {
  const [title, setTitle] = useState({value: "TO DO APP" , isEditing: false , id: Date.now()});

  const [todos, setTodos] = useState([]);

  const openListTitleEditor = (id) => {
    setTitle(
      title.id === id ?
      {value: "TO DO APP" , isEditing: true }
      : title
    );
  };

  const editListTitle  = (title, id) => {
    setTitle(
      title.id === id ?
      {value: "TO DO APP" , isEditing: false }
      : title
    );
  };



  // define a function in order to add the todos
  // wich takes the task value as paramete
  // set the todos array using the "spread sintax"
  const addTodo = (todo) => {
    if(todo){
      setTodos([
        ...todos,
        { /*id: uuidv4(), */ id: Date.now(), task: todo, completed: false, isEditing: false },
      ]);
      console.log(todo + " was added");
    }else{
      alert("no empty value admitted")
    }
  };
  console.log(todos);
  //
  //
  //
  //
  
  const openTaskNameEditor = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTaskName = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: task, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  //console.log(title)
  return (
    <div className="TodoWrapper">
       
         
      <ListTitle title={title.value} 
        openListTitleEditor={openListTitleEditor}
        editListTitle={editListTitle}
      />
        
      <TodoForm addTodo={addTodo} />

      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTaskName={editTaskName} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            openTaskNameEditor={openTaskNameEditor}
            editTaskName={editTaskName}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        )
      )}
    </div>
  );
};
