import React  from 'react';
import{useDispatch, useSelector} from "react-redux";
import { increment ,decrement } from './action';
// import AddTodo from './component/addTodo/addTodo';
// import TodoList from './component/TodoList/TodoList';
// import './App.css';
// import './todo.css';


function App() {
  const count = useSelector (state => state)
  const dispatch = useDispatch()
  return (
    <div className="main">
     <h1>HELLO</h1>
     <h2>{count}</h2>
     <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
     <button onClick={()=>dispatch(increment())}>INCRMENT</button>
    {/* <AddTodo />
    <TodoList /> */}
    </div>
  );
}

export default App;
