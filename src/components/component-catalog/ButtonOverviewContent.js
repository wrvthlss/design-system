// ButtonOverviewContent.js
import React, { useEffect } from 'react';
import JumpLinkNav from '../shared/JumpLinkNav';
import JumpLinkNavMobi from '../shared/JumpLinkNavMobi';
import ParentComponent from '../shared/ParentComponent';

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
        metrics: [
            `/images/buttons/${brand}/${brand}-img-button-metrics-001.svg`,
            `/images/buttons/${brand}/${brand}-img-button-metrics-002.svg`,
            `/images/buttons/${brand}/${brand}-img-button-metrics-003.svg`,
            `/images/buttons/${brand}/${brand}-img-button-metrics-004.svg`
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
            <ParentComponent />
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

                        {/* Main Description */}
                        <p className="text-gray-700 mt-4 mb-6" style={{ lineHeight: '24px' }}>
                            Primary buttons are designed to capture users' attention and guide them towards the most important actions within the interface. These buttons are used for primary call-to-action (CTA) tasks such as "Submit", "Save", "Continue", or "Join Now". Due to their significant role, primary buttons should be used sparingly to highlight key actions and avoid overwhelming users with too many focal points.
                        </p>

                        {/* Images Container for Large Screens */}
                        <div className="p-6 bg-gray-100 flex justify-center gap-6 rb-c hidden lg:flex" style={{ backgroundColor: '#FAFAFA' }}>
                            <img src={imagePaths.overview[0]} alt="State 1" />
                            <img src={imagePaths.overview[1]} alt="State 2" />
                            <img src={imagePaths.overview[2]} alt="State 3" />
                            <img src={imagePaths.overview[3]} alt="State 4" />
                        </div>

                        {/* Images Container for Mobile and Medium Screens */}
                        <div className="p-6 bg-gray-100 block lg:hidden flex flex-col rb-c items-center" style={{ backgroundColor: '#FAFAFA' }}>
                            <img className="pb-4" src={imagePaths.overview[0]} alt="State 1" />
                            <img className="pb-4" src={imagePaths.overview[1]} alt="State 2" />
                            <img className="pb-4" src={imagePaths.overview[2]} alt="State 3" />
                            <img className="pb-4" src={imagePaths.overview[3]} alt="State 4" />
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
                            <img src={imagePaths.anatomy} alt="Button Anatomy" />
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
                            {/* Primary Button */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <img src={imagePaths.states[0]} alt="Primary Button" className="mx-auto" />
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Primary</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    For the principal call to action on the page. Primary buttons should only appear once per screen.
                                </p>
                            </div>

                            {/* Secondary Button */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <img src={imagePaths.states[1]} alt="Secondary Button" className="mx-auto" />
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Secondary</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    Utilize the secondary button to offer alternatives to the main action, or in situations where all actions hold equal importance.
                                </p>
                            </div>

                            {/* Tertiary Button */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <img src={imagePaths.states[2]} alt="Tertiary Button" className="mx-auto" />
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Tertiary</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    Employ the tertiary button for actions of lesser importance that offer convenience.
                                </p>
                            </div>
                        </div>

                        {/* Separator Line */}
                        <hr className="border-gray-300 mb-16" style={{ marginTop: '64px', marginBottom: '64px' }} />

                        {/* Button States Section */}
                        <h3 className="text-lg font-bold text-black" style={{ lineHeight: '24px' }}>
                            Button States
                        </h3>
                        <p className="text-base text-gray-700 mt-4 mb-16" style={{ lineHeight: '22px' }}>
                            Defining the visual and interactive variations of buttons, encompassing default, hover, focus, press, and disabled states to ensure consistent and intuitive user experiences.
                        </p>

                        {/* 2-Column Layout for Button States */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            {/* Row 1: Default */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <div className="flex flex-col gap-6 items-center">
                                        <img src={imagePaths.states[0]} alt="Default State 1" />
                                        <img src={imagePaths.states[1]} alt="Default State 2" />
                                        <img src={imagePaths.states[2]} alt="Default State 3" />
                                    </div>
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Default</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    The default state is the button's initial appearance before any user interaction...
                                </p>
                            </div>

                            {/* Row 2: Hover */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <div className="flex flex-col gap-6 items-center">
                                        <img src={imagePaths.states[3]} alt="Hover State 1" />
                                        <img src={imagePaths.states[4]} alt="Hover State 2" />
                                        <img src={imagePaths.states[5]} alt="Hover State 3" />
                                    </div>
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Hover</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    When the user's cursor moves over the button, it transitions to the hover state...
                                </p>
                            </div>

                            {/* Row 3: Focus */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <div className="flex flex-col gap-6 items-center">
                                        <img src={imagePaths.states[6]} alt="Focus State 1" />
                                        <img src={imagePaths.states[4]} alt="Focus State 2" />
                                        <img src={imagePaths.states[5]} alt="Focus State 3" />
                                    </div>
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Focus</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    The focus state is triggered when the button receives focus, either through tab navigation or clicking...
                                </p>
                            </div>

                            {/* Row 4: Press */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <div className="flex flex-col gap-6 items-center">
                                        <img src={imagePaths.states[7]} alt="Press State 1" />
                                        <img src={imagePaths.states[7]} alt="Press State 2" />
                                        <img src={imagePaths.states[8]} alt="Press State 3" />
                                    </div>
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Press</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    Activated upon clicking or tapping the button, the press state provides tactile feedback to users...
                                </p>
                            </div>

                            {/* Row 5: Disabled */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <div className="flex flex-col gap-6 items-center">
                                        <img src={imagePaths.states[9]} alt="Disabled State 1" />
                                        <img src={imagePaths.states[10]} alt="Disabled State 2" />
                                        <img src={imagePaths.states[11]} alt="Disabled State 3" />
                                    </div>
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Disabled</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    The disabled state is used when an action is not currently available to the user...
                                </p>
                            </div>
                        </div>

                        {/* Separator Line */}
                        <hr className="border-gray-300 mb-16" style={{ marginTop: '64px', marginBottom: '64px' }} />

                        {/* Intent Section */}
                        <h3 className="text-lg font-bold text-black" style={{ lineHeight: '24px' }}>
                            Intent
                        </h3>
                        <p className="text-base text-gray-700 mt-4 mb-16" style={{ lineHeight: '24px' }}>
                            Intent reflects the purpose or goal behind an action or decision, grounding it in the user's or system's objectives...
                        </p>

                        {/* 2-Column Layout for Intent */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            {/* Default Intent */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <img src={imagePaths.intents[0]} alt="Default Intent" className="mx-auto" />
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Default</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    The default button type represents the standard option for conveying general actions.
                                </p>
                            </div>

                            {/* Negative Intent */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <img src={imagePaths.intents[1]} alt="Negative Intent" className="mx-auto" />
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Negative</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    For destructive actions - i.e. when something cannot be undone.
                                </p>
                            </div>
                        </div>

                        {/* Separator Line */}
                        <hr className="border-gray-300 mb-16" style={{ marginTop: '64px', marginBottom: '64px' }} />

                        {/* Size Section */}
                        <h3 className="text-lg font-bold text-black mb-4">Size</h3>
                        <p className="text-base text-gray-700 mb-8" style={{ lineHeight: '20px' }}>
                            Understanding the appropriate usage of button sizes within an interface is crucial for maintaining hierarchy, ensuring accessibility, and enhancing user experience. Our design system provides four distinct sizes for buttons: Large, Medium, Small, and Extra Small.
                        </p>
                        <div className="p-6 bg-gray-100 rb-c flex justify-center gap-6 mb-8" style={{ backgroundColor: '#FAFAFA' }}>
                            <img src={imagePaths.sizes[0]} alt="Large Button" />
                            <img src={imagePaths.sizes[1]} alt="Medium Button" />
                            <img src={imagePaths.sizes[2]} alt="Small Button" />
                            <img src={imagePaths.sizes[3]} alt="Extra Small Button" />
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
                        {/* Icons Section */}
                        <h3 className="text-lg font-bold text-black mb-4">Icon</h3>
                        <p className="text-base text-gray-700 mb-8" style={{ lineHeight: '24px' }}>
                            Incorporating icons into buttons can significantly enhance their intuitiveness and visual appeal...
                        </p>

                        {/* Icons 2-Column Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            {/* Row 1 */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <img src={imagePaths.states[0]} alt="Leading Icon" className="mx-auto" />
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Leading Icons</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    Leading icons are placed before the text label within a button...
                                </p>
                            </div>
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <img src={imagePaths.states[1]} alt="Trailing Icon" className="mx-auto" />
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Trailing Icon</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    Trailing icons appear after the text label...
                                </p>
                            </div>

                            {/* Row 2 */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <img src={imagePaths.states[2]} alt="Combining Leading and Trailing Icons" className="mx-auto" />
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Combining Leading and Trailing Icons</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    Combining leading and trailing icons...
                                </p>
                            </div>
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <img src={imagePaths.states[3]} alt="Standalone Icon" className="mx-auto" />
                                </div>
                                <h4 class="mt-6 text-lg font-bold text-black">Standalone</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    Standalone interactive icons...
                                </p>
                            </div>

                            {/* Row 3 */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <img src={imagePaths.states[4]} alt="Encapsulated Icon" className="mx-auto" />
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Encapsulated (Within a Button Container)</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    Encapsulated Icons are housed within a button container...
                                </p>
                            </div>
                        </div>

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


                    {/* Metrics Section */}
                    <section id="metrics">
                        <div>
                            <h2 className="text-2xl font-bold text-black mb-6" style={{ lineHeight: '34px' }}>Metrics</h2>
                            <p className="text-base text-gray-600 mb-6" style={{ lineHeight: '24px' }}>
                                Metrics play a foundational role in ensuring consistency, usability, and visual harmony across a user interface. In the context of our design system, "Metrics" refers to the specific dimensions and spacing guidelines that govern the appearance and interaction of buttons.
                            </p>
                            <p className="text-base text-gray-600 mb-6" style={{ lineHeight: '24px' }}>
                                These measurements include height, width, padding, and margin, along with font size and icon dimensions. Adhering to these metrics ensures that buttons are not only aesthetically pleasing but also accessible and functional across various devices and user interfaces. By establishing clear standards for each button size, we create a cohesive and intuitive experience for all users.
                            </p>

                            <div className="grid grid-cols-2 gap-16">
                                <div>
                                    <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                        <img src={imagePaths.metrics[0]} alt="Large Button" className="mx-auto" />
                                    </div>
                                    <h3 className="text-lg font-bold text-black mb-4">Large Button</h3>
                                    <p className="text-base text-gray-600 mb-4">Large buttons are designed for primary actions requiring prominence and ease of interaction, especially on larger touch targets.</p>
                                    <ul className="list-none text-base text-gray-600 mb-4">
                                        <li><strong>Height:</strong> 44pt</li>
                                        <li><strong>Width:</strong> Minimum 120pt</li>
                                        <li><strong>Padding:</strong> 24pt ↔; 10pt ↕</li>
                                        <li><strong>Font Size:</strong> 16pt</li>
                                        <li><strong>Icon Size:</strong> 24x24pt, 8pt spacing from text</li>
                                    </ul>
                                    <p className="text-base text-gray-600 mb-4">Large buttons are best used for key actions such as primary call-to-actions on landing pages, forms, and modal dialogs.</p>
                                </div>

                                <div>
                                    <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                        <img src={imagePaths.metrics[1]} alt="Medium Button" className="mx-auto" />
                                    </div>
                                    <h3 className="text-lg font-bold text-black mb-4">Medium Button</h3>
                                    <p className="text-base text-gray-600 mb-4">Medium buttons serve as the standard choice for most actions, offering a balanced option for both desktop and mobile interfaces.</p>
                                    <ul className="list-none text-base text-gray-600 mb-4">
                                        <li><strong>Height:</strong> 40pt</li>
                                        <li><strong>Width:</strong> Minimum 100pt</li>
                                        <li><strong>Padding:</strong> 20pt ↔; 8pt ↕</li>
                                        <li><strong>Font Size:</strong> 14pt</li>
                                        <li><strong>Icon Size:</strong> 24x24pt, 8pt spacing from text</li>
                                    </ul>
                                    <p className="text-base text-gray-600 mb-4">Medium buttons are versatile, suitable for form submissions, navigation actions, and secondary actions.</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-black mb-4">Small Button</h3>
                                    <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                        <img src={imagePaths.metrics[2]} alt="Small Button" className="mx-auto" />
                                    </div>
                                    <p className="text-base text-gray-600 mb-4">Small buttons are utilized for actions that are secondary or when space is limited, fitting neatly into compact areas.</p>
                                    <ul className="list-none text-base text-gray-600 mb-4">
                                        <li><strong>Height:</strong> 32pt</li>
                                        <li><strong>Width:</strong> Minimum 80pt</li>
                                        <li><strong>Padding:</strong> 16pt ↔; 8pt ↕</li>
                                        <li><strong>Font Size:</strong> 12pt</li>
                                        <li><strong>Icon Size:</strong> 16x16pt, 4pt spacing from text</li>
                                    </ul>
                                    <p className="text-base text-gray-600 mb-4">Use small buttons for actions within lists, toolbars, or as secondary actions.</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-black mb-4">Extra Small Button</h3>
                                    <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                        <img src={imagePaths.metrics[3]} alt="Extra Small Button" className="mx-auto" />
                                    </div>
                                    <p className="text-base text-gray-600 mb-4">Extra small buttons are tailored for very specific use cases where minimal space is available, such as in dense interfaces.</p>
                                    <ul className="list-none text-base text-gray-600 mb-4">
                                        <li><strong>Height:</strong> 24pt</li>
                                        <li><strong>Width:</strong> Minimum 64pt</li>
                                        <li><strong>Padding:</strong> 12pt ↔; 4pt ↕</li>
                                        <li><strong>Font Size:</strong> 12pt</li>
                                        <li><strong>Icon Size:</strong> 12x12pt, 4pt spacing from text</li>
                                    </ul>
                                    <p className="text-base text-gray-600 mb-4">Extra small buttons are ideal for icons or minimal-text actions in highly compact spaces.</p>
                                </div>
                            </div>
                        </div>
                        <hr className="border-t border-gray-300 mb-16" style={{ marginTop: '64px', marginBottom: '64px' }} />
                    </section>

                    {/* Best Practices */}
                    <section id="best-practices">
                        <h2 className="text-2xl font-bold text-black mb-6" style={{ lineHeight: '34px' }}>Best Practices</h2>
                        <p className="text-base text-gray-600 mb-6" style={{ lineHeight: '24px' }}>
                            Ensuring that buttons are effective in guiding user actions requires attention to detail in both design and implementation. Below are paired "Do" and "Don't" best practices, each addressing a specific aspect of button usage to help illustrate optimal and suboptimal practices.
                        </p>

                        <div className="grid grid-cols-2 gap-16 pb-16">
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.bestPractices[0]} alt="Use Clear and Concise Labeling" className="mx-auto" />
                                </div>
                                <img src="/images/do.svg" alt="Use Clear and Concise Labeling Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-green-600 mb-2">Use Clear and Concise Labeling</h3>
                                <p className="text-base text-gray-600 mb-6">Do use actionable, precise language that clearly describes the button’s function.</p>
                            </div>

                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.bestPractices[1]} alt="Avoid Using Vague or Long Labeling" className="mx-auto" />
                                </div>
                                <img src="/images/dont.svg" alt="Avoid Using Vague or Long Labeling Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-red-600 mb-2">Avoid Using Vague or Long Labeling</h3>
                                <p className="text-base text-gray-600 mb-6">Don't use ambiguous terms or lengthy descriptions that confuse users.</p>
                            </div>

                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.bestPractices[2]} alt="Maintain Hierarchical Consistency Part 1" className="mx-auto mb-6" />
                                    <img src={imagePaths.bestPractices[3]} alt="Maintain Hierarchical Consistency Part 2" className="mx-auto" />
                                </div>
                                <img src="/images/do.svg" alt="Maintain Hierarchical Consistency Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-green-600 mb-2">Maintain Hierarchical Consistency</h3>
                                <p className="text-base text-gray-600 mb-6">Do use button variants to establish visual hierarchies, reserving primary buttons for main actions.</p>
                            </div>

                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.bestPractices[4]} alt="Avoid Multiple Primary Buttons Part 1" className="mx-auto mb-6" />
                                    <img src={imagePaths.bestPractices[5]} alt="Avoid Multiple Primary Buttons Part 2" className="mx-auto" />
                                </div>
                                <img src="/images/dont.svg" alt="Avoid Multiple Primary Buttons Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-red-600 mb-2">Avoid Multiple Primary Buttons</h3>
                                <p className="text-base text-gray-600 mb-6">Don't clutter your interface with multiple primary buttons that dilute focus.</p>
                            </div>

                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.bestPractices[6]} alt="Ensure Accessibility" className="mx-auto" />
                                </div>
                                <img src="/images/do.svg" alt="Ensure Accessibility Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-green-600 mb-2">Ensure Accessibility</h3>
                                <p className="text-base text-gray-600 mb-6">Do design with adequate contrast and accessible labels, employing ARIA attributes where needed.</p>
                            </div>

                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.bestPractices[7]} alt="Avoid Unexplained Disabled Buttons" className="mx-auto" />
                                </div>
                                <img src="/images/dont.svg" alt="Avoid Unexplained Disabled Buttons Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-red-600 mb-2">Avoid Unexplained Disabled Buttons</h3>
                                <p className="text-base text-gray-600 mb-6">Don't use disabled buttons without explanation, which leads to user confusion.</p>
                            </div>

                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.bestPractices[8]} alt="Provide Visual Feedback Part 1" className="mx-auto mb-6" />
                                    <img src={imagePaths.bestPractices[9]} alt="Provide Visual Feedback Part 2" className="mx-auto" />
                                </div>
                                <img src="/images/do.svg" alt="Provide Visual Feedback Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-green-600 mb-2">Provide Visual Feedback</h3>
                                <p className="text-base text-gray-600 mb-6">Do utilize interactive states to give feedback on user actions.</p>
                            </div>

                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.bestPractices[10]} alt="Avoid Small Clickable Areas" className="mx-auto" />
                                </div>
                                <img src="/images/dont.svg" alt="Avoid Small Clickable Areas Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-red-600 mb-2">Avoid Small Clickable Areas</h3>
                                <p className="text-base text-gray-600 mb-6">Don't hinder easy interaction with a small clickable area.</p>
                            </div>

                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.bestPractices[11]} alt="Test for Responsiveness Part 1" className="mx-auto mb-6" />
                                    <img src={imagePaths.bestPractices[12]} alt="Test for Responsiveness Part 2" className="mx-auto" />
                                </div>
                                <img src="/images/do.svg" alt="Test for Responsiveness Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-green-600 mb-2">Test for Responsiveness</h3>
                                <p className="text-base text-gray-600 mb-6">Do ensure buttons are easily clickable across all devices and screen sizes.</p>
                            </div>

                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.bestPractices[13]} alt="Avoid Skipping User Testing / Feedback" className="mx-auto" />
                                </div>
                                <img src="/images/dont.svg" alt="Avoid Skipping User Testing / Feedback Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-red-600 mb-2">Avoid Skipping User Testing / Feedback</h3>
                                <p className="text-base text-gray-600 mb-6">Don't overlook the importance of user testing and feedback for uncovering usability issues.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Desktop JumpLinkNav */}
            <div className="hidden lg:block ml-16 mt-14 mr-16 mb-16 sticky top-12 bg-white">
                <JumpLinkNav sections={sections} />
            </div>
        </div>
    );
}

export default ButtonOverviewContent;
