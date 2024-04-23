import React from 'react';

import Card from '../../components/Card/Card';
import './Home.css';
import sellImage from '../../assets/sell.png';
import buyImage from '../../assets/buy.png';
import makeImage from '../../assets/make.png';
import logisticsImage from '../../assets/logistics.png';
import mandiPricesImage from '../../assets/mandiprices.png';

const Home = () => {
    return (
        <div className="home">
            
            <div className="card-container">
            <Card title="SELL" imageUrl={sellImage} linkTo="/sell" />
            <Card title="BUY" imageUrl={buyImage} linkTo="/buy" />
            <Card title="MAKE" imageUrl={makeImage} linkTo="/make" />
            <Card title="LOGISTICS" imageUrl={logisticsImage} linkTo="/logistics" />
            <Card title="MANDI PRICES" imageUrl={mandiPricesImage} linkTo="/mandiprices" />

            </div>
            {/* Add farmer and buyer detail cards here */}
        </div>
    );
};

export default Home;
