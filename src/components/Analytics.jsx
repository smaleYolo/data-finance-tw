import React from 'react';
import Laptop from '../assets/laptop.jpeg';

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/"/>
                <div className='flex justify-center flex-col'>
                    <p className='font-bold text-[#00df9a]'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eligendi nulla, odit placeat
                        quos sint temporibus. Aperiam assumenda cumque delectus exercitationem maiores perspiciatis
                        quidem quisquam, recusandae sapiente soluta totam vitae?</p>
                    <button
                        className='text-[#00df9a] w-[180px] rounded-lg font-medium my-6 mx-auto md:mx-0 py-3 bg-black hover:scale-105 transition'
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Analytics;