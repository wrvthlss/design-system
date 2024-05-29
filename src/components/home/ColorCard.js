import React from 'react';

function ColorCard({ bgColor, version, details, linkText, signature, date, mobile }) {
    return (
        <div className={`${bgColor} text-white p-8 rounded-lg clr-crd`} style={{ maxWidth: mobile ? "none" : "420px", marginTop: mobile ? "0px" : '126px', marginBottom: mobile ? "0px" :  "50px"}}>
            <h2 className="text-2xl font-bold">{version}</h2>
            {mobile ? (
                <>
                    <p className="font-bold">{signature}</p>
                    <p>{date}</p>
                </>
            ) : (
                <>
                    <ul className="opacity-75 mt-4 mb-4 leading-6 ml-3">
                        {details.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <a href="#" className="underline font-bold">{linkText}</a>
                    <div className="mt-8">
                        <p className="font-bold">{signature}</p>
                        <p>{date}</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default ColorCard;
