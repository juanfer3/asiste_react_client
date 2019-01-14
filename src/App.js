import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import FormEventos from './Components/Eventos/Create/FormEventos';

class App extends Component {
  render() {
    return (
      <div >
        
        <Navbar></Navbar>
        <div className="App">
          <FormEventos></FormEventos>
        </div>
      </div>
    );
  }
}

export default App;
