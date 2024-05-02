import React from 'react';
import CompCard from './CompCard';

const CompCatalog = () => {
    return (
        <div className="flex-grow md:ml-4 bg-gray-100 p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <CompCard label="Alert" />
                <CompCard label="Button" />
                <CompCard label="Checkbox" />
                {/* Add more CompCards as needed */}
            </div>
        </div>
    );
}

export default CompCatalog;
