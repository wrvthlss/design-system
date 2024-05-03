import React from 'react';

const OverviewHeader = () => {
    return (
        <>
            <div className="bg-white p-4 md:p-12 mobile-hidden" style={{
                paddingTop: '72px', // 126px top padding on desktop
                paddingRight: '268px', // 268px right padding on desktop
                paddingBottom: '32px', // 32px bottom padding consistently
                paddingLeft: '96px', // 96px left padding on desktop
                color: '#000', // Black color for the title
                backgroundColor: '#fff', // White background
                borderBottom: '1px solid #ebebeb',
            }}>
                <h1 className="text-4xl font-bold mb-2">Overview</h1>
                <p className="text-gray-600 leading-6">
                    An A-Z component guide, featuring everything from basic elements to advanced UI, equipped with
                    practical usage guidelines and best practices.
                </p>
            </div>
            <div className="bg-white p-4 md:p-12 sm:block lg:hidden md:hidden" style={{
                paddingTop: '48px', // 126px top padding on desktop
                paddingRight: '20px', // 268px right padding on desktop
                paddingBottom: '32px', // 32px bottom padding consistently
                paddingLeft: '20px', // 96px left padding on desktop
                color: '#000', // Black color for the title
                backgroundColor: '#fff', // White background
                borderBottom: '1px solid #ebebeb',
            }}>
                <h1 className="text-4xl font-bold mb-2">Overview</h1>
                <p className="text-gray-600 leading-6">
                    An A-Z component guide, featuring everything from basic elements to advanced UI, equipped with
                    practical usage guidelines and best practices.
                </p>
            </div>
        </>

    );
};

export default OverviewHeader;
