// JumpLinkNavMobi.js
import React from 'react';

const JumpLinkNavMobi = ({ sections, onNavigate }) => {
    return (
        <div className="bg-white pl-6">
            {/* Header */}
            <div className="text-2xl font-bold" style={{ lineHeight: '34px' }}>
                On this page
            </div>
            {/* Navigation Links */}
            <ul className="mt-2">
                {sections.map((section, index) => (
                    <li key={index} className="mt-2">
                        <button
                            onClick={() => onNavigate(section.id)}
                            className="underline text-green-700 text-sm"
                            style={{ lineHeight: '24px' }}
                        >
                            {section.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JumpLinkNavMobi;