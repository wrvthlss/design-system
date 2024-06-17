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
        <div className="container-catalog mx-auto bg-white">
            <span className='cat-g-nav'>
                <GNav />
            </span>

            <div className='get-started-head px-19 pt-16 pb-8 mb-9'>
                <h1 className='font-semibold text-4xl pb-3'>Get Started</h1>
                <p className='text-lg leading-6'>As a designer, you will harness the EDS to create unified and engaging user experiences, equipped with all the necessary tools and guidelines to innovate and develop standout products.</p>
            </div>
            <section className='user-sections px-19 pb-16'>
                <h2 className='text-3xl font-semibold'>Get started</h2>
                <p className='text-lg pb-8'>To help familiarize yourself with EDS we provide a step by step process to help familiarize yourself with our design system and guidelines. Bookmark this page for quick access to reference color usage, layout, component use cases and much more!</p>

                <div className='us-design pb-8 mb-8 flex items-center'>
                    <img src='/images/get-started/overview/img-icon-getstarted-design.svg' alt='Design Icon' className='mr-4 gticon' />
                    <div className='flex flex-col border-b border-lightgray pb-8 flex-grow relative'>
                        <p className='text-lg font-semibold'>Design</p>
                        <p className='text-lg'>As a designer, use the EDS to create engaging, unified user experiences with the tools needed for innovative products.</p>
                        <div className='chev-right'>&#10095;</div>
                    </div>
                </div>

                <div className='us-develop pb-8 mb-8 flex items-center'>
                    <img src='/images/get-started/overview/img-icon-getstarted-develop.svg' alt='Develop Icon' className='mr-4 gticon' />
                    <div className='flex flex-col border-b border-lightgray pb-8 flex-grow relative'>
                        <p className='text-lg font-semibold'>Develop</p>
                        <p className='text-lg'>As a developer, utilize the EDS to build robust, seamless applications that are scalable and maintain the integrity of user interactions.</p>
                        <div className='chev-right'>&#10095;</div>
                    </div>
                </div>

                <div className='us-research pb-8 mb-8 flex items-center'>
                    <img src='/images/get-started/overview/img-icon-getstarted-research.svg' alt='Research Icon' className='mr-4 gticon' />
                    <div className='flex flex-col border-b border-lightgray pb-8 flex-grow relative'>
                        <p className='text-lg font-semibold'>Research</p>
                        <p className='text-lg'>As a researcher, leverage the EDS to gather insightful data, ensuring designs meet user needs and enhance user satisfaction effectively.</p>
                        <div className='chev-right'>&#10095;</div>
                    </div>
                </div>

                <div className='us-content pb-8 mb-8 flex items-center'>
                    <img src='/images/get-started/overview/img-icon-getstarted-content.svg' alt='Content Icon' className='mr-4 gticon' />
                    <div className='flex flex-col border-b border-lightgray pb-8 flex-grow relative'>
                        <p className='text-lg font-semibold'>Content</p>
                        <p className='text-lg'>As a content strategist, employ the EDS to craft clear, compelling content that aligns with design principles and engages users meaningfully.</p>
                        <div className='chev-right'>&#10095;</div>
                    </div>
                </div>

                <div className='us-access pb-8 flex items-center'>
                    <img src='/images/get-started/overview/img-icon-getstarted-accessibility.svg' alt='Accessibility Icon' className='mr-4 gticon' />
                    <div className='flex flex-col flex-grow relative'>
                        <p className='text-lg font-semibold'>Accessibility</p>
                        <p className='text-lg'>As an accessibility specialist, apply the EDS to create inclusive, accessible experiences that comply with standards and empower all users.</p>
                        <div className='chev-right pt-2'>&#10095;</div>
                    </div>
                </div>
            </section>




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
            <ComponentDetails />
            <Footer />
            <SubFooter />
        </div>
    );
};

export default GettingStarted; 
