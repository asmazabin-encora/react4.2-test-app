import React from 'react';
import './App.scss';
import Home from './client/containers/Home/Home';

function App() {
  return (
    <div className='App'>
      <header className='App-header' />
      <div className='container'>
        <Home />
      </div>
    </div>
  );
}

export default App;