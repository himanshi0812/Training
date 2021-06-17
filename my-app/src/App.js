import React  from 'react';
import Posts from './posts';
// import{useDispatch, useSelector} from "react-redux";
// import { increment ,decrement } from './action';
// import AddTodo from './component/addTodo/addTodo';
// import TodoList from './component/TodoList/TodoList';
// import './App.css';
// import './todo.css';


function App() {
  // const count = useSelector (state => state)
  // const dispatch = useDispatch()
  return (
    <div className="main">
     
    <Posts />
    </div>
  );
}

export default App;
