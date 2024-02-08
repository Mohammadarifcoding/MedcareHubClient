import React from 'react';

const Testing = () => {
    return (
        <div>
            {/* ban */}
         <div className='flex md:flex-row flex-col justify-center  py-24 '>
           
           <div className='w-[550px] h-[450px] justify-center items-center flex mx-auto bg-slate-300' >
             
             <img className='w-[390px] h-[300px]' src="https://i.ibb.co/pb83yd7/istockphoto-1419913245-612x612.jpg" alt="" />
            
           </div>
            <div className='w-[700px] mr-24'>
            



            <h1 className='font-bold text-3xl py-3 pb-4'>LG C2 42 (106cm) 4K Smart OLED evo TV </h1>
             
           <div className='flex md:flex-row flex-col items-center gap-24 pb-8' >

           <div className='flex md:flex-row flex-col items-center gap-3'>
                <img className='h-10 w-10' src="https://i.ibb.co/2kc8fWc/medical-health-logo-design-for-business-and-company-vector-removebg-preview.png" alt="" />
                <h1 className='text-xl font-medium'><a className='underline' href='hhh'>Company</a></h1>
             </div>
             <div className='flex md:flex-row flex-col items-center gap-3'>
                <img className='h-10 w-10' src="https://i.ibb.co/SxtGWHL/office-bag-4-removebg-preview.png" alt="" />
                <h1 className='text-xl font-medium'>Category</h1>
             </div>

           </div>

           <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore explicabo repudiandae pariatur impedit dolor. Aspernatur nisi odio quod, cupiditate obcaecati temporibus impedit expedita, voluptas assumenda deleniti ad saepe, numquam laudantium.</p>
             
           <div className='flex md:flex-row flex-col items-center py-4 gap-2'>
                <img className='h-12 w-12' src="https://i.ibb.co/18DK7pV/360-F-304050419-e-Lb94-V8-Wbstz-C480-ZBb-W0-A85-Ql-Tk-Fv-Pk-removebg-preview.png" alt="" />
                <h1 className='text-xl font-medium'>$<span>Price</span></h1>
             </div>

             <div className='flex md:flex-row gap-4'>
                <button className='btn bg-blue-600 text-white w-[150px] h-[30px]'>Add To Cart</button>
                <button className='btn bg-blue-200  border-x-4 text-black border-blue-500   w-[150px] h-[30px]'>Add To Cart</button>
             </div>
            </div>
         </div>


        </div>
    );
};

export default Testing;