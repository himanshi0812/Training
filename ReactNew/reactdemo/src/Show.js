import React, {useState, useEffect } from 'react';
import './Card.css';

export default function UseEffect (){
    const[users,setuser] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setuser(data);
        console.log(data);
      });
    }, [setuser] );


    return(
        <>
        {/* <h2>List</h2> */}
        <div className="container-fluid mt-5">
            <div className="row text-center">
                {
                    users.map((curElem) => {
                        return(
                            <div>

<div className="col-10 col-md-9 mt-5">
                    <div class="card p-2">
                        <div class="d-flex align-items-center">
                        
                            <div class="ml-3 w-300">
                            <h3>INFO</h3>
                            <div class ="p-2 mt-2  d-flex justify-content-between rounded text-white status">
                                
                                
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">NAME</th>
                                <th scope="col">E-MAIL</th>
                                <th scope="col">ADDRESS</th> 
                                <th scope="col">WEBSITE</th>
                                <th scope="col">PHONE</th>
                                <th scope="col">COMPANY</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <th scope='row'>{curElem.id}</th>
                            <td>{curElem.name}</td>
                            <td>{curElem.email}</td>
                            <td>{curElem.address.city}</td>
                            <td>{curElem.website}</td>
                            <td>{curElem.phone}</td>
                            <td>{curElem.company.name}</td>
                            

                            </tr>
                            </tbody>
                        </table>
                            </div>
                            <button class="btn btn-primary">SHOW DETAILS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
                        )
                    })
                }
            
            </div>
            
            </div>           
           
        </>
    )
}