
import React, {Component} from 'react';
import Login from './components/login/buildComponents.jsx';
import './App.css';
import './style/styleHeader.css'
import './bootstrap.css';
import '../src/css/animate.css'
import '../src/css/bootstrap.min.css'

import '../src/css/flaticon.css'
import '../src/css/font-awesome.min.css'
import '../src/css/gijgo.css'
import '../src/css/magnific-popup.css'
import '../src/css/nice-select.css'
import '../src/css/owl.carousel.min.css'
import '../src/css/slicknav.css'
import '../src/css/style.css'
import '../src/css/style.map'
import '../src/css/theme-default.css'
import '../src/css/theme-default.map'
import '../src/css/themify-icons.css'


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
  render() {
    return (
      
      <div className="App">
        {/*<Counter/>*/}
        <Login/>
      </div>
      
    );
  }
}

export default App;
