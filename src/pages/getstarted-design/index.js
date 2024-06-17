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


const GettingStartedDesign = () => {

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


            <div className='getstarted-design-head px-19 pt-16 pb-8 mb-9'>
                <h1 className='font-semibold text-4xl pb-3'>Design</h1>
                <p className='text-lg leading-6'>As a designer, you will harness the EDS to create unified and engaging user experiences, equipped with all the necessary tools and guidelines to innovate and develop standout products.</p>
            </div>

            <div className='back-link px-19 text-lg font-semibold pb-8'><a className='bc-back' href='/getting-started'><span className='text-2xl'>&#x2039;</span>&nbsp;Back</a></div>

            <section className='px-19 pb-8 gs-design'>
                <h2 className='text-3xl font-semibold pb-3'>Get started</h2>
                <p className='text-lg pb-8'>Our Enterprise Design System in Figma offers a unified framework for creating consistent, user-friendly interfaces. With standardized components and styles, designers can efficiently build and iterate on designs. This approach ensures visual consistency, scalability, and seamless collaboration within large teams.</p>

                <div className='pb-8 flex items-center'>
                    <div className='flex flex-col pb-8 flex-grow relative'>
                        <p className='text-lg font-semibold'>Brand Identity</p>
                        <p className='text-lg'>Learn about the application of branding, colors, typography, and iconography. Utilize this knowledge to structure your document effectively and explore the role of accessibility in our EDS.</p>
                        <a href="/">Get started with Brandhub</a>
                    </div>
                </div>
                <div className='pb-8 flex items-center'>
                    <div className='flex flex-col pb-8 flex-grow relative'>
                        <p className='text-lg font-semibold'>Our Principals</p>
                        <p className='text-lg'>Our principles, foundational to our ethos, serve as guiding lights across all aspects of our work. They reaffirm our dedication to excellence, ensuring that our strategies and outcomes are not only effective, but also inclusive and harmonious.</p>
                        <a href="/">Learn more about our Principles</a>
                    </div>
                </div>
                <div className='pb-8 flex items-center'>
                    <div className='flex flex-col pb-8 flex-grow relative'>
                        <p className='text-lg font-semibold'>Foundations</p>
                        <p className='text-lg'>Learn how branding elements like colors, typography, and iconography are applied within our design system to ensure visual consistency and brand adherence in document layout. Additionally, explore the integration of accessibility principles within our Enterprise Design System, ensuring equitable access and usability for all users.</p>
                        <a href="/">Discover Our Foundations</a>
                    </div>
                </div>
                <div className='pb-8 flex items-center'>
                    <div className='flex flex-col pb-8 flex-grow relative'>
                        <p className='text-lg font-semibold'>Components</p>
                        <p className='text-lg'>Components serve as the fundamental, reusable elements within our design system, each fulfilling a distinct interaction or UI requirement. Carefully crafted to harmonize and interoperate, these components are designed to collectively form patterns and foster intuitive user experiences across our products and platforms.</p>
                        <a href="/">Explore Components</a>
                    </div>
                </div>
            </section>

            <section className='gs-figma px-19 pb-16'>

                <h2 className='text-2xl font-semibold pb-2'>Figma</h2>
                <p className='text-lg pb-4'>To help familiarize yourself with EDS we provide a step by step process. For further knowledge and best practices on Figma visit our <a href="/">Figma Guide</a>.</p>
                <div className='flex justify-center'>
                    <img src='/images/get-started/design/img-design-getstarted-001.svg' alt='Figma Guide Step 1' />
                </div>
                <p className='italic pt-4 text-center'>A step-by-step guide to using Figma. Dive into a world of creativity and collaboration — <span className='spanlink'>Let's get started!</span></p>

                <p className='text-lg font-semibold pt-12'>Enable Library</p>
                <ul className='en-lib-list pt-2 pb-5'>
                    <li>In a design file, open the Assets panel in the left sidebar.</li>
                    <li>Click Libraries to open the Libraries modal.</li>
                    <li>To enable a library, locate the library you want to add from the list of available libraries and click Add to file. If you don’t see the library you’re looking for, you’ll need to publish the library first. Learn more about publishing libraries</li>
                    <li>To disable a library, hover over the Added button and click Remove.</li>
                    <li>Click 'X' to close the Libraries modal.</li>
                </ul>
                <div className='flex justify-center'>
                    <img src='/images/get-started/design/img-design-getstarted-002.svg' alt='Figma Guide Step 2' />
                </div>
                <p className='italic pt-4 text-center'>Org level library access</p>


                <p className='text-lg font-semibold pt-12'>Working with Assets</p>
                <p className='text-lg pb-4'>After enabling the library, you can access its components by clicking on the "Assets" tab in the left sidebar. Here, you'll find all the components available in the library, organized into categories.</p>
                <p className='text-lg pb-8'>To insert a component into your design, simply drag it from the Assets panel onto your canvas. You can also search for specific components by typing keywords into the search bar at the top of the Assets panel.</p>
                <div className='flex justify-center'>
                    <img src='/images/get-started/design/img-design-getstarted-003.svg' alt='Figma Guide Step 2' />
                </div>
                <p className='italic pt-4 text-center'> Selecting the Buttons component from the library and dragging onto the canvas.</p>

                <p className='text-lg font-semibold pt-12'>Configure Variants</p>
                <p className='text-lg pb-4'>In the properties panel, you'll see a dropdown menu where you can select the desired variant. This allows you to easily switch between different versions of the component without having to create separate instances for each variant.</p>
                <p className='text-lg pb-8'>Variant properties are the variable aspects of our component. For example: the properties of a button component could be the size, state, or color.
                    Variant options are display using drodpowns to choose different options or can be display use a toggle for binary actions such as showing and hiding text.
                </p>
                <div className='flex justify-center'>
                    <img src='/images/get-started/design/img-design-getstarted-004.svg' alt='Figma Guide Step 2' />
                </div>
                <p className='italic pt-4 text-center'>Here you can see the button component with all its variant properties and values.</p>

                <p className='text-lg font-semibold pt-12'>Brand Switching</p>
                <p className='text-lg pb-4'>You can switch modes on pages if any local collection of variables contains multiple modes.</p>
                <ul className='en-lib-list pb-8'>
                    <li>Deselect everything on the canvas.</li>
                    <li>From the Page section of the right sidebar, click Change Variable mode.</li>
                    <li>Hover over a variable collection and choose a mode.</li>
                </ul>
                <div className='flex justify-center'>
                    <img src='/images/get-started/design/img-design-getstarted-005.svg' alt='Figma Guide Step 2' />
                </div>
                <p className='italic pt-4 text-center'>Here we are displaying how user can quickly change the brand and theme on the page level.</p>

                <p className='text-lg font-semibold pt-12'>Library Updates</p>
                <p className='text-lg pb-4'>Open the Libraries panel by doing one of the following:</p>
                <ul className='en-lib-list pb-8'>
                    <li>Click the  Libraries icon in the top toolbar.</li>
                    <li>Select the Assets panel from the left sidebar, then click the  Libraries icon.</li>
                    <li>Switch to the Updates tab. By default, the Updates tab displays assets on the current page.</li>
                </ul>
                <div className='flex justify-center'>
                    <img src='/images/get-started/design/img-design-getstarted-006.svg' alt='Figma Guide Step 2' />
                </div>
                <p className='italic pt-4 text-center'>Library updates notification and how to update components within your working file. <span className='spanlink'>Learn more about Libraries</span>.</p>

            </section>


            <div>

            </div>


            <div>
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
        </div>
    );
};

export default GettingStartedDesign; 
