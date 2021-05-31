import React from 'react';

export class Student extends React.Component{
  state = {
     id: 101,
     name:"RAHUL"
     //name: "sdf"
  };
;

  // event Handler Arroe Function

  handleClick = (id,name) => {
    console.log(id);
    console.log(name);
  };
  // for passing arguments
  handleClickArg = () =>{
   this.handleClick(this.state.id);
   // this.handleClick(this.state.name);
 }

  render(){
    return(
       <div>
        <h1>HELLO,{this.state.name}</h1>
        <button onClick ={this.handleClickArg}>CLICK</button>
       </div>
    );
  }
}

// export default Student


// class Student extends React.Component{
//   handleClick = () => {
//     console.log("button Clicked",this)
//   }
//   render(){
//     return(
//       <div>
//         <h1>Hello Event</h1>
//         <button onClick = {this.handleClick}>CLICK</button>
//       </div>
//     )
//   }
// }

// Bind function use
// import React from 'react';
// class Student extends React.Component{
//   constructor(props){
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick = () => {
//     console.log("button Clicked",this)
//   }
//   render(){
//     return(
//       <div>
//         <h1>Hello Event</h1>
//         <button onClick = {this.handleClick}>CLICK</button>
//       </div>
//     )
//   }
// }

// class Football extends React.Component {
//   //shoot = (a, b) => 
//   shoot (b,c){
//     alert(c.type);
//    // alert(b.type);
//     /*
//     'b' represents the React event that triggered the function,
//     in this case the 'click' event
//     */
//   }
//   render() {
//     return (
//       <button onClick={this.shoot.bind(this, "Goal")}>Click</button>
//     );
//   }
// }
export default Student