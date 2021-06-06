import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
const Home = () =>{
    return (
     <>
      <div className= "Home">
          <h1>WELCOME DATA IS RECIEVED</h1>
   
   
    </div>

    <div className='button'>
        
    <Link to= "/Details"><button type="button" class="btn btn-primary btn-lg">SHOW DETAILS</button> </Link>
    </div>
    </>
    )
  }


  
  export default Home;