import React,{useState } from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from "../../actions";
import cuid from 'cuid';
const AddTodo = () => {
    const [task ,setTask] = useState ('')

    const dispatch = useDispatch();

    function handleInputChange(e){
        setTask(e.target.value);
    }

    function handleFormSubmit(e){
        e.PreventDefault();
        setTask(dispatch(addTodo({task:task , id:cuid()})))
        e.target.userInput.value = "";
    }
    return (
        <form onSubmit = {handleFormSubmit}>
            <input type = 'text' 
            name = 'userinput' 
            onChange = {(e) => handleInputChange(e)} />
            
            <button type='submit'>ADD</button>
        </form>
    )
}

export default AddTodo;