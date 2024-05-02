import React from 'react';
import AccordionComp from './AccordionComp';

const CatalogNav = () => {
    return (
        <div className="p-4 mobile-hidden" style={{ backgroundColor: "#fafafa", borderRight: "1px solid #ebebeb"}}>
            <AccordionComp />
        </div>
    );
}

export default CatalogNav;
