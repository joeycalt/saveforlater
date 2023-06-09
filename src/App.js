import './App.css';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Login from './components/Login';
import {useState} from 'react';
import Main from './components/Main';
import useToken from './useToken.js';

function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/main' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
