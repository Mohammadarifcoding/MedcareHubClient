import React from 'react';
import CartProduct from './CartProduct/CartProduct.tsx';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
import UseAuth from '../../../../Hook/UseAuth.tsx';
import UseCart from '../../../../Hook/UseCart.tsx';

const CartProducts = ({ Products }) => {
  const Axious = UseAxiosPublic()
  const {user} = UseAuth()
  const [cartData,refetchCart] = UseCart()
  const DeleteFullCart = ()=>{
      Axious.delete(`/deleteFullCart/${user?.email}`)
      .then(res => {
        refetchCart()
      })
  }


  return (
    <div className="bg-white p-6 rounded-lg mt-5 shadow-md max-w-full mx-auto" id="4322kqlzlj">
      <h2 className="text-lg font-semibold border-b pb-2">My cart ({Products?.length})</h2>
      <ul className="divide-y divide-gray-200">
        {
          Products?.map(item => <CartProduct Product={item}></CartProduct>)
        }
      </ul>
      <div className="flex justify-between items-center mt-4">
        <button className="justify-center whitespace-nowrap bg-[#0360D9] hover:bg-[#365885] text-white rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:text-accent-foreground h-10 px-4 py-2 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          <span>Back to shop</span>
        </button>
        <button onClick={DeleteFullCart} className=" h-10 px-4 py-2 bg-red-600 hover:scale-110 scale-100 rounded transition-all duration-200  text-white ">
          Remove all
        </button>
      </div>
    </div>

  );
};

export default CartProducts;