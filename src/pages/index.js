import React, { useState, useEffect } from 'react';
import MastheadContainer from '../components/home/MastheadContainer';
import MastheadHero from '../components/home/MastheadHero';
import LeftRail from '../components/home/LeftRail';
import MobileHeroCarousel from '../components/home/MobileHeroCarousel';
import Footer from '../components/shared/Footer';
import SubFooter from '../components/shared/SubFooter';

import cardData from '../components/home/CardData';

import ColorCard from '../components/home/ColorCard';
import ImageCard from '../components/home/ImageCard';
import GlobalNav from '../components/shared/GlobalNav';
import GNav from '../components/shared/GNav'


function Home() {
    const [navState, setNavState] = useState({ getStarted: false, getInvolved: false, resources: false });

    function separateAndInterleaveColumns(colorCards, imageCards) {
        const leftColumnCards = [];
        const rightColumnCards = [];
        const interleavedCards = [];

        // Interleave for mobile
        const maxLength = Math.max(colorCards.length, imageCards.length);
        for (let i = 0; i < maxLength; i++) {
            if (colorCards[i]) interleavedCards.push({ ...colorCards[i], type: 'ColorCard' });
            if (imageCards[i]) interleavedCards.push({ ...imageCards[i], type: 'ImageCard' });
        }

        // Separate for desktop
        interleavedCards.forEach((card, index) => {
            if (index % 2 === 0) {
                leftColumnCards.push(card);
            } else {
                rightColumnCards.push(card);
            }
        });

        return { leftColumnCards, rightColumnCards, interleavedCards };
    }

    const { leftColumnCards, rightColumnCards, interleavedCards } = separateAndInterleaveColumns(cardData.colorCards, cardData.imageCards);

    useEffect(() => {
        function handleDocumentClick(event) {
            const clickedElement = event.target;
            // Check if it's outside the GlobalNav
            if (!clickedElement.closest('#globalNav')) {
                setNavState({ getStarted: false, getInvolved: false, resources: false });
            }
        }
        document.addEventListener('mousedown', handleDocumentClick);
        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
        };
    }, []);




    return (
        <>
            <GNav />
            <div className='inter-font'>
                <div className="w-full">
                    <MastheadContainer /> {/* Full width component */}
                </div>
                <div className="lg:px-19"> {/* Adds 76px padding inside the component for all other components */}
                    <MastheadHero />
                    <div className='sm:hidden'>
                        <MobileHeroCarousel />
                    </div>
                    <div className="card-gallery flex">
                        <div className="hidden sm:block">
                            <LeftRail />
                        </div>
                        <div className='hidden sm:block flex-grow' style={{ marginLeft: 'auto', maxWidth: 'calc(80% - 46px)' }}>
                            <div className="flex">
                                {/* Left Column */}
                                <div className="flex-1 left-card-column md:mr-0 lg:mr-24">
                                    {leftColumnCards.map((card) => {
                                        const Component = card.type === 'ColorCard' ? ColorCard : ImageCard;
                                        return <Component key={card.id} {...card} />;
                                    })}
                                </div>
                                {/* Right Column with top offset */}
                                <div className="flex-1 mt-32">
                                    {rightColumnCards.map((card) => {
                                        const Component = card.type === 'ColorCard' ? ColorCard : ImageCard;
                                        return <Component key={card.id} {...card} />;
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* Mobile gallery */}
                        <div className="sm:hidden flex-grow bg-white border-b-1 p-4">
                            <div className="flex flex-col gap-4 my-4">
                                {interleavedCards.map((card, index) => {
                                    const CardComponent = card.type === 'ColorCard' ? ColorCard : ImageCard;
                                    return <CardComponent key={index} {...card} mobile={true} />;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <SubFooter />
            </div>
        </>
    );
}

export default Home;

