import React from "react";
import { TodoCounter } from "./TodoCounter";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import second from "first";
//import './App.css';
const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar terminar la tarea", completed: false },
  { text: "Llorar con la llorona", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
      {todos.map((todo) => (
        <TodoItem key={todo.text} text={todo.text}/>
      ))}
      <TodoList />
      <CreateTodoButton />
   
    <React.Fragment/>
  );
}

export default App;