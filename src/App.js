import React, { Component } from 'react';
import Navbar from './components/navbar';
import Card from './components/card';


class App extends Component {
  render() {
    return (
      <>
        <Navbar />


        <div className='container'>
          <h1>Cosa vuoi mangiare oggi?</h1>
          <hr></hr>
          <div className='row'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

        </div>
      </>

    );
  }
}

export default App;

