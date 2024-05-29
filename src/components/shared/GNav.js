import { Fragment, useState, useEffect, useRef } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    QuestionMarkCircleIcon,
    ShoppingBagIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const navigation = {
    categories: [
        {
            name: 'Getting Started',
            featured: [
                {
                    name: 'Design',
                    href: '#',
                    description: 'Create beautiful, usable, and Consistent products.',
                    ico: 'images/globalnav/get-started-001.svg'
                },
                {
                    name: 'Develop',
                    href: '#',
                    description: 'Access comprehensive code Snippets & robust frameworks.',
                    ico: 'images/globalnav/get-started-002.svg'
                },
                {
                    name: 'Research',
                    href: '#',
                    description: 'Learn proven user testing methodsand insights.',
                    ico: 'images/globalnav/get-started-003.svg'
                },
                {
                    name: 'Content',
                    href: '#',
                    description: 'Guidelines for clear, effective writing strategies.',
                    ico: 'images/globalnav/get-started-004.svg'
                },
            ],
        },
        {
            name: 'Get Involved',
            featured: [
                {
                    name: 'Contribute',
                    href: '#',
                    description: 'View our schema to contribute your ideas.',
                    ico: 'images/globalnav/get-involved-001.svg'
                },
                {
                    name: 'Report an Issue/Bug',
                    href: '#',
                    description: 'Propose new components or request edits to existing ones.',
                    ico: 'images/globalnav/get-involved-002.svg'
                },
                {
                    name: 'What we are working on.',
                    href: '#',
                    description: 'Current and upcoming components and patterns.',
                    ico: 'images/globalnav/get-involved-003.svg'
                },
            ],
        },
        {
            name: 'Resources',
            featured: [
                {
                    name: 'BrandHub',
                    href: '#',
                    description: 'Your go-to for brand guidelines and on-brand communications.',
                    ico: 'images/globalnav/resources-001.svg'
                },
                {
                    name: 'Tools & Plugins',
                    href: '#',
                    description: 'Tools for design, development, research, and content.',
                    ico: 'images/globalnav/resources-002.svg'
                },
                {
                    name: 'Learning Material',
                    href: '#',
                    description: 'Guides for brand consistency and skill growth.',
                    ico: 'images/globalnav/resources-003.svg'
                },
                {
                    name: 'Support',
                    href: '#',
                    description: 'Support, FAQs, team chats, and AI-powered chatbot help.',
                    ico: 'images/globalnav/resources-004.svg'
                },
            ],
        },

    ],
    pages: [
        { name: 'Components', href: '/component-catalog' },
    ],
    features: [
        {
            image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Get Started',
            description: 'Information on how to being using the EDS.',
            ico: 'images/globalnav/get-started-001.svg'
        },
        {
            image: 'https://images.unsplash.com/photo-1622231300439-9f4b1099afb3?q=80&w=136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Get Involved',
            description: 'Contribute, report an issue, and see what we\'re working on.',
            ico: 'images/globalnav/get-involved-001.svg'
        },
        {
            image: 'https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?q=80&w=136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Resources',
            description: 'Various resources for working with our apps and components.',
            ico: 'images/globalnav/resources-002.svg'
        }
    ],
    comps: [
        { name: 'Buttons', href: '/component-catalog' },
        { name: 'Dropdowns', href: '/component-catalog' },
        { name: 'Checkboxes', href: '/component-catalog' }
    ]

}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isLightMode, setLightMode] = useState(true);
    const toggleMode = () => setLightMode(!isLightMode);

    const searchIcon = '/images/globalnav/search.svg';
    const githubIcon = '/images/globalnav/github.svg';
    const figmaIcon = '/images/globalnav/figma.svg';
    const modeIcon = (isLightMode ? '/images/globalnav/light.svg' : '/images/globalnav/dark.svg');

    const [activeIndex, setActiveIndex] = useState(null);
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setActiveIndex(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="bg-white inter-font sticky top-0 z-50">
            {/* Mobile menu */}
            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex justify-end">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pb-2 pt-5">
                                    <button
                                        type="button"
                                        className="mnav-trigger -m-2 pl-48 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-40" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Mobile Nav*/}
                                <Tab.Group as="div" className="mt-2">
                                    <Tab.Panels as={Fragment}>
                                        {navigation.categories.map((category) => (
                                            <Tab.Panel key={category.name} className="space-y-12 px-4 py-6">
                                                <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                                                    {navigation.features.map((feature) => (
                                                        <div key={feature.name} className="group relative">
                                                            <img src={feature.image} style={{ border: '1px solid gray', borderRadius: '12px' }} />
                                                            <div className="mt-6 flex items-center space-x-2 font-medium text-gray-900">
                                                                <img src={feature.ico} className="w-4 h-4" alt={`${feature.name} icon`} />
                                                                <span className="font-medium text-gray-900">
                                                                    {feature.title}
                                                                </span>
                                                            </div>
                                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md group-hover:opacity-75">
                                                                <p className='nav-int-copy'>{feature.description}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels>
                                </Tab.Group>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    {navigation.pages.map((page) => (
                                        <div key={page.name} className="flow-root">
                                            <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                                {page.name}
                                            </a>
                                        </div>
                                    ))}
                                    {navigation.comps.map((comp) => (
                                        <div key={comp.name}>
                                            <a href={comp.href} className='text-gray-700'>{comp.name}</a>
                                        </div>
                                    ))}
                                </div>

                                <div className="flow-root">
                                    <div className="border-t border-gray-200 flex py-3 lg:hidden">
                                        <a href="#" className="p-2 text-black mr-1 pl-4">
                                            <img src={githubIcon} alt="GitHub" width={20} />
                                        </a>
                                        <a href="#" className="p-2 text-black">
                                            <img src={figmaIcon} alt="Figma" width={15} />
                                        </a>
                                        <a href="#" className="p-2 ml-48">
                                            <img src={modeIcon} alt="Mode Toggle" width={20} onClick={toggleMode} />
                                        </a>
                                    </div>

                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>


            {/* Hero section */}
            <div className="relative bg-gray-900">
                {/* Decorative image and overlay */}
                <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

                {/* Navigation */}
                <header className="relative z-10">
                    <nav aria-label="Top">

                        {/* Secondary navigation */}
                        <div className="bg-white">
                            <div className="nav-con mx-auto max-w-7xl px-4 sm:px-6">
                                <div>
                                    <div className="flex h-16 items-center justify-between">
                                        {/* Logo (lg+) */}
                                        <div className="hidden lg:flex lg:items-center mr-40 lgo">
                                            <a href="/">
                                                <span className="inter-font text-black text-2xl">EDS</span>
                                            </a>
                                        </div>
                                        <div ref={navRef} className="hidden h-full lg:flex">
                                            <Popover.Group className="inset-x-0 bottom-0 px-4">
                                                <div className="flex h-full justify-center space-x-16">
                                                    {navigation.categories.map((category, index) => (
                                                        <Popover key={category.name} className="flex">
                                                            {({ open }) => (
                                                                <>
                                                                    <div className="relative flex nav-label">
                                                                        <Popover.Button
                                                                            className={classNames(
                                                                                'relative z-10 flex items-center justify-center',
                                                                            )}
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                setActiveIndex(activeIndex !== index ? null : index);
                                                                            }}
                                                                        >
                                                                            {category.name}
                                                                            <ChevronDownIcon
                                                                                className={classNames('ml-1 h-6 w-6 pb-1')}
                                                                            />
                                                                        </Popover.Button>
                                                                    </div>

                                                                    <Popover.Panel className="absolute inset-x-0 top-fulltext-gray-500 popover-panel mt-12">
                                                                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                                                                        <div className="relative bg-white">
                                                                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                                                                <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                                                                    {category.featured.map((item) => (
                                                                                        <div key={item.name} className="group relative">
                                                                                            <div className="flex items-center space-x-1">
                                                                                                <img src={item.ico} className="w-6 h-6" alt={`${item.name} icon`} />
                                                                                                <div className="block text-gray-900 mt-0 text-lg">
                                                                                                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                                                    {item.name}
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden mt-1">
                                                                                                <p>{item.description}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Popover.Panel>
                                                                </>
                                                            )}
                                                        </Popover>
                                                    ))}
                                                </div>

                                            </Popover.Group>
                                        </div>

                                        {/* Logo (lg-) */}
                                        <a href="/" className="lg:hidden">
                                            <span className='logo-eds text-black text-2xl'>EDS</span>
                                        </a>


                                        <div className="mn-con flex flex-1 items-center justify-end">
                                            <div className="flex items-center lg:ml-8">

                                                {/* Mobile menu(lg-) */}
                                                <div className="flex flex-1 lg:hidden">
                                                    <button type="button" className=" text-black" onClick={() => setMobileMenuOpen(true)}>
                                                        <span className="sr-only">Open menu</span>
                                                        <Bars3Icon className="h-6 w-24" aria-hidden="true" />
                                                    </button>
                                                </div>

                                                <a href="#" className="p-2 text-black hidden">
                                                    <img src={githubIcon} alt="GitHub" width={20} />
                                                </a>
                                                <a href="#" className="hidden font-medium text-black lg:block lg:pr-9 sm:hidden">
                                                    <img src={githubIcon} alt="GitHub" width={20} />
                                                </a>
                                                <a href="#" className="p-2 text-black hidden">
                                                    <img src={figmaIcon} alt="Figma" width={15} />
                                                </a>
                                                <a href="#" className="hidden text-sm font-medium text-black lg:block sm">
                                                    <img src={figmaIcon} alt="Figma" width={15} />
                                                </a>

                                                {/* Cart */}
                                                <div className="ml-4 dm-tog flow-root lg:ml-8">
                                                    <a href="#" className="group -m-2 flex items-center p-2">
                                                        <img src={modeIcon} alt="Mode Toggle" width={20} onClick={toggleMode} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    )
}