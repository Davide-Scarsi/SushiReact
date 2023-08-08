import React, { Component } from 'react';
import Navbar from './components/navbar';
import Card from './components/card';

import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';


class App extends Component {
  render() {
    return (
      <>
        <Navbar />


        <div className='container'>
          <h1>Cosa vuoi mangiare?</h1>
          <hr></hr>
          <div className='row'>
            <Card 
            immagine ={california}
            nome = "California"
            prezzo = {1.99}
            />
            <Card 
            immagine ={dragon}
            nome = "Dragon"
            prezzo = {2}
            />
            <Card 
            immagine ={dynamite}
            nome = "Dynamite"
            prezzo = {1.3}
            />
            <Card 
            immagine ={philadelphia}
            nome = "Philadelphia"
            prezzo = {2.4}
            />
            <Card 
            immagine ={rainbow}
            nome = "Rainbow"
            prezzo = {0.8}
            />
            <Card 
            immagine ={shrimp}
            nome = "Shrimp"
            prezzo = {1.4}
            />

          </div>

        </div>
      </>

    );
  }
}

export default App;

