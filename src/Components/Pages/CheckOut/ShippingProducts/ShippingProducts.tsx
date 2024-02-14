import React from 'react';
import UseCart from '../../../../Hook/UseCart.tsx';
import ShippingProduct from './ShippingProduct/ShippingProduct.tsx';

const ShippingProducts = () => {
    const [cart,refetchCart] = UseCart()
    return (
        <div className='bg-white p-4 rounded-xl text-black'>
           <h2 className='text-xl font-medium'>Your Selected Products</h2>   
            <div className='mt-5'>
               {
                cart?.map(item => (
                    <ShippingProduct item={item}></ShippingProduct>
                ))
               }
            </div>
        </div>
    );
};

export default ShippingProducts;