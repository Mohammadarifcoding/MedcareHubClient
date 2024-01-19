import React from 'react';

import TabsCollection from './TabsCollection/TabsCollection.tsx';

const Collection: React.FC = () => {
    return (
        <div className='sm:py-20 sm:mt-[160px]  mt-20 xl:px-0 lg:px-[20px] px-[10px]'>
            {/* Colletion title */}
            <div>
                <h2 className='lg:text-start text-center md:text-[47px] text-[28px] leading-[50px] font-bold'>Stylish Collection of <span className='relative'>
                    Furniture{' '}
                    <img
                        className="lg:max-w-[220px] lg:left-16  lg:-top-[60px] -top-[40px]  left-20 absolute md:max-w-[200px] max-w-[100px] "
                        src="/Asset/Collection/textImage.svg"
                        alt=""
                    />{' '}
                </span>  </h2>
                <p className='lg:mt-[20px] lg:ml-0 lg:mr-auto mx-auto md:text-[22px] sm:text-xl text-base lg:text-[22px]  max-w-[700px] text-[Gray] mt-[10px] text-center lg:text-start'>Stay updated with our information and engaging blog posts about modern Furniture and Fashion on the industry</p>
            </div>
            <div className='mt-10'>
                <TabsCollection></TabsCollection>
            </div>
        </div>
    );
};

export default Collection;