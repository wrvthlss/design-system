// ButtonOverviewContent.js
import React from 'react';
import JumpLinkNav from '../shared/JumpLinkNav';
import JumpLinkNavMobi from '../shared/JumpLinkNavMobi';

const imagePaths = {
    anthem: {
        overview: [
            "/images/buttons/anthem/anthem-img-button-overview-001.svg",
            "/images/buttons/anthem/anthem-img-button-overview-002.svg",
            "/images/buttons/anthem/anthem-img-button-overview-003.svg",
            "/images/buttons/anthem/anthem-img-button-overview-004.svg",
        ],
        overviewMobile: [
            "/images/buttons/anthem/anthem-img-button-overview-m-001.svg",
            "/images/buttons/anthem/anthem-img-button-overview-m-002.svg",
            "/images/buttons/anthem/anthem-img-button-overview-m-003.svg",
            "/images/buttons/anthem/anthem-img-button-overview-m-004.svg",
        ],
        anatomy: "/images/buttons/anthem/anthem-img-button-anatomy.svg",
        options: [
            "/images/buttons/anthem/anthem-img-button-opt-001a.svg",
            "/images/buttons/anthem/anthem-img-button-opt-001b.svg",
            "/images/buttons/anthem/anthem-img-button-opt-001c.svg",
        ],
        states: [
            "/images/buttons/anthem/anthem-img-button-st-001.svg",
            "/images/buttons/anthem/anthem-img-button-st-002.svg",
            "/images/buttons/anthem/anthem-img-button-st-003.svg",
            "/images/buttons/anthem/anthem-img-button-st-004.svg",
            "/images/buttons/anthem/anthem-img-button-st-005.svg",
            "/images/buttons/anthem/anthem-img-button-st-006.svg",
            "/images/buttons/anthem/anthem-img-button-st-007.svg",
            "/images/buttons/anthem/anthem-img-button-st-009.svg",
            "/images/buttons/anthem/anthem-img-button-st-010.svg",
            "/images/buttons/anthem/anthem-img-button-st-011.svg",
            "/images/buttons/anthem/anthem-img-button-st-012.svg",
            "/images/buttons/anthem/anthem-img-button-st-013.svg",
        ],
        intents: [
            "/images/buttons/anthem/anthem-img-button-int-001.svg",
            "/images/buttons/anthem/anthem-img-button-int-002.svg",
        ],
        sizes: [
            "/images/buttons/anthem/anthem-img-button-lg.svg",
            "/images/buttons/anthem/anthem-img-button-med.svg",
            "/images/buttons/anthem/anthem-img-button-sm.svg",
            "/images/buttons/anthem/anthem-img-button-es.svg",
        ],
        metrics: [
            "/images/buttons/anthem/anthem-img-button-metrics-001.svg",
            "/images/buttons/anthem/anthem-img-button-metrics-002.svg",
            "/images/buttons/anthem/anthem-img-button-metrics-003.svg",
            "/images/buttons/anthem/anthem-img-button-metrics-004.svg",
        ],
        bestPractices: [
            "/images/buttons/anthem/anthem-img-button-bp-001.svg",
            "/images/buttons/anthem/anthem-img-button-bp-002.svg",
            "/images/buttons/anthem/anthem-img-button-bp-003a.svg",
            "/images/buttons/anthem/anthem-img-button-bp-003b.svg",
            "/images/buttons/anthem/anthem-img-button-bp-004a.svg",
            "/images/buttons/anthem/anthem-img-button-bp-004b.svg",
            "/images/buttons/anthem/anthem-img-button-bp-005.svg",
            "/images/buttons/anthem/anthem-img-button-bp-006.svg",
            "/images/buttons/anthem/anthem-img-button-bp-007a.svg",
            "/images/buttons/anthem/anthem-img-button-bp-007b.svg",
            "/images/buttons/anthem/anthem-img-button-bp-008.svg",
            "/images/buttons/anthem/anthem-img-button-bp-009a.svg",
            "/images/buttons/anthem/anthem-img-button-bp-009b.svg",
            "/images/buttons/anthem/anthem-img-button-bp-010.svg",
        ],
    },
    // Add other brands here
};

