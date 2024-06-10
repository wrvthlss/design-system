// BrandSwitcher.js
import React, { useState } from 'react';

const BrandSwitcher = ({ onBrandChange }) => {
    const [activeButton, setActiveButton] = useState('anthem');

    const handleMouseEnter = (buttonType) => {
        document.getElementById(`${buttonType}-button`).classList.add('hover');
    };

    const handleMouseLeave = (buttonType) => {
        document.getElementById(`${buttonType}-button`).classList.remove('hover');
    };

    const toggleActiveState = (buttonType) => {
        setActiveButton(buttonType);
        onBrandChange(buttonType); // Notify parent of brand change
    };

    return (
        <div className="proportional-box fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-12">
            {['anthem', 'carelon', 'elevance', 'wellpoint'].map((buttonType) => (
                <React.Fragment key={buttonType}>
                    <button
                        className={`icon-button ${activeButton === buttonType ? 'active' : ''}`}
                        id={`${buttonType}-button`}
                        onMouseEnter={() => handleMouseEnter(buttonType)}
                        onMouseLeave={() => handleMouseLeave(buttonType)}
                        onClick={() => toggleActiveState(buttonType)}
                    >
                        <img src={`https://assets.codepen.io/2154393/icon-brand-${buttonType}-default.svg`} alt={buttonType} className="icon icon-default" />
                        <img src={`https://assets.codepen.io/2154393/icon-brand-${buttonType}-hover_1.svg`} alt={buttonType} className="icon icon-hover" />
                        <img src={`https://assets.codepen.io/2154393/icon-brand-${buttonType}-selected.svg`} alt={buttonType} className="icon icon-selected" />
                    </button>
                    <span className={`bs-text ${activeButton === buttonType ? 'active' : ''}`} id={`${buttonType}-text`}>{buttonType.charAt(0).toUpperCase() + buttonType.slice(1)}</span>
                    <div className="vertical-line"></div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default BrandSwitcher;
