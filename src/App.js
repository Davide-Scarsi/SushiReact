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
      { id: 0, nome: "California", prezzo: 1.99, immagine: california, quantità: 0 },
      { id: 1, nome: "Dragon", prezzo: 2, immagine: dragon, quantità: 0 },
      { id: 2, nome: "Dynamite", prezzo: 1.3, immagine: dynamite, quantità: 0 },
      { id: 3, nome: "Philadelphia", prezzo: 2.4, immagine: philadelphia, quantità: 0 },
      { id: 4, nome: "Rainbow", prezzo: 0.8, immagine: rainbow, quantità: 0 },
      { id: 5, nome: "Shrimp", prezzo: 1.4, immagine: shrimp, quantità: 0 }
    ]
  }

  // Funzione del componente padre "App" che filtra le Cards con id diverso da quello passato in funzione (gli viene passato l'id della card)
  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId); 
    this.setState({cards})
  }

  // Funzione del componente padre "App" che aumenta il parametro quantità sulla card 
  handleIncrement = card => {
    const cards = [...this.state.cards]; // Prendo in blocco l'oggetto con i dati delle cards e lo trasformo in un array
    const id = cards.indexOf(card); //Passo l'intero oggetto (che è quello del bottone premuto) e mi dice a che posizione dell'array si trova (indice)
    cards[id] = {... card}; //Passaggio inutile che non ho capito 
    cards[id].quantità++; //Incremento proprietà "quantità" all'aggetto selezionato dell elenco
    this.setState({cards}) //Aggiorno lo stato
  }





  render() {
    return (
      <>
        <Navbar />


        <div className='container'>
          <h1>Cosa vuoi ordinare?</h1>
          <hr></hr>
          <div className='row'>



            {/* CREA CARDS */}
            {/* Con questo map ciclo tutto l'array "cards" dell'oggetto "state" e passo ad ogni card i suoi parametri */}
            {this.state.cards.map(e => (
              <Card
              key = {e.id}
              // Ondelete lancia la funzione padre "handleDelete" passando come dato l'id della card
              onDelete = {this.handleDelete}
              // onIncrement lancia la funzione padre "handleIncrement" passando come dato l'intera card
              onIncrement = {this.handleIncrement}
              card = {e} />
            ))}




          </div>

        </div>
      </>

    );
  }
}

export default App;

