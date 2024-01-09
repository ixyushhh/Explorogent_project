import React from 'react'

const Nav = () => {
    return (
        <div className='flex py-6 px-16 justify-between'>
            <div>
                <img src='/images/Reactangle.png' width={'60px'} height={'60px'} />
            </div>

            <div className='flex items-center'>
                <div class=" lg:block bg-gradient-to-r from-blue-100 to-red-100 py-3 px-14 rounded-3xl shadow-md ">
                    <ul class="inline-flex space-x-8">
                        <li>
                            <a
                                href="#"
                                class="text-sm font-semibold text-gray-800 hover:p-2 hover:rounded-3xl hover:bg-white "
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="text-sm font-semibold text-gray-800 hover:p-2 hover:rounded-3xl hover:bg-white "
                            >
                                AboutUs
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="text-sm font-semibold text-gray-800 hover:p-2 hover:rounded-3xl hover:bg-white"
                            >
                                Work
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="text-sm font-semibold text-gray-800 hover:p-2 hover:rounded-3xl hover:bg-white"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="text-sm font-semibold text-gray-800 hover:p-2 hover:rounded-3xl hover:bg-white"
                            >
                                Clients
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="text-sm font-semibold text-gray-800 hover:p-2 hover:rounded-3xl hover:bg-white"
                            >
                                Team
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="text-sm font-semibold text-gray-800 hover:p-2 hover:rounded-3xl hover:bg-white"
                            >
                                ContactUs
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Nav