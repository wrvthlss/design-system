import React, { useState, useEffect } from 'react';

const JumpLinkNav = ({ sections }) => {
    const [activeSection, setActiveSection] = useState(sections[0].id);

    // Smooth scrolling to section
    const scrollToSection = (id) => {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Monitor scroll to update the active section
    useEffect(() => {
        const handleScroll = () => {
            let currentSection = sections[0].id;
            sections.forEach((section) => {
                const sectionElement = document.getElementById(section.id);
                if (sectionElement && window.pageYOffset >= sectionElement.offsetTop - 100) {
                    currentSection = section.id;
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sections]);

    return (
        <div className="sticky top-24 flex flex-col space-y-4 pl-4 relative">
            {/* The "On this page" label */}
            <div className="mb-1 text-sm font-bold">On this page</div>

            {/* Gray vertical line */}
            {/* <div className="absolute h-full left-0 border-l border-gray-300 ml-2" style={{ left: "-7px"}} /> */}

            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left relative ${
                        activeSection === section.id ? 'text-black font-bold' : 'text-gray-600'
                    } text-sm`}
                >
                    {/* Green indicator bar */}
                    {activeSection === section.id && (
                        <div className="absolute -left-4 h-4 w-1 bg-green-500" />
                    )}
                    {section.label}
                </button>
            ))}
        </div>
    );
};

export default JumpLinkNav;
