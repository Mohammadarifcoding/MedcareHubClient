import React from 'react';
import Container from '../../Shared/Container/Container.tsx';
import { useParams } from 'react-router-dom';
import ShippingInfo from './ShippingInfo/ShippingInfo.tsx';
import Check from './Check/Check.tsx';
import ShippingProduct from './ShippingProducts/ShippingProducts.tsx';

const CheckoutPage = () => {
    const { amount } = useParams()

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
                    <Check priceData={amount}></Check>
                </div>
            </div>
        </Container>

    );
};

export default CheckoutPage;