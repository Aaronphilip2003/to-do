import './App.css';
import React,{useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ToDosList from './components/ToDosList';

const App=()=> {
  const [input,setInput]=useState("");
  const [todos,setTodos]=useState([]);

  return (
    <div>
      <div>
        <div>
          <Header/>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          />
        </div>
        <div>
          <ToDosList
          todos={todos}
          setTodos={setTodos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
