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
  //this.setState({users:result})
   })
 })
}
render(){
return (
  <div>
    <h1>Fetch Data Using API</h1>
    {
      this.state.users?
      this.state.users.map((item,i) => 
      <div><p>{i} </p></div>
      )
      :
      null
    }
   </div>
);
}

}
export default App;