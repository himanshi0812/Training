import React from'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Homep';
import Details from './Details';
import User from './User';
// import UseEffectAPI from './progressbar';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Home />
    {/* <UseEffectAPI /> */}
      <Route path ="/Details" component={Details} />
      <Route path ="/User" component={User} />
    </BrowserRouter>
   
    </div>
  );
}

export default App;
