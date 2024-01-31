import React from 'react';
import Container from '../../../Shared/Container/Container.tsx';

const SpecialistCard = () => {
    const Specialist =[
        {
            title:"Pet Medicine",
            details:"Veterinary medicine is the branch of medicine that deals with the prevention and treatment of disease and injury in non-human animals.",
            image:'/Asset/Specialist/image1.svg'
        },
        {
            title:"International Medicine",
             details:"Internal medicine is the medical specialty that focuses on the care of adult patients, and internal medicine physicians are specialists.",
            image:'/Asset/Specialist/image.svg'
        },
        {
            title:"Suppliment",
            details:"Dietary supplements come in a variety of forms, including tablets, capsules, gummies, and powders as well as drinks and energy bars.",
            image: '/Asset/Specialist/image2.svg'
        },
        {
            title:"Mental Health",
            details:"Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act.",
            image:'/Asset/Specialist/image3.svg'
        },
    ]
    return (
        <Container>
        <div className='max-w-[1550px]'>
            <h1 className="lg:text-5xl text-center text-3xl font-bold lg:my-20 my-10 px-5">
                Our Consulting Specialists
            </h1>
            <div className="lg:flex lg:space-y-0 space-y-5 mx-5 justify-center gap-10">

                {
                    Specialist?.map((data) => (
                        <div key={data.title}>
                            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  lg:h-[270px] ">
                                <img className="bg-[#E6F5FC] p-2 rounded-full" src={data.image} alt="" />
                                <a href="#">
                                    <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{data.details}</p>

                            </div> </div>

                    ))
                }



            </div>
        </div>    
        </Container>
        

    );
};

export default SpecialistCard;