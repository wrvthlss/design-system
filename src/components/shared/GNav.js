/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
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
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
                    imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
                },
                {
                    name: 'Carry',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
                    imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
                },
            ],
        },
        {
            name: 'Get Involved',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
                    imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
                    imageAlt: 'Model wearing light heather gray t-shirt.',
                },
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
                    imageAlt:
                        'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
                },
                {
                    name: 'Carry',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
                    imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
                },
            ],
        },
        {
            name: 'Resources',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
                    imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
                    imageAlt: 'Model wearing light heather gray t-shirt.',
                },
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
                    imageAlt:
                        'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
                },
                {
                    name: 'Carry',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
                    imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
                },
            ],
        },

    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
}
const categories = [
    {
        name: 'New Arrivals',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg',
    },
    {
        name: 'Productivity',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg',
    },
    {
        name: 'Workspace',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg',
    },
    {
        name: 'Accessories',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg',
    },
    { name: 'Sale', href: '#', imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg' },
]
const collections = [
    {
        name: 'Handcrafted Collection',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
        imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
        description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
    },
    {
        name: 'Organized Desk Collection',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
        imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
        description: 'The rest of the house will still be a mess, but your desk will look great.',
    },
    {
        name: 'Focus Collection',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
        imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
        description: 'Be more productive than enterprise project managers with a single piece of paper.',
    },
]
const footerNavigation = {
    shop: [
        { name: 'Bags', href: '#' },
        { name: 'Tees', href: '#' },
        { name: 'Objects', href: '#' },
        { name: 'Home Goods', href: '#' },
        { name: 'Accessories', href: '#' },
    ],
    company: [
        { name: 'Who we are', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy', href: '#' },
    ],
    account: [
        { name: 'Manage Account', href: '#' },
        { name: 'Returns & Exchanges', href: '#' },
        { name: 'Redeem a Gift Card', href: '#' },
    ],
    connect: [
        { name: 'Contact Us', href: '#' },
        { name: 'Facebook', href: '#' },
        { name: 'Instagram', href: '#' },
        { name: 'Pinterest', href: '#' },
    ],
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



    return (

        <div className="bg-white">
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

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pb-2 pt-5">
                                    <button
                                        type="button"
                                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <Tab.Panels as={Fragment}>
                                        {navigation.categories.map((category) => (
                                            <Tab.Panel key={category.name} className="space-y-12 px-4 py-6">
                                                <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                                                    {category.featured.map((item) => (
                                                        <div key={item.name} className="group relative">
                                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                                                            </div>
                                                            <a href={item.href} className="mt-6 block text-sm font-medium text-gray-900">
                                                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                {item.name}
                                                            </a>
                                                            <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                                                Shop now
                                                            </p>
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
                                </div>

                                <div className="flow-root">
                                    <div className="border-t border-gray-200 flex py-3 lg:hidden">
                                        <a href="#" className="p-2 text-black mr-1 pl-4">
                                            <img src={githubIcon} alt="GitHub" width={20} />
                                        </a>
                                        <a href="#" className="p-2 text-black">
                                            <img src={figmaIcon} alt="Figma" width={15} />
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
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:pl-16 lg:pr-12">
                                <div>
                                    <div className="flex h-16 items-center justify-between">
                                        {/* Logo (lg+) */}
                                        <div className="hidden lg:flex lg:flex-1 lg:items-center">
                                            <a href="/">
                                                <span className="text-black text-2xl">EDS</span>
                                            </a>
                                        </div>

                                        <div className="hidden h-full lg:flex">
                                            {/* Flyout menus */}
                                            <Popover.Group className="inset-x-0 bottom-0 px-4">
                                                <div className="flex h-full justify-center space-x-8">
                                                    {navigation.categories.map((category) => (
                                                        <Popover key={category.name} className="flex">
                                                            {({ open }) => (
                                                                <>
                                                                    <div className="relative flex">
                                                                        <Popover.Button className="relative z-10 flex items-center justify-center text-sm font-medium text-black transition-colors duration-200 ease-out">
                                                                            {category.name}
                                                                            <span
                                                                                className={classNames(
                                                                                    open ? 'bg-black' : '',
                                                                                    'absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out'
                                                                                )}
                                                                                aria-hidden="true"
                                                                            />
                                                                        </Popover.Button>
                                                                    </div>

                                                                    <Transition
                                                                        as={Fragment}
                                                                        enter="transition ease-out duration-200"
                                                                        enterFrom="opacity-0"
                                                                        enterTo="opacity-100"
                                                                        leave="transition ease-in duration-150"
                                                                        leaveFrom="opacity-100"
                                                                        leaveTo="opacity-0"
                                                                    >
                                                                        <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                                                            <div className="relative bg-white">
                                                                                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                                                                    <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                                                                        {category.featured.map((item) => (
                                                                                            <div key={item.name} className="group relative">
                                                                                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                                                                    <img
                                                                                                        src={item.imageSrc}
                                                                                                        alt={item.imageAlt}
                                                                                                        className="object-cover object-center"
                                                                                                    />
                                                                                                </div>
                                                                                                <a href={item.href} className="mt-4 block font-medium text-gray-900">
                                                                                                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                                                    {item.name}
                                                                                                </a>
                                                                                                <p aria-hidden="true" className="mt-1">
                                                                                                    Shop now
                                                                                                </p>
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Popover.Panel>
                                                                    </Transition>
                                                                </>
                                                            )}
                                                        </Popover>
                                                    ))}
                                                </div>
                                            </Popover.Group>
                                        </div>

                                        {/* Logo (lg-) */}
                                        <a href="#" className="lg:hidden">
                                            <span className='text-black text-2xl'>EDS</span>
                                        </a>


                                        <div className="flex flex-1 items-center justify-end">
                                            <div className="flex items-center lg:ml-8">

                                                {/* Mobile menu(lg-) */}
                                                <div className="flex flex-1 items-center lg:hidden">
                                                    <button type="button" className="-ml-2 p-2 text-black" onClick={() => setMobileMenuOpen(true)}>
                                                        <span className="sr-only">Open menu</span>
                                                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
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
                                                <div className="ml-4 flow-root lg:ml-8">
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

        </div >
    )
}