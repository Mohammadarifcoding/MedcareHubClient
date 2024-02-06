import React from 'react';
import Container from '../../Shared/Container/Container.tsx';

import CartProducts from './CartProduct/CartProducts.tsx';
import Checkout from './Checkout/Checkout.tsx';
import UseCart from '../../../Hook/UseCart.tsx';

const Cart = () => {
    
    const [cartProduct,refetchCart] = UseCart()
  

    return (
        <Container>
            <div className='flex my-20 lg:flex-row flex-col w-full  gap-10'>
                <div className='flex flex-col lg:w-[75%] w-full'>
                    <h1 className='lg:text-3xl sm:text-2xl text-xl font-medium'>Your Medicine Cart</h1>

                    <div className='w-full'>
                        <CartProducts Products={cartProduct}></CartProducts>
                    </div>
                </div>
                <div className='lg:w-[25%] w-full mt-16'>
                    <Checkout></Checkout>
                </div>
            </div>
        </Container>

    );
};

export default Cart;