import React, {Component} from 'react';


class Card extends Component {
    render(){
        return (
            <div className='col'>
                <div className="card" style={{width: '18rem', textAligh: 'center'}}>
                    <img src={immagine} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{nome} roll</h5>
                        <p className="card-text">€{prezzo}</p>
                        <button className="btn btn-primary">Elimina</button>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Card;