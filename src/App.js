import { useState } from "react";
import InputContainer from "./Components/InputContainer";
import ItemsListCointainer from "./Components/ItemsListContainer";
import CountList from "./Components/CountList";
import './App.css';

function App() {
  const [todos,setTodos]=useState([]);
  const addNewTodo =(newToDo) => {
    setTodos([...todos,newToDo]);
  };
  const deleteToDo =(itemtobeDeleted) =>{
    const filtertodo =todos.filter((item)=> item !== itemtobeDeleted)
    setTodos(filtertodo);
  }
  return (
    <div style={{height:'100vh',backgroundColor:'blue', width:'100%'}}>
      <div className="navbar">
      <h2 style={{marginLeft:'35rem'}}>TODOLIST</h2>
      <CountList itemCount={todos.length}/>
      </div>
      <InputContainer addNewTodo={addNewTodo} />
      <ItemsListCointainer todos={todos} deleteToDo={deleteToDo}/>
    </div>
  );
}

export default App;
