import React from 'react';

const Button = ({ children, variant = "primary", className = "" }) => {
    const baseStyle = "rounded-full px-4 py-2 font-semibold";
    const variantStyles = {
        primary: "text-blue-600 bg-white hover:bg-blue-100",
        ghost: "bg-transparent hover:bg-white hover:bg-opacity-5 border border-white text-white",
    };

    return <button className={`${baseStyle} ${variantStyles[variant]} ${className}`}>{children}</button>;
};

const MastheadLockup = () => (
    <div className="text-center space-y-4">
        <h1 className="text-white text-4xl font-bold">EDS Design System</h1>
        <p className="text-white text-opacity-75 max-w-md mx-auto">
            EDS is Elevance Health's enterprise product design system, aiding in upholding user experience integrity and maximizing design and development resources.
        </p>
        <div className="flex justify-center space-x-4">
            <Button variant="primary">Get Started</Button>
            <Button variant="ghost">Components</Button>
        </div>
    </div>
);

export default MastheadLockup;
