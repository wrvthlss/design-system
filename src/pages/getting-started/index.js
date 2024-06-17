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


const GettingStarted = () => {

    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {

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

    return (
        <div className="container-catalog mx-auto">
        <span className='cat-g-nav'>
            <GNav />
        </span>
        <div>
            
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
    </div>
    );
};

export default GettingStarted; 
