// CheckboxOverviewContent.js
import React from 'react';
import JumpLinkNav from '../shared/JumpLinkNav';
import JumpLinkNavMobi from '../shared/JumpLinkNavMobi';

const CheckboxOverviewContent = () => {
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

    return (
        <div className='flex bg-white'>
            {/* Main Content Area */}
            <div className="flex-1 pt-3 bg-white">
                {/* Mobile JumpLinkNavMobi */}
                <div className="block lg:hidden pt-5">
                    <JumpLinkNavMobi sections={sections} onNavigate={navigateToSection} />
                </div>

                {/* Overview Section */}
                <div className="flex-1 pl-6 pr-6 pt-12 bg-white">
                    <section id="overview">
                        <h2 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>
                            Overview
                        </h2>

                        <p className="text text-gray-700 mt-4 mb-6" style={{ lineHeight: '24px' }}>
                            Checkboxes allow for the selection of none, one, or several options from a set of choices, offering flexibility in how users interact with a list of items.
                        </p>

                        {/* Overview Image */}
                        <div className="p-6 bg-gray-100 flex justify-center rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                            <img src="/images/checkbox/overview.svg" alt="Checkbox Overview States" />
                        </div>

                        <p className="text-sm text-gray-600 mt-4 mb-8" style={{ lineHeight: '20px' }}>
                            The above states illustrate the various states of the checkbox component: checked, unchecked, hover, focused, and indeterminate. These states provide visual feedback to users, indicating their selection status and interaction with the checkboxes.
                        </p>

                        <hr className="border-gray-300 mb-16" style={{ marginTop: '64px', marginBottom: '64px' }} />
                    </section>

                    {/* Anatomy Section */}
                    <section id="anatomy">
                        <h2 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>
                            Anatomy
                        </h2>
                        <p className="text text-gray-700 mt-4 mb-6" style={{ lineHeight: '20px' }}>
                            Understanding the anatomy of a checkbox is essential for effective utilization within user interfaces. Every element of a checkbox is purposefully crafted to facilitate user interaction and enhance usability. From the checkbox itself, serving as the visual indicator of selection, to the accompanying label providing context, clarity, and instruction—each component contributes to the overall functionality and user experience. This section breaks down these integral parts, offering insights into their roles and best practices for design and integration.
                        </p>

                        {/* Anatomy Image */}
                        <div className="p-6 bg-gray-100 rb-c flex justify-center" style={{ backgroundColor: '#FAFAFA' }}>
                            <img src="/images/checkbox/anatomy.svg" alt="Checkbox Anatomy" />
                        </div>

                        {/* Container Section */}
                        <div className="mt-6 flex items-start gap-4">
                            <img src="/images/k1.svg" alt="Container Illustration" />
                            <div>
                                <h3 className="text-base font-bold text-black" style={{ lineHeight: '34px' }}>Container</h3>
                                <p className="text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    The container encapsulates the checkbox icon, providing a clickable area for users to interact with. It defines the boundary for toggling the checkbox state and contributes to the overall usability and aesthetics of the checkbox component.
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    <li>Clickable Area: A well-defined clickable area within the container enhances usability by providing users with a clear target for interaction.</li>
                                    <li>Interactive Feedback: Visual cues, such as hover effects or subtle animations, within the container provide users with immediate feedback, reinforcing their actions and improving engagement.</li>
                                    <li>Responsiveness: Adapting container size and styling responsively ensures consistent usability across various screen sizes and devices, enhancing accessibility and user satisfaction.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Icon Section */}
                        <div className="mt-6 flex items-start gap-4">
                            <img src="/images/k2.svg" alt="Icon Illustration" />
                            <div>
                                <h3 className="text-base font-bold text-black" style={{ lineHeight: '34px' }}>Icon</h3>
                                <p className="text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    The checkbox icon serves as a visual representation of the checkbox state, crucial for conveying whether an option is selected or not. It plays a significant role in user interaction and understanding within the interface.
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    <li>Shape and Style: Consistent shapes and styles for the checkbox icon across the interface aid in user recognition and understanding of the selection process.</li>
                                    <li>State Representation: Clear visual differentiation between checked, unchecked, and indeterminate states ensures users can easily discern the status of each option.</li>
                                    <li>Consistency and Uniformity: Maintaining uniformity in checkbox icon design enhances user experience by reducing cognitive load and fostering familiarity with the interface.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Text Label Section */}
                        <div className="mt-6 flex items-start gap-4">
                            <img src="/images/k3.svg" alt="Text Label Illustration" />
                            <div>
                                <h3 className="text-base font-bold text-black" style={{ lineHeight: '34px' }}>Text Label</h3>
                                <p className="text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    The text label accompanying the checkbox icon provides context and clarity regarding the associated option, guiding users in their decision-making process. Note that the text label is also clickable, offering users an additional interaction point to toggle selections.
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    <li>Descriptive Content: Concise and descriptive text labels help users understand the purpose of each checkbox option, reducing ambiguity and facilitating informed selections.</li>
                                    <li>Alignment and Placement: Thoughtful positioning of text labels relative to the checkbox icon ensures optimal visual hierarchy and readability, enhancing user comprehension.</li>
                                    <li>Customization and Styling: Customizable text label styles, including font size, color, and formatting options, allow for seamless integration with the interface's design language and branding.</li>
                                </ul>
                            </div>
                        </div>


                        <hr className="border-gray-300 mb-16" style={{ marginTop: '64px', marginBottom: '64px' }} />
                    </section>

                    {/* Options Section */}
                    <section id="options">
                        <h2 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>
                            Options
                        </h2>
                        <p className="text-base text-gray-700 mt-4 mb-16" style={{ lineHeight: '24px' }}>
                            Checkboxes serve as a critical component for enabling users to make selections across a variety of contexts. To accommodate the diverse needs of our applications while maintaining a coherent user experience, we offer two primary options for our checkboxes:
                        </p>

                        {/* Appearance */}
                        <h3 className="text-lg font-bold text-black" style={{ lineHeight: '24px' }}>
                            Appearance
                        </h3>
                        <p className="text-base text-gray-700 mt-4 mb-16" style={{ lineHeight: '24px' }}>
                            Each checkbox variant is crafted to meet distinct interaction needs, enabling users to make selections ranging from simple choices to complex configurations. This section explores the visual design and functionality of our checkbox options, including their various states. We'll provide insights on how to effectively apply these options and share best practices to maintain a consistent and user-friendly experience across interfaces.
                        </p>

                        {/* Two-Column Layout for Checkbox Appearance */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <img src="/images/checkbox/options001.svg" alt="Standard Checkbox" className="mx-auto" />
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Standard</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    The foundation of our selection tools, allowing single or multiple choices from a list. They're clear, easy to use, and suitable for a wide range of applications, from forms to settings.
                                </p>
                            </div>
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <img src="/images/checkbox/options002.svg" alt="Indeterminate Checkbox" className="mx-auto" />
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Indeterminate</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    For complex selections, these checkboxes show a partial choice in a group, ideal for nested options. The indeterminate state signals an incomplete selection, guiding further user action or awareness.
                                </p>
                            </div>
                        </div>

                        {/* Label Placement */}
                        <h3 className="text-lg font-bold text-black" style={{ lineHeight: '24px' }}>
                            Label Placement
                        </h3>
                        <p className="text-base text-gray-700 mt-4 mb-16" style={{ lineHeight: '24px' }}>
                            The placement of a checkbox's label—whether to the left or right of the checkbox icon—plays a crucial role in the component's usability and alignment with user expectations.
                            <ul className="list-disc pl-6">
                                <li>
                                    <strong>Left-Placed Labels:</strong> Traditionally used in right-to-left (RTL) reading contexts or when a design aesthetic calls for it. This placement can help with visual balance in certain layouts and may be preferred in specific cultural contexts.
                                </li>
                                <li>
                                    <strong>Right-Placed Labels:</strong> The more common arrangement, especially in left-to-right (LTR) reading cultures. This setup aligns with most users' natural reading flow, making it easier for them to associate the label with the checkbox.
                                </li>
                            </ul>
                        </p>
                        <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                            <img src="/images/checkbox/options003.svg" alt="Label Placement" className="mx-auto" />
                        </div>
                        <p className="text-sm text-gray-600 mt-4 mb-8">
                            Choosing the appropriate label placement is key to ensuring that checkboxes are easy to interact with and understand. Consider your audience and the overall design of your UI when deciding on label placement to ensure a seamless and intuitive user experience.
                        </p>
                        {/* Checkbox States Section */}
                        <section id="states">
                            <h3 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>
                                Checkbox States
                            </h3>
                            <p className="text-base text-gray-700 mt-4 mb-16" style={{ lineHeight: '24px' }}>
                                Checkboxes in our design system dynamically respond to user actions and contexts, with each state—from default to interaction and accessibility—playing a key role in guiding intuitive user interactions. Here’s a brief overview of how these states function:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                {/* Empty / Default / Unchecked */}
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/states001.svg" alt="Empty / Default / Unchecked State" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-black">Empty / Default / Unchecked</h4>
                                    <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                        The default state shows a checkbox unselected, ready for user interaction, serving as a blank slate for users to make their selections.
                                    </p>
                                </div>

                                {/* Hover */}
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/states002.svg" alt="Hover State" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-black">Hover</h4>
                                    <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                        When the cursor hovers over a checkbox, it signals the item is actionable, indicating interactivity. This hover effect is applied solely to the checkbox icon to highlight the interactive element. However, both the checkbox and its text label are clickable, ensuring ease of use and enhancing accessibility for users.
                                    </p>
                                </div>

                                {/* Checked */}
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/states003.svg" alt="Checked State" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-black">Checked</h4>
                                    <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                        A checked state confirms a user's selection, clearly displaying choices they've made, reinforcing the decision-making process.
                                    </p>
                                </div>

                                {/* Press */}
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/states004.svg" alt="Press State" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-black">Press</h4>
                                    <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                        The pressed state, visible when a checkbox is actively clicked but not released, provides immediate visual feedback, ensuring users that their input is registered.
                                    </p>
                                </div>

                                {/* Disabled */}
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/states005.svg" alt="Disabled State" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-black">Disabled</h4>
                                    <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                        A disabled checkbox, shown in muted colors, indicates non-interactivity, guiding users away from options not available in the current context.
                                    </p>
                                </div>

                                {/* Focus */}
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/states002.svg" alt="Focus State" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-black">Focus</h4>
                                    <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                        The focused state, often highlighted by a border or glow, indicates keyboard navigation selection, crucial for accessibility and clear interaction.
                                    </p>
                                </div>
                            </div>
                        </section>


                        <hr className="border-gray-300 mb-16" style={{ marginTop: '64px', marginBottom: '64px' }} />
                    </section>
                    {/* Intent Section */}
                    <section id="intent">
                        <h3 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>
                            Intent
                        </h3>
                        <p className="text-base text-gray-700 mt-4 mb-16" style={{ lineHeight: '24px' }}>
                            Intent for checkboxes centers on the 'why' behind each choice, linking selections to user goals or system logic. It's about ensuring each checkbox decision is meaningful, guiding users towards outcomes that align with their objectives or enhance system functionality. Highlighting intent ensures checkboxes are used purposefully, facilitating informed interactions within your UI.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            {/* Default */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/intent001.svg" alt="Default Intent" className="mx-auto" />
                                </div>
                                <h4 className="text-lg font-bold text-black mt-6">Default</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    The default checkbox represents the standard option for conveying general actions and helps guide users towards beneficial choices.
                                </p>
                            </div>

                            {/* Negative */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/intent002.svg" alt="Negative Intent" className="mx-auto" />
                                </div>
                                <h4 className="text-lg font-bold text-black mt-6">Negative</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    Apply red to checkboxes associated with actions that might have negative implications. The red color acts as an alert, prompting users to proceed with caution and consider the consequences of their choice.
                                </p>
                            </div>
                        </div>

                        <hr className="border-gray-300 mb-16" style={{ marginTop: '64px', marginBottom: '64px' }} />
                    </section>

                    {/* Size Section */}
                    <section id="size">
                        <h3 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>
                            Size
                        </h3>
                        <p className="text-base text-gray-700 mt-4 mb-16" style={{ lineHeight: '24px' }}>
                            Selecting the right checkbox size is essential for maintaining visual hierarchy, ensuring accessibility, and optimizing user experience. There are three distinct sizes for checkboxes: Large, Medium (default), and Small.
                        </p>

                        <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                            <img src="/images/checkbox/size001.svg" alt="Checkbox Size Chart" className="mx-auto" />
                        </div>
                        <p className="text-sm text-gray-600 mt-4 mb-8">
                            Each size is designed to accommodate different screen sizes, contexts, and user needs, ensuring a versatile and adaptable component library.
                        </p>

                        <table className="w-full border border-gray-300 mt-8 mb-16">
                            <thead style={{ backgroundColor: '#f4f4f4' }}>
                                <tr>
                                    <th className="p-4 text-lg font-bold text-black">Size</th>
                                    <th className="p-4 text-lg font-bold text-black">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-300">
                                    <td className="p-4 text-base font-bold text-black">Extra-Large (40x40)</td>
                                    <td className="p-4 text-base text-gray-700">
                                        Extra-large checkboxes are crafted for maximum visibility and ease of use, particularly in touch interfaces.
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-300">
                                    <td className="p-4 text-base font-bold text-black">Large (32x32)</td>
                                    <td className="p-4 text-base text-gray-700">
                                        Best for high-impact actions or when the checkbox is a focal point on the page. Its size ensures visibility and ease of interaction, especially on touch screens.
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-300">
                                    <td className="p-4 text-base font-bold text-black">Medium (24x24)</td>
                                    <td className="p-4 text-base text-gray-700">
                                        The default/standard size, balancing visibility and space efficiency. It's suitable for most use cases, providing clear interaction without dominating the UI.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-base font-bold text-black">Small (16x16)</td>
                                    <td className="p-4 text-base text-gray-700">
                                        Ideal for dense interfaces or when space is at a premium. While compact, ensure adjacent text is proportionally sized to maintain readability and accessibility.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    {/* Implementation Considerations Section */}
                    <section id="implementation-considerations">
                        <h3 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>
                            Implementation Considerations
                        </h3>
                        <p className="text-base text-gray-700 mt-4 mb-16" style={{ lineHeight: '24px' }}>
                            When incorporating checkboxes into designs, thoughtful consideration of their placement and interaction enhances user comprehension and engagement. This careful integration ensures a seamless user experience, keeping the interface design both clean and consistent.
                            <ul className="list-disc pl-5 text-base text-gray-700 mt-4 mb-16">
                                <li>
                                    <strong>Consistency:</strong> Apply checkbox labels and states consistently across similar choices to establish recognizable patterns for users. This includes using the same visual style for checkboxes within the same context or form, ensuring users can quickly understand their functionality.
                                </li>
                                <li>
                                    <strong>Accessibility:</strong> Ensure that checkboxes, along with their labels and states (such as checked, unchecked, and indeterminate), are fully accessible to users relying on assistive technologies. Provide clear, descriptive labels for each checkbox and use ARIA attributes where necessary to communicate the state and purpose of the checkbox to screen readers.
                                </li>
                                <li>
                                    <strong>Visual Clarity:</strong> Maintain a clear visual distinction between different states of the checkbox (default, hover, checked, disabled, etc.) to ensure that users can easily identify the current state of each option. Strive for a design that is both functional and aesthetically pleasing, with sufficient spacing and alignment for ease of interaction and comprehension.
                                </li>
                            </ul>

                        </p>
                    </section>


                    {/* Metrics Section */}
                    <section id="metrics">
                        <h2 className="text-2xl font-bold text-black mb-6" style={{ lineHeight: '34px' }}>Metrics</h2>
                        <p className="text-base text-gray-600 mb-6" style={{ lineHeight: '24px' }}>
                            Metrics ensure our checkboxes are consistent, accessible, and harmoniously integrated across interfaces. We define precise sizes for checkboxes (small, medium, large), label spacing, and group margins to avoid crowding and enhance clarity. Adhering to these guidelines guarantees checkboxes that are visually appealing, functional, and easy to navigate, contributing to a seamless user experience.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            {/* Extra-Large Checkbox */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/metrics001.svg" alt="Extra-Large Checkbox" className="mx-auto" />
                                </div>
                                <h4 className="text-lg font-bold text-black mb-4">Extra-Large Checkbox</h4>
                                <p className="text-base text-gray-600 mb-4">Increases visibility and ease of interaction, perfect for touch screens and primary selection tasks.</p>

                                <ul className="list-none text-base text-gray-600 mb-4">
                                    <li><strong>Icon Size:</strong> 40x40px, 12px gap from text</li>
                                    <li><strong>Font Size:</strong> 18px</li>
                                </ul>
                            </div>

                            {/* Large Checkbox */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/metrics002.svg" alt="Large Checkbox" className="mx-auto" />
                                </div>
                                <h4 className="text-lg font-bold text-black mb-4">Large Checkbox</h4>
                                <p className="text-base text-gray-600 mb-4">
                                    Increases visibility and ease of interaction, perfect for touch screens and primary selection tasks.
                                </p>
                                <ul className="list-none text-base text-gray-600 mb-4">
                                    <li><strong>Icon Size:</strong> 32x32px, 12px gap from text</li>
                                    <li><strong>Font Size:</strong> 16px</li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            {/* Medium Checkbox */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/metrics003.svg" alt="Medium Checkbox" className="mx-auto" />
                                </div>
                                <h4 className="text-lg font-bold text-black mb-4">Medium Checkbox</h4>
                                <p className="text-base text-gray-600 mb-4">
                                    The versatile standard, balancing visibility and compactness, ideal for general use across desktop and mobile interfaces.
                                </p>
                                <ul className="list-none text-base text-gray-600 mb-4">
                                    <li><strong>Icon Size:</strong> 24x24px, 12px gap from text</li>
                                    <li><strong>Font Size:</strong> 14px</li>
                                </ul>
                            </div>

                            {/* Small Checkbox */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/metrics004.svg" alt="Small Checkbox" className="mx-auto" />
                                </div>
                                <h4 className="text-lg font-bold text-black mb-4">Small Checkbox</h4>

                                <p className="text-base text-gray-600 mb-4">
                                    Optimal for dense layouts where space is limited, ensuring functionality without compromising on accessibility.
                                </p>
                                <ul className="list-none text-base text-gray-600 mb-4"></ul>
                                <ul className="list-none text-base text-gray-600 mb-4">
                                    <li><strong>Icon Size:</strong> 16x16px, 8px gap from text</li>
                                    <li><strong>Font Size:</strong> 12px</li>
                                    <li><strong>Padding:</strong> 16px</li>
                                </ul>
                            </div>
                        </div>

                        <hr className="border-gray-300 mb-16" style={{ marginTop: '64px', marginBottom: '64px' }} />
                    </section>

                    {/* Best Practices Section */}
                    <section id="best-practices">
                        <h2 className="text-2xl font-bold text-black mb-6" style={{ lineHeight: '34px' }}>Best Practices</h2>
                        <p className="text-base text-gray-600 mb-6" style={{ lineHeight: '24px' }}>
                            Crafting intuitive and accessible checkboxes demands careful consideration of design and usage principles. Below, we present paired "Do" and "Don't" best practices, each pinpointing key aspects of checkbox design. These comparisons aim to highlight the most effective strategies alongside common pitfalls, guiding you toward optimal implementation.
                        </p>

                        <div className="grid grid-cols-2 gap-16 pb-16">
                            {/* Row 1 */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/bp001.svg" alt="Clear and Direct Labeling" className="mx-auto" />
                                </div>
                                <img src="/images/do.svg" alt="Use Clear and Direct Labeling Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-green-600 mb-2">Use Clear and Direct Labeling</h3>
                                <p className="text-base text-gray-600 mb-6">Do use concise, descriptive labels directly next to the checkbox to clearly communicate the action or choice.</p>
                            </div>
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/bp002.svg" alt="Avoid Vague Labeling" className="mx-auto" />
                                </div>
                                <img src="/images/dont.svg" alt="Avoid Vague Labeling Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-red-600 mb-2">Avoid Vague or Overly Complex Labeling</h3>
                                <p className="text-base text-gray-600 mb-6">Don't use ambiguous terms or lengthy descriptions that might confuse users or clutter the interface.</p>
                            </div>

                            {/* Row 2 */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/bp003.svg" alt="Ensure Easy Clickability" className="mx-auto" />
                                </div>
                                <img src="/images/do.svg" alt="Ensure Easy Clickability Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-green-600 mb-2">Ensure Easy Clickability</h3>
                                <p className="text-base text-gray-600 mb-6">Do ensure checkboxes and their labels are large enough for easy interaction, especially on touch devices. Consider the target size for finger taps.</p>
                            </div>
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/bp004.svg" alt="Avoid Neglecting Adequate Spacing" className="mx-auto" />
                                </div>
                                <img src="/images/dont.svg" alt="Avoid Neglecting Adequate Spacing Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-red-600 mb-2">Avoid Neglecting Adequate Spacing</h3>
                                <p className="text-base text-gray-600 mb-6">Don't place checkboxes too close together or with insufficient padding, making it difficult for users to select the intended option.</p>
                            </div>

                            {/* Row 3 */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/bp005.svg" alt="Provide Immediate Visual Feedback" className="mx-auto" />
                                </div>
                                <img src="/images/do.svg" alt="Provide Immediate Visual Feedback Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-green-600 mb-2">Provide Immediate Visual Feedback</h3>
                                <p className="text-base text-gray-600 mb-6">Do design with adequate contrast and accessible labels, employing ARIA attributes where needed.</p>
                            </div>
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/bp006.svg" alt="Avoid Delayed or Obscure Feedback" className="mx-auto" />
                                </div>
                                <img src="/images/dont.svg" alt="Avoid Delayed or Obscure Feedback Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-red-600 mb-2">Avoid Delayed or Obscure Feedback</h3>
                                <p className="text-base text-gray-600 mb-6">Don't delay the visual response to user actions, which can lead to uncertainty about whether the selection was registered.</p>
                            </div>

                            {/* Row 4 */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/bp007.svg" alt="Utilize the Indeterminate State Wisely" className="mx-auto" />
                                </div>
                                <img src="/images/do.svg" alt="Utilize the Indeterminate State Wisely Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-green-600 mb-2">Utilize the Indeterminate State Wisely</h3>
                                <p className="text-base text-gray-600 mb-6">Do utilize interactive states to give feedback on user actions.</p>
                            </div>
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src="/images/checkbox/bp008.svg" alt="Avoid Overusing the Indeterminate State" className="mx-auto" />
                                </div>
                                <img src="/images/dont.svg" alt="Avoid Overusing the Indeterminate State Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-red-600 mb-2">Avoid Overusing the Indeterminate State</h3>
                                <p className="text-base text-gray-600 mb-6">Don't apply the indeterminate state in situations where it might confuse users or its meaning isn't clear.</p>
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

export default CheckboxOverviewContent;

