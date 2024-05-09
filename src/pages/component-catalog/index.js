import React, { useState } from 'react';
import OverviewHeader from '../../components/component-catalog/OverviewHeader';
import CatalogNav from '../../components/component-catalog/CatalogNav';
import CompCatalog from '../../components/component-catalog/CompCatalog';
import ComponentDetails from '../../components/component-catalog/ComponentDetails';
import ButtonHeader from '../../components/button-detail/ButtonHeader';
import CheckboxHeader from '../../components/checkbox-detail/CheckboxHeader';
import Footer from '../../components/shared/Footer';
import SubFooter from '../../components/shared/SubFooter';
import ButtonOverviewContent from '../../components/component-catalog/ButtonOverviewContent';
import CheckboxOverviewContent from '../../components/component-catalog/CheckboxOverviewContent';
import DropdownHeader from '../../components/dropdown-detail/DropdownHeader'
import DropdownOverviewContent from '../../components/component-catalog/DropdownOverviewContent'

// Placeholder content components
const PlaceholderContent = ({ title }) => (
    <div className="p-6 bg-gray-100 mt-6 rounded shadow">
        <h2 className="text-2xl font-bold">{title} Content</h2>
        <p>This is placeholder content for the {title} section.</p>
    </div>
);

const ComponentCatalog = () => {
    const [currentPage, setCurrentPage] = useState("Overview");
    const [activeButtonTab, setActiveButtonTab] = useState("Overview");
    const [activeCheckboxTab, setActiveCheckboxTab] = useState("Overview");

    // Function to switch pages
    const handleChangePage = (pageName) => {
        setCurrentPage(pageName);
    };

    // Function to switch tabs in the Button view
    const handleButtonTabChange = (tabName) => {
        setActiveButtonTab(tabName);
    };

    // Function to switch tabs in the Checkbox view
    const handleCheckboxTabChange = (tabName) => {
        setActiveCheckboxTab(tabName);
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
                        <ButtonHeader onTabChange={handleButtonTabChange} />
                        {activeButtonTab === "Overview" && <ButtonOverviewContent />}
                        {activeButtonTab === "Examples" && <PlaceholderContent title="Examples" />}
                        {activeButtonTab === "Accessibility" && <PlaceholderContent title="Accessibility" />}
                        <ComponentDetails />
                    </>
                );
            case "Checkbox":
                return (
                    <>
                        <CheckboxHeader onTabChange={handleCheckboxTabChange} />
                        {activeCheckboxTab === "Overview" && <CheckboxOverviewContent />}
                        {activeCheckboxTab === "Examples" && <PlaceholderContent title="Examples" />}
                        {activeCheckboxTab === "Accessibility" && <PlaceholderContent title="Accessibility" />}
                        <ComponentDetails />
                    </>
                );
            case "Dropdown":
                return (
                    <>
                        <DropdownHeader onTabChange={handleCheckboxTabChange} />
                        {activeCheckboxTab === "Overview" && <DropdownOverviewContent />}
                        {activeCheckboxTab === "Examples" && <PlaceholderContent title="Examples" />}
                        {activeCheckboxTab === "Accessibility" && <PlaceholderContent title="Accessibility" />}
                        <ComponentDetails />
                    </>
                );
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
