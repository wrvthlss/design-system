import React from 'react';
import CompCard from './CompCard';

const compData = [
    { image: '/images/anthem-Alert.svg', title: 'Alert', copy: 'Warn or inform users with temporary, crucial messages.' },
    { image: '/images/anthem-Badge.svg', title: 'Badge', copy: 'Small count or status indicator for another element.' },
    { image: '/images/anthem-Breadcrumb.svg', title: 'Breadcrumbs', copy: 'Navigate multi-level UI structures easily.' },
    { image: '/images/anthem-Buttons.svg', title: 'Buttons', copy: 'For the principal call to action on the page.' },
    { image: '/images/anthem-Card.svg', title: 'Card', copy: 'Encapsulate related info in a flexible container.' },
    { image: '/images/anthem-Carousel.svg', title: 'Carousel', copy: 'Cycle through a series of content or images.' },
    { image: '/images/anthem-Checkbox.svg', title: 'Checkbox', copy: 'Select none, one or multiple options from a list.' },
    { image: '/images/anthem-ColorPicker.svg', title: 'Color Picker', copy: 'Choose colors with an intuitive visual interface.' },
    { image: '/images/anthem-DateTimePicker.svg', title: 'Date / Time Picker', copy: 'Select dates / date ranges and time intuitively.' },
    { image: '/images/anthem-Dropdown.svg', title: 'Dropdown', copy: 'Choose one option from a collapsible list.' },
    { image: '/images/anthem-Filter.svg', title: 'Filter', copy: 'Refine content by specifying filter criteria.' },
    { image: '/images/anthem-Input.svg', title: 'Input', copy: 'Enter text or adjust settings.' },
    { image: '/images/anthem-Hyperlink.svg', title: 'Hyperlink', copy: 'Navigate to other views, pages or sites.' },
    { image: '/images/anthem-Modal.svg', title: 'Modal', copy: 'Display content over the main application view.' },
    { image: '/images/anthem-Notice.svg', title: 'Notice', copy: 'Display non-intrusive, contextual messages.' },
    { image: '/images/anthem-Pagination.svg', title: 'Pagination', copy: 'Navigate through large sets of content.' },
    { image: '/images/anthem-Pill.svg', title: 'Pills / Chips', copy: 'Display selectable options, tags or chips.' },
    { image: '/images/anthem-ProgressBar.svg', title: 'Progress Bar', copy: 'Visualize the completion / progress of a task.' },
    { image: '/images/anthem-Radio.svg', title: 'Radio', copy: 'Select one option from a set.' },
    { image: '/images/anthem-Slider.svg', title: 'Slider', copy: 'Select a value from a range.' },
    { image: '/images/anthem-Switch.svg', title: 'Switch', copy: 'Toggle between two states.' },
    { image: '/images/anthem-Tags.svg', title: 'Tag', copy: 'Label content for quick identification.' },
    { image: '/images/anthem-TextArea.svg', title: 'Text Area', copy: 'Enter multiple lines of text.' },
    { image: '/images/anthem-TimeDatePicker.svg', title: 'Time / Date Picker', copy: 'Select time and dates / date ranges intuitively.' },
    { image: '/images/anthem-Tooltip.svg', title: 'Tooltip', copy: 'Offer brief, contextual information on hover.' },
    { image: '/images/anthem-Wizard.svg', title: 'Wizard', copy: 'Guide through a multi-step process.' }
];


const CompCatalog = () => {
    return (
        <>
            <div className="bg-white p-4 md:p-12 mobile-hidden" style={{
                paddingTop: '48px', // 48px top padding
                paddingLeft: '22px', // 96px left padding on desktop
                paddingRight: '100px', // 268px right padding on desktop
                paddingBottom: '32px' // Consistent bottom padding
            }}>
                <h1 className="text-2xl font-bold mb-4" style={{ lineHeight: '34px' }}>Components</h1>
                <p className="text-gray-600 mb-6 " style={{ lineHeight: '24px' }}>
                    Below, find our curated collection of components, each designed for scalability and user engagement.
                    Click on any component to view detailed documentation, including design specifications, code snippets,
                    and implementation tips.
                </p>
                <div className={`grid gap-4 mb-4 md:grid-cols-3 sm:grid-cols-2`}>
                {compData.map(comp => (
                    <CompCard key={comp.title} image={comp.image} title={comp.title} copy={comp.copy} />
                ))}
            </div>
            </div>
            <div className="bg-white p-4 md:p-12 sm:block lg:hidden" style={{
                paddingTop: '48px', // 48px top padding
                paddingLeft: '20px', // 96px left padding on desktop
                paddingRight: '20px', // 268px right padding on desktop
                paddingBottom: '32px' // Consistent bottom padding
            }}>
                <h1 className="text-2xl font-bold mb-4" style={{ lineHeight: '34px' }}>Components</h1>
                <p className="text-gray-600 mb-6" style={{ lineHeight: '24px' }}>
                    Below, find our curated collection of components, each designed for scalability and user engagement.
                    Click on any component to view detailed documentation, including design specifications, code snippets,
                    and implementation tips.
                </p>
                <div className={`grid gap-4 mb-4 md:grid-cols-3 sm:grid-cols-2`}>
                {compData.map(comp => (
                    <CompCard key={comp.title} image={comp.image} title={comp.title} copy={comp.copy} />
                ))}
            </div>
            </div>
        </>
    );
}

export default CompCatalog;