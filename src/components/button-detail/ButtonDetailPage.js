import React, { useState } from 'react';
import ButtonHeader from '../../components/button-detail/ButtonHeader';

const PlaceholderContent = ({ title }) => (
    <div className="p-6 bg-gray-100 mt-6 rounded shadow">
        <h2 className="text-2xl font-bold">{title} Content</h2>
        <p>This is placeholder content for the {title} section.</p>
    </div>
);

const ButtonDetailPage = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    // Function to be passed to the ButtonHeader component
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    const renderActiveContent = () => {
        switch (activeTab) {
            case 'Examples':
                return <PlaceholderContent title="Examples" />;
            case 'Accessibility':
                return <PlaceholderContent title="Accessibility" />;
            default:
                return <PlaceholderContent title="Overview" />;
        }
    };

    return (
        <div className="container mx-auto px-4">
            <ButtonHeader onTabChange={handleTabChange} />
            {renderActiveContent()}
        </div>
    );
};

export default ButtonDetailPage;
