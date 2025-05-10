import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import UserForm from './UserForm';
// import Greeting from './Greetings';
// import Counter from './Counter';
import MortgageCalculator from './MortgageCalculator';
import './App.css';



function App() {
  return (
<Router>
  <nav>
    <Link to="/">Home</Link> | { " "}
    <Link to="/mortgage">Mortgage Calculator</Link>
  </nav>
  <Routes>
     <Route path="/" element={<h1>Welcome Home!</h1>} />
    <Route path ="/mortgage"element ={<MortgageCalculator/>} />

  </Routes>















    {/* <div className="App">
      <h1>My React App </h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/form">User Form</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path ="/" element ={<Greeting name="Fareedah" />} />
        <Route path ="/counter" element ={<Counter />} />
        <Route path ="/form" element ={<UserForm />} />
      </Routes> */}
     

{/* <Greeting name="Fareedah"/>
<Greeting name="Ashabii"/>
<Counter />
<UserForm /> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-Link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
         {/* </div> */}
     </Router>
  );
}

export default App;
