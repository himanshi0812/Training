import React  from 'react';
import AddTodo from './component/addTodo/addTodo';
import TodoList from './component/TodoList/TodoList';
import './App.css';
// import './todo.css';


function App() {
  return (
    <div className="main">
     <h1>HELLO</h1>
    <AddTodo />
    <TodoList />
    </div>
  );
}

export default App;
