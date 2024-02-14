import React from 'react';

const ShippingProduct = ({ item }) => {
    const { Medname, Image, Price, Category, Company, _id } = item.medicine
    return (
        <div key={item._id} className='flex justify-between items-center'>
            <div className='flex gap-1 items-end'>
                <div className='w-[50px]'>
                    <img className='w-full' src={Image} alt="" />
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-[15px] font-medium'> {Medname}</h2>
                    <h2 className='text-[12px]'> {Company}</h2>

                </div>
            </div>
            
            <div className='sm:text-lg text-base '>
                 {item?.quantity } x {Price}
            </div>

        </div>
    );
};

export default ShippingProduct;