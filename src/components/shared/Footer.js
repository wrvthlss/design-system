import React from 'react';

function Footer() {
    return (
        <div className="bg-white w-full border-b border-gray-300 md:py-32 px-20">
            {/* Desktop layout with 5 columns */}
            <div className="hidden md:grid grid-cols-5 gap-4 text-left">
                {/* EDS Column */}
                <div className='ml-5'>
                    <h3 className="font-bold text-lg mb-2">EDS</h3>
                    <p className='opacity-75'>Aiding in upholding user experience integrity and maximizing design and development resources.</p>
                </div>
                {/* Learn More Column */}
                <div className='ml-8'>
                    <h3 className="font-bold text-lg mb-2">Learn More</h3>
                    <ul className='opacity-75 leading-8'>
                        <li><a href="#">Design Guide</a></li>
                        <li><a href="#">Roadmap</a></li>
                        <li><a href="#">Releases</a></li>
                        <li><a href="#">Change Log</a></li>
                    </ul>
                </div>
                {/* Resources Column */}
                <div className='ml-8'>
                    <h3 className="font-bold text-lg mb-2">Resources</h3>
                    <ul className='opacity-75 leading-8'>
                        <li><a href="#">Figma</a></li>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Accessibility</a></li>
                        <li><a href="#">Bug Report</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                {/* Community Column */}
                <div className='ml-8'>
                    <h3 className="font-bold text-lg mb-2">Community</h3>
                    <ul className='opacity-75 leading-8'>
                        <li><a href="#">Medium</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Follow us on X</a></li>
                    </ul>
                </div>
                {/* Support Column */}
                <div className='ml-8'>
                    <h3 className="font-bold text-lg mb-2">Support</h3>
                    <ul className='opacity-75 leading-8'>
                        <li><a href="#">Get in touch</a></li>
                        <li><a href="#">Live Chat</a></li>
                    </ul>
                </div>
            </div>

            {/* Mobile layout with grouped content */}
            <div className="md:hidden px-4 py-10">
                <div className="mb-10">
                    <h3 className="font-bold text-lg mb-2">EDS</h3>
                    <p>Aiding in upholding UX integrity and maximizing design and development resources.</p>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <h3 className="font-bold text-lg mb-2">Learn More</h3>
                        <ul className='opacity-75 leading-8'>
                            <li><a href="#">Design Guide</a></li>
                            <li><a href="#">Roadmap</a></li>
                            <li><a href="#">Releases</a></li>
                            <li className='mb-4'><a href="#">Change Log</a></li>
                        </ul>
                        <h3 className="font-bold text-lg mb-2">Resources</h3>
                        <ul className='opacity-75 leading-8'>
                            <li><a href="#">Figma</a></li>
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Accessibility</a></li>
                            <li><a href="#">Bug Report</a></li>
                            <li className='mb-4'><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2">Community</h3>
                        <ul className='opacity-75 leading-8'>
                            <li><a href="#">Medium</a></li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Follow us on X</a></li>
                        </ul>
                        <h3 className="font-bold text-lg mb-2 my-12">Support</h3>
                        <ul className='opacity-75 leading-8'>
                            <li><a href="#">Get in touch</a></li>
                            <li><a href="#">Live Chat</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
