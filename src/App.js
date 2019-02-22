import React, { Component } from 'react';
import Header from './component/Header.js';
import Footer from './component/Footer.js'

import GetData from './component/GetData.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <GetData/>
        <Footer/>
      </div>
    );
  }
}

export default App;
