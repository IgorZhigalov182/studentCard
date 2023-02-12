import React from 'react';
import { Link, Router, Route, Routes } from 'react-router-dom';
import FirstPage from './component/FirstPage';
import NavBar from './component/NavBar';
import SecondPage from './component/SecondPage';

function App() {
  return (
    <>
      <NavBar />
      <Route path="/signup" render={SecondPage} />
      <Route path="/" component={FirstPage} exact />
    </>
  );
}

export default App;
