import React from 'react';

const TestButton = () => {
    return (
        <div className="p-4 space-y-4">
            <button className="bg-white text-black border border-black rounded-full w-174 h-44">
                White Filled
            </button>
            <button className="bg-transparent text-white border border-white rounded-full w-174 h-44">
                Ghosted
            </button>
            <button className="bg-primary text-white w-114 h-44 rounded-full">
                Prim Small
            </button>
            <div className="w-44 h-44 bg-card-blue"></div>
            <div className="w-44 h-44 bg-card-green"></div>
            <div className="w-44 h-44 bg-card-purple"></div>
            <div className="w-44 h-44 bg-card-lightblue"></div>
            <p className="text-black opacity-75">
                This is body text with 75% opacity.
            </p>
            <p className="text-black">
                This is a headline.
            </p>
            {/* Example of using gradient */}
            <div className="w-44 h-44 bg-gradient-to-r from-masthead-start to-masthead-end"></div>
        </div>
    );
};

export default TestButton;
