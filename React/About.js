import React from 'react';
import { Link,Route, Switch } from 'react-router-dom';
import './Menu.css';

function About({match,location,histroy}){
    // console.log(match);
    // console.log(location);
    // console.log(histroy);
    return(
      <div className = "About">
        <h1>WELCOME TO ABOUT PAGE</h1>
        <p>HII !!!</p>
        <ul>
        <li><Link to = {`${match.path}/Services`}>Services</Link></li>
        <li> <Link to ={`${match.path}/Pricing`}>Pricing</Link></li>
      </ul>
      <Switch>
      <Route exact path ={`${match.path}/Services`} component = {Servies} />
      </Switch>
      </div>
    )
     
  }
  function Servies(){
      return(
          <div>
              <ul>
                  <li>WebDevlopment</li>
                  <li>Web Designing</li>
              </ul>
          </div>
      )
  }
  export default About;