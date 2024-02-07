import React from 'react';

const AllReview = ({data}) => {

     const {name,email,description, ProductID,companyname}=data
     console.log(data);
    return (
        <>
        <div  className='flex flex-row items-center gap-2 py-4'>
        <img className='w-12  h-12 rounded-full' src="https://i.ibb.co/ZVzp4WD/Medical-health-logo-design-on-transparent-background-PNG.png" alt="" />
        <h1 className='md:text-2xl font-bold  '>{data?.name}</h1>
       </div>
        <div className='flex flex-row items-center pb-4 ml-2'>
          <img className='h-12 w-12' src="https://i.ibb.co/9t8zHn7/png-clipart-quotation-marks-in-english-computer-icons-comma-linkedin-blue-angle-removebg-preview.png" alt="" />
          <p className='text-sky-400 font-bold text-2xl'>{data?.description}</p>
          <img className='h-12 w-12' src="https://i.ibb.co/9t8zHn7/png-clipart-quotation-marks-in-english-computer-icons-comma-linkedin-blue-angle-removebg-preview.png" alt="" />
        </div>
        <div className='bg-black h-1 '>
      <span></span>
     </div>
     <div className='pt-4'></div>
        </>
    );
};

export default AllReview;