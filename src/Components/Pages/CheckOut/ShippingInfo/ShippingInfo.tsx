import React, { useState } from 'react';
import UseCart from '../../../../Hook/UseCart.tsx';
import { uuidv4 } from '@firebase/util';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
import Swal from 'sweetalert2';
import UseAuth from '../../../../Hook/UseAuth.tsx';

const ShippingInfo = ({ address, setAddress, submit }) => {

    const { user } = UseAuth()
    // const [cart, refectchCart] = UseCart()
    // const Axious = UseAxiosPublic()
    // const SubmitShippingInfor = (e) => {
    //     const time = new Date()
    //     e.preventDefault()
    //     const order = {
    //         ...address, time, Products: cart, ID: uuidv4()
    //     }
    //     console.log(order)
    //     Axious.post('/order', order)
    //         .then(res => {
    //             console.log(res.data)
    //             refectchCart()
    //             Swal.fire({
    //                 icon: "success",
    //                 title: "Your order is done",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });

    //             setProcess(true)
    //             setAddress({
    //                 name: '',
    //                 mobile: '',
    //                 Emergency_Mobile: '',
    //                 Email: '',
    //                 Country: 'Bangladesh',
    //                 City: '',
    //                 Address: ''
    //             })
    //         })
    // }
    const asianCountries = [
        "Bangladesh",
        "China",
        "India",
        "Japan",
        "South Korea",
        "Indonesia",
        "Philippines",
        "Vietnam",
        "Thailand",
        "Myanmar (Burma)",
        "Malaysia",
        "Pakistan",
        "Nepal",
        "Sri Lanka",
        "Singapore",
        "Cambodia",
        "Mongolia",
        "Laos",
        "Brunei",
        "Maldives"
    ];



    console.log(address)
    return (
        <form onSubmit={submit} className='w-full mt-10'>
            <div className='flex flex-col gap-2'>
                <label className='text-lg font-medium' htmlFor="name">Name</label>
                <input value={address.name} required onChange={(e) => { setAddress({ ...address, name: e.target.value }) }} className='p-3 border-2 border-[#E1EEFF] focus:outline-none rounded-md' type="text" name="name" id="" />
            </div>
            <div className='flex md:flex-nowrap flex-wrap w-full gap-3 mt-6'>
                <div className='flex flex-col gap-2 md:w-[33%] sm:w-[50%] w-full'>
                    <label className='text-lg font-medium' htmlFor="name">Phone Number</label>
                    <input value={address.mobile} required onChange={(e) => { setAddress({ ...address, mobile: e.target.value }) }} className='p-3 border-2 border-[#E1EEFF] focus:outline-none rounded-md' type="tel" name="name" id="" />
                </div>
                <div className='flex flex-col gap-2 md:w-[33%] sm:w-[50%] w-full'>
                    <label className='text-lg font-medium' htmlFor="name">Emergency Number</label>
                    <input value={address.Emergency_Mobile} required onChange={(e) => { setAddress({ ...address, Emergency_Mobile: e.target.value }) }} className='p-3 border-2 border-[#E1EEFF] focus:outline-none rounded-md' type="tel" name="name" id="" />
                </div>
                <div className='flex flex-col gap-2 md:w-[33%] w-full'>
                    <label className='text-lg font-medium' htmlFor="name">Email</label>
                    <input value={user?.email} required onChange={(e) => { setAddress({ ...address, Email: e.target.value }) }} className='p-3 border-2 border-[#E1EEFF] focus:outline-none rounded-md' type="email" name="name" id="" />
                </div>

            </div>
            <div className='flex flex-col  mt-6 gap-4'>
                <div className='flex flex-col gap-2   w-full'>
                    <label className='text-lg font-medium' htmlFor="name">Country</label>
                    <select value={address.Country} onChange={(e) => { setAddress({ ...address, Country: e.target.value }) }} className='p-[14px] border-2 text-lg border-[#E1EEFF] focus:outline-none rounded-md' name="country" id="country">
                        {asianCountries.map((country, index) => (
                            <option key={index} value={country}>{country}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col gap-2  w-full '>
                    <label className='text-lg font-medium' htmlFor="name">City</label>
                    <input value={address.City} required onChange={(e) => { setAddress({ ...address, City: e.target.value }) }} className='p-3 border-2 border-[#E1EEFF] focus:outline-none rounded-md' type="tel" name="name" id="" />
                </div>
            </div>
            <div className='flex flex-col gap-2 mt-6'>
                <label className='text-lg font-medium' htmlFor="name">Address</label>
                <textarea value={address.Address} required onChange={(e) => { setAddress({ ...address, Address: e.target.value }) }} className='p-3 border-2 min-h-[200px] border-[#E1EEFF] focus:outline-none rounded-md' type="text" name="name" id="" />
            </div>
            <div className='flex justify-end mt-6 '>
                <button onClick={() => submit()} type='submit' className='bg-blue-700 text-white px-3  py-2 rounded-md duration-150 scale-100 hover:scale-110 ease-in-out'>Confirm Order</button>
            </div>
        </form>
    );
};

export default ShippingInfo;