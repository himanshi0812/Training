import React from 'react';
import { Link,Route, Switch } from 'react-router-dom';
import UseEffectAPI from './progressbar';
// import './Menu.css';

function Details({match}){
     console.log(match);
    //  console.log(location);
    //  console.log(histroy);
    return(
      <div className = "Details">
        <h1>WELCOME TO Details page PAGE</h1>
        
        <UseEffectAPI />
      <Link to = {`${match.path}/Details`}>fghjhk</Link>
     {/* <Switch>
      <Route exact path ={`${match.path}/Details`} component = {services } />
      </Switch> */}
      </div>
  

    )
     
  }
//   function Servies(){
//       return(
//           <div>
//               <ul>
//                   <li>WebDevlopment</li>
//                   <li>Web Designing</li>
//               </ul>
//           </div>
//       )
//   }

  export default Details;