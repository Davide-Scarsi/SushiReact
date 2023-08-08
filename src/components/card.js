import React, {Component} from 'react';
import california from '../images/california.png'

class Card extends Component {
    render(){
        return (
            <div className='col'>
                <div className="card" style={{width: '18rem', textAligh: 'center'}}>
                    <img src={california} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Abstract</h5>
                        <p className="card-text">€2</p>
                        <button className="btn btn-primary">Elimina</button>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Card;