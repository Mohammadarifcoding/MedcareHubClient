import React from 'react';
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
const CartProduct = () => {
    return (
        <li className="flex justify-between items-start py-4">
            <div className="flex space-x-4">
                <img alt="T-shirt" className="w-16 h-16 bg-gray-200 rounded" height={64} src="/placeholder.svg" width={64} style={{ aspectRatio: '64 / 64', objectFit: 'cover' }} />
                <div>
                    <h3 className="font-semibold">T-shirts with multiple colors, for men and lady</h3>
                    <p className="text-sm text-gray-600">Size: medium, Color: blue, Material: Plastic</p>
                    <p className="text-sm text-gray-600">Seller: Artel Market</p>
                    <div className="flex space-x-2 mt-3">
                        <button className=" px-4 py-2 bg-red-600 hover:scale-110 scale-100 rounded transition-all duration-200  text-white text-sm">
                            Remove
                        </button>

                    </div>
                </div>
            </div>
            <div className='flex gap-2 items-center text-xl '>
                <div className='px-2 bg-red-500 text-white cursor-pointer  rounded-full py-2 text-[12px]'>
                    <FiMinus className=''></FiMinus>

                </div>
                5
                <div className='px-2 bg-[#0360D9] cursor-pointer text-white  rounded-full py-2 text-[12px]'>
                    <IoMdAdd className=''></IoMdAdd>
                </div>

            </div>
            <div className="text-right">
                <p className="text-lg font-semibold">$170.50</p>

            </div>
        </li>
    );
};

export default CartProduct;