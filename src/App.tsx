import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import HomeScreen from './src/Screens/HomeScreen';
import CreateExpenseScreen from './src/Screens/Expenses/CreateExpenseScreen';
import Header from './src/Components/Header';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={HomeScreen} />
          <Route path="/expenses" Component={CreateExpenseScreen} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
