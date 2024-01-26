import React from 'react';

const AboutPart1 = () => {
    return (
        <div className="flex md:flex-row  flex-col gap-10 justify-center items-center">
            <div className="w-[470px]">
                <h1 className="md:text-4xl py-2 text-[#0360D9] font-bold">Get Better <span className="text-[#021526]"                >Health Care</span></h1>
                <p className="font-medium text-[#2E2E2E] py-3 ">Welcome to Our Health Organization, where we are dedicated to advancing the well-being of individuals and communities through a commitment to excellence in healthcare and public health initiatives. Established with a passion for promoting a healthier world, our organization stands at the forefront of innovative and compassionate healthcare solutions.</p>
                <button className="bg-[#E1EEFF]  rounded-full w-[120px] text-[#0360D9] btn  font-bold  "> Visit Us</button>
            </div>
            <div>
                <img className="md:w-[450px] md:h-[300px] rounded-lg " src="https://i.ibb.co/DWVtB2H/Doctors.jpg" alt="" />
            </div>
          </div>
    );
};

export default AboutPart1;