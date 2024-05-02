import React from 'react';
import Footer from '../../components/shared/Footer';
import SubFooter from '../../components/shared/SubFooter';
import SpecificComponent from '../../components/component-catalog/SpecificComponent';

const ComponentCatalog = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="lg:px-19"> {/* Adds 76px padding inside the component for all other components */}
                <SpecificComponent/>
            </div>
            <Footer />
            <SubFooter />
        </div>
    );
};

export default ComponentCatalog;
