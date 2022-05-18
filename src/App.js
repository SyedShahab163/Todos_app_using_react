
import './App.css'
import Header from "./MyComponents/Header"
import Todos from "./MyComponents/Todos"
// import TodoItem from "./MyComponents/TodoItem"
import Footer from "./MyComponents/Footer"
// import React, { useState } from 'react';
// import AddTodo from "./MyComponents/AddTodo"



function App() {
  // const onDelete = (Todos) => {
  //  console.log("I am onDelete of todo" );
  //  let index = Todos.indexOf(Todos)
  //  Todos.splice(index, 1);
  // }
  // let todos_array = [
    // setTodos(Todos.filter((e )=>{
      //  return e!==Todos;

    // // const [Todos, setTodos] = useState([
    // {
    //   sno:1,
    //   title:"ye title hai"
    // },
    // {
    //   sno:2, 
    //   title:"ye title2 hai"
    // },
  // ]);
  return (
   <>
   <Header/>
   {/* <Todos todo={Todos}/> */}
   <Todos/>
   {/* <TodoItem/>  */}
   <Footer/>
   {/* <AddTodo/> */}
   </>
  );
}

export default App;
