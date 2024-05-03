import React from 'react';

const ComponentDetails = () => {
    return (
        <div className="bg-white p-4 border-t border-gray-300 pb-30" style={{ paddingTop: '64px', paddingLeft: '96px', paddingRight: '100px' }}>
            <h1 className="text-2xl font-bold mb-6" style={{ lineHeight: '34px' }}>Help improve this page</h1>
            <p className="mb-4 text-gray-600" style={{ lineHeight: '26px' }}>
                Your feedback and contributions are invaluable to us as we strive to make our design system documentation as comprehensive and
                user-friendly as possible. Whether you have suggestions for new content, spotted an inconsistency,
                or have ideas for improvement, we want to hear it.
            </p>
            <ul className="list-disc pl-5 text-gray-600">
                <li className="mb-2">
                    Participate in the <a href="https://github.com" className="text-green-600 underline">Button</a> component design on GitHub and contribute your findings.
                </li>
                <li className="mb-2">
                    <a href="#" className="text-green-600 underline">Suggest an improvement</a> – learn more about the BrandName intake process for proposing modifications and changes to existing components.
                </li>
            </ul>
            <h2 className="text-lg font-bold mt-8 mb-4" style={{ lineHeight: '26px' }}>Need help?</h2>
            <p className="mb-4 text-gray-600" style={{ lineHeight: '26px' }}>
                Your insights and contributions are crucial as we aim to continuously evolve our design system. We’re committed to improvement with your help, so please, <a href="#" className="text-green-600 underline">get in touch</a>.
            </p>
            <ul className="list-disc pl-5 text-gray-600">
                <li className="mb-2">
                    Feedback Form: Share your thoughts, suggestions, or feedback through our easy-to-use online <a href="#" className="text-green-600 underline">form</a>. It’s quick and ensures your insights are heard directly by our team.
                </li>
                <li className="mb-2">
                    Community Forums: Dive into our community forums to discuss ideas, ask questions, and connect with other users and the design system team. Check out the forums <a href="#" className="text-green-600 underline">here</a>.
                </li>
                <li className="mb-2">
                    Email Us Directly: For more detailed feedback, concerns, or proposals, don’t hesitate to send us an email at <a href="mailto:designsystem@eds.elevance.com" className="text-green-600 underline">designsystem@eds.elevance.com</a>. We aim to respond to each email personally.
                </li>
                <li className="mb-2">
                    Social Media: Follow us on our social media channels to stay up-to-date with the latest news, updates, and community highlights. Plus, it’s a great way to quickly get in touch or share your design system success stories with a wider audience.
                </li>
            </ul>
        </div>
    );
}

export default ComponentDetails;
