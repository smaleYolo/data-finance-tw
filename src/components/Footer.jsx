import React from 'react';
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad mollitia praesentium, quas sequi
                    similique. Exercitationem, tempora, velit!</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} className='hover:scale-125 transition cursor-pointer'/>
                    <FaInstagram size={30} className='hover:scale-125 transition cursor-pointer'/>
                    <FaTwitterSquare size={30} className='hover:scale-125 transition cursor-pointer'/>
                    <FaGithubSquare size={30} className='hover:scale-125 transition cursor-pointer'/>
                    <FaDribbbleSquare size={30} className='hover:scale-125 transition cursor-pointer'/>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>

                {/*Footer menu blocks*/}
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm hover:opacity-50 transition cursor-pointer'>Analytics</li>
                        <li className='py-2 text-sm hover:opacity-50 transition cursor-pointer'>Marketing</li>
                        <li className='py-2 text-sm hover:opacity-50 transition cursor-pointer'>Commerce</li>
                        <li className='py-2 text-sm hover:opacity-50 transition cursor-pointer'>Insights</li>
                    </ul>
                </div>

                {/*Footer menu blocks*/}
                <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm hover:opacity-50 transition cursor-pointer'>Pricing</li>
                        <li className='py-2 text-sm hover:opacity-50 transition cursor-pointer'>Documentation</li>
                        <li className='py-2 text-sm hover:opacity-50 transition cursor-pointer'>Guides</li>
                        <li className='py-2 text-sm hover:opacity-50 transition cursor-pointer'>API Status</li>
                    </ul>
                </div>

                {/*Footer menu blocks*/}
                <div>
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm hover:opacity-50 transition cursor-pointer'>About</li>
                        <li className='py-2 text-sm hover:opacity-50 transition cursor-pointer'>Blog</li>
                        <li className='py-2 text-sm hover:opacity-50 transition cursor-pointer'>Jobs</li>
                        <li className='py-2 text-sm hover:opacity-50 transition cursor-pointer'>Press</li>
                        <li className='py-2 text-sm hover:opacity-50 transition cursor-pointer'>Careers</li>
                    </ul>
                </div>

                {/*Footer menu blocks*/}
                <div>
                    <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm hover:opacity-50 transition cursor-pointer'>Claim</li>
                        <li className='py-2 text-sm hover:opacity-50 transition cursor-pointer'>Policy</li>
                        <li className='py-2 text-sm hover:opacity-50 transition cursor-pointer'>Terms</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Footer;