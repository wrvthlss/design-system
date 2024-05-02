import React from 'react';

const CompCard = ({ label }) => {
    return (
        <div className="bg-white p-4 shadow rounded">
            <h3 className="font-bold">{label}</h3>
            <p>Details about the {label} component.</p>
        </div>
    );
}

export default CompCard;
