import React from 'react';
import Menu from './Menu';
import Contact from './Contact';
import About from './About';
import {BrowserRouter, Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
     <div>
      <Menu />
      <Route exact path ="/" component = {HOME} />
       {/* <HOME /> */}
      {/* <About /> */}
      <Route path ="/about" component={About} />
      {/* <Contact /> */}
      <Route path ="/contact" component ={Contact} />
     
    </div>
    </BrowserRouter>
  );

}

const HOME = () =>{
  return(
    <div>
      <h1>WELCOME TO HOME PAGE</h1>
      <p>
        werytuiopifsadfghjkjhgzxcvbnm,
       l
      </p>
    </div>
  )
   
}

export default App;
