import React from 'react';
import ExploreButton from '../../../Shared/ExploreButton/ExploreButton.tsx';

const LatestTrend = () => {
    return (
        <div className=' xl:px-0 pb-20 lg:px-[20px] px-[10px]'>
            <div className='flex md:justify-between justify-center md:items-end items-center md:flex-row flex-col '>
                <div className="flex md:justify-start justify-center flex-col">
                    <h4 className='md:text-start text-center'>Furnishop</h4>
                    <h2 className=' mt-5 lg:text-[30px] md:text-[27px] sm:text-[24px] font-bold text-[20px] md:text-start text-center'>Discover the Latest Trends</h2>
                    <p className='md:text-start text-center lg:max-w-[600px]  md:max-w-[500px] mt-3 text-[#6A6D70] lg:text-lg md:text-base sm:text-sm text-[12px]'>Stay updated with our information and engaging blog posts about modern Furniture and Fashion on the industry</p>
                </div>
                <div className=''>
                    <ExploreButton text={'Explore Now'}></ExploreButton>
                </div>
            </div>
           

         
        </div>
    );
};

export default LatestTrend;