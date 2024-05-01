import React from 'react';

const MastheadHero = () => (
    <div className="relative bg-cover bg-center h-[625px] text-black p-8" style={{ backgroundImage: 'url(/images/hero-bg-light.png)', marginTop: '-330px' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div> {/* Adjusted gradient direction */}
        <div className="relative z-10 flex flex-col justify-center h-full w-full">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
                <div className="col-span-1 max-w-[460px] px-8">
                    <div className="flex items-start space-x-2 mb-6"> {/* Flex container for headline and SVG */}
                        <h2 className="text-4xl font-semibold" style={{ fontSize: '4rem', fontWeight: 600 }}>
                            EDS 1.9.2
                        </h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M1.41176 0V3.98118L17.1812 3.99529L0 21.1765L2.82353 24L20.0047 6.81882L20.0188 22.5882H24V0H1.41176Z" fill="black" />
                        </svg>
                    </div>
                    <p className="text-xs font-medium mb-4" style={{ fontSize: '0.75rem', fontWeight: 500 }}>
                        <a href="#" className="underline text-black">Releases</a>,
                        <a href="#" className="underline text-black"> Tokens</a>,
                        <a href="#" className="underline text-black"> Figma</a>,
                        <a href="#" className="underline text-black"> Variables</a>
                    </p>
                    <p className="text-xl font-semibold mb-4" style={{ fontSize: '2rem', fontWeight: 600 }}>
                        NEW: Variable-driven brand & theme modes
                    </p>
                    <p className="mb-4 opacity-75" style={{ fontSize: '0.875rem', lineHeight: '1.375' }}>
                        We're excited to announce a pivotal enhancement to our Figma design system--Variables!
                    </p>
                    <button className="bg-primary text-white px-6 py-2 rounded-full w-full sm:w-auto" style={{ padding: '10px 24px' }}>Try it out</button> {/* Responsive full width */}
                </div>
                <div className="col-span-1 hidden md:block"> {/* Second column empty or for future use */}
                    {/* Additional content or empty for spacing */}
                </div>
            </div>
        </div>
    </div>
);

export default MastheadHero;