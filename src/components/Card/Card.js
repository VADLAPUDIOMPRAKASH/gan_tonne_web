import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ title, imageUrl, linkTo }) => {
    return (
        <div className="card">
            <Link to={linkTo}>
                <img src={imageUrl} alt={title} />
                <h2>{title}</h2>
            </Link>
        </div>
    );
};

export default Card;
