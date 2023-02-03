import React from 'react';

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input
                            className='p-3 flex w-full rounded-lg text-black sm:max-w-[70%] lg:max-w-full'
                            type="email"
                            placeholder='Enter Email'
                        />
                        <button className='bg-[#00df9a] text-black w-[180px] rounded-lg font-medium md:ml-4 my-6 mx-auto py-3 hover:scale-105 transition'>
                            Notify Me
                        </button>
                    </div>
                    <p>We care bout the protection of your data. Read our
                        <a href="/" className='text-[#00df9a] ml-1'>Privacy Policy</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;