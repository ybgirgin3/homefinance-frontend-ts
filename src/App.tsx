import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import HomeScreen from './Screens/HomeScreen';
import Header from './Components/Header';
import CreateScreen from './Screens/CreateScreen';

import './App.css';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={HomeScreen} />
          <Route path="/create" Component={CreateScreen} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
