import React ,{useState} from 'react';
import './Todo.css';


const Todo =() =>{

    const [inputData,setInputData] = useState ('');
    return(
    <div>
    <div className = "head">
        <h2>Add Items</h2>
        <div className ="addItems">
            <input type ="text" placeholder="Add Items" 
            value = {inputData} 
            onChange = {(event) => setInputData(event.target.value)} />
            
            <br></br><br></br>
            <button type="button" class="btn btn-light btn-lg">Info</button>
        </div>
    </div>
    </div>
    )
}
export default Todo;