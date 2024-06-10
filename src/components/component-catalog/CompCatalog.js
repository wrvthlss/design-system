import React from 'react';
import CompCard from './CompCard';

const CompCatalog = ({ brand }) => {
    const compData = [
        { image: `/images/${brand}/${brand}-Alert.svg`, title: 'Alert', copy: 'Warn or inform users with temporary, crucial messages.' },
        { image: `/images/${brand}/${brand}-Badge.svg`, title: 'Badge', copy: 'Small count or status indicator for another element.' },
        { image: `/images/${brand}/${brand}-Breadcrumb.svg`, title: 'Breadcrumbs', copy: 'Navigate multi-level UI structures easily.' },
        { image: `/images/${brand}/${brand}-Buttons.svg`, title: 'Buttons', copy: 'For the principal call to action on the page.' },
        { image: `/images/${brand}/${brand}-Card.svg`, title: 'Card', copy: 'Encapsulate related info in a flexible container.' },
        { image: `/images/${brand}/${brand}-Carousel.svg`, title: 'Carousel', copy: 'Cycle through a series of content or images.' },
        { image: `/images/${brand}/${brand}-Checkbox.svg`, title: 'Checkbox', copy: 'Select none, one or multiple options from a list.' },
        { image: `/images/${brand}/${brand}-ColorPicker.svg`, title: 'Color Picker', copy: 'Choose colors with an intuitive visual interface.' },
        { image: `/images/${brand}/${brand}-DateTimePicker.svg`, title: 'Date / Time Picker', copy: 'Select dates / date ranges and time intuitively.' },
        { image: `/images/${brand}/${brand}-Dropdown.svg`, title: 'Dropdown', copy: 'Choose one option from a collapsible list.' },
        { image: `/images/${brand}/${brand}-Filter.svg`, title: 'Filter', copy: 'Refine content by specifying filter criteria.' },
        { image: `/images/${brand}/${brand}-Input.svg`, title: 'Input', copy: 'Enter text or adjust settings.' },
        { image: `/images/${brand}/${brand}-Hyperlink.svg`, title: 'Hyperlink', copy: 'Navigate to other views, pages or sites.' },
        { image: `/images/${brand}/${brand}-Modal.svg`, title: 'Modal', copy: 'Display content over the main application view.' },
        { image: `/images/${brand}/${brand}-Notice.svg`, title: 'Notice', copy: 'Display non-intrusive, contextual messages.' },
        { image: `/images/${brand}/${brand}-Pagination.svg`, title: 'Pagination', copy: 'Navigate through large sets of content.' },
        { image: `/images/${brand}/${brand}-Pill.svg`, title: 'Pills / Chips', copy: 'Display selectable options, tags or chips.' },
        { image: `/images/${brand}/${brand}-ProgressBar.svg`, title: 'Progress Bar', copy: 'Visualize the completion / progress of a task.' },
        { image: `/images/${brand}/${brand}-Radio.svg`, title: 'Radio', copy: 'Select one option from a set.' },
        { image: `/images/${brand}/${brand}-Slider.svg`, title: 'Slider', copy: 'Select a value from a range.' },
        { image: `/images/${brand}/${brand}-Switch.svg`, title: 'Switch', copy: 'Toggle between two states.' },
        { image: `/images/${brand}/${brand}-Tags.svg`, title: 'Tag', copy: 'Label content for quick identification.' },
        { image: `/images/${brand}/${brand}-TextArea.svg`, title: 'Text Area', copy: 'Enter multiple lines of text.' },
        { image: `/images/${brand}/${brand}-TimeDatePicker.svg`, title: 'Time / Date Picker', copy: 'Select time and dates / date ranges intuitively.' },
        { image: `/images/${brand}/${brand}-Tooltip.svg`, title: 'Tooltip', copy: 'Offer brief, contextual information on hover.' },
        { image: `/images/${brand}/${brand}-Wizard.svg`, title: 'Wizard', copy: 'Guide through a multi-step process.' }
    ];

    return (
        <>
            <div className="bg-white p-4 md:p-12 mobile-hidden" style={{
                paddingTop: '48px',
                paddingLeft: '22px',
                paddingRight: '100px',
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
