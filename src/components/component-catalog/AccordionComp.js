// AccordionComp.js
import React, { useState, useRef, useEffect } from 'react';

const AccordionComp = ({ onChangePage }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [barPosition, setBarPosition] = useState(0);
    const [barHeight, setBarHeight] = useState(0);
    const itemsRef = useRef([]);

    const items = [
        { name: "Overview" },
        { name: "Buttons" },
        { name: "Checkbox" },
        { name: "Dropdown" }
    ];

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = (index, name) => {
        setActiveIndex(index);
        if (itemsRef.current[index]) {
            setBarPosition(itemsRef.current[index].offsetTop);
            setBarHeight(itemsRef.current[index].offsetHeight);
        }
        onChangePage(name); // Pass the name back to switch pages
    };

    useEffect(() => {
        if (itemsRef.current[activeIndex]) {
            setBarPosition(itemsRef.current[activeIndex].offsetTop);
            setBarHeight(itemsRef.current[activeIndex].offsetHeight);
        }
    }, [activeIndex]);


    return (
        <div className="hidden lg:block p-4 relative pl-14">
            <div className="flex items-center justify-between cursor-pointer" onClick={toggleAccordion}>
                <h2 className="text-lg font-semibold mr-3">Components</h2>
                <div className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none" className="w-3 h-3 fill-current transform origin-center">
                        <path d="M5 7.14961L0 1.84961L1 0.849609L5 5.34961L9 0.849609L10 1.84961L5 7.14961Z" />
                    </svg>
                </div>
            </div>


            {isOpen && (
                <ul className="mt-4 relative">
                    <div className="absolute left-0 bg-green-500 w-1 top-2 transition-transform duration-300" style={{ transform: `translateY(${barPosition}px)`, height: `24px` }}></div>
                    {items.map((item, index) => (
                        <li
                            ref={el => itemsRef.current[index] = el}
                            key={index}
                            className={`py-2 pl-4 pr-2 cursor-pointer ${index === activeIndex ? 'font-bold' : 'font-normal'}`}
                            onClick={() => handleClick(index, item.name)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AccordionComp;
