import React from 'react';

function ColorCard({ bgColor, version, details, linkText, signature, date }) {
    return (
        <div className={`${bgColor} text-white p-8 rounded-lg shadow-lg`} style={{ maxWidth: "360px"}}>
            <h2 className="text-2xl font-bold">{version}</h2>
            <ul className="text-sm opacity-75 mt-4 mb-4 leading-7 ml-3">
                {details.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <a href="#" className="underline font-bold">{linkText}</a>
            <div className="mt-8">
                <p className="font-bold">{signature}</p>
                <p>{date}</p>
            </div>
        </div>
    );
}

export default ColorCard;
