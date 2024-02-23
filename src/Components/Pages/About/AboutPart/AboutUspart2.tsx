import React from 'react';

const AboutUspart2 = () => {
    return (
        <div className="flex md:flex-row pb-24 flex-col gap-10 justify-center items-center mx-auto pt-20">
        
        <div>
            <img className="w-[450px] h-[300px] rounded-lg " src="https://i.ibb.co/cQGpqFc/phc-infographic-1.jpg" alt="" />
        </div>
        <div className="md:w-[470px] md:ml-0  ">
            <h1 className="md:text-3xl py-2 text-[#0360D9] font-bold  ">Why We Uniqe <span className="text-[#021526]">From Others??</span></h1>
        <ul className="list-decimal ml-5">
            
        <p className=" text-[#2E2E2E] py-1 font-medium ">1.Cultural and Societal Values</p>
            <p className=" text-[#2E2E2E] py-1 font-medium">2.Healthcare Policies</p>
            <p className=" text-[#2E2E2E] py-1 font-medium ">3.Public and Private Sector Involvement</p>
            <p className=" text-[#2E2E2E] py-1 font-medium">4.Healthcare Financing</p>
            <p className=" text-[#2E2E2E] py-1 font-medium">5.Healthcare Infrastructure</p>
            <p className=" text-[#2E2E2E] py-1 font-medium">6.Emphasis on Specialized Care</p>
            <p className=" text-[#2E2E2E] py-1 font-medium">7.Innovation and Research</p>  
            </ul>       
        </div>
       
      </div>
    );
};

export default AboutUspart2;