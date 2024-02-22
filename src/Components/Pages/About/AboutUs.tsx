import React from 'react';
import Container from '../../Shared/Container/Container.tsx';
import { useNavigate } from 'react-router-dom';
import AboutUsPart1 from './AboutPart/AboutUsPart1.tsx';
import AboutUspart2 from './AboutPart/AboutUspart2.tsx';
import AboutUsDoc from './AboutDoc/AboutUsDoc.jsx';
import AboutUsServiece from './AboutService/AboutUsServiece.tsx';


const AboutUs = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/blogs');
    };
    return (
        <Container>
            <div className="mt-20">
                <AboutUsPart1></AboutUsPart1>

                <div className="flex md:flex-row flex-col justify-center gap-10 py-24 mx-auto items-center">
                    <div className="bg-[#E1EEFF] text-[#0360D9] w-full md:w-[350px] h-[220px] text-center items-center justify-center rounded-lg  ">
                        <h1 className="md:text-xl font-bold pt-6 pb-2 ">Health Care Organization</h1>
                        <p className="text-sm text-[#2E2E2E] font-medium pb-2 px-4">
                            A healthcare organization is a complex system that delivers medical services, including hospitals, clinics, and primary care facilities.
                        </p>
                        <div className="py-2">
                            <button onClick={handleClick} className="text-white  rounded-full w-[120px] bg-[#0360D9] btn  font-bold  ">
                                Lets Explore
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#E1EEFF] w-full md:w-[350px] h-[220px] text-center items-center justify-center   rounded-lg">
                        <h1 className="text-2xl font-bold  text-[#0360D9] py-3 pt-16 ">Emergency Call</h1>
                        <div className="flex flex-row justify-center items-center ">
                            <p className="text-sm font-medium pb-2 text-[#021526]">+8801834345678</p>
                            <img className="h-8" src="https://i.ibb.co/sPM1cy7/pngtree-phone-icon-in-solid-circle-png-image-2380227-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="md:text-4xl font-bold text-center text-[#0360D9] pb-6">
                        Best Doctors Available <span className="text-[#021526]">In Our Health Care</span>
                    </h1>
                    <p className=" text-sm md:px-36 text-center font-medium pb-12   text-[#2E2E2E]">
                        Our doctors, whether general practitioners or specialists, are highly trained medical professionals dedicated to providing patient-centered care. They undergo extensive
                        education and training, staying updated on the latest medical advancements. Beyond diagnosing and treating illnesses, doctors emphasize preventive care to promote overall
                        health. They work collaboratively with patients, employing empathy and communication skills to ensure a holistic approach to healthcare.{' '}
                    </p>
                    <AboutUsDoc></AboutUsDoc>
                </div>
                {/* rel */}
                <AboutUsServiece></AboutUsServiece>
                 <AboutUspart2></AboutUspart2>
            </div>
        </Container>
    );
};

export default AboutUs;