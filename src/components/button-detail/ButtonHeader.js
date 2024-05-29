// ButtonHeader.js
import React, { useState, useEffect, useRef } from 'react';

const ButtonHeader = ({ onTabChange }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [barPosition, setBarPosition] = useState(0);
    const [barWidth, setBarWidth] = useState(0);
    const tabRefs = useRef([]);

    const tabs = ['Overview', 'Examples', 'Accessibility'];

    const handleClick = (index) => {
        setActiveTab(index);
        if (tabRefs.current[index]) {
            setBarPosition(tabRefs.current[index].offsetLeft);
            setBarWidth(tabRefs.current[index].offsetWidth);
        }
        // Ensure the callback is called
        if (onTabChange) {
            onTabChange(tabs[index]);
        }
    };

    useEffect(() => {
        if (tabRefs.current[activeTab]) {
            setBarPosition(tabRefs.current[activeTab].offsetLeft);
            setBarWidth(tabRefs.current[activeTab].offsetWidth);
        }
    }, [activeTab]);

    return (
        <div className="bg-white p-4 md:p-12" style={{
            paddingTop: '78px',
            paddingRight: '24px',
            paddingBottom: '0px',
            paddingLeft: '24px',
            color: '#000',
            backgroundColor: '#fff',
            borderBottom: '1px solid #ebebeb',
        }}>
            <h1 className="text-4xl font-bold mb-2">Buttons</h1>
            <p className="text-gray-600 leading-6">
                Buttons initiate actions, with their labels clearly indicating what will happen when interacted
                with by users, ensuring an intuitive user experience.
            </p>
            <div className="relative mt-8 flex gap-6">
                {tabs.map((tab, index) => (
                    <span
                        key={index}
                        ref={el => tabRefs.current[index] = el}
                        className={`cursor-pointer pb-2 ${activeTab === index ? 'font-bold text-black' : 'text-gray-500'}`}
                        onClick={() => handleClick(index)}
                    >
                        {tab}
                    </span>
                ))}
                <div className="absolute bg-green-500 h-1 transition-all duration-300 ease-out" style={{ left: `${barPosition}px`, width: `${barWidth}px`, bottom: 0 }} />
            </div>
        </div>
    );
};

export default ButtonHeader;
