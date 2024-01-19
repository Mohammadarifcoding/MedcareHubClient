import React from 'react';

const DoctorSpecialist = () => {
    return (
        <div className='mt-20 lg:flex justify-center items-center gap-10'>
            <div className='lg:flex flex-row-reverse gap-7'>
                <div>
                    <img className='h-[500px]' src='/Asset/DoctorSpecialist/medicine-article.webp' alt="" />
                    <img className='w-[500px] mt-4' src='/Asset/DoctorSpecialist/h1-image1.jpg' alt="" />
                </div>
                <div>
                    <img className='w-[350px]' src='/Asset/DoctorSpecialist/h1-image2.jpg' alt="" />
                    <img  className='h-[520px] mt-4' src='/Asset/DoctorSpecialist/h1-image4.jpg' alt="" />
                </div>
            </div>
            <div className='px-5 mt-6'>
                <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold text-[#0360D9]'>Doctor Specialist</h1>
                <p className='my-5 md:text-base sm:text-sm text-sm'>“One of the most important factors about people’s lives is the <br /> information of, the use of, and the growing knowledge of <br /> medicine. Medicine is a form of art. It depends on how skillfully <br /> doctors apply their knowledge when dealing with patients.”</p>
                <h1 className='md:text-3xl sm:text-2xl text-xl font-semibold mt-5 text-[#0360D9]'>Ataturk Changes</h1>
                <p className='md:text-2xl sm:text-xl text-lg'>Psychartist</p>
            </div>
        </div>
    );
};

export default DoctorSpecialist;