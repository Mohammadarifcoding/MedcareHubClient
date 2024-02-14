import React from 'react';
import Chartcard from './Chartcard.tsx';
import Newvisitor from './Newvisitor.tsx';
import Salesproduct from './Salesproduct.tsx';
import TopProduct from './TopProduct.tsx';

const ComDesh = () => {
    return (
        <div>

      <div className='flex md:flex-row flex-col  items-center gap-4'>


      <div className=' md:h-[270px] bg-base-100 rounded-md   md:w-[830px]'>
         
         <h1 className='md:text-4xl font-bold pt-6 md:pl-9'>Todays Sales</h1>
         <p className='font-medium text-sm pb-3 md:pl-10'>Sales Summary</p>
         <div className='flex md:flex-row flex-col gap-6 md:pb-0 '>
         <div className='bg-red-200 w-[170px] h-[150px] rounded-lg md:ml-9 '>
           <div className='flex ml-4 pt-4'>
           <img className='md:h-10 md:w-10 h-4 w-4 ' src="https://i.ibb.co/TwfZsPD/c4a24c4b1d9e9bdfab5b64ff896e4229-removebg-preview.png" alt="" />
           </div>
           <div className='md:ml-4 md:p-1 p-3 pt-4'>   
             <p className='font-bold md:text-xl'>$<span>1K</span></p>
             <p className='font-medium text-sm '>Total Sales</p>
           </div>
         </div>
         <div className='bg-orange-200  w-[170px] h-[150px] rounded-lg '>
           <div className='flex ml-4 pt-4'>
           <img className='md:h-10 md:w-10 h-4 w-4' src="https://i.ibb.co/hfvjKp6/6818000-removebg-preview.png" alt="" />
           </div>
           <div className='md:ml-4 md:p-1 p-3  pt-4'>   
             <p className='font-bold text-xl'>300</p>
             <p className='font-medium text-sm '>Total Order</p>
           </div>
         </div>
         <div className='bg-green-200  w-[170px] h-[150px] rounded-lg '>
           <div className='flex ml-4 pt-4'>
           <img className='md:h-10 md:w-10 h-4 w-4 ' src="https://i.ibb.co/C81vT6W/186-1864573-sales-and-marketing-icon-png-sales-removebg-preview.png" alt="" />
           </div>
           <div className='md:ml-4 md:p-1 p-3 pt-4'>   
             <p className='font-bold md:text-xl'>5</p>
             <p className='font-medium text-sm '>Total Sales</p>
           </div>
         </div>
         <div className='bg-purple-200  w-[170px] h-[150px] rounded-lg '>
           <div className='flex ml-4 pt-4'>
           <img className='md:h-10 md:w-10 h-4 w-4 ' src="https://i.ibb.co/McPgLfC/38620944-help-support-service-icon-vector-image-can-also-be-used-for-ecommerce-shopping-business-sui.png" alt="" />
           </div>
           <div className='md:ml-4 md:p-1 p-3 pt-4'>   
             <p className='font-bold text-xl'>8</p>
             <p className='font-medium text-sm '>New Customer</p>
           </div>
         </div>
         <div className='bg-base-100 w-4'>
          <span></span>
         </div>
         </div> 
      </div>

      {/* visitors */}

      <div className='md:w-[700px] md:mt-0 mt-[30px]  w-full sm:w-[300px] h-[270px] bg-base-100  rounded-md'>
      <h1 className='md:text-3xl pl-5 font-bold pt-4 '>Visitors</h1>
       <div>
         
         <Newvisitor></Newvisitor>
       </div>
      </div>
      </div>

         {/* chart */}

         <div className='flex md:flex-row flex-col gap-4'>

         <div className='bg-white mt-2  md:w-[800px] w-full sm:w-[200px] h-[300px]'>
          <h1 className='text-3xl pl-5 font-bold pt-2 '>Top Product</h1>
          <TopProduct />
          </div>
      

         {/* sales */}
       <div className=' h-[300px] md:w-[700px] bg-base-100 mt-2'>
       <h1 className='text-3xl pl-5 font-bold pt-4 pb-4'>Sales </h1>
    <div>

      <Salesproduct></Salesproduct>
    </div>

       </div>
         </div>
    
         {/* top product */}

         <div className=' h-[350px] bg-base-100 mt-2'>
          <h1 className='md:text-3xl pl-5 font-bold pt-4 '>Customer Satisfection</h1>
          <div className='pt-8'>
          <Chartcard></Chartcard>
          </div>
         </div>
            
        </div>
    );
};

export default ComDesh;