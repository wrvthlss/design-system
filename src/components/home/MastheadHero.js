import React from 'react';

const MastheadHero = () => (
    <div className="hero-container inter-font border-t-8 text-white relative h-[800px] p-8" style={{ backgroundColor: '#1355E9', backgroundImage: 'url(/images/hero-bg-light.png)', backgroundPosition: 'right', marginTop: '-265px', backgroundRepeat: 'no-repeat'}}>
        <div className="hero-lockup relative z-10 flex flex-col w-full" style={{height:'135%'}}>
            <div className="grid">
                <div className="lkup col-span-1 max-w-[480px] px-8 pt-52">
                    <div className="flex items-start space-x-2 mb-6"> {/* Flex container for headline and SVG */}
                        <h2 className="hero-headline text-4xl font-semibold" style={{ fontSize: '4rem', fontWeight: 600 }}>
                            EDS 1.9.2
                        </h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M1.41176 0V3.98118L17.1812 3.99529L0 21.1765L2.82353 24L20.0047 6.81882L20.0188 22.5882H24V0H1.41176Z" fill="white" />
                        </svg>
                    </div>
                    <p className="text-xs font-medium mb-4" style={{ fontSize: '0.75rem', fontWeight: 500 }}>
                        <a href="#" className="underline">Releases</a>,
                        <a href="#" className="underline"> Tokens</a>,
                        <a href="#" className="underline"> Figma</a>,
                        <a href="#" className="underline"> Variables</a>
                    </p>
                    <p className="hero-sub-headline text-xl font-semibold mb-4 leading-8" style={{ fontSize: '2rem', fontWeight: 600 }}>
                        NEW: Variable-driven brand & theme modes
                    </p>
                    <p className="mb-4 opacity-75" style={{ fontSize: '0.875rem', lineHeight: '1.375' }}>
                        We're excited to announce a pivotal enhancement to our Figma design system--Variables!
                    </p>
                    <button className="bg-white text-blue-800 px-6 py-2 rounded-full w-64" style={{ padding: '10px 24px', fontWeight: '700' }}>Try it out</button> {/* Responsive full width */}
                </div>
                <div className="col-span-1 hidden md:block"> {/* Second column empty or for future use */}
                    {/* Additional content or empty for spacing */}
                </div>
            </div>
        </div>
    </div>
);

export default MastheadHero;
