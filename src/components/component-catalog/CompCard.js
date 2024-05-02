import React from 'react';

const CompCard = ({ image, title, copy }) => {
    return (
        <div className="p-4" style={{
            paddingTop: '24px',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingBottom: '24px',
        }}>
            <div style={{ backgroundColor: "#fafafa", borderRadius: "10px", border: "1px solid #ebebeb"}}>
            <img src={image} alt={title} style={{ width: '200px', height: '124px' }} />
            </div>
            <h2 className="mt-4 mb-2 text-xl font-bold" style={{ lineHeight: '24px' }}>{title}</h2>
            <p className="text-sm text-gray-600" style={{ lineHeight: '20px' }}>{copy}</p>
        </div>
    );
}

export default CompCard;
