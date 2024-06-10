// ButtonOverviewContent.js
import React from 'react';
import JumpLinkNav from '../shared/JumpLinkNav';
import JumpLinkNavMobi from '../shared/JumpLinkNavMobi';

const ButtonOverviewContent = ({ brand }) => {
    const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'anatomy', label: 'Anatomy' },
        { id: 'options', label: 'Options' },
        { id: 'metrics', label: 'Metrics' },
        { id: 'best-practices', label: 'Best Practices' }
    ];

    const navigateToSection = (id) => {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const imagePaths = {
        overview: [
            `/images/buttons/${brand}/${brand}-img-button-overview-001.svg`,
            `/images/buttons/${brand}/${brand}-img-button-overview-002.svg`,
            `/images/buttons/${brand}/${brand}-img-button-overview-003.svg`,
            `/images/buttons/${brand}/${brand}-img-button-overview-004.svg`
        ],
        anatomy: `/images/buttons/${brand}/${brand}-img-button-anatomy.svg`,
        states: [
            `/images/buttons/${brand}/${brand}-img-button-st-001.svg`,
            `/images/buttons/${brand}/${brand}-img-button-st-002.svg`,
            `/images/buttons/${brand}/${brand}-img-button-st-003.svg`,
            `/images/buttons/${brand}/${brand}-img-button-st-004.svg`,
            `/images/buttons/${brand}/${brand}-img-button-st-005.svg`,
            `/images/buttons/${brand}/${brand}-img-button-st-006.svg`,
            `/images/buttons/${brand}/${brand}-img-button-st-007.svg`,
            `/images/buttons/${brand}/${brand}-img-button-st-009.svg`,
            `/images/buttons/${brand}/${brand}-img-button-st-011.svg`,
            `/images/buttons/${brand}/${brand}-img-button-st-012.svg`,
            `/images/buttons/${brand}/${brand}-img-button-st-013.svg`
        ],
        intents: [
            `/images/buttons/${brand}/${brand}-img-button-int-001.svg`,
            `/images/buttons/${brand}/${brand}-img-button-int-002.svg`
        ],
        sizes: [
            `/images/buttons/${brand}/${brand}-img-button-lg.svg`,
            `/images/buttons/${brand}/${brand}-img-button-med.svg`,
            `/images/buttons/${brand}/${brand}-img-button-sm.svg`,
            `/images/buttons/${brand}/${brand}-img-button-es.svg`
        ],
        bestPractices: [
            `/images/buttons/${brand}/${brand}-img-button-bp-001.svg`,
            `/images/buttons/${brand}/${brand}-img-button-bp-002.svg`,
            `/images/buttons/${brand}/${brand}-img-button-bp-003a.svg`,
            `/images/buttons/${brand}/${brand}-img-button-bp-003b.svg`,
            `/images/buttons/${brand}/${brand}-img-button-bp-004a.svg`,
            `/images/buttons/${brand}/${brand}-img-button-bp-004b.svg`,
            `/images/buttons/${brand}/${brand}-img-button-bp-005.svg`,
            `/images/buttons/${brand}/${brand}-img-button-bp-006.svg`,
            `/images/buttons/${brand}/${brand}-img-button-bp-007a.svg`,
            `/images/buttons/${brand}/${brand}-img-button-bp-007b.svg`,
            `/images/buttons/${brand}/${brand}-img-button-bp-008.svg`,
            `/images/buttons/${brand}/${brand}-img-button-bp-009a.svg`,
            `/images/buttons/${brand}/${brand}-img-button-bp-009b.svg`,
            `/images/buttons/${brand}/${brand}-img-button-bp-010.svg`
        ]
    };

    return (
        <div className='flex bg-white'>
            {/* Main Content Area */}
            <div className="flex-1 pt-3 bg-white">
                {/* Mobile JumpLinkNavMobi */}
                <div className="block lg:hidden pt-5">
                    <JumpLinkNavMobi sections={sections} onNavigate={navigateToSection} />
                </div>

                {/* Overview Title */}
                <div className="flex-1 pl-6 pr-6 pt-12 bg-white">
                    <section id="overview">
                        <h2 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>
                            Overview
                        </h2>
                        <p className="text-gray-700 mt-4 mb-6" style={{ lineHeight: '24px' }}>
                            Primary buttons are designed to capture users' attention and guide them towards the most important actions within the interface. These buttons are used for primary call-to-action (CTA) tasks such as "Submit", "Save", "Continue", or "Join Now". Due to their significant role, primary buttons should be used sparingly to highlight key actions and avoid overwhelming users with too many focal points.
                        </p>

                        {/* Images Container for Large Screens */}
                        <div className="p-6 bg-gray-100 flex justify-center gap-6 rb-c hidden lg:flex" style={{ backgroundColor: '#FAFAFA' }}>
                            {imagePaths.overview.map((src, index) => (
                                <img key={index} src={src} alt={`State ${index + 1}`} />
                            ))}
                        </div>

                        {/* Images Container for Mobile and Medium Screens */}
                        <div className="p-6 bg-gray-100 block lg:hidden flex flex-col rb-c items-center" style={{ backgroundColor: '#FAFAFA' }}>
                            {imagePaths.overview.map((src, index) => (
                                <img key={index} className="pb-4" src={src} alt={`State ${index + 1}`} />
                            ))}
                        </div>

                        <p className="text-sm text-gray-600 mt-4 mb-8" style={{ lineHeight: '20px' }}>
                            The above states illustrate the button's dynamic interaction feedback, highlighting how it responds to user actions such as mouse hover, keyboard focus, active pressing, and its appearance when the action is unavailable.
                        </p>

                        <h3 className='text-base font-bold text-black leading-8'>Live Demo</h3>
                        <p className='text-gray-700 mt-2 leading-6'>
                            Dive into the full capabilities of our button components with our advanced live demo. This interactive tool lets you explore different button variants, states, sizes, themes, and more, providing a hands-on way to tailor buttons to your exact needs. Customize colors, add icons, and edit text—all with instant visual feedback and corresponding code generation for seamless integration into your projects.
                        </p>

                        {/* LIVE CODE EMBED */}
                        <div className="mt-6 mb-6">
                            <iframe
                                src="http://localhost:6006/?path=/story/example-button--primary"
                                style={{ width: '100%', height: '600px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
                                title="Storybook Button Demo"
                                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                            ></iframe>
                        </div>

                        <hr className="border-gray-300 mb-16" style={{ marginTop: '64px', marginBottom: '64px' }} />
                    </section>

                    {/* Anatomy Section */}
                    <section id="anatomy">
                        <h2 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>Anatomy</h2>
                        <p className="text text-gray-700 mt-4 mb-6" style={{ lineHeight: '20px' }}>
                            Understanding the anatomy of a button is crucial to leveraging its full potential in user interfaces. Each component of a button is meticulously designed to optimize user interaction and visual appeal. From the icons that provide immediate context, to the text label offering clear instruction, and the carefully chosen background color enhancing visibility and aesthetic—every aspect plays a pivotal role. This section dissects these key elements, providing insights into their significance and best practices for design and implementation.
                        </p>

                        <div className="p-6 bg-gray-100 rb-c flex justify-center" style={{ backgroundColor: '#FAFAFA' }}>
                            <img src={imagePaths.anatomy} alt="Button Anatomy" />
                        </div>
                    </section>

                    {/* Options Section */}
                    <section id="options">
                        <h2 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>
                            Options
                        </h2>
                        <p className="text-base text-gray-700 mt-4 mb-16" style={{ lineHeight: '24px' }}>
                            In the pursuit of providing a flexible and cohesive user interface, our design system categorizes buttons into three distinct types based on their appearance and intended use: Primary, Secondary, and Tertiary.
                        </p>

                        <h3 className="text-lg font-bold text-black" style={{ lineHeight: '24px' }}>
                            Appearance
                        </h3>
                        <p className="text-base text-gray-700 mt-4 mb-16" style={{ lineHeight: '24px' }}>
                            Each button option/type is designed with specific visual and functional characteristics to serve different roles within the user interface, from initiating main actions to providing alternative choices or subtle prompts. This section delves into the appearance options and states for these button types, offering a guide to their application and best practices to ensure a consistent and intuitive user experience.
                        </p>

                        {/* 3-Column Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <img src={`/images/buttons/${brand}/${brand}-img-button-opt-001a.svg`} alt="Primary Button" className="mx-auto" />
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Primary</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    For the principal call to action on the page. Primary buttons should only appear once per screen.
                                </p>
                            </div>

                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <img src={`/images/buttons/${brand}/${brand}-img-button-opt-001b.svg`} alt="Secondary Button" className="mx-auto" />
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Secondary</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    Utilize the secondary button to offer alternatives to the main action, or in situations where all actions hold equal importance.
                                </p>
                            </div>

                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <img src={`/images/buttons/${brand}/${brand}-img-button-opt-001c.svg`} alt="Tertiary Button" className="mx-auto" />
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Tertiary</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    Employ the tertiary button for actions of lesser importance that offer convenience.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Button States Section */}
                    <section id="states">
                        <h2 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>Button States</h2>
                        <p className="text text-gray-700 mt-4 mb-6" style={{ lineHeight: '20px' }}>
                            Defining the visual and interactive variations of buttons, encompassing default, hover, focus, press, and disabled states to ensure consistent and intuitive user experiences.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            {imagePaths.states.map((src, index) => (
                                <div key={index} className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <img src={src} alt={`State ${index + 1}`} className="mx-auto" />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Intent Section */}
                    <section id="intent">
                        <h2 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>Intent</h2>
                        <p className="text text-gray-700 mt-4 mb-6" style={{ lineHeight: '20px' }}>
                            Intent reflects the purpose or goal behind an action or decision, grounding it in the user's or system's objectives.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            {imagePaths.intents.map((src, index) => (
                                <div key={index} className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <img src={src} alt={`Intent ${index + 1}`} className="mx-auto" />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Size Section */}
                    <section id="size">
                        <h2 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>Size</h2>
                        <p className="text text-gray-700 mt-4 mb-6" style={{ lineHeight: '20px' }}>
                            Understanding the appropriate usage of button sizes within an interface is crucial for maintaining hierarchy, ensuring accessibility, and enhancing user experience. Our design system provides four distinct sizes for buttons: Large, Medium, Small, and Extra Small.
                        </p>

                        <div className="p-6 bg-gray-100 rb-c flex justify-center gap-6 mb-8" style={{ backgroundColor: '#FAFAFA' }}>
                            {imagePaths.sizes.map((src, index) => (
                                <img key={index} src={src} alt={`Size ${index + 1}`} className="mx-auto" />
                            ))}
                        </div>
                    </section>

                    {/* Best Practices Section */}
                    <section id="best-practices">
                        <h2 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>Best Practices</h2>
                        <p className="text-base text-gray-600 mb-6" style={{ lineHeight: '24px' }}>
                            Ensuring that buttons are effective in guiding user actions requires attention to detail in both design and implementation. Below are paired "Do" and "Don't" best practices, each addressing a specific aspect of button usage to help illustrate optimal and suboptimal practices.
                        </p>

                        <div className="grid grid-cols-2 gap-16 pb-16">
                            {imagePaths.bestPractices.map((src, index) => (
                                <div key={index} className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={src} alt={`Best Practice ${index + 1}`} className="mx-auto" />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <div className="hidden lg:block ml-16 mt-14 mr-16 mb-16 sticky top-12 bg-white">
                <JumpLinkNav sections={sections} />
            </div>
        </div>
    );
};

export default ButtonOverviewContent;
