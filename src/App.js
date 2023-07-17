import React from 'react'
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'
import Paginations from './components/Pagination';

function App() {
  return (
    <div className="App">
      <h3>My Blog</h3>
      <Posts></Posts>
      <Paginations></Paginations>
    </div>
  );
}

export default App;
