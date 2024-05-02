import React from 'react';
import CompCard from './CompCard';

const CompCatalog = () => {
    return (
        <>
            <div className="bg-white p-4 md:p-12 mobile-hidden" style={{
                paddingTop: '48px', // 48px top padding
                paddingLeft: '96px', // 96px left padding on desktop
                paddingRight: '268px', // 268px right padding on desktop
                paddingBottom: '32px' // Consistent bottom padding
            }}>
                <h1 className="text-2xl font-bold mb-4" style={{ lineHeight: '34px' }}>Components</h1>
                <p className="text-sm text-gray-600 mb-6" style={{ lineHeight: '20px' }}>
                    Below, find our curated collection of components, each designed for scalability and user engagement.
                    Click on any component to view detailed documentation, including design specifications, code snippets,
                    and implementation tips.
                </p>
                <div className={`grid gap-4 mb-4 md:grid-cols-3 sm:grid-cols-2`}>
                    <CompCard label="Alert" />
                    <CompCard label="Button" />
                    <CompCard label="Checkbox" />
                    {/* Add more CompCards as needed */}
                </div>
            </div>
            <div className="bg-white p-4 md:p-12 sm:block lg:hidden md:hidden" style={{
                paddingTop: '48px', // 48px top padding
                paddingLeft: '20px', // 96px left padding on desktop
                paddingRight: '20px', // 268px right padding on desktop
                paddingBottom: '32px' // Consistent bottom padding
            }}>
                <h1 className="text-2xl font-bold mb-4" style={{ lineHeight: '34px' }}>Components</h1>
                <p className="text-sm text-gray-600 mb-6" style={{ lineHeight: '20px' }}>
                    Below, find our curated collection of components, each designed for scalability and user engagement.
                    Click on any component to view detailed documentation, including design specifications, code snippets,
                    and implementation tips.
                </p>
                <div className={`grid gap-4 mb-4 md:grid-cols-3 sm:grid-cols-2`}>
                    <CompCard label="Alert" />
                    <CompCard label="Button" />
                    <CompCard label="Checkbox" />
                    {/* Add more CompCards as needed */}
                </div>
            </div>
        </>
    );
}

export default CompCatalog;