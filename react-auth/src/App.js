import React, { Component } from 'react';
import './App.css'

import Header from './Header'
import Router from './Router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router />
      </div>
    );
  }
}

export default App




// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import SignUp from './SignUp'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//         <SignUp />
//       </div>
//     );
//   }
// }

// export default App;
