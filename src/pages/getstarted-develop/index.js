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

const GettingStartedDevelop = () => {

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
        <div className="container container-catalog mx-auto bg-white">
            <span className='cat-g-nav'>
                <GNav />
            </span>

            <div className='getstarted-develop-head px-19 pt-16 pb-8 mb-9'>
                <h1 className='font-semibold text-4xl pb-3'>Develop</h1>
                <p className='text-lg leading-6'>As a designer, you will harness the EDS to create unified and engaging user experiences, equipped with all the necessary tools and guidelines to innovate and develop standout products. The EDS code library equips developers with tools to ensure consistent user experiences and improve efficiency while adhering to our guidelines.</p>
            </div>

            <div className='back-link px-19 text-lg font-semibold pb-8'><a className='bc-back' href='/getting-started'><span className='text-2xl'>&#x2039;</span>&nbsp;Back</a></div>

            <section className='px-19 pb-8 gs-design'>
                <h2 className='text-3xl font-semibold pb-3'>Get started</h2>
                <p className='text-lg pb-12'>Our approach to building components prioritizes simplicity, consistency, and efficiency by leveraging utility classes to style HTML elements directly in your markup, without the need for writing custom CSS. This approach can result in more maintainable and scalable codebases, particularly for projects with rapidly changing design requirements or large teams collaborating on frontend development.</p>

                <div className='pb-8 flex items-center'>
                    <div className='flex flex-col pb-6 flex-grow relative'>
                        <p className='text-xl font-semibold pb-2'>Repository implementation</p>
                        <p className='text-lg font-semibold pb-4'>This implementation is recommended for HTML, Angular, JavaScript and React frameworks.</p>
                        <p className='text-lg'>This repository serves as a comprehensive resource housing all the necessary CSS files and design tokens essential for constructing any design within your project. To integrate these resources seamlessly into your project, simply copy the provided link below and paste it into the index file. With this simple step, you'll be fully equipped and ready to commence building your project with ease.</p>
                    </div>
                </div>
                <div className='pb-8 flex items-center'>
                    <div className='flex flex-col pb-8 flex-grow relative'>
                        <p className='text-xl font-semibold pb-2'>Npm implementation</p>
                        <p className='text-lg font-semibold pb-4'>This implementation is recommended for  Angular and React Native frameworks.</p>

                        <p className='text-lg pb-4'>This repository serves as a comprehensive resource housing all the necessary CSS files and design tokens essential for constructing any design within your project. To integrate these resources seamlessly into your project, simply copy the provided link below and paste it into the index file. With this simple step, you'll be fully equipped and ready to commence building your project with ease.</p>
                        <p className='text-lg pb-4'>This repository will contain all of the css and design tokens needed to build out any design. This method uses npm for dependency management. Make sure that you have npm installed prior to starting the tutorial so you can follow along step-by-step.</p>
                        <p className='text-lg'>Within this repository, you'll find a comprehensive collection of CSS files and design tokens meticulously curated to encompass all the essentials required for constructing any design within your project. This approach leverages npm for efficient dependency management, ensuring seamless integration and maintenance of your design assets. Before embarking on the tutorial, ensure that you have npm installed on your system to facilitate a smooth, step-by-step implementation process.</p>

                    </div>
                </div>
            </section>

            <section className='gs-figma px-19 pb-16'>
                <h2 className='text-2xl font-semibold pb-2'>Project Setup</h2>
                <p className='text-lg pb-8'>Checkout our step by step video walkthrough to get your project started on the right path.</p>
                <div className='flex justify-center pb-12'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Cx2dkpBxst8?si=RUwY8w-zDRZuni-4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <h2 className='text-2xl font-semibold pb-2'>Design Tokens</h2>
                <p className='text-lg pb-8'>What are design tokens?</p>
                <p className='text-lg pb-8'>Design tokens are variables defining visual properties in a design system, like colors and typography, ensuring consistency and scalability across platforms. They bridge design and development, fostering collaboration, and efficiency. Tokens represent design decisions, replacing static values with descriptive names for enhanced clarity and reusability.</p>
                <div className='flex justify-center pb-12'>
                    <img src='/images/get-started/develop/img-develop-getstarted-001.svg' alt='Figma Guide Step 2' />
                </div>

                <p className='text-lg font-semibold pt-12'>How does this apply in code.</p>
                <p className='text-lg pb-8'>Apply CSS classes directly to HTML elements within your markup. For example, to set the background color to blue, you would add the bg-blue-500 class. You can apply classes like text-base for text size and font-semibold for font weight.</p>
                <p className='text-lg pb-14'>By applying CSS utility classes directly within HTML markup, developers can rapidly prototype and build UI components without the need for writing custom CSS. This approach promotes consistency, efficiency, and maintainability in front-end development projects.</p>

                <h2 className='text-2xl font-semibold pb-2'>Figma Dev Mode</h2>
                <p className='text-lg pb-8'>Dev Mode in Figma gives you everything you need to navigate design files and transform designs into code. With Dev Mode, designers and developers can stay on the same page, making sure important details aren't lost in the handoff process.</p>
                <div className='flex justify-center pb-4'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/VcOJ2V1-2Io?si=amhMqGXuszaJ4eWF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <p className='italic text-center'>A step-by-step guide to using Figma. Dive into a world of creativity and collaboration — <span className='spanlink'>Let's get started!</span></p>
            </section>

            <div className='btp-container'>
                {showBackToTop && (
                    <button
                        onClick={scrollToTop}
                        className="stp-ico fixed z-50 transition-opacity duration-500 ease-in-out"
                        style={{
                            bottom: '5%',
                            right: '8%',
                            display: showBackToTop ? 'block' : 'none'
                        }}
                    >
                        <img src="/images/returnToTop.svg" alt="Back to Top" />
                    </button>
                )}
                <ComponentDetails />
                <Footer />
                <SubFooter />
            </div>
        </div>
    );
};

export default GettingStartedDevelop; 