const ButtonOverviewContent = ({ activeBrand = "anthem" }) => {
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

    const paths = imagePaths[activeBrand];

    return (
        <div className='flex bg-white'>
            {/* Main Content Area */}
            <div className="flex-1 pt-3 bg-white">
                {/* Mobile JumpLinkNavMobi */}
                <div className="block lg:hidden pt-5">
                    <JumpLinkNavMobi sections={sections} onNavigate={navigateToSection} />
                </div>

                {/* Overview Title */}
                <section className="flex-1 pl-6 pr-6 pt-12 bg-white">
                    <section id="overview">
                        <h2 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>
                            Overview
                        </h2>

                        {/* Main Description */}
                        <p className="text-gray-700 mt-4 mb-6" style={{ lineHeight: '24px' }}>
                            Primary buttons are designed to capture users' attention and guide them towards the most important actions within the interface. These buttons are used for primary call-to-action (CTA) tasks such as "Submit", "Save", "Continue", or "Join Now". Due to their significant role, primary buttons should be used sparingly to highlight key actions and avoid overwhelming users with too many focal points.
                        </p>

                        {/* Images Container for Large Screens */}
                        <div className="p-6 bg-gray-100 flex justify-center gap-6 rb-c hidden lg:flex" style={{ backgroundColor: '#FAFAFA' }}>
                            {paths.overview.map((path, index) => (
                                <img key={index} src={path} alt={`State ${index + 1}`} />
                            ))}
                        </div>

                        {/* Images Container for Mobile and Medium Screens */}
                        <div className="p-6 bg-gray-100 block lg:hidden flex flex-col rb-c items-center" style={{ backgroundColor: '#FAFAFA' }}>
                            {paths.overviewMobile.map((path, index) => (
                                <img key={index} className="pb-4" src={path} alt={`State ${index + 1}`} />
                            ))}
                        </div>

                        {/* Note Description */}
                        <p className="text-sm text-gray-600 mt-4 mb-8" style={{ lineHeight: '20px' }}>
                            The above states illustrate the button's dynamic interaction feedback, highlighting how it responds to user actions such as mouse hover, keyboard focus, active pressing, and its appearance when the action is unavailable.
                        </p>

                        <h3 className='text-base font-bold text-black leading-8'>Live Demo</h3>
                        <p className='text-gray-700 mt-2 leading-6'>Dive into the full capabilities of our button components with our advanced live demo. This interactive tool lets you explore different button variants, states, sizes, themes, and more, providing a hands-on way to tailor buttons to your exact needs. Customize colors, add icons, and edit text—all with instant visual feedback and corresponding code generation for seamless integration into your projects.</p>
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

                        {/* Separator Line */}
                        <hr className="border-gray-300 mb-16" style={{ marginTop: '64px', marginBottom: '64px' }} />
                    </section>

                    {/* Anatomy Section */}
                    <section id="anatomy">
                        <h2 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>
                            Anatomy
                        </h2>
                        <p className="text text-gray-700 mt-4 mb-6" style={{ lineHeight: '20px' }}>
                            Understanding the anatomy of a button is crucial to leveraging its full potential in user interfaces. Each component of a button is meticulously designed to optimize user interaction and visual appeal. From the icons that provide immediate context, to the text label offering clear instruction, and the carefully chosen background color enhancing visibility and aesthetic—every aspect plays a pivotal role. This section dissects these key elements, providing insights into their significance and best practices for design and implementation.
                        </p>

                        {/* Anatomy Image Container */}
                        <div className="p-6 bg-gray-100 rb-c flex justify-center" style={{ backgroundColor: '#FAFAFA' }}>
                            <img src={paths.anatomy} alt="Button Anatomy" />
                        </div>

                        {/* Icons Section */}
                        <div className="mt-6 flex items-start gap-4">
                            <img src="/images/k1.svg" alt="Icon Illustration" />
                            <div>
                                <h3 className="text-base font-bold text-black" style={{ lineHeight: '34px' }}>Icons</h3>
                                <p className="text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    Icons serve as visual cues that support the text label, offering a quicker recognition of the action the button performs. They can be placed either before (leading) or after (trailing) the text to enhance the button's message. When using icons:
                                </p>
                                <ul className="list-disc pl-6 text text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    <li><strong>Size:</strong> Icons should be standardized at 24x24 pixels to ensure clear visibility without overwhelming the text.</li>
                                    <li><strong>Spacing:</strong> There should be an 8pt space between the icon and the label to prevent visual clutter and maintain focus on the button's message.</li>
                                    <li><strong>Placement margins:</strong> Icons should maintain a 24pt margin on both the left and right sides within the button to ensure a balanced, touch-friendly area.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Text Label Section */}
                        <div className="mt-6 flex items-start gap-4">
                            <img src="/images/k2.svg" alt="Text Label Illustration" />
                            <div>
                                <h3 className="text-base font-bold text-black" style={{ lineHeight: '34px' }}>Text Label</h3>
                                <p className="text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    The text label provides a direct indication of what action will be performed when the button is clicked. Effective text labels are key to usability:
                                </p>
                                <ul className="list-disc pl-6 text text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    <li><strong>Font Family:</strong> Use Elevance Sans for its readability and modern aesthetic, supporting the interface's overall design language.</li>
                                    <li><strong>Weight:</strong> Labels should be set in semi-bold to strike a balance between prominence and readability without overpowering other elements.</li>
                                    <li><strong>Size:</strong> For large and medium buttons, the minimum font size is set at 16pt to ensure the text is easily readable across various devices and user environments.</li>
                                    <li><strong>Accessibility:</strong> The color selections for the text and button's background are carefully chosen to meet AAA contrast requirements, ensuring optimal readability and accessibility for all users across both light and dark modes.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Container Section */}
                        <div className="mt-6 flex items-start gap-4">
                            <img src="/images/k3.svg" alt="Container Illustration" />
                            <div>
                                <h3 className="text-base font-bold text-black" style={{ lineHeight: '34px' }}>Container</h3>
                                <p className="text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    The button's container and corner radius are essential in distinguishing it from other interface elements and influencing user perception. Design considerations include:
                                </p>
                                <ul className="list-disc pl-6 text text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    <li><strong>Color:</strong> The background color of the button is preset to align with our design language, ensuring it provides sufficient contrast with the text to meet AAA contrast requirements.</li>
                                    <li><strong>Corner Radius:</strong> The corner radius of the button is designed to reflect the overall design language.</li>
                                    <li><strong>Spacing:</strong> The button design includes consistent left and right margins of 24pt.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Separator Line */}
                        <hr className="border-gray-300 mb-16" style={{ marginTop: '64px', marginBottom: '64px' }} />
                    </section>

                    {/* Options Section */}
                    <section id="options">
                        <h2 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>
                            Options
                        </h2>
                        <p className="text-base text-gray-700 mt-4 mb-16" style={{ lineHeight: '24px' }}>
                            In the pursuit of providing a flexible and cohesive user interface, our design system categorizes buttons into three distinct types based on their appearance and intended use: Primary, Secondary, and Tertiary.
                        </p>

                        {/* Appearance Section */}
                        <h3 className="text-lg font-bold text-black" style={{ lineHeight: '24px' }}>
                            Appearance
                        </h3>
                        <p className="text-base text-gray-700 mt-4 mb-16" style={{ lineHeight: '24px' }}>
                            Each button option/type is designed with specific visual and functional characteristics to serve different roles within the user interface, from initiating main actions to providing alternative choices or subtle prompts. This section delves into the appearance options and states for these button types, offering a guide to their application and best practices to ensure a consistent and intuitive user experience.
                        </p>

                        {/* 3-Column Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                            {paths.options.map((path, index) => (
                                <div key={index}>
                                    <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                        <img src={path} alt={`Option ${index + 1}`} className="mx-auto" />
                                    </div>
                                    <h4 className="mt-6 text-lg font-bold text-black">{index === 0 ? 'Primary' : index === 1 ? 'Secondary' : 'Tertiary'}</h4>
                                    <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                        {index === 0 ? 'For the principal call to action on the page. Primary buttons should only appear once per screen.' :
                                            index === 1 ? 'Utilize the secondary button to offer alternatives to the main action, or in situations where all actions hold equal importance.' :
                                                'Employ the tertiary button for actions of lesser importance that offer convenience.'}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Separator Line */}
                        <hr className="border-gray-300 mb-16" style={{ marginTop: '64px', marginBottom: '64px' }} />
                    </section>

                    {/* Button States Section */}
                    <section id="states">
                        <h2 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>
                            Button States
                        </h2>
                        <p className="text-base text-gray-700 mt-4 mb-16" style={{ lineHeight: '22px' }}>
                            Defining the visual and interactive variations of buttons, encompassing default, hover, focus, press, and disabled states to ensure consistent and intuitive user experiences.
                        </p>

                        {/* 2-Column Layout for Button States */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            {paths.states.map((path, index) => (
                                <div key={index}>
                                    <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                        <div className="flex flex-col gap-6 items-center">
                                            <img src={path} alt={`State ${index + 1}`} />
                                        </div>
                                    </div>
                                    <h4 className="mt-6 text-lg font-bold text-black">{index === 0 ? 'Default' : index === 1 ? 'Hover' : index === 2 ? 'Focus' : index === 3 ? 'Press' : 'Disabled'}</h4>
                                    <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                        {index === 0 ? 'The default state is the button\'s initial appearance before any user interaction...' :
                                            index === 1 ? 'When the user\'s cursor moves over the button, it transitions to the hover state...' :
                                                index === 2 ? 'The focus state is triggered when the button receives focus, either through tab navigation or clicking...' :
                                                    index === 3 ? 'Activated upon clicking or tapping the button, the press state provides tactile feedback to users...' :
                                                        'The disabled state is used when an action is not currently available to the user...'}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Separator Line */}
                        <hr className="border-gray-300 mb-16" style={{ marginTop: '64px', marginBottom: '64px' }} />
                    </section>

                    {/* Intent Section */}
                    <section id="intents">
                        <h2 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>
                            Intent
                        </h2>
                        <p className="text-base text-gray-700 mt-4 mb-16" style={{ lineHeight: '24px' }}>
                            Intent reflects the purpose or goal behind an action or decision, grounding it in the user's or system's objectives...
                        </p>

                        {/* 2-Column Layout for Intent */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            {paths.intents.map((path, index) => (
                                <div key={index}>
                                    <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                        <img src={path} alt={`Intent ${index + 1}`} className="mx-auto" />
                                    </div>
                                    <h4 className="mt-6 text-lg font-bold text-black">{index === 0 ? 'Default' : 'Negative'}</h4>
                                    <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                        {index === 0 ? 'The default button type represents the standard option for conveying general actions.' :
                                            'For destructive actions - i.e. when something cannot be undone.'}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Separator Line */}
                        <hr className="border-gray-300 mb-16" style={{ marginTop: '64px', marginBottom: '64px' }} />
                    </section>

                    {/* Size Section */}
                    <section id="sizes">
                        <h2 className="text-2xl font-bold text-black mb-4" style={{ lineHeight: '34px' }}>Size</h2>
                        <p className="text-base text-gray-700 mb-8" style={{ lineHeight: '20px' }}>
                            Understanding the appropriate usage of button sizes within an interface is crucial for maintaining hierarchy, ensuring accessibility, and enhancing user experience. Our design system provides four distinct sizes for buttons: Large, Medium, Small, and Extra Small.
                        </p>
                        <div className="p-6 bg-gray-100 rb-c flex justify-center gap-6 mb-8" style={{ backgroundColor: '#FAFAFA' }}>
                            {paths.sizes.map((path, index) => (
                                <img key={index} src={path} alt={`Size ${index + 1}`} />
                            ))}
                        </div>
                        <p className="text-base text-gray-700 mb-8" style={{ lineHeight: '20px' }}>
                            Each size is designed to accommodate different screen sizes, contexts, and user needs, ensuring a versatile and adaptable component library.
                        </p>

                        {/* Size Table */}
                        <table className="w-full border border-gray-300 mb-16">
                            <thead style={{ backgroundColor: '#f4f4f4' }}>
                                <tr>
                                    <th className="p-4 text-lg font-bold text-black">Size</th>
                                    <th className="p-4 text-lg font-bold text-black">Description</th>
                                    <th className="p-4 text-lg font-bold text-black">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-300">
                                    <td className="p-4 text-base font-bold text-black">Large</td>
                                    <td className="p-4 text-base text-gray-700">
                                        Large buttons are designed for high-priority actions that require prominence. These buttons are ideal for primary actions on landing pages, forms, or modal dialogs where focus needs to be drawn.
                                    </td>
                                    <td className="p-4 text-base text-gray-700">
                                        <ul className="list-none mt-2">
                                            <li><strong>Height:</strong> 44pt</li>
                                            <li><strong>Font Size:</strong> 16pt</li>
                                            <li><strong>Padding:</strong> 24pt</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-300">
                                    <td className="p-4 text-base font-bold text-black">Medium</td>
                                    <td className="p-4 text-base text-gray-700">
                                        Medium buttons are the standard go-to for most interface actions. They offer a balanced size that is both functional and space-efficient, making them suitable for a wide array of applications.
                                    </td>
                                    <td className="p-4 text-base text-gray-700">
                                        <ul className="list-none mt-2">
                                            <li><strong>Height:</strong> 40pt</li>
                                            <li><strong>Font Size:</strong> 14pt</li>
                                            <li><strong>Padding:</strong> 20pt</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-300">
                                    <td className="p-4 text-base font-bold text-black">Small</td>
                                    <td className="p-4 text-base text-gray-700">
                                        Small buttons are used when space is limited or actions that are less prioritized. They fit well in compact spaces like toolbars, list items, and secondary options.
                                    </td>
                                    <td className="p-4 text-base text-gray-700">
                                        <ul className="list-none mt-2">
                                            <li><strong>Height:</strong> 32pt</li>
                                            <li><strong>Font Size:</strong> 12pt</li>
                                            <li><strong>Padding:</strong> 16pt</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-base font-bold text-black">Extra Small</td>
                                    <td className="p-4 text-base text-gray-700">
                                        Extra Small buttons cater to very specific needs where the interface space is extremely limited. They are best used with caution to avoid compromising accessibility, for example in tags, chips, or buttons within table rows.
                                    </td>
                                    <td className="p-4 text-base text-gray-700">
                                        <ul className="list-none mt-2">
                                            <li><strong>Height:</strong> 24pt</li>
                                            <li><strong>Font Size:</strong> 12pt</li>
                                            <li><strong>Padding:</strong> 16pt</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    {/* Implementation Considerations */}
                    <h3 className="text-lg font-bold text-black mb-4">Implementation Considerations</h3>
                    <ul className="list-disc pl-5 text-base text-gray-700 mb-16">
                        <li>
                            <strong>Consistency:</strong> Use icons consistently across similar buttons to establish a recognizable pattern...
                        </li>
                        <li>
                            <strong>Accessibility:</strong> Provide alternative text descriptions for icons...
                        </li>
                        <li>
                            <strong>Visual Balance:</strong> Whether using leading, trailing, or combined icons...
                        </li>
                    </ul>

                    {/* Separator Line */}
                    <hr className="border-gray-300 mb-16" style={{ marginTop: '64px', marginBottom: '64px' }} />
                </section>

                {/* Best Practices */}
                <section id="best-practices">
                    <h2 className="text-2xl font-bold text-black mb-6" style={{ lineHeight: '34px' }}>Best Practices</h2>
                    <p className="text-base text-gray-600 mb-6" style={{ lineHeight: '24px' }}>
                        Ensuring that buttons are effective in guiding user actions requires attention to detail in both design and implementation. Below are paired "Do" and "Don't" best practices, each addressing a specific aspect of button usage to help illustrate optimal and suboptimal practices.
                    </p>

                    <div className="grid grid-cols-2 gap-16 pb-16">
                        {paths.bestPractices.map((path, index) => (
                            <div key={index}>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={path} alt={`Best Practice ${index + 1}`} className="mx-auto" />
                                </div>
                                <img src="/images/do.svg" alt="Do Icon" className="inline mr-4" />
                                <h3 className={`inline text-lg font-bold ${index % 2 === 0 ? 'text-green-600' : 'text-red-600'} mb-2`}>{index % 2 === 0 ? 'Do' : 'Don\'t'}</h3>
                                <p className="text-base text-gray-600 mb-6">
                                    {index % 2 === 0 ? 'Do use actionable, precise language that clearly describes the button’s function.' :
                                        'Don\'t use ambiguous terms or lengthy descriptions that confuse users.'}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

        {/* Desktop JumpLinkNav */}
        <div className="hidden lg:block ml-16 mt-14 mr-16 mb-16 sticky top-12 bg-white">
            <JumpLinkNav sections={sections} />
        </div>
    </div>
    );
}

export default ButtonOverviewContent;
