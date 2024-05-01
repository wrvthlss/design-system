import React from 'react';
import MastheadContainer from '../components/MastheadContainer';
import MastheadHero from '../components/MastheadHero';
import LeftRail from '../components/LeftRail';
import MobileHeroCarousel from '../components/MobileHeroCarousel';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';

import cardData from '../components/CardData';

import ColorCard from '../components/ColorCard';
import ImageCard from '../components/ImageCard';



function Home() {
    return (
        <div className="container mx-auto px-4">
            <div className="w-full">
                <MastheadContainer /> {/* Full width component */}
            </div>
            <div className="lg:px-19"> {/* Adds 76px padding inside the component for all other components */}
                <MastheadHero />
                <div className='sm:hidden'>
                    <MobileHeroCarousel />
                </div>
                <div className="flex">
                    <div className="hidden sm:block">
                        <LeftRail />
                    </div>
                    <div style={{ marginLeft: 'auto', maxWidth: 'calc(100% - 76px)' }}>

                        <div className="galleryGrid grid-cols-2 gap-48 flex-1 my-30 align-items-start">
                            {/* Dynamically render cards based on data */}
                            {cardData.colorCards.map((card) => (
                                <ColorCard bgColor="bg-card-blue" key={card.id} {...card} />
                            ))}
                            <div className='my-60'>
                                {cardData.imageCards.map((card) => (
                                    <ImageCard key={card.id} {...card} />
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <SubFooter />
        </div>
    );
}

export default Home;
