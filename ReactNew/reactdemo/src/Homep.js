import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
const Home = () =>{
    return (
     <>
      <div className= "jumbotron d-flex align-items-center justify-content-center">
          <h1>WELCOME DATA IS RECIEVED</h1>
    </div>

    <div className='d-flex align-items-center justify-content-center'>
        
    <Link to= "/Details"><button type="button" class="btn btn-primary btn-lg">SHOW DETAILS</button> </Link>
    </div>
    </>
    )
  
    }

  
  export default Home;