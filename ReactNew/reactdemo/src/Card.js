import React,{useEffect,useState} from 'react';
import './Card.css'

function Card(){
    const[users,setuser]=useState([]);
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            setuser(data);
        })
    },[setuser]);
    return(
        <>
        <h2>USER LIST</h2>
        <div class="card col-4">
        <div class="card-body">
        <h4 class="card-title">INFO</h4>
        {users.map((user) => (
    <tr key ={(user.id)}>
        <th>{user.id}</th>
      <td >{user.name}</td>
      <td>{user.address.city}</td>
      
    </tr>
      
   ) )}
        <p class="card-text">Some example text. Some example text.</p>
        <button class="btn btn-primary">See Profile</button>
        </div>
        
</div>
        </>
    )
}
export default Card;