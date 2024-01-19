import React from 'react';

const ShortAboutUs = () => {
    return (
        <div>
        <section>
            <div className="bg-[#A5CCFF] mt-10">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-white">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl text-[#0360D9]">About Us</h1>
                    <p className="mt-6 mb-8  sm:mb-12 xl:max-w-3xl text-black md:text-lg sm:text-base text-sm">Welcome to MedCareHub, where health and well-being converge with cutting-edge medical solutions.We are dedicated to revolutionizing healthcare by providing access to innovative and reliable medical information and products.</p>
                    <div className="flex flex-wrap justify-center">
                        <button type="button" className="px-8 py-3 m-2 text-lg font-semibold border rounded hover:bg-[#0360D9] text-[#0360D9] hover:text-white ">Learn more</button>
                    </div>
                </div>
            </div>
            <img src='/Asset/shortAboutUs.webp' alt="" className="lg:w-[900px] mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 " />
        </section>
    </div>
    );
};

export default ShortAboutUs;