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
  state = {
    cards: [
      { id: 0, nome: "California", prezzo: 1.99, immagine: california },
      { id: 1, nome: "Dragon", prezzo: 2, immagine: dragon },
      { id: 2, nome: "Dynamite", prezzo: 1.3, immagine: dynamite },
      { id: 3, nome: "Philadelphia", prezzo: 2.4, immagine: philadelphia },
      { id: 4, nome: "Rainbow", prezzo: 0.8, immagine: rainbow },
      { id: 5, nome: "Shrimp", prezzo: 1.4, immagine: shrimp }
    ]
  }
  render() {
    return (
      <>
        <Navbar />


        <div className='container'>
          <h1>Cosa vuoi mangiare?</h1>
          <hr></hr>
          <div className='row'>

            {this.state.cards.map(e => (
              <Card 
              key={e.id}
              nome={e.nome} 
              immagine={e.immagine} 
              prezzo={e.prezzo} />
            ))}

          </div>

        </div>
      </>

    );
  }
}

export default App;

