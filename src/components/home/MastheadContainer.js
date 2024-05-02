import React from 'react';
import MastheadLockup from './MastheadLockup';

const MastheadContainer = () => (
    <div className="w-full h-[832px] mx-auto bg-diagonal-gradient from-masthead-start via-masthead-highlight to-masthead-end">
        <div className="pt-[204px]">
            <MastheadLockup />
        </div>
    </div>
);

export default MastheadContainer;
