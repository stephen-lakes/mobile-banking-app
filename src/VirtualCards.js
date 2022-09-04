import { useState} from 'react';
import { Link } from 'react-router-dom';

const VirtualCards = () => {
    const [cards, setcards] = useState([
        {title: 'Netflix Subscription', cardNumber: '4000 0600 0000 0006', CVV:100, expDate: '11/26'},
        {title: 'Transport Fare', cardNumber: '4293 1891 0000 0008', CVV: 101, expDate: '10/25'},
        {title: 'Ozone Cinemas', cardNumber: '7023 1801 0410 0004', CVV: 102, expDate: '10/25'}
    ])
    return (
        <div className="virtual-cards">
            <h2 className="title">Cards</h2>
            <ul className="list">
                {
                    cards.map((card) => (
                        <div className="card-preview">
                            <Link to={`/cards/${card.cardNumber}`}>
                                <p className="card-title row-1">{ card.title }</p>
                                <p className="row-2">
                                    <span className="card-number">{card.cardNumber }</span>
                                    <p className="exp-date">{ card.expDate }</p>
                                </p>
                            </Link>
                        </div>
                    ))
                };
            </ul>
        </div>

    );
}
 
export default VirtualCards;