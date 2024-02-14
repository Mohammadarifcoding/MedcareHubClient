import React from 'react';

const ShippingInfo = () => {

    
    const asianCountries = [
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
        "Bangladesh",
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

    return (
        <div className='w-full mt-10'>
            <div className='flex flex-col gap-2'>
                <label className='text-lg font-medium' htmlFor="name">Name</label>
                <input className='p-3 border-2 border-[#E1EEFF] focus:outline-none' type="text" name="name" id="" />
            </div>
            <div className='flex md:flex-nowrap flex-wrap w-full gap-3 mt-6'>
                <div className='flex flex-col gap-2 md:w-[33%] sm:w-[50%] w-full'>
                    <label className='text-lg font-medium' htmlFor="name">Phone Number</label>
                    <input className='p-3 border-2 border-[#E1EEFF] focus:outline-none' type="tel" name="name" id="" />
                </div>
                <div className='flex flex-col gap-2 md:w-[33%] sm:w-[50%] w-full'>
                    <label className='text-lg font-medium' htmlFor="name">Emergency Number</label>
                    <input className='p-3 border-2 border-[#E1EEFF] focus:outline-none' type="tel" name="name" id="" />
                </div>
                <div className='flex flex-col gap-2 md:w-[33%] w-full'>
                    <label className='text-lg font-medium' htmlFor="name">Email</label>
                    <input className='p-3 border-2 border-[#E1EEFF] focus:outline-none' type="email" name="name" id="" />
                </div>

            </div>
            <div className='flex flex-col  mt-6 gap-4'>
                <div className='flex flex-col gap-2   w-full'>
                    <label className='text-lg font-medium' htmlFor="name">Country</label>
                    <select className='p-[14px] border-2 text-lg border-[#E1EEFF] focus:outline-none' name="country" id="country">
                        {asianCountries.map((country, index) => (
                            <option key={index} value={country}>{country}</option>
                        ))}
                    </select>

                </div>
                <div className='flex flex-col gap-2  w-full '>
                    <label className='text-lg font-medium' htmlFor="name">City</label>
                    <input className='p-3 border-2 border-[#E1EEFF] focus:outline-none' type="tel" name="name" id="" />
                </div>
            </div>
            <div className='flex flex-col gap-2 mt-6'>
                <label className='text-lg font-medium' htmlFor="name">Address</label>
                <textarea className='p-3 border-2 min-h-[200px] border-[#E1EEFF] focus:outline-none' type="text" name="name" id="" />
            </div>
        </div>
    );
};

export default ShippingInfo;