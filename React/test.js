

import React from 'react';
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

class Football extends React.Component {
  shoot() {
    alert("Great Shot!");

  }
  // its give undefined output
  // shoot() {
  //   alert(this);
  // }

// it give object as an ouput
    // shoot =() => {
  //   alert(this); 
  // }
  
  render() {
    return (
      <div className="Football">
      <header className="Football">
      <button onClick={this.shoot}>Take the shot!</button>
      </header>
      </div>
    );
  }
}

// export default Clock
export default Football