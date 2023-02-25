import React from 'react';
import { Link, Router, Route, Routes } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

function App() {
  return (
    <>
      <Route path="/signup" component={SecondPage} />
      <Route path="/" component={FirstPage} exact />
    </>
  );
}

export default App;
