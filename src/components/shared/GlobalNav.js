import React, { useState, useEffect, useMemo } from 'react';
import { throttle } from 'lodash'
import Link from 'next/link';

const GlobalNav = ({ navState, setNavState }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [activeLabel, setActiveLabel] = useState('');
    const [isNavigationVisible, setNavigationVisible] = useState({ getStarted: false, getInvolved: false, resources: false });
    const [isLightMode, setLightMode] = useState(true);
    const [searchQuery, setSearchSubNav] = useState("");

    const handleScroll = throttle(() => {
        const newScrollPosition = window.scrollY;
        setScrollPosition(newScrollPosition);
        setIsActive(newScrollPosition > 300);
    }, 100); // Adjust timing as needed
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleNavigation = (label) => {
        setNavState(prevState => ({
            ...prevState,
            [label]: !prevState[label],
            ...Object.keys(prevState).reduce((acc, key) => {
                if (key !== label) acc[key] = false;
                return acc;
            }, {})
        }));
    };


    const toggleMode = () => setLightMode(!isLightMode);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = () => {
        console.log("Searching for:", searchQuery);
    };

    const navStyle = {
        backgroundColor: 'white',
        boxShadow: '13px 2px 10px 0px black'
    };


    const textColor = '#000';
    const caretColor = '#000';

    const createCaretSVG = useMemo(() => (label) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path
                d="M5 7.14961L0 1.84961L1 0.849609L5 5.34961L9 0.849609L10 1.84961L5 7.14961Z"
                fill={'#000'}
                style={{
                    transform: navState[label] ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease, fill 0.3s ease',
                    transformOrigin: 'center'
                }}
            />
        </svg>
    ), [scrollPosition, isActive, navState]); // Dependencies where if any change, the SVGs are recalculated

    const renderDropdownContent = (label) => {
        if (!navState[label]) return null;
        return (
            <div className="absolute w-full bg-white shadow-lg p-4" style={{ top: '72px', paddingLeft: '249px' }}>
                <p>This is the content for the {label} section.</p>
            </div>
        );
    };

    const githubIcon = '/images/globalnav/github.svg';
    const modeIcon = (isLightMode ? (scrollPosition > 300 || isActive || Object.values(navState).some(val => val) ? '/images/globalnav/light.svg' : '/images/globalnav/light.svg') : (scrollPosition > 300 || isActive || Object.values(navState).some(val => val) ? '/images/globalnav/dark.svg' : '/images/globalnav/dark.svg'));
    const figmaIcon = '/images/globalnav/figma.svg';


    return (
        <div className="w-full fixed top-0 z-50 globalNav" style={navStyle}>
            <div className="container mx-auto flex items-center justify-between px-4 h-19">
                <span className="text-2xl font-bold" style={{ color: textColor, marginLeft: '76px' }}>EDS</span>
                <div className="flex items-center gap-20">
                    {['get Started', 'get Involved', 'resources'].map((label, index) => (
                        <Link key={label + index} href="#" style={{ color: activeLabel === label ? '#000' : textColor, fontWeight: activeLabel === label ? 'bold' : 'normal' }} onClick={(e) => { e.preventDefault(); toggleNavigation(label); }}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                {label.charAt(0).toUpperCase() + label.slice(1)} {createCaretSVG(label)}
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-8 mr-20">
                    <div className="flex items-center bg-white h-10 pl-4 pr-4 rounded-full" style={{ border: '1px solid #e0e0e0', padding: '0 24px', borderRadius: '100px', width: '300px' }}>
                        <img src="/images/globalnav/search.svg" alt="Search" width={20} style={{ cursor: 'pointer' }} onClick={handleSearch} />
                        <input type="text" className="ml-2 text-lg text-gray-600 flex-1 bg-transparent border-none focus:outline-none" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>
                    <span className="h-5 w-px bg-gray-300"></span>
                    <img src={githubIcon} alt="GitHub" width={20} />
                    <img src={figmaIcon} alt="Figma" width={20} />
                    <span className="h-5 w-px bg-gray-300"></span>
                    <img src={modeIcon} alt="Mode Toggle" width={20} onClick={toggleMode} />
                </div>
            </div>
            {['get Started', 'get Involved', 'resources'].map(label => renderDropdownContent(label))}
        </div>
    );
};

export default GlobalNav;
