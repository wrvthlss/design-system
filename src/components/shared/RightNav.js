// RightNav.js
import React, { useEffect, useRef, useState } from 'react';

const RightNav = ({ sections }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const barRef = useRef(null);
    const itemRefs = useRef([]);

    const handleClick = (index, sectionId) => {
        // Scroll to the section
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        setActiveIndex(index);
    };

    const handleScroll = () => {
        // Determine which section is currently visible
        const offset = 80; // Adjust this value as needed
        let currentIndex = 0;
        for (let i = 0; i < sections.length; i++) {
            const section = document.getElementById(sections[i].id);
            if (window.scrollY + offset >= section.offsetTop) {
                currentIndex = i;
            }
        }
        setActiveIndex(currentIndex);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Update the green bar position
        const item = itemRefs.current[activeIndex];
        if (item) {
            barRef.current.style.top = `${item.offsetTop}px`;
            barRef.current.style.height = `${item.offsetHeight}px`;
        }
    }, [activeIndex]);

    return (
        <div className="sticky top-20 p-4" style={{ width: '200px', borderLeft: '1px solid #ebebeb' }}>
            <h2 className="text-sm font-bold mb-4 text-black">On this page</h2>
            <div className="relative">
                <div
                    ref={barRef}
                    className="absolute bg-green-500 transition-all duration-300"
                    style={{ width: '3px', height: '16px' }}
                ></div>
                <ul>
                    {sections.map((section, index) => (
                        <li
                            key={index}
                            ref={el => (itemRefs.current[index] = el)}
                            className={`cursor-pointer pl-4 mb-4 ${
                                activeIndex === index ? 'font-bold text-black' : 'text-gray-600'
                            }`}
                            onClick={() => handleClick(index, section.id)}
                        >
                            {section.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RightNav;
