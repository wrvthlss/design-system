import React from 'react';

const Button = ({ children, variant = "primary", className = "" }) => {
    const baseStyle = "rounded-full px-12 py-2 font-semibold";
    const variantStyles = {
        primary: "text-blue-600 bg-white hover:bg-blue-100",
        ghost: "bg-transparent hover:bg-white hover:bg-opacity-5 border border-white text-white",
    };

    return <button className={`${baseStyle} ${variantStyles[variant]} ${className}`}>{children}</button>;
};

const MastheadLockup = () => (
    <div className='flex items-center justify-center h-screen'>
        <div className="mhspacer">
            <h1 className="masthead-hl font-bold inter-font-bold">
                Unify Your Vision,<br /> Elevate Your Design.
            </h1>
            <p className="lockup-body-text text-white max-w-xl inter-font">
                EDS is Elevance Health's enterprise product design system, aiding in upholding user experience
                integrity and maximizing design and development resources.
            </p>
            <div className="btn-conflex space-x-4">
                <Button variant="primary" className='btn-l'><a href='/getting-started'>Get Started</a></Button>
                <Button variant="ghost" className='btn-r'><a href='/component-catalog'>Components</a></Button>
            </div>
        </div>
    </div>

);

export default MastheadLockup;
