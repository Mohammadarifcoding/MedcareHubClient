import React, { FC } from 'react';
import { tabProduct } from '../../../../../Model/Model';

interface ProductsProps {
    data: tabProduct;
}
const ProductItem:FC<ProductsProps> = ({data}) => {
    return (
        <div className='lg:w-[310px] md:w-[270px] w-[240px] h-[300px]'>
            <div className='lg:w-[310px] bg-gray-400 lg:h-[200px] md:h-[180px] h-[160px] rounded-3xl md:w-[270px] w-[240px]'>
                <img className='w-full h-full bg-gray-400 rounded-3xl' src={data?.Product_Image} alt="" />
            </div>
            <div className='mt-3'>
                    <h2 className='text-[#78798E] ml-1 font-bold md:text-xl sm:text-lg '>{data?.Product_name}</h2>
            </div>
            <div className='mt-2 flex gap-1'>
                    {[...Array(data?.rating)].map((_,index)=>(
                        <img
                        key={index}
                        src='/Asset/star.png'
                        alt={`Rating ${index + 1}`}
                        className="w-4 h-4 inline-block"
                      />
                    ))}
            </div>
            <div className='mt-5 flex justify-between items-center'>
                <h2 className='lg:text-xl sm:text-lg text-base font-bold'>${data?.price}</h2>
                <button className='bg-[#D4DCFB] p-2 rounded-full font-bold md:text-base sm:text-sm text-[12px] '>Add to</button>
            </div>
        </div>
    );
};

export default ProductItem;