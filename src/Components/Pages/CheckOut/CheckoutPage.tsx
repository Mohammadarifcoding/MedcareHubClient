import React, { useEffect, useState } from 'react';
import Container from '../../Shared/Container/Container.tsx';
import ShippingInfo from './ShippingInfo/ShippingInfo.tsx';
import Check from './Check/Check.tsx';
import ShippingProduct from './ShippingProducts/ShippingProducts.tsx';
import UseCart from '../../../Hook/UseCart.tsx';

const CheckoutPage = () => {
    const [cart,refectchCart] = UseCart()
    const [AllPrice,setAllPrice] =  useState(0)

    useEffect(()=>{
        let price = 0
        for(let item of cart){
          price += (item.medicine.Price * item.quantity )
        }

        const priceTotal = price.toFixed(3)
        setAllPrice(priceTotal)
      },[cart])

    return (
        <Container>
            <div className='flex my-20 lg:flex-row flex-col w-full  gap-10'>
                <div className='flex flex-col lg:w-[75%] w-full'>
                    <h1 className='lg:text-3xl sm:text-2xl text-xl font-medium'>Shipping Information</h1>

                    <div className='w-full'>
                        <ShippingInfo></ShippingInfo>
                    </div>
                </div>
                <div className='lg:w-[50%] w-full mt-16 flex flex-col gap-5'>
                    <ShippingProduct></ShippingProduct>
                    <Check priceData={AllPrice}></Check>
                </div>
            </div>
        </Container>

    );
};

export default CheckoutPage;