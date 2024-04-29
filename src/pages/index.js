import React from 'react';
import MastheadLockup from '../components/MastheadLockup';

const MastheadContainer = () => (
  <div className="bg-gradient-to-r from-masthead-start to-masthead-end h-64 text-white p-8">
    <MastheadLockup/>
  </div>
);

const MastheadHero = () => (
  <div className="bg-gray-300 h-48 p-8">Masthead Hero</div>
);

const LeftRail = () => (
  <div className="bg-gray-200 w-20 p-8">Left Rail</div>
);

const ColorCard = ({ bgColor }) => (
  <div className={`h-32 w-full ${bgColor} m-2 shadow-lg rounded-lg`}>Color Card</div>
);

const ImageCard = () => (
  <div className="h-32 w-full bg-gray-400 m-2 shadow-lg rounded-lg">Image Card</div>
);

const MobileHeroCarousel = () => (
  <div className="bg-gray-500 h-32 p-8">Mobile Hero Carousel</div>
);

const Footer = () => (
  <div className="bg-gray-600 h-20 p-8">Footer</div>
);

const SubFooter = () => (
  <div className="bg-gray-700 h-10 p-8">Sub Footer</div>
);

function Home() {
  return (
    <div className="container mx-auto px-4">
      <MastheadContainer />
      <MastheadHero />
      <div className="flex">
        <LeftRail />
        <div className="grid grid-cols-2 gap-4 flex-1">
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
      <MobileHeroCarousel />
      <Footer />
      <SubFooter />
    </div>
  );
}

export default Home;
