import React from 'react';
import MastheadLockup from './MastheadLockup';

const MastheadContainer = () => (
    <div className="mh-bg w-full h-screen mx-auto relative">
        <div className="gradient-container absolute inset-0 z-0">
            <span className='gradient-color'></span>
            <span className='gradient-color'></span>
            <span className='gradient-color'></span>
            <span className='gradient-color'></span>
            <span className='gradient-backdrop'></span>
        </div>
        <div className="lockup-container absolute inset-0 z-10 flex justify-center items-center">
            <MastheadLockup />
        </div>
    </div>
);

export default MastheadContainer;