import React from 'react';
import CompCard from './CompCard';

const getCompData = (activeBrand) => [
    { image: `/images/${activeBrand}/${activeBrand}-Alert.svg`, title: 'Alert', copy: 'Warn or inform users with temporary, crucial messages.' },
    { image: `/images/${activeBrand}/${activeBrand}-Badge.svg`, title: 'Badge', copy: 'Small count or status indicator for another element.' },
    { image: `/images/${activeBrand}/${activeBrand}-Breadcrumb.svg`, title: 'Breadcrumbs', copy: 'Navigate multi-level UI structures easily.' },
    { image: `/images/${activeBrand}/${activeBrand}-Buttons.svg`, title: 'Buttons', copy: 'For the principal call to action on the page.' },
    { image: `/images/${activeBrand}/${activeBrand}-Card.svg`, title: 'Card', copy: 'Encapsulate related info in a flexible container.' },
    { image: `/images/${activeBrand}/${activeBrand}-Carousel.svg`, title: 'Carousel', copy: 'Cycle through a series of content or images.' },
    { image: `/images/${activeBrand}/${activeBrand}-Checkbox.svg`, title: 'Checkbox', copy: 'Select none, one or multiple options from a list.' },
    { image: `/images/${activeBrand}/${activeBrand}-ColorPicker.svg`, title: 'Color Picker', copy: 'Choose colors with an intuitive visual interface.' },
    { image: `/images/${activeBrand}/${activeBrand}-DateTimePicker.svg`, title: 'Date / Time Picker', copy: 'Select dates / date ranges and time intuitively.' },
    { image: `/images/${activeBrand}/${activeBrand}-Dropdown.svg`, title: 'Dropdown', copy: 'Choose one option from a collapsible list.' },
    { image: `/images/${activeBrand}/${activeBrand}-Filter.svg`, title: 'Filter', copy: 'Refine content by specifying filter criteria.' },
    { image: `/images/${activeBrand}/${activeBrand}-Input.svg`, title: 'Input', copy: 'Enter text or adjust settings.' },
    { image: `/images/${activeBrand}/${activeBrand}-Hyperlink.svg`, title: 'Hyperlink', copy: 'Navigate to other views, pages or sites.' },
    { image: `/images/${activeBrand}/${activeBrand}-Modal.svg`, title: 'Modal', copy: 'Display content over the main application view.' },
    { image: `/images/${activeBrand}/${activeBrand}-Notice.svg`, title: 'Notice', copy: 'Display non-intrusive, contextual messages.' },
    { image: `/images/${activeBrand}/${activeBrand}-Pagination.svg`, title: 'Pagination', copy: 'Navigate through large sets of content.' },
    { image: `/images/${activeBrand}/${activeBrand}-Pill.svg`, title: 'Pills / Chips', copy: 'Display selectable options, tags or chips.' },
    { image: `/images/${activeBrand}/${activeBrand}-ProgressBar.svg`, title: 'Progress Bar', copy: 'Visualize the completion / progress of a task.' },
    { image: `/images/${activeBrand}/${activeBrand}-Radio.svg`, title: 'Radio', copy: 'Select one option from a set.' },
    { image: `/images/${activeBrand}/${activeBrand}-Slider.svg`, title: 'Slider', copy: 'Select a value from a range.' },
    { image: `/images/${activeBrand}/${activeBrand}-Switch.svg`, title: 'Switch', copy: 'Toggle between two states.' },
    { image: `/images/${activeBrand}/${activeBrand}-Tags.svg`, title: 'Tag', copy: 'Label content for quick identification.' },
    { image: `/images/${activeBrand}/${activeBrand}-TextArea.svg`, title: 'Text Area', copy: 'Enter multiple lines of text.' },
    { image: `/images/${activeBrand}/${activeBrand}-TimeDatePicker.svg`, title: 'Time / Date Picker', copy: 'Select time and dates / date ranges intuitively.' },
    { image: `/images/${activeBrand}/${activeBrand}-Tooltip.svg`, title: 'Tooltip', copy: 'Offer brief, contextual information on hover.' },
    { image: `/images/${activeBrand}/${activeBrand}-Wizard.svg`, title: 'Wizard', copy: 'Guide through a multi-step process.' }
];

const CompCatalog = ({ activeBrand }) => {
    const compData = getCompData(activeBrand);

    return (
        <>
            <div className="bg-white p-4 md:p-12 mobile-hidden" style={{
                paddingTop: '48px', 
                paddingLeft: '22px', 
                paddingRight: '100px', 
                paddingBottom: '32px'
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
                paddingTop: '48px', 
                paddingLeft: '20px', 
                paddingRight: '20px', 
                paddingBottom: '32px'
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
