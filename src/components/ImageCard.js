import React from 'react';

function ImageCard({ image, headline, details, signature, date, mobile }) {
    return (
        <div className={mobile ? "p-0 my-5" : "mt-40"} style={{ maxWidth: mobile ? "none" : "360px"}}>
            <div className={mobile ? "flex" : "block"}>
                <img src={image} alt="Card image" className={`${mobile ? 'w-20 h-20' : 'w-full h-auto'} rounded-lg bg-white`} style={{ minWidth: mobile ? "80px" : "360px", minHeight: mobile ? "80px" : "240px" }} />
                <div className={mobile ? "ml-4 flex-grow" : "mt-5"}>
                    <h2 className="text-2xl font-bold">{headline}</h2>
                    {mobile ? (
                        <div className="flex justify-between mt-2">
                            <p className="font-bold">{signature}</p>
                            <p>{date}</p>
                        </div>
                    ) : (
                        <>
                            <p className="text-sm mt-2 mb-2 leading-6">{details}</p>
                            <div className="mt-2">
                                <p className="font-bold">{signature}</p>
                                <p>{date}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ImageCard;