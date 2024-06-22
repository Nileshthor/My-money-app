import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/home'
import Requests from './Components/Requests';
import History from './Components/History';
import Login from './Components/Login';
import SignIn from './Components/SignIn';

function App() {
  return (
    <div className="App">
        <h1>My Money App</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='login' element={ <Login/>}/>
          <Route path='signin' element={<SignIn/>}/>
          <Route path='history' element={<History/>}/>
          <Route path='requests' element={<Requests/>}/>
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
