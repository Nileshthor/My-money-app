import {Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/home'
import Requests from './Components/Requests';
import History from './Components/History';
import Login from './Components/Login';
import SignIn from './Components/SignIn';
import { useState } from 'react';

function App() {
  const [balance, setBalance] = useState(100000)
  return (
    <div className="App">
        <h1>My Money App</h1>
        <Routes>
          <Route path='/' element={<Home balance={balance} setBalance={setBalance}/>}/>
          <Route path='login' element={ <Login/>}/>
          <Route path='signin' element={<SignIn/>}/>
          <Route path='history' element={<History/>}/>
          <Route path='requests' element={<Requests balance={balance} setBalance={setBalance}/>}/>
        </Routes>
    </div>
   
  );
}

export default App;
