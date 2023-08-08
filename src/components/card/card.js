import "./card.css"
import React, { Component } from 'react';


class Card extends Component {
    render() {
        return (
            <div className='col-12 col-md-6 col-lg-4'>
                <div className="card" style={{ width: '18rem', textAligh: 'center' }}>
                    <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-primary">Aggiungi 
                        <span className='badge bg-white text-dark ms-2'>{this.props.card.quantità}</span>
                    </button>
                    <img src={this.props.card.immagine} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.nome} roll</h5>
                        <p className="card-text">€{this.props.card.prezzo}</p>
                        <button onClick={() => this.props.onDelete(this.props.card.id)} className="btn btn-outline-danger">Elimina</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Card;