import React, { useState } from 'react';
import Container from '../../../Shared/Container/Container.tsx';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'flowbite';
import RegiModal from './RegiModal.tsx';

const Banner = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    };

    return (
        <div className="mb-[110px] bg-[#E1EEFF]">
            <Container>
                <div className="lg:flex justify-around relative items-center ">
                    <div className="px-1 md:px-5 lg:px-0">
                        <h1 className="lg:text-6xl mb-3 text-3xl font-bold">
                            Find & Search Your <br />
                            <span className="text-[#0360D9]">Constituent</span> Medicine
                        </h1>
                        <p className="mb-5">
                            {' '}
                            MedCareHub is one of the largest medical store that provides medicines on prescription & <br /> OTC. Order medicine online & get fastest delivery in your city.
                        </p>
                        <div className="flex gap-1 md:gap-6">
                            <button onClick={handleClick} className="btn bg-[#0360D9] hover:bg-[#0360D9] text-white">
                                Contact Us
                            </button>

                            <RegiModal></RegiModal>
                        </div>
                    </div>

                    <div>
                        <img className=" w-[798px]  h-auto" src="/Asset/Banner/banner.png" alt="" />
                    </div>
                </div>
            </Container>
            <div className="bg-[#0360D9]">
                <Container>
                    <div className=" z-10 -bottom-[110px] py-4  lg:px-[120px] flex  justify-start px-3  gap-10  text-white w-full">
                        <div>
                            <h1 className="lg:text-6xl text-xl font-bold">24/7 </h1>
                            <p>Online Support</p>
                        </div>
                        <div>
                            <h1 className="lg:text-6xl text-xl font-bold">100+ </h1>
                            <p>Doctors</p>
                        </div>

                        <div>
                            <h1 className="lg:text-6xl text-xl font-bold">1M+</h1>
                            <p>Active Patients</p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Banner;
