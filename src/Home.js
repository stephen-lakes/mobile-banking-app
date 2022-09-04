import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
    
    return (
        <div className="home">
            <div className="logo-wrapper">
                <h1>Mobile Banking</h1>
            </div>
            <div className="balance-preview">
                <h3>Your balance</h3>
                <p>$1,200,000</p>
            </div>
            <div className="section-wrapper">
                <h2>Quick Transactions</h2>
                <ul className="flex">
                    <li><Link to="/transfer">Transfer</Link></li>
                    <li><Link to="/data">Data&Airtime</Link></li>
                    <li><Link to="/bills">Bills</Link></li>
                    <li><Link to="/loan">Loan</Link></li>
                    <li><Link to="/invest">Invest</Link></li>
                    <li><Link to="/cable">Cable Subscription</Link></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Home;