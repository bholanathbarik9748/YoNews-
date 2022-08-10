import React from 'react'

const Navbar = () => {
    return (
        <>

            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <a href="https://flowbite.com" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">YoNews🔥</span>
                    </a>
                    <div className="flex items-center">
                        <a href="tel:9123346815" className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">9123346815</a>
                        <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Upload News</a>
                    </div>
                </div>
            </nav>
            <nav className="bg-black bg-gray-50 dark:bg-gray-700">
                <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                    <div className="flex items-center">
                        <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                            <li>
                                <a href="#" className="text-gray-900 text-white hover:underline" aria-current="page">Latest News</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 text-white hover:underline">Money & Banking</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 text-white hover:underline">Entertainment</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 text-white hover:underline">Sports</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
