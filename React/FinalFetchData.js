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
  
  <div className="container">
    <h1>Fetch Data Using API</h1>
    <hr></hr>
    <table class="table table-success table-striped table-hover">
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
  <tbody>{
  this.state.users?
       this.state.users.map((item,i) => (
   //{users.map((user) => (
    <tr key ={(item.id)}>
      <th scope='row'>{item.name}</th>
      <td>{item.email}</td>
      <td>{item.address.street}</td>
      <td>{item.address.city}</td>
      <td>{item.phone}</td>
      <td>{item.website}</td>
    </tr>
      
        ) 
        ): null}
   </tbody>
</table>
</div>
      
);
}
}
export default App;