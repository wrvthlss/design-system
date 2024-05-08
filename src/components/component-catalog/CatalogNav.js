// CatalogNav.js
import React from 'react';
import AccordionComp from './AccordionComp';

const CatalogNav = ({ onChangePage }) => {
    return (
        <div className="p-4 mobile-hidden md:hidden lg:block" style={{ backgroundColor: "#fafafa", borderRight: "1px solid #ebebeb" }}>
            <AccordionComp onChangePage={onChangePage} />
        </div>
    );
};

export default CatalogNav;
