import React, { useState, useRef, useEffect } from 'react';

const AccordionComp = () => {
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

    const handleClick = (index) => {
        setActiveIndex(index);
        if (itemsRef.current[index]) {
            setBarPosition(itemsRef.current[index].offsetTop);
            setBarHeight(itemsRef.current[index].offsetHeight);
        }
    };

    useEffect(() => {
        if (itemsRef.current[activeIndex]) {
            setBarPosition(itemsRef.current[activeIndex].offsetTop);
            setBarHeight(itemsRef.current[activeIndex].offsetHeight);
        }
    }, [activeIndex]);

    return (
        <div className="p-4 relative">
            <div className="flex items-center justify-between cursor-pointer" onClick={toggleAccordion}>
                <h2 className="text-lg font-semibold">Components</h2>
                <div className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                </div>
            </div>
            {isOpen && (
                <ul className="mt-4 relative">
                    <div className="absolute left-0 bg-green-500 w-1 h-full transition-transform duration-300" style={{ transform: `translateY(${barPosition}px)`, height: `${barHeight}px` }}></div>
                    {items.map((item, index) => (
                        <li
                            ref={el => itemsRef.current[index] = el}
                            key={index}
                            className={`py-2 pl-4 pr-2 cursor-pointer ${index === activeIndex ? 'font-bold' : 'font-normal'}`}
                            onClick={() => handleClick(index)}
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