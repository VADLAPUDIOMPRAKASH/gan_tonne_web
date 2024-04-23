import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className="topbar">
            <h1>Farmers Market</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sell">SELL</Link></li>
                    <li><Link to="/buy">BUY</Link></li>
                    <li><Link to="/make">MAKE</Link></li>
                    <li><Link to="/blogs">BLOG</Link></li>
                    <li><Link to="/logistics">LOGISTICS</Link></li>
                    <li><Link to="/weather-forecast">WEATHER FORECASTING</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                </ul>
            </nav>
            <div>
                <select>
                    <option value="en">English</option>
                    <option value="te">తెలుగు (Telugu)</option>
                </select>
            </div>
        </div>
    );
};

export default TopBar;
