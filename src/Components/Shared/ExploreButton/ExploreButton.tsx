import React, { FC } from 'react';

interface proptypes {
    text : string
}

const ExploreButton:FC<proptypes> = ({text}) => {
    return (
        <div className='flex  rounded-none lg:justify-start justify-center lg:mt-20 mt-[30px]'>
        <button className='btn bg-black border-2 border-black hover:bg-[#1b1b1b] text-white'>{text}</button>
    </div>
    );
};

export default ExploreButton;