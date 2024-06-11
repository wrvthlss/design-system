// DropdownOverviewContent.js
import React from 'react';
import JumpLinkNav from '../shared/JumpLinkNav';
import JumpLinkNavMobi from '../shared/JumpLinkNavMobi';

const DropdownOverviewContent = ({ brand }) => {
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
            `/images/dropdown/${brand}/${brand}-img-dropdown-overview-001.svg`
        ],
        anatomy: `/images/dropdown/${brand}/${brand}-img-dropdown-anatomy.svg`,
        states: [
            `/images/dropdown/${brand}/${brand}-img-dropdown-st-001.svg`,
            `/images/dropdown/${brand}/${brand}-img-dropdown-st-002.svg`,
            `/images/dropdown/${brand}/${brand}-img-dropdown-st-003.svg`,
            `/images/dropdown/${brand}/${brand}-img-dropdown-st-004.svg`,
            `/images/dropdown/${brand}/${brand}-img-dropdown-st-005.svg`,
            `/images/dropdown/${brand}/${brand}-img-dropdown-st-006.svg`
        ],
        sizes: [
            `/images/dropdown/${brand}/${brand}-img-dropdown-size-001.svg`
        ],
        metrics: [
            `/images/dropdown/${brand}/${brand}-img-dropdown-metrics-001.svg`,
            `/images/dropdown/${brand}/${brand}-img-dropdown-metrics-002.svg`,
            `/images/dropdown/${brand}/${brand}-img-dropdown-metrics-003.svg`,
            `/images/dropdown/${brand}/${brand}-img-dropdown-metrics-004.svg`
        ],
        bestPractices: [
            `/images/dropdown/${brand}/${brand}-img-dropdown-bp-001.svg`,
            `/images/dropdown/${brand}/${brand}-img-dropdown-bp-002.svg`,
            `/images/dropdown/${brand}/${brand}-img-dropdown-bp-003.svg`,
            `/images/dropdown/${brand}/${brand}-img-dropdown-bp-004.svg`,
            `/images/dropdown/${brand}/${brand}-img-dropdown-bp-005.svg`,
            `/images/dropdown/${brand}/${brand}-img-dropdown-bp-006.svg`,
            `/images/dropdown/${brand}/${brand}-img-dropdown-bp-007.svg`,
            `/images/dropdown/${brand}/${brand}-img-dropdown-bp-008.svg`
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

                {/* Overview Section */}
                <div className="flex-1 pl-6 pr-6 pt-12 bg-white">
                    <section id="overview">
                        <h2 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>
                            Overview
                        </h2>

                        <p className="text text-gray-700 mt-4 mb-6" style={{ lineHeight: '24px' }}>
                            Dropdowns present a list of options from which a user can select one option, or several. A selected option can represent a value in a form, or can be used as an action to filter or sort existing content.
                        </p>

                        {/* Overview Image */}
                        <div className="p-6 bg-gray-100 flex justify-center rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                            <img src={imagePaths.overview[0]} alt="Dropdown Overview States" />
                        </div>

                        <p className="text-sm text-gray-600 mt-4 mb-8" style={{ lineHeight: '20px' }}>
                            The above states illustrate the expanded version the dropdown component with label.  Showcasing the dropdown options with a hover state.
                        </p>

                        <hr className="border-gray-300 mb-16" style={{ marginTop: '64px', marginBottom: '64px' }} />
                    </section>

                    {/* Anatomy Section */}
                    <section id="anatomy">
                        <h2 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>
                            Anatomy
                        </h2>
                        <p className="text text-gray-700 mt-4 mb-6" style={{ lineHeight: '20px' }}>
                            A dropdown component typically comprises a toggle button or indicator and a dropdown menu. When users click or tap the toggle button, it activates the dropdown menu, which displays a vertical list of selectable options or actions. Users can then choose an option by clicking or tapping it. Additional features may include displaying the selected option within the toggle button and a disabled state for inactive dropdowns. Overall, dropdown components streamline user interactions by presenting selectable options in a compact and accessible format.
                        </p>

                        {/* Anatomy Image */}
                        <div className="p-6 bg-gray-100 rb-c flex justify-center" style={{ backgroundColor: '#FAFAFA' }}>
                            <img src={imagePaths.anatomy} alt="Dropdown Anatomy" />
                        </div>

                        {/* Container Section */}
                        <div className="mt-6 flex items-start gap-4">
                            <img src="/images/k1.svg" alt="Container Illustration" />
                            <div>
                                <h3 className="text-base font-bold text-black" style={{ lineHeight: '34px' }}>Label</h3>
                                <p className="text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    Text that informs the user what to expect in the list of dropdown options.
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    <li>Font: It is recommended that the label utilizes the Elevance Sans font family, adhering to a font size of 14pt and employing a font weight of semibold. This choice of font family and specifications ensures consistency with the established visual identity and enhances readability for users interacting with the dropdown component.</li>
                                    <li>Spacing: Maintain a precise spacing of 4pt between the label and the adjacent help icon. This consistent spacing enhances visual clarity and ensures a balanced layout within the dropdown component, facilitating ease of use and comprehension for users navigating the interface.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Icon Section */}
                        <div className="mt-6 flex items-start gap-4">
                            <img src="/images/k2.svg" alt="Icon Illustration" />
                            <div>
                                <h3 className="text-base font-bold text-black" style={{ lineHeight: '34px' }}>Helper</h3>
                                <p className="text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    Assistive icon that provides text to help the user choose the right selection.
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    <li>Size: It is recommended that the icon aligns with the point size of the label to maintain visual harmony and avoid competing with the label for attention. Aligning the icon size with the label size ensures that it maintains prominence while complementing the surrounding text. This approach enhances overall visual coherence and facilitates a seamless user experience.</li>
                                    <li>Spacing: Maintain a consistent top and bottom margin of 3pt around the help icon. Adequate spacing around the icon ensures that it is visually distinct and easily identifiable within the layout, improving readability and usability. This balanced spacing enhances the overall aesthetic appeal of the dropdown component while providing a comfortable visual experience for users.</li>
                                    <li>Consistency and Uniformity: Ensure uniformity by using the same icon for help or information across all UI components. Consistency in iconography enhances user familiarity and establishes visual patterns that aid in navigation and comprehension. By using consistent icons throughout the interface, users can quickly recognize and understand the purpose of help or information elements, resulting in a cohesive and intuitive user experience across the application.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Text Label Section */}
                        <div className="mt-6 flex items-start gap-4">
                            <img src="/images/k3.svg" alt="Text Label Illustration" />
                            <div>
                                <h3 className="text-base font-bold text-black" style={{ lineHeight: '34px' }}>Container</h3>
                                <p className="text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    This is the container that holds the list of options or actions available for selection. It appears when the toggle button is clicked and disappears when the user makes a selection or clicks outside the dropdown.
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    <li>Color: It is imperative to clearly define the clickable area, ensuring users can easily identify and interact with the dropdown trigger. Employing a distinct color or visual indicator for the clickable area enhances user engagement and usability. By clearly delineating the interactive region, users can intuitively navigate the interface and trigger the dropdown with confidence.</li>
                                    <li>Corner Radius: Consistency in design is paramount across all interactive components. Integrating a rounded corner radius aligns seamlessly with our established design language and enhances visual cohesion throughout the interface. The rounded edges contribute to a cohesive and polished aesthetic, reducing the perceived visual complexity of the interface. Furthermore, rounded corners imbue a sense of approachability and friendliness, creating a more inviting user experience.</li>
                                    <li>Spacing: Adequate spacing around the dropdown component is essential to provide users with a comfortable and visually appealing layout. Defining a sufficient area around the content allows for breathing space, facilitating ease of scanning and consumption for users. Well-defined spacing enhances readability and comprehension, ensuring that users can effortlessly navigate and engage with the dropdown interface. By optimizing spacing, we prioritize user experience and usability, creating an interface that is both intuitive and visually appealing.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 flex items-start gap-4">
                            <img src="/images/k4.svg" alt="Text Label Illustration" />
                            <div>
                                <h3 className="text-base font-bold text-black" style={{ lineHeight: '34px' }}>Placeholder or preselected value</h3>
                                <p className="text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    The placeholder text should provide clear instructions or hints about the type of selection expected. A preselected value when you have default or commonly selected options for the dropdown.
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    <li><strong>Descriptive Content:</strong> It is crucial to carefully consider the content placed within a dropdown component, taking into account the limited space available. When selecting content, aim to convey the necessary information concisely to prevent text truncation and ensure optimal readability. Avoid excessively long text that may exceed the space provided within the dropdown, as this can lead to user frustration and confusion. Instead, prioritize clarity and brevity, opting for succinct descriptions that effectively communicate the intended message without overwhelming the user. By carefully curating descriptive content, we enhance user comprehension and streamline the interaction process, ultimately contributing to a more seamless and intuitive user experience.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6 flex items-start gap-4">
                            <img src="/images/k5.svg" alt="Text Label Illustration" />
                            <div>
                                <h3 className="text-base font-bold text-black" style={{ lineHeight: '34px' }}>Icon Button</h3>
                                <p className="text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    This is the visible part of the dropdown that users interact with to open or close the dropdown menu. It can be a button, link, or any other clickable element.
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    <li><strong>Descriptive Content:</strong>When users hover over the helper icon, a tooltip will be triggered, offering additional context and guidance regarding the selection options available within the dropdown. This tooltip serves as a valuable aid, providing users with pertinent information to make informed decisions and navigate the dropdown menu effectively. By leveraging tooltips in this manner, we enhance user comprehension and usability, fostering a more intuitive and user-friendly experience.</li>
                                    <li><strong>Color:</strong> Utilizing a brand color within the dropdown component aligns seamlessly with our established design language and enhances visual consistency across interactive elements such as buttons and checkboxes. Consistency in color not only reinforces brand identity but also facilitates user recognition and navigation within the interface. By employing a cohesive color palette, we create a unified and harmonious visual experience, instilling confidence and familiarity among users while reinforcing the brand's presence and personality.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6 flex items-start gap-4">
                            <img src="/images/k6.svg" alt="Text Label Illustration" />
                            <div>
                                <h3 className="text-base font-bold text-black" style={{ lineHeight: '34px' }}>Selected Item</h3>
                                <p className="text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    A choice for the user, shown with other choices in a menu.
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    <li><strong>Color:</strong> When a user hovers over an item within the dropdown, it will be highlighted, and the text color will update to provide immediate visual feedback. This dynamic response enhances user interaction by signaling that the item is interactive and selectable. The highlighted appearance and adjusted text color serve as visual cues, indicating to the user that the item is under focus and ready for selection. This interactive feedback mechanism not only improves usability but also enhances the overall user experience, fostering a sense of engagement and responsiveness within the interface. By incorporating such color changes on hover, we ensure that users receive clear and intuitive feedback, thereby facilitating seamless navigation and interaction within the dropdown component.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6 flex items-start gap-4">
                            <img src="/images/k7.svg" alt="Text Label Illustration" />
                            <div>
                                <h3 className="text-base font-bold text-black" style={{ lineHeight: '34px' }}>Dropdown List</h3>
                                <p className="text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    These are the individual items listed within the dropdown menu. Users can select one or more options depending on the dropdown's functionality.A choice for the user, shown with other choices in a menu.
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    <li><strong>Descriptive Content:</strong> It is imperative to maintain clear and concise labels within the dropdown component to prevent truncation, which can hinder user comprehension. To ensure optimal readability, verify that labels do not exceed the maximum width of the component, thereby minimizing the risk of truncation. By proactively assessing label lengths and adjusting as necessary, we prioritize user clarity and comprehension, fostering a seamless and intuitive interaction experience.</li>
                                    <li><strong>Focus Lock:</strong> The dropdown menu incorporates a focus lock feature, designed to enhance keyboard accessibility and streamline navigation for users relying on keyboard inputs. When triggered via keyboard interaction, such as using the tab or arrow keys, the focus lock mechanism ensures that focus remains confined within the dropdown menu. Additionally, upon opening the dropdown menu via keyboard input, the first item within the menu automatically receives focus, enabling users to efficiently navigate and select options using keyboard controls. By implementing focus lock and automatic focusing, we uphold accessibility standards and promote an inclusive user experience, accommodating users with diverse needs and preferences.</li>
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
                            Dropdowns enhance usability and accessibility in interfaces by providing an organized method for users to interact with options and actions. To ensure a consistent user experience across diverse applications, we offer three main choices for dropdowns. This approach empowers users to select the dropdown variant that best suits their needs while promoting usability and satisfaction.
                        </p>

                        {/* Appearance */}
                        <h3 className="text-lg font-bold text-black" style={{ lineHeight: '24px' }}>
                            Appearance
                        </h3>
                        <p className="text-base text-gray-700 mt-4 mb-16" style={{ lineHeight: '24px' }}>
                            We offer three primary dropdown options to cater to diverse application needs while ensuring a coherent user experience. These options accommodate various user requirements, including making selections from predefined lists, searching for specific items, or inputting custom values. By providing this range of dropdown choices, we ensure that our applications remain intuitive and accessible to all users.
                        </p>

                        {/* Two-Column Layout for Checkbox Appearance */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <img src="/images/dropdown/options001.svg" alt="Standard Checkbox" className="mx-auto" />
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Standard</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    The primary dropdown with a label provides users with a clear and intuitive way to make selections within an interface while providing context and guidance through the accompanying label.
                                </p>
                            </div>
                            <div>
                                <div className="p-6 bg-gray-100 rb-c" style={{ backgroundColor: '#FAFAFA' }}>
                                    <img src="/images/dropdown/options002.svg" alt="Indeterminate Checkbox" className="mx-auto" />
                                </div>
                                <h4 className="mt-6 text-lg font-bold text-black">Without Label</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    A dropdown without a label relies solely on the toggle button or indicator to indicate its purpose and functionality to users. It offers a streamlined interface for making selections without the need for additional context provided by a label.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Dropdown States Section */}
                    <section id="states">
                        <h3 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>
                            Dropdown States
                        </h3>
                        <p className="text-base text-gray-700 mt-4 mb-16" style={{ lineHeight: '24px' }}>
                            These states allow users to toggle between viewing the dropdown's contents and hiding them, providing a compact interface for selecting options while conserving screen space when not in use:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            {/* Collapsed */}
                            <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                <img src={imagePaths.states[0]} alt="Collapsed State" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-black">Collapsed</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    In the collapsed state, only the toggle button or indicator is visible. Users can click on this button to expand the dropdown and reveal its contents.
                                </p>
                            </div>

                            {/* Expanded */}
                            <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                <img src={imagePaths.states[1]} alt="Expanded State" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-black">Expanded</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    In the expanded state, the dropdown menu becomes visible, presenting users with a list of options or actions available for selection. Users can interact with these options or actions directly within the dropdown menu.
                                </p>
                            </div>

                            {/* Focused */}
                            <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                <img src={imagePaths.states[2]} alt="Focused State" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-black">Focused</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    In the focus state, the dropdown menu displays a visible border, providing clear feedback to users about the active state of the component. This enhances usability and accessibility by ensuring users remain informed and engaged during interaction with the dropdown.
                                </p>
                            </div>

                            {/* Disabled */}
                            <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                <img src={imagePaths.states[3]} alt="Disabled State" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-black">Disabled</h4>
                                <p className="text-base text-gray-700 mt-2" style={{ lineHeight: '24px' }}>
                                    The disabled state is applied to the dropdown component when it is inactive or unable to interact. This may occur for various reasons, such as when it retains a previous selection or depends on a specific condition to be met.
                                </p>
                            </div>
                        </div>

                        {/* Size Section */}
                        <section id="size">
                            <h3 className="text-2xl font-bold text-black" style={{ lineHeight: '34px' }}>
                                Size
                            </h3>
                            <p className="text-base text-gray-700 mt-4 mb-16" style={{ lineHeight: '24px' }}>
                                We offer four default dropdown height sizes: Large, Medium, Small, and Extra Small. This variety provides flexibility in structuring layouts to accommodate different design needs. However, it's important to maintain consistency by using the same dropdown size for all form components on the same page. This ensures visual coherence and enhances the overall user experience.
                            </p>

                            <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                <img src={imagePaths.sizes[0]} alt="Dropdown Size Chart" className="mx-auto" />
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
                                        <td className="p-4 text-base font-bold text-black">Large</td>
                                        <td className="p-4 text-base text-gray-700">
                                            This size is ideal for situations where ample space is available. It's commonly used in simple forms or when the dropdown is the primary focus on a page, such as in filtering options.
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="p-4 text-base font-bold text-black">Medium</td>
                                        <td className="p-4 text-base text-gray-700">
                                            The medium size is the default and most commonly used option. When unsure, it's recommended to use the medium size for dropdowns.
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="p-4 text-base font-bold text-black">Small</td>
                                        <td className="p-4 text-base text-gray-700">
                                            This size is suitable for situations with limited space or when integrating a dropdown into a lengthy and intricate form.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-base font-bold text-black">Extra Small</td>
                                        <td className="p-4 text-base text-gray-700">
                                            This size is ideal for situations with limited space or when integrating a dropdown into a lengthy and complex form. It's important to align the sizing of the dropdown with other UI components for a cohesive design.
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
                                When implementing dropdowns, it's essential to prioritize accessibility, responsiveness, and performance optimization. Consistent styling, clear user feedback, and robust error handling contribute to a seamless user experience. Localization, thorough testing, and comprehensive documentation further enhance usability and accessibility.
                                <ul className="list-disc pl-5 text-base text-gray-700 mt-4 mb-16">
                                    <li>
                                        <strong>Consistency:</strong> Ensure consistency in menu item width by allowing the menu to expand to accommodate longer labels, up to a specified maximum width. Avoid truncated labels to maintain visual coherence and readability.
                                    </li>
                                    <li>
                                        <strong>Accessibility:</strong> Prioritize accessibility by avoiding truncated labels. Verify that menu item widths do not exceed the maximum specified width to prevent truncation. Additionally, implement a focus lock mechanism to trap focus within the menu, ensuring seamless keyboard navigation and usability.
                                    </li>
                                    <li>
                                        <strong>Visual Clarity:</strong> Enhance visual clarity by providing clear visual cues for different dropdown states (collapsed, expanded, focused, and disabled). This includes maintaining consistent styling and alignment to facilitate easy identification of each option's current state. Strive for a visually appealing design with adequate spacing and alignment to enhance user interaction and comprehension.
                                    </li>
                                </ul>

                            </p>
                        </section>

                        <hr className="border-gray-300 mb-16" style={{ marginTop: '64px', marginBottom: '64px' }} />
                    </section>

                    {/* Metrics Section */}
                    <section id="metrics">
                        <h2 className="text-2xl font-bold text-black mb-6" style={{ lineHeight: '34px' }}>Metrics</h2>
                        <p className="text-base text-gray-600 mb-6" style={{ lineHeight: '24px' }}>
                            Metrics play a crucial role in ensuring that our dropdowns maintain consistency, accessibility, and seamless integration throughout interfaces. By defining precise sizes for dropdowns (Large, Medium, Small, Extra Small), label spacing, and group margins, we mitigate crowding and enhance clarity in design. Adhering to these guidelines guarantees visually appealing, functional, and easily navigable dropdowns, ultimately contributing to a seamless user experience.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            {/* Large Dropdown */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.metrics[0]} alt="Large Dropdown" className="mx-auto" />
                                </div>
                                <h4 className="text-lg font-bold text-black mb-4">Large Dropdown</h4>
                                <p className="text-base text-gray-600 mb-4">
                                    Enhances prominence and touchability, best for key actions where attention is paramount.
                                </p>

                                <ul className="list-none text-base text-gray-600 mb-4">
                                    <li>Input Height:<strong>44pt</strong></li>
                                    <li>Input Padding:<strong>12pt, 8pt, 12pt, 12pt</strong></li>
                                    <li>Width Minimum:<strong>230pt</strong></li>
                                    <li>Font Size:<strong>14pt</strong></li>
                                    <li>Font Weight:<strong>Semibold</strong></li>
                                    <li>Icon Size:<strong>14pt</strong></li>
                                </ul>
                            </div>

                            {/* Medium Dropdown */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.metrics[1]} alt="Medium Dropdown" className="mx-auto" />
                                </div>
                                <h4 className="text-lg font-bold text-black mb-4">Medium Dropdown</h4>
                                <p className="text-base text-gray-600 mb-4">
                                    Increases visibility and ease of interaction, perfect for touch screens and primary selection tasks.
                                </p>
                                <ul className="list-none text-base text-gray-600 mb-4">
                                    <li>Input Height:<strong>40pt</strong></li>
                                    <li>Input Padding:<strong>10pt, 6pt, 10pt, 12pt</strong></li>
                                    <li>Width Minimum:<strong>230pt</strong></li>
                                    <li>Font Size:<strong>14pt</strong></li>
                                    <li>Font Weight:<strong>Semibold</strong></li>
                                    <li>Icon Size:<strong>14pt</strong></li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            {/* Small Dropdown */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.metrics[2]} alt="Small Dropdown" className="mx-auto" />
                                </div>
                                <h4 className="text-lg font-bold text-black mb-4">Small Dropdown</h4>
                                <p className="text-base text-gray-600 mb-4">
                                    The versatile standard, balancing visibility and compactness, ideal for general use across desktop and mobile interfaces.
                                </p>
                                <ul className="list-none text-base text-gray-600 mb-4">
                                    <li>Input Height:<strong>36pt</strong></li>
                                    <li>Input Padding:<strong>8pt, 8pt, 8pt, 12pt</strong></li>
                                    <li>Width Minimum:<strong>160pt</strong></li>
                                    <li>Font Size:<strong>14pt</strong></li>
                                    <li>Font Weight:<strong>Semibold</strong></li>
                                    <li>Icon Size:<strong>12pt</strong></li>
                                </ul>
                            </div>

                            {/* Extra Small Dropdown */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.metrics[3]} alt="Extra Small Dropdown" className="mx-auto" />
                                </div>
                                <h4 className="text-lg font-bold text-black mb-4">Extra Small Dropdown</h4>
                                <p className="text-base text-gray-600 mb-4">
                                    Optimal for dense layouts where space is limited, ensuring functionality without compromising on accessibility.
                                </p>
                                <ul className="list-none text-base text-gray-600 mb-4">
                                    <li>Input Height:<strong>28pt</strong></li>
                                    <li>Input Padding:<strong>4pt, 8pt, 4pt, 12pt</strong></li>
                                    <li>Width Minimum:<strong>Minimum 140pt</strong></li>
                                    <li>Font Size:<strong>10pt</strong></li>
                                    <li>Font Weight:<strong>Semibold</strong></li>
                                    <li>Icon Size:<strong>10pt</strong></li>
                                </ul>
                            </div>
                        </div>

                        <hr className="border-gray-300 mb-16" style={{ marginTop: '64px', marginBottom: '64px' }} />
                    </section>

                    {/* Best Practices Section */}
                    <section id="best-practices">
                        <h2 className="text-2xl font-bold text-black mb-6" style={{ lineHeight: '34px' }}>Best Practices</h2>
                        <p className="text-base text-gray-600 mb-6" style={{ lineHeight: '24px' }}>
                            To create intuitive and accessible dropdown components, it's essential to meticulously consider design principles and usage scenarios. In this guide, we present 'Do' and 'Don't' examples to outline best practices in dropdown design. These comparisons aim to elucidate effective strategies and common pitfalls, providing valuable insights to help you achieve optimal implementation of dropdowns in your interfaces.
                        </p>

                        <div className="grid grid-cols-2 gap-16 pb-16">
                            {/* Row 1 */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.bestPractices[0]} alt="Clear and Direct Labeling" className="mx-auto" />
                                </div>
                                <img src="/images/do.svg" alt="Use Clear and Direct Labeling Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-green-600 mb-2">Use Clear and Direct Labeling</h3>
                                <p className="text-base text-gray-600 mb-6">Do use clear and concise labels that accurately describe the purpose and function of the dropdown.</p>
                            </div>
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.bestPractices[1]} alt="Avoid Removing the Label" className="mx-auto" />
                                </div>
                                <img src="/images/dont.svg" alt="Avoid Removing the Label Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-red-600 mb-2">Avoid Removing the Label</h3>
                                <p className="text-base text-gray-600 mb-6">Don't remove a label unless the dropdown is next to another component which already has a label.</p>
                            </div>

                            {/* Row 2 */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.bestPractices[2]} alt="Use Clear and Direct Options" className="mx-auto" />
                                </div>
                                <img src="/images/do.svg" alt="Use Clear and Direct Options Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-green-600 mb-2">Use Clear and Direct Options</h3>
                                <p className="text-base text-gray-600 mb-6">Do keep the description of the dropdown options as short as possible to improve readability.</p>
                            </div>
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.bestPractices[3]} alt="Avoid Long and Multiple Line Options" className="mx-auto" />
                                </div>
                                <img src="/images/dont.svg" alt="Avoid Long and Multiple Line Options Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-red-600 mb-2">Avoid Long and Multiple Line Options</h3>
                                <p className="text-base text-gray-600 mb-6">Don't use lengthy option descriptions because the text can get truncated and users will find it difficult to read.</p>
                            </div>

                            {/* Row 3 */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.bestPractices[4]} alt="Use For More than Four Options" className="mx-auto" />
                                </div>
                                <img src="/images/do.svg" alt="Use For More than Four Options Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-green-600 mb-2">Use For More than Four Options</h3>
                                <p className="text-base text-gray-600 mb-6">Do use a dropdown if there’s more than four options to choose from. If there’s less than three options use the checkbox component.</p>
                            </div>
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.bestPractices[5]} alt="Avoid For Small Amount of Selections" className="mx-auto" />
                                </div>
                                <img src="/images/dont.svg" alt="Avoid For Small Amount of Selections Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-red-600 mb-2">Avoid For Small Amount of Selections</h3>
                                <p className="text-base text-gray-600 mb-6">Don't use if there’s less than three options.</p>
                            </div>

                            {/* Row 4 */}
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.bestPractices[6]} alt="Use an Order For Your Options" className="mx-auto" />
                                </div>
                                <img src="/images/do.svg" alt="Use an Order For Your Options Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-green-600 mb-2">Use an Order For Your Options</h3>
                                <p className="text-base text-gray-600 mb-6">Do define order to present your list of options. A-Z, most popular items first, or logical order.</p>
                            </div>
                            <div>
                                <div className="p-6 bg-gray-100 rb-c rounded-lg mb-6">
                                    <img src={imagePaths.bestPractices[7]} alt="Avoid Random Order For Options" className="mx-auto" />
                                </div>
                                <img src="/images/dont.svg" alt="Avoid Random Order For Options Icon" className="inline mr-4" />
                                <h3 className="inline text-lg font-bold text-red-600 mb-2">Avoid Random Order For Options</h3>
                                <p className="text-base text-gray-600 mb-6">Don't present a mere list of items without thoughtful consideration of the best way to present them. Failing to do so can lead to user frustration and hinder the overall user experience.</p>
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

export default DropdownOverviewContent;
