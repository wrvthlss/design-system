// components/ImageCard.js
import React from 'react';

function ImageCard({ image, headline, details, signature, date }) {
    return (
        <div>
            <img src={image} className='bg-white' alt="Card image"/>
            <div className="text-left p-2" style={{ maxWidth: "360px"}}>
                <h2 className="text-2xl font-bold mt-1">{headline}</h2>
                <p className="text-sm mt-4 mb-8">{details}</p>
                <p className="font-bold">{signature}</p>
                <p>{date}</p>
            </div>
        </div>
    );
}

export default ImageCard;
