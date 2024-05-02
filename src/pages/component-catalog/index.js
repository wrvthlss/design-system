import React from 'react';
import OverviewHeader from '../../components/component-catalog/OverviewHeader';
import CatalogNav from '../../components/component-catalog/CatalogNav';
import CompCatalog from '../../components/component-catalog/CompCatalog';
import ComponentDetails from '../../components/component-catalog/ComponentDetails';
import Footer from '../../components/shared/Footer';
import SubFooter from '../../components/shared/SubFooter';

const ComponentCatalog = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row">
                <CatalogNav className="test-color md:w-1/4 bg-gray-200 p-4" />
                <div className="flex-1">
                    <OverviewHeader />
                    <CompCatalog />
                    <ComponentDetails />
                </div>
            </div>
            <Footer />
            <SubFooter />
        </div>
    );
};

export default ComponentCatalog;