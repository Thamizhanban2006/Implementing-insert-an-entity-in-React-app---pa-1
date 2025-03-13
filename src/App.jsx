// src/App.jsx

import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import AddBook from './AddBook';
import {BrowserRouter,Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addbook' element={<AddBook/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
