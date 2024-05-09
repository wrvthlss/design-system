import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const GlobalNav = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredLabel, setHoveredLabel] = useState('');
    const [isDropdownVisible, setDropdownVisible] = useState({ getStarted: false, getInvolved: false, resources: false });
    const [isLightMode, setLightMode] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    const handleScroll = () => setScrollPosition(window.scrollY);
    const toggleDropdown = (label) => {
        setDropdownVisible((prevState) => ({
            getStarted: label === 'getStarted' ? !prevState.getStarted : false,
            getInvolved: label === 'getInvolved' ? !prevState.getInvolved : false,
            resources: label === 'resources' ? !prevState.resources : false
        }));
    };
    const toggleMode = () => setLightMode(!isLightMode);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = () => {
        // Implement your search logic here using the `searchQuery` value.
        console.log("Searching for:", searchQuery);
    };

    const navStyle = {
        backgroundColor: scrollPosition > 300 || isHovered || Object.values(isDropdownVisible).some((val) => val) ? 'white' : 'transparent',
        boxShadow: scrollPosition > 300 || isHovered || Object.values(isDropdownVisible).some((val) => val) ? '0px 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
    };

    const textColor = scrollPosition > 300 || isHovered || Object.values(isDropdownVisible).some((val) => val) ? '#000' : '#FFF';
    const caretColor = hoveredLabel ? '#000' : (scrollPosition > 300 || isHovered ? '#5D5D5D' : '#FFF');
    const createCaretSVG = (label) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path
                d="M5 7.14961L0 1.84961L1 0.849609L5 5.34961L9 0.849609L10 1.84961L5 7.14961Z"
                fill={label === hoveredLabel ? '#000' : caretColor}
                style={{
                    transform: isDropdownVisible[label] || label === hoveredLabel ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    transformOrigin: 'center'  // This ensures rotation about the center
                }}
            />
        </svg>
    );

    const searchIcon = '/images/globalnav/search.svg';
    const githubIcon = scrollPosition > 300 || isHovered ? '/images/globalnav/github.svg' : '/images/globalnav/github-w.svg';
    const figmaIcon = '/images/globalnav/figma.svg';
    const modeIcon = scrollPosition > 300 || isHovered ? (isLightMode ? '/images/globalnav/light.svg' : '/images/globalnav/dark.svg') : (isLightMode ? '/images/globalnav/light-w.svg' : '/images/globalnav/dark-w.svg');

    return (
        <div
            className="w-full fixed top-0 z-50"
            style={navStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="container mx-auto flex items-center justify-between px-4 h-19">
                <span className="text-2xl font-bold" style={{ color: textColor, marginLeft: '76px' }}>EDS</span>
                <div className="flex items-center gap-20">
                    <Link href="/get-started" style={{ color: hoveredLabel === 'getStarted' ? '#000' : textColor, fontWeight: hoveredLabel === 'getStarted' ? 'bold' : 'normal' }} onMouseEnter={() => setHoveredLabel('getStarted')} onMouseLeave={() => setHoveredLabel('')}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            Get Started {createCaretSVG('getStarted')}
                        </span>
                    </Link>
                    <Link href="/get-involved" style={{ color: hoveredLabel === 'getInvolved' ? '#000' : textColor, fontWeight: hoveredLabel === 'getInvolved' ? 'bold' : 'normal' }} onMouseEnter={() => setHoveredLabel('getInvolved')} onMouseLeave={() => setHoveredLabel('')}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            Get Involved {createCaretSVG('getInvolved')}
                        </span>
                    </Link>
                    <Link href="/resources" style={{ color: hoveredLabel === 'resources' ? '#000' : textColor, fontWeight: hoveredLabel === 'resources' ? 'bold' : 'normal' }} onMouseEnter={() => setHoveredLabel('resources')} onMouseLeave={() => setHoveredLabel('')}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            Resources {createCaretSVG('resources')}
                        </span>
                    </Link>
                </div>
                <div className="flex items-center gap-8 mr-20">
                    <div
                        className="flex items-center bg-white h-10 pl-4 pr-4 rounded-full"
                        style={{ border: '1px solid #e0e0e0', padding: '0 24px', borderRadius: '100px', width: '300px' }}
                    >
                        <img
                            src={searchIcon}
                            alt="Search"
                            width={20}
                            style={{ cursor: 'pointer' }}
                            onClick={handleSearch}
                        />
                        <input
                            type="text"
                            className="ml-2 text-lg text-gray-600 flex-1 bg-transparent border-none focus:outline-none"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <span className="h-5 w-px bg-gray-300"></span>
                    <img src={githubIcon} alt="GitHub" width={20} />
                    <img src={figmaIcon} alt="Figma" width={20} />
                    <span className="h-5 w-px bg-gray-300"></span>
                    <img src={modeIcon} alt="Mode Toggle" width={20} onClick={toggleMode} />
                </div>
            </div>
        </div>
    );
};

export default GlobalNav;
