import React, {useState, useEffect } from 'react'
import {Link} from 'react-router-dom';

export default function UseEffectAPI (){
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

<div className="col-10 col-md-4 mt-5">
                    <div class="card p-3">
                        <div class="d-flex align-items-center">
                        
                            <div class="ml-3 w-100">
                            <h3>INFO</h3>
                            <div class ="p-2 mt-2  d-flex justify-content-between rounded text-white status">
                                
                                
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">NAME</th>
                                <th scope="col">ADDRESS</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <th scope='row'>{curElem.id}</th>
                            <td>{curElem.name}</td>
                            <td>{curElem.address.city}</td>
                            </tr>
                            </tbody>
                        </table>
                            </div>
                                <Link to= "/User"><button type="button" class="btn btn-primary btn-lg">SHOW DETAILS</button> </Link>
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