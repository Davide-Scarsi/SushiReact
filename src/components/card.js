import React, {Component} from 'react';


class Card extends Component {
    render(){
        return (
            <div className='col-4'>
                <div className="card" style={{width: '18rem', textAligh: 'center'}}>
                    <img src={this.props.immagine} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.nome} roll</h5>
                        <p className="card-text">€{this.props.prezzo}</p>
                        <button className="btn btn-primary">Elimina</button>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Card;