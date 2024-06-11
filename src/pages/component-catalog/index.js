import React, { useState, useEffect } from 'react';
import OverviewHeader from '../../components/component-catalog/OverviewHeader';
import CatalogNav from '../../components/component-catalog/CatalogNav';
import CompCatalog from '../../components/component-catalog/CompCatalog';
import ComponentDetails from '../../components/component-catalog/ComponentDetails';
import ButtonHeader from '../../components/button-detail/ButtonHeader';
import CheckboxHeader from '../../components/checkbox-detail/CheckboxHeader';
import DropdownHeader from '../../components/dropdown-detail/DropdownHeader';
import Footer from '../../components/shared/Footer';
import SubFooter from '../../components/shared/SubFooter';
import ButtonOverviewContent from '../../components/component-catalog/ButtonOverviewContent';
import CheckboxOverviewContent from '../../components/component-catalog/CheckboxOverviewContent';
import DropdownOverviewContent from '../../components/component-catalog/DropdownOverviewContent';
import GNav from '../../components/shared/GNav';
import BrandSwitcher from '../../components/shared/BrandSwitcher';

// Placeholder content components
const PlaceholderContent = ({ title }) => (
    <div className="p-6 bg-gray-100 mt-6 rounded shadow">
        <h2 className="text-2xl font-bold">{title} Content</h2>
        <p>This is placeholder content for the {title} section.</p>
    </div>
);

const ComponentCatalog = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [activeBrand, setActiveBrand] = useState('anthem');

    useEffect(() => {
        const storedBrand = localStorage.getItem('selectedBrand');
        if (storedBrand) {
            setActiveBrand(storedBrand);
        }

        const handleScroll = () => {
            const footerElement = document.querySelector('.container');
            if (footerElement) {
                const footerTop = footerElement.offsetTop;
                const scrolledToFooter = window.pageYOffset + window.innerHeight >= footerTop;
                setShowBackToTop(scrolledToFooter);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const [currentPage, setCurrentPage] = useState("Overview");
    const [activeButtonTab, setActiveButtonTab] = useState("Overview");
    const [activeCheckboxTab, setActiveCheckboxTab] = useState("Overview");
    const [activeDropdownTab, setActiveDropdownTab] = useState("Overview");

    const handleChangePage = (pageName) => {
        setCurrentPage(pageName);
    };

    const handleButtonTabChange = (tabName) => {
        setActiveButtonTab(tabName);
    };

    const handleCheckboxTabChange = (tabName) => {
        setActiveCheckboxTab(tabName);
    };

    const handleDropdownTabChange = (tabName) => {
        setActiveDropdownTab(tabName);
    };

    const handleBrandChange = (brand) => {
        setActiveBrand(brand);
        localStorage.setItem('selectedBrand', brand);
    };

    const renderPage = () => {
        switch (currentPage) {
            case "Overview":
                return (
                    <>
                        <OverviewHeader />
                        <CompCatalog brand={activeBrand} />
                        <ComponentDetails />
                    </>
                );
            case "Buttons":
                return (
                    <>
                        <ButtonHeader onTabChange={handleButtonTabChange} />
                        {activeButtonTab === "Overview" && <ButtonOverviewContent brand={activeBrand} />}
                        {activeButtonTab === "Examples" && <PlaceholderContent title="Examples" />}
                        {activeButtonTab === "Accessibility" && <PlaceholderContent title="Accessibility" />}
                        <ComponentDetails />
                    </>
                );
            case "Checkbox":
                return (
                    <>
                        <CheckboxHeader onTabChange={handleCheckboxTabChange} />
                        {activeCheckboxTab === "Overview" && <CheckboxOverviewContent brand={activeBrand} />}
                        {activeCheckboxTab === "Examples" && <PlaceholderContent title="Examples" />}
                        {activeCheckboxTab === "Accessibility" && <PlaceholderContent title="Accessibility" />}
                        <ComponentDetails />
                    </>
                );
            case "Dropdown":
                return (
                    <>
                        <DropdownHeader onTabChange={handleDropdownTabChange} />
                        {activeDropdownTab === "Overview" && <DropdownOverviewContent brand={activeBrand} />}
                        {activeDropdownTab === "Examples" && <PlaceholderContent title="Examples" />}
                        {activeDropdownTab === "Accessibility" && <PlaceholderContent title="Accessibility" />}
                        <ComponentDetails />
                    </>
                );
            default:
                return <div>No Page Found</div>;
        }
    };

    return (
        <div className="container-catalog mx-auto">
            <span className='cat-g-nav'>
                <GNav />
            </span>

            <div className="flex flex-col md:flex-row border-t-1">
                <CatalogNav onChangePage={handleChangePage} className="test-color md:w-1/4 bg-gray-200 p-4" />
                <div className="flex-1 main-content">
                    {renderPage()}
                </div>
            </div>
            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className="stp-ico fixed z-50 transition-opacity duration-500 ease-in-out"
                    style={{
                        bottom: '5%',
                        right: '8%',
                        opacity: 1
                    }}
                >
                    <img src="/images/returnToTop.svg" alt="Back to Top" />
                </button>
            )}
            <Footer />
            <SubFooter />
            <BrandSwitcher onBrandChange={handleBrandChange} />
        </div>
    );
};

export default ComponentCatalog;
