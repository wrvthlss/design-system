// index.js
import React, { useState } from 'react';
import OverviewHeader from '../../components/component-catalog/OverviewHeader';
import CatalogNav from '../../components/component-catalog/CatalogNav';
import CompCatalog from '../../components/component-catalog/CompCatalog';
import ComponentDetails from '../../components/component-catalog/ComponentDetails';
import ButtonHeader from '../../components/button-detail/ButtonHeader'; // Import the new header
import Footer from '../../components/shared/Footer';
import SubFooter from '../../components/shared/SubFooter';

const ComponentCatalog = () => {
    const [currentPage, setCurrentPage] = useState("Overview");

    // Function to switch pages
    const handleChangePage = (pageName) => {
        setCurrentPage(pageName);
    };

    // Function to render content based on the current page selection
    const renderPage = () => {
        switch (currentPage) {
            case "Overview":
                return (
                    <>
                        <OverviewHeader />
                        <CompCatalog />
                        <ComponentDetails />
                    </>
                );
            case "Buttons":
                return (
                    <>
                        <ButtonHeader />
                        {/* You can add more sections related to buttons here */}
                    </>
                );
            // Add other cases for different pages...
            default:
                return <div>No Page Found</div>;
        }
    };

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row">
                <CatalogNav onChangePage={handleChangePage} className="test-color md:w-1/4 bg-gray-200 p-4" />
                <div className="flex-1 main-content">
                    {renderPage()}
                </div>
            </div>
            <Footer />
            <SubFooter />
        </div>
    );
};

export default ComponentCatalog;
