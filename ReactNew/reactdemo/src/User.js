import React from 'react';
// import { useParams} from 'react-router-dom';
import UseEffect from './Show';
import './Card.css';


function User({match}){
     console.log(match);
   
    return(
        <div className = "User">
        <h1>WELCOME TO Details page PAGE</h1>
        <UseEffect />
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