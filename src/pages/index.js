import React from 'react';
import MastheadContainer from '../components/MastheadContainer';
import MastheadHero from '../components/MastheadHero';
import LeftRail from '../components/LeftRail';
import MobileHeroCarousel from '../components/MobileHeroCarousel';
import Footer from '../components/Footer';

const ColorCard = ({ bgColor }) => (
    <div className={`h-32 w-full ${bgColor} m-2 shadow-lg rounded-lg`}>Color Card</div>
);

const ImageCard = () => (
    <div className="h-32 w-full bg-gray-400 m-2 shadow-lg rounded-lg">Image Card</div>
);

const SubFooter = () => (
    <div className="bg-white h-10 p-8">Sub Footer</div>
);

function Home() {
    return (
        <div className="container mx-auto px-4">
            <div className="w-full">
                <MastheadContainer /> {/* Full width component */}
            </div>
            <div className="lg:px-19 px-0"> {/* Adds 76px padding inside the component for all other components */}
                <MastheadHero />
                <div className='sm:hidden'>
                    <MobileHeroCarousel />
                </div>
                <div className="flex">
                    <div className="hidden sm:block">
                        <LeftRail />
                    </div>
                    <div className="grid grid-cols-2 gap-4 flex-1 my-30">
                        {/* Row 1 */}
                        <ColorCard bgColor="bg-card-blue" />
                        <ImageCard />

                        {/* Row 2 */}
                        <ImageCard />
                        <ImageCard />

                        {/* Row 3 */}
                        <ColorCard bgColor="bg-card-green" />
                        <ColorCard bgColor="bg-card-purple" />

                        {/* Row 4 */}
                        <ColorCard bgColor="bg-card-lightblue" />
                        <ColorCard bgColor="bg-card-blue" />
                    </div>
                </div>
            </div>
            <Footer />
            <SubFooter />
        </div>
    );
}

export default Home;
