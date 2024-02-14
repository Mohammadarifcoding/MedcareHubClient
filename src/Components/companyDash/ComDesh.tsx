import React from 'react';

const ComDesh = () => {
    return (
        <div>

         <div className=' h-[300px] bg-base-100 rounded-md '>
         
            <h1 className='text-xl font-bold pt-6 '>Todays Sales</h1>
            <p className='font-medium text-sm pb-3'>Sales Summary</p>
            <div className='flex md:flex-row gap-5'>
            <div className='bg-red-200 w-[150px] h-[150px] rounded-lg '>
              <div className='flex ml-4 pt-4'>
              <img className='h-10 w-10 ' src="https://i.ibb.co/TwfZsPD/c4a24c4b1d9e9bdfab5b64ff896e4229-removebg-preview.png" alt="" />
              </div>
              <div className='ml-4 pt-4'>   
                <p className='font-bold text-xl'>$<span>1K</span></p>
                <p className='font-medium text-sm '>Total Sales</p>
              </div>
            </div>
            <div className='bg-orange-200 w-[150px] h-[150px] rounded-lg '>
              <div className='flex ml-4 pt-4'>
              <img className='h-10 w-10 ' src="https://i.ibb.co/hfvjKp6/6818000-removebg-preview.png" alt="" />
              </div>
              <div className='ml-4 pt-4'>   
                <p className='font-bold text-xl'>300</p>
                <p className='font-medium text-sm '>Total Order</p>
              </div>
            </div>
            <div className='bg-green-200 w-[150px] h-[150px] rounded-lg '>
              <div className='flex ml-4 pt-4'>
              <img className='h-10 w-10 ' src="https://i.ibb.co/C81vT6W/186-1864573-sales-and-marketing-icon-png-sales-removebg-preview.png" alt="" />
              </div>
              <div className='ml-4 pt-4'>   
                <p className='font-bold text-xl'>5</p>
                <p className='font-medium text-sm '>Total Sales</p>
              </div>
            </div>
            <div className='bg-purple-200 w-[150px] h-[150px] rounded-lg '>
              <div className='flex ml-4 pt-4'>
              <img className='h-10 w-10 ' src="https://i.ibb.co/McPgLfC/38620944-help-support-service-icon-vector-image-can-also-be-used-for-ecommerce-shopping-business-sui.png" alt="" />
              </div>
              <div className='ml-4 pt-4'>   
                <p className='font-bold text-xl'>8</p>
                <p className='font-medium text-sm '>New Customer</p>
              </div>
            </div>
            </div> 
         </div>


            
        </div>
    );
};

export default ComDesh;