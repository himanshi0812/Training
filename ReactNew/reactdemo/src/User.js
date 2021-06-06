import React from 'react';
import { useParams} from 'react-router-dom';
import UseEffect from './Show';
// import './Menu.css';

function User({match}){
     console.log(match);
    //  console.log(location);
    //  console.log(histroy);
    return(
        <div className = "User">
        <h1>WELCOME TO Details page PAGE</h1>
   
   
             <UseEffect />
     
        
        {/* <UseEffect /> */}
      {/* <Link to = {`${match.path}/Details`}>fghjhk</Link> */}
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

  export default User;