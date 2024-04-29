import React from 'react';

const MastheadContainer = () => <div className="bg-gradient-to-r from-masthead-start to-masthead-end h-64 text-white p-8">Masthead Container</div>;
const MastheadHero = () => <div className="bg-gray-300 h-48 p-8">Masthead Hero</div>;
const LeftRail = () => <div className="bg-gray-200 w-20 p-8">Left Rail</div>;
const ImageCard = () => <div className="bg-gray-400 h-32 p-8">Image Card</div>;
const MobileHeroCarousel = () => <div className="bg-gray-500 h-32 p-8">Mobile Hero Carousel</div>;
const Footer = () => <div className="bg-gray-600 h-20 p-8">Footer</div>;
const SubFooter = () => <div className="bg-gray-700 h-10 p-8">Sub Footer</div>;

function Home() {
    return (
        <div className="container mx-auto px-4">
            <MastheadContainer />
            <MastheadHero />
            <div className="flex">
                <LeftRail />
                <div className="flex-1 space-y-4">
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                </div>
            </div>
            <MobileHeroCarousel />
            <Footer />
            <SubFooter />
        </div>
    );
}

export default Home;
