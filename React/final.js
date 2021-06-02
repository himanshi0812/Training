import React from 'react';

class App extends React.Component {
 constructor(){
   super();
   this.state = {
     users: null
   }
 }
componentDidMount() {
fetch ('https://jsonplaceholder.typicode.com/users').then((resp) => {
  resp.json().then((result) => {
  console.warn(result)
  this.setState({users:result})
   })
 })
}
render(){
return (
  <div>
    <h1>Fetch Data Using API</h1>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">USERNAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">ADDRESS</th>
      <th scope="col">PHONE NO</th>
      <th scope="col">WEBSITE</th>
    </tr>
  </thead>
  {
      this.state.users?
      this.state.users.map((item,i) => 
      <div><p>{i} ,{item.name}</p>
            
      </div>
      )
      :
      null
    }
  
  </table>
  
   </div>
);
}

}
export default App;