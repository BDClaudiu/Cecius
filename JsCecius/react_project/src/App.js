
import React, { Component } from 'react';
import './App.css';
import NewComponent from './NewComponent';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  render(){
    return (

    <div className="App">

      <header className="App-header"> 
        <h1> Hello World React</h1>
      </header>

      <p classnName="App-info">
        To get started, edit, save and reload
      </p>
      <NewComponent/>
    </div>
    );
  }
}

export default App;
