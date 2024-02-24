
import { useState } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Side from './Side';
import Login from './Login';
import Chats from './Chats';
function App() {
  const [user,setuser] = useState(true)
  const [dar,setdark] = useState(false);
  function dark(){
    setdark(!dar);
  }
  return (
    <BrowserRouter>
    <div className="App">
      {
        user?(  <Routes>
          <Route path='/' element={<Home dar={dar} dark={dark}/>}/>
        </Routes>):(
          <Login/>
        )
      }
  

    </div>
    </BrowserRouter>
  );
}

export default App;
