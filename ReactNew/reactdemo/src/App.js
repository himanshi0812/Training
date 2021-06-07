import React, { useState, useEffect} from'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Homep';
import Details from './Details';
import User from './User';
import {BeatLoader} from 'react-spinners';
import './Card.css'
// import UseEffectAPI from './progressbar';


function App() {
  const [loading ,setLoading] = useState (false);
  useEffect (() => {
     setLoading(true)
     setTimeout(() => {
       setLoading(false)
     },2000)
  },[])
 return (
  <div className="d-flex align-items-center justify-content-center">
  <div className="p-2 bd-highlight col-example">
  <div className="App">
    {
      loading ? 

      <BeatLoader
       />
      :
      <BrowserRouter>
  
      {/* <BeatLoader/> */}
  <Home />
      {/* <UseEffectAPI /> */}
        <Route path ="/Details" component={Details} />
        <Route path ="/User" component={User} />

      </BrowserRouter>
}
      </div>
  </div>
  </div>

 )
     
 

}

export default App;
