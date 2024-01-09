import React from 'react'
import { BiSolidUserPin } from "react-icons/bi";
import { HiUsers } from "react-icons/hi2";
import { FaUserPen } from "react-icons/fa6";
import { RiFolderChart2Fill } from "react-icons/ri";
import { MdAddHomeWork } from "react-icons/md";

const MainSection = () => {

    const displayCards = [
        {
            image: '/images/card1.png',
            topic: 'Website Development',
            para: 'We specialize in responsive website development, ensuring optimal performance across various devices.',
            logo: '/images/icon.png'
        },

        {
            image: '/images/card2.png',
            topic: 'App Development',
            para: 'We specialize in creating superior apps for diverse sectors such as e-commerce, education, and transportation.',
            logo: '/images/icon.png'
        },

        {
            image: '/images/card3.png',
            topic: 'Software Development',
            para: ' We specialize in tailored solutions ensuring business growth and efficiency by providing superior software.',
            logo: '/images/icon.png'
        },

        {
            image: '/images/card4.png',
            topic: 'UI/UX Design',
            para: ' We specialize in creating exemplary designs prioritizing user-friendly concepts and aesthetically appealing interfaces.',
            logo: '/images/icon.png'
        },

        {
            image: '/images/card5.png',
            topic: 'Digital Marketing',
            para: 'We specialize in tailored digital marketing solutions and ensure effective online marketing strategies.',
            logo: '/images/icon.png'
        },

        {
            image: '/images/card6.png',
            topic: 'SEO Optimization',
            para: 'We ensure optimal website traffic by addressing factors such as user experience, accessibility, product details, and monitoring target audience.',
        },
    ]


    const endSection = [
        {
            image: '/images/last1.png',
            topic: 'Unleashing Top Talent Globally',
            para: 'We offer 5% top talents and supports companies hiring from various time zones.',
        },

        {
            image: '/images/last2.png',
            topic: 'Securing Success',
            para: 'The company has a 30-day replacement policy and high retention rate due to competitive payouts and strong brand reputation.',
        },

        {
            image: '/images/last3.png',
            topic: 'Beyond Borders',
            para: 'We provide both, flexible full-time and part-time jobs',
        },

        {
            image: '/images/last4.png',
            topic: 'End-to-End Excellence',
            para: 'In our hiring process, a job description is shared, matches are reviewed, interviews are conducted, and post-hiring support is provided by us.',
        },

        {
            image: '/images/last5.png',
            topic: 'Efficiency Redefined',
            para: 'The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provides quality talent.',
        },

        {
            image: '/images/last6.png',
            topic: 'Simplified Contracts Satisfied Partnerships',
            para: 'The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support.',
        },
    ]


    return (
        <div className=' bg-gradient-to-r from-blue-100 to-red-50 py-10' style={{ height: '100%' }}>
            <div className='mx-16'>
                <div className="flex flex-col md:flex-row items-center md:items-start bg-gradient-to-b from-white to-transparent-50 gap-x-4 gap-y-4 px-12 py-8 rounded-xl">
                    <div className="space-y-6 ">
                        <p className="font-bold md:text-3xl text-blue-800">Diversifying the Designs of Digital World</p>
                        <p className='w-{1/2}'>
                            Explorogent International Services Private Limited (EISPL) is one of the most famous companies in the sector of Web and Mobile Development. In the market, EISPL has a strong presence in providing quality services to its clients.</p>
                        <p>EISPL is convinced that one should diversify the offering, given the changing needs of the clients. That is why we engage in multiple projects and activities. We also possess knowledge in web development, app development, UI/UX design, as well as digital marketing.
                        </p>
                        <button
                            type="button"
                            className="rounded-m px-3 py-2 text-xl rounded-full font-semibold text-white shadow-sm bg-orange-400 flex items-center gap-2"
                        >
                            <img src='/images/callicon.png' className='p-1 rounded-full bg-white' />
                            Book a call
                        </button>
                    </div>
                    <div className=" mt-10" style={{ width: '100%', maxWidth: '160%' }}>
                        <img
                            src='/images/para1.png'
                            alt="Getting Started"
                            className="rounded-lg"
                        />
                    </div>
                </div>


                <div className='flex flex-col items-center'>
                    <p className='text-center'>
                        In the realm of digital solutions, we offer expertise in
                    </p>
                    <div className='flex flex-wrap-reverse items-center justify-center gap-2 mt-2'>
                        <button class="rounded-full bg-white  border-2 border-blue-700 px-3 py-2 text-sm font-semibold text-blue-800 shadow-sm hover:bg-blue-800 hover:text-white hover:border-2 hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                            Website Development
                        </button>

                        <button class="rounded-full bg-white  border-2 border-blue-700 px-3 py-2 text-sm font-semibold text-blue-800 shadow-sm hover:bg-blue-800 hover:text-white hover:border-2 hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                            App Development
                        </button>

                        <button class="rounded-full bg-white  border-2 border-blue-700 px-3 py-2 text-sm font-semibold text-blue-800 shadow-sm hover:bg-blue-800 hover:text-white hover:border-2 hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                            UI/UX Design
                        </button>

                        <button class="rounded-full bg-white  border-2 border-blue-700 px-3 py-2 text-sm font-semibold text-blue-800 shadow-sm hover:bg-blue-800 hover:text-white hover:border-2 hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                            Digital Marketing
                        </button>

                        <button class="rounded-full bg-white  border-2 border-blue-700 px-3 py-2 text-sm font-semibold text-blue-800 shadow-sm hover:bg-blue-800 hover:text-white hover:border-2 hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                            SEO Optimization
                        </button>
                    </div>
                    <p className='mt-2 text-center'>
                        showcasing our proficiency across various facets of the digital platform
                    </p>

                    <div className='flex text-4xl font-bold text-orange-400 items-center my-8 text-center'>
                        <h1 className='flex items-center'> Stay Ahead! <br /> Launch Your Next Project with Stackkaroo</h1>
                    </div>
                </div>


                <div className="flex flex-col items-center bg-gradient-to-b from-white to-transparent-50 gap-x-4 gap-y-4 px-12 py-8  md:flex-row rounded-xl">
                    <div className="space-y-6 ">
                        <p className="font-bold md:text-3xl text-blue-800">Our Story</p>
                        <p className='w-{1/2}'>
                            Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan Mishra bring their extensive experience to the forefront as industry veterans. Our team is fueled by innovation, continually striving to exceed customer expectations.</p>
                        <br />
                        <p> Operating from our registered office in Agartala Sadar, Tripura (W), our company is officially registered with the Corporate Identification Number (CIN). Our active status and an authorized share capital of Rs 10.00 lac are a source of pride.
                        </p>
                        <button
                            type="button"
                            className="rounded-m px-3 py-2 text-xl rounded-full font-semibold text-white shadow-sm bg-orange-400 flex items-center gap-2"
                        >
                            <img src='/images/icon2.png' className='p-1 rounded-full ' />
                            Get Estimated Project Cost
                        </button>
                    </div>
                    <div className=" mt-10" style={{ width: '100%', maxWidth: '160%' }}>
                        <img
                            src='/images/para2.png'
                            alt="Getting Started"
                            className="rounded-lg"
                        />
                    </div>
                </div>


                <div className='flex flex-col justify-center items-center my-10 text-center'>
                    <div className='flex text-4xl font-bold text-orange-400 items-center my-8'>
                        <h1 className='flex items-center'> Why Choose Us?</h1>
                    </div>
                    <p>
                        We excel with reliability, innovation and customer-centric approach for our quality products.<br />
                        Our dedicated team ensures that the solutions provided are dependable and long-term
                    </p>
                </div>


                {/* why choose us cards -->> */}
                <div className='flex gap-6 flex-wrap justify-center'>
                    <div className='w-60 h-120px border-2 border-white rounded-3xl flex justify-center items-center text-lg font-semibold text-blue-800 p-2 gap-4 bg-gradient-to-r from-blue-200 to-transparent shadow-lg '>
                        <div className='p-2 bg-white rounded-lg  text-zinc-700'>
                            <p><BiSolidUserPin size={50} /></p>
                        </div>
                        <div>
                            <p>User-Centric<br /> Approach</p>
                        </div>
                    </div>

                    <div className='w-60 h-120px border-2 border-white rounded-3xl flex justify-center items-center text-lg font-semibold text-blue-800 p-2 gap-4 bg-gradient-to-r from-blue-200 to-transparent shadow-lg '>
                        <div className='p-2 bg-white rounded-lg  text-zinc-700'>
                            <p><HiUsers size={50} /></p>
                        </div>
                        <div>
                            <p>Customer Satisfaction</p>
                        </div>
                    </div>

                    <div className='w-60 h-120px border-2 border-white rounded-3xl flex justify-center items-center text-lg font-semibold text-blue-800 p-2 gap-4 bg-gradient-to-r from-blue-200 to-transparent shadow-lg '>
                        <div className='p-2 bg-white rounded-lg  text-zinc-700'>
                            <p><FaUserPen size={50} /></p>
                        </div>
                        <div>
                            <p>Integrating Feedback</p>
                        </div>
                    </div>

                    <div className='w-60 h-120px border-2 border-white rounded-3xl flex justify-center items-center text-lg font-semibold text-blue-800 p-2 gap-4 bg-gradient-to-r from-blue-200 to-transparent shadow-lg '>
                        <div className='p-2 bg-white rounded-lg  text-zinc-700'>
                            <p><RiFolderChart2Fill size={50} /></p>
                        </div>
                        <div>
                            <p>High Quality Products</p>
                        </div>
                    </div>

                    <div className='w-60 h-120px border-2 border-white rounded-3xl flex justify-center items-center text-lg font-semibold text-blue-800 p-2 gap-4 bg-gradient-to-r from-blue-200 to-transparent shadow-lg '>
                        <div className='p-2 bg-white rounded-lg text-zinc-700'>
                            <p><MdAddHomeWork size={50} /></p>
                        </div>
                        <div>
                            <p>On-Time Product Delivery</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center my-10 text-center'>
                    <div className='flex text-4xl font-bold text-orange-400 items-center my-8'>
                        <h1 className='flex items-center'>Stackkaroo’s Digital Services</h1>
                    </div>
                    <p>
                        We excel with reliability, innovation and customer-centric approach for our quality products.<br />
                        Our dedicated team ensures that the solutions provided are dependable and long-term
                    </p>
                </div>

                <div className='flex flex-wrap gap-10 items-center justify-center '>
                    {displayCards?.map((elem) => (
                        <div style={{ height: '320px', width: '320px', border: 'solid white 2px', borderRadius: '25px' }}>
                            <div className='flex items-center justify-between gap-4 m-6'>
                                <img src={elem.image} />
                                <h1 className='text-blue-800 font-bold'>{elem.topic}</h1>
                            </div>
                            <div>
                                <p className='m-6 text-center' style={{ color: '#36454F' }}>{elem.para}</p>
                                <img src={elem.logo} className=" bottom-0 left-0 p-4" />
                            </div>
                        </div>
                    ))}
                </div>


                <div className="flex flex-col items-center bg-gradient-to-b from-white to-transparent-50 gap-x-4 gap-y-4 px-4 sm:px-6 md:px-8 lg:px-12 py-8 mt-8 md:flex-row rounded-xl">
                    <div className="container mx-auto mt-8">
                        <p className="font-bold text-2xl md:text-3xl text-orange-400 text-center lg:text-center md:text-right mb-4 lg:mb-6 sm:pl-4 md:pl-0">SEO Services</p>
                        <div className="flex flex-col md:flex-row text-center">
                            {/* Left side paragraphs */}
                            <div className="w-full md:w-1/2 pr-0 md:pr-4">
                                <div>
                                    <h2 className="text-2xl font-bold mb-4 text-blue-800">Customized SEO Services</h2>
                                    <p className="mb-2 md:text-center">We develop tailored SEO plans for new websites as they consider a correct SEO website checklist, as well as strategy, to be critical for business.</p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold mb-4 text-blue-800">On-Page SEO Services</h2>
                                    <p className="mb-2">We offer on-page SEO services for content, photos, descriptions, and visibility. They follow the design principles for SEO-friendly websites in order to provide their customers with the best outcomes.</p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold mb-4 text-blue-800">Off-Page SEO Services</h2>
                                    <p>We undertake off-page SEO for better rankings. They mainly specialize in handling backlink profiles. Their SEO analysts strive to ensure that their websites are listed on some of the popular sites in the industry of travel.</p>
                                </div>
                            </div>

                            {/* Right side paragraphs */}
                            <div className="w-full md:w-1/2 pl-0 md:pl-4">
                                <div>
                                    <h2 className="text-2xl font-bold mb-4 text-blue-800">Mobile SEO Services</h2>
                                    <p className="mb-2">We stress upon the mobile optimizations since the mobile phone use by search is highly prevalent. They are more able to score the best SEO rankings and can easily be viewed on mobile devices.</p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold mb-4 text-blue-800">Free Website Audit and Strategies</h2>
                                    <p className="mb-2">We go beyond essential SEO website development to give out free website audits, analysis and SEO strategies for transparent business strategies. They target business owners in different industries, and these packages include local SEO and e-commerce services.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col justify-center items-center my-10 text-center'>
                    <div className='flex text-4xl font-bold text-orange-400 items-center my-8'>
                        <h1 className='flex items-center'>Stackkaroo’s Talent Hiring & Job Placement Services</h1>
                    </div>
                    <p>
                        We are a talent searching platform that redesigns how companies hire talents. It is a cost-effective solution for industries.<br />
                        We also provide global job opportunities with good salaries, support, and professional development.
                    </p>
                </div>

                <div className='flex flex-wrap gap-10 items-center justify-center '>
                    {endSection?.map((elem) => (
                        <div style={{ height: '320px', width: '320px', border: 'solid white 2px', borderRadius: '25px', backgroundColor: 'white' }} className='shadow-xl'>
                            <div className='flex flex-col justify-center items-center gap-4 m-6'>
                                <img src={elem.image} />
                                <h1 className='text-blue-800 font-bold text-center'>{elem.topic}</h1>
                            </div>
                            <div>
                                <p className='m-6 text-center' style={{ color: '#36454F' }}>{elem.para}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default MainSection