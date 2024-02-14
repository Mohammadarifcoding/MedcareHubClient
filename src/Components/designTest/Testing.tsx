import React from 'react';

const Testing = () => {
    return (
        <div>
            {/* ban */}
         <div className='flex md:flex-row flex-col justify-center  py-24 '>
           
           <div className='w-[550px] h-[450px] justify-center items-center flex mx-auto border-x-2 border-blue-950 bg-slate-300' >
             
             <img className='w-[390px] h-[300px]' src="https://i.ibb.co/pb83yd7/istockphoto-1419913245-612x612.jpg" alt="" />
            
           </div>
            <div className='w-[700px] mr-24'>
            



            <h1 className='font-bold text-3xl py-7 pb-4' >LG C2 42 (106cm) 4K Smart OLED evo TV </h1>
             
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
                <button className='btn bg-blue-600 text-white w-[150px] h-[30px]'><div className='flex flex-row justify-center items-center gap-1'>
                    <img className='h-7' src="https://i.ibb.co/12cZS5V/1972381-removebg-preview.png" alt="" />
                    <h1 >Add To Cart</h1></div></button>
                <button className='btn bg-blue-200  border-x-4 text-black border-blue-500   w-[180px] h-[30px]'><div className='flex flex-row justify-center items-center gap-2'>
                    <img className='h-7' src="https://i.ibb.co/vVmLxkr/add-to-favorites-icon-vector-22798686-removebg-preview.png" alt="" /> <h1>Add To Favorite</h1></div></button>
             </div>
             <div className='py-6 flex flex-row items-center gap-6 '>
             <div >
                <button className='btn bg-blue-500 text-white border-x-5 border-black'  ><div className='flex flex-row justify-center items-center gap-1' >
                  <img className='h-8' src="https://i.ibb.co/qjLjp8G/73962736-customer-reviews-rating-user-feedback-concept-vector-icon-flat-illustration-on-orange-backg.png" alt="" />
                  <h1>See Product Reviews</h1></div></button>
             </div>
             <div>
              <img className='h-12 w-12' src="https://i.ibb.co/G7jgThR/images-8-removebg-preview.png" alt="" />
             </div>
             </div>
            </div>
         </div>

         {/* review */}

         <div className='px-24'>
           <div className='flex flex-row items-center py-4 gap-2'>
           <h1 className='md:text-3xl font-bold  text-blue-600'>Users Feedback</h1> 
           <img className='h-10' src="https://i.ibb.co/ynSfLjH/images-4-removebg-preview.png" alt="" />
           </div>
           <div className='bg-blue-600 h-1 '>
            <span></span>
           </div>
           <div className='pt-4'></div>

           {/* reviewwwwww */}

           <div>
            
           <div  className='flex flex-row items-center gap-2 py-4'>
        <img className='w-12  h-12 rounded-full' src="https://i.ibb.co/ZVzp4WD/Medical-health-logo-design-on-transparent-background-PNG.png" alt="" />
        <h1 className='md:text-2xl font-bold  '>Umme Homa</h1>
       </div>
        <div className='flex flex-row gap-1 items-center pb-4 ml-2'>
          <img className='h-10 w-10' src="https://i.ibb.co/9t8zHn7/png-clipart-quotation-marks-in-english-computer-icons-comma-linkedin-blue-angle-removebg-preview.png" alt="" />
          <p className='text-black font-bold text-xl'>jjjjj</p>
          <img className='h-10 w-10' src="https://i.ibb.co/9t8zHn7/png-clipart-quotation-marks-in-english-computer-icons-comma-linkedin-blue-angle-removebg-preview.png" alt="" />
        </div>
        <div className='bg-black h-1 '>
      <span></span>
     </div>
     <div className='pt-4'></div>

           </div>

           {/* give review */}
         <form >

         <div className='pb-24'>
           <div className='flex flex-row items-center py-4 gap-2'>
           <h1 className='md:text-3xl font-bold  text-blue-600'>Reviews</h1> 
           <img className='h-10' src="https://i.ibb.co/ZBLwWth/download-removebg-preview.png" alt="" />
           </div>
           <div className='py-3'>
          <input type='text' name='name' value="Umme homaira" placeholder='Customer Name' className=' pl-5 md:w-[400px] h-[50px] border-blue-600  text-black font-bold border-x-2 border-y-2 rounded-md'></input>
          </div>
          <div className='py-3'>
          <input type='email' name='email' value="x@gmail.cpm" placeholder='Customer Email' className=' pl-5 md:w-[400px] h-[50px] border-blue-600  text-black font-bold border-x-2 border-y-2 rounded-md'></input>
          </div>
           <div className='pb-3'>

           <input type='textarea' name='description' placeholder='Put your Review' className=' pl-5 md:w-[600px] h-[150px] border-blue-600  text-black border-x-2 border-y-2 rounded-md  font-bold'></input>
           </div>
             
             <button type='submit' className='btn bg-blue-600 text-white'>Give REVIEW</button>
           
           </div>
         </form>

        </div>
    



         {/* Related Product */}
    <div>
        <h1 className='text-3xl text-center font-bold pb-12'>Related Services</h1>

    <div className='flex md:flex-row flex-col justify-center gap-12 pb-24'>
       
       <div className='w-[300px] justify-center items-center  border-blue-950'>
           <div className='w-[320px] flex flex-col  shadow-lg mx-auto items-center h-[300px] bg-slate-200 '>
            <img className='w-[240px]  pt-5' src="https://i.ibb.co/pb83yd7/istockphoto-1419913245-612x612.jpg" alt="" />
           <div className='py-4 shadow-md'>
           <button className='btn bg-white border-x-3  border-blue-600 text-black w-[120px] h-[30px]'>Add To Cart</button>
           </div>
             
           </div>
           <div>
          <div className='flex flex-row justify-center items-center pt-5'>
          <img className='h-8' src="https://i.ibb.co/zZxgr5C/1106992-removebg-preview.png" alt="" />
            <h1 className='text-xl text-center font-medium ' >Product Name</h1>
          </div>
            <h1 className='text-xl font-medium text-center pt-2'>$<span>Price</span></h1>
           </div>

       </div>

       <div className='w-[300px] justify-center items-center  border-blue-950'>
           <div className='w-[320px] flex flex-col  shadow-lg mx-auto items-center h-[300px] bg-slate-200 '>
            <img className='w-[240px]  pt-5' src="https://i.ibb.co/pb83yd7/istockphoto-1419913245-612x612.jpg" alt="" />
           <div className='py-4 shadow-md'>
           <button className='btn bg-white border-x-3  border-blue-600 text-black w-[120px] h-[30px]'>Add To Cart</button>
           </div>
             
           </div>
           <div>
          <div className='flex flex-row justify-center items-center pt-5'>
          <img className='h-8' src="https://i.ibb.co/zZxgr5C/1106992-removebg-preview.png" alt="" />
            <h1 className='text-xl text-center font-medium ' >Product Name</h1>
          </div>
            <h1 className='text-xl font-medium text-center pt-2'>$<span>Price</span></h1>
           </div>

       </div>


       <div className='w-[300px] justify-center items-center  border-blue-950'>
           <div className='w-[320px] flex flex-col  shadow-lg mx-auto items-center h-[300px] bg-slate-200 '>
            <img className='w-[240px]  pt-5' src="https://i.ibb.co/pb83yd7/istockphoto-1419913245-612x612.jpg" alt="" />
           <div className='py-4 shadow-md'>
           <button className='btn bg-white border-x-3  border-blue-600 text-black w-[120px] h-[30px]'>Add To Cart</button>
           </div>
             
           </div>
           <div>
          <div className='flex flex-row justify-center items-center pt-5'>
          <img className='h-8' src="https://i.ibb.co/zZxgr5C/1106992-removebg-preview.png" alt="" />
            <h1 className='text-xl text-center font-medium ' >Product Name</h1>
          </div>
            <h1 className='text-xl font-medium text-center pt-2'>$<span>Price</span></h1>
           </div>

       </div>

       <div className='w-[300px] justify-center items-center  border-blue-950'>
           <div className='w-[320px] flex flex-col  shadow-lg mx-auto items-center h-[300px] bg-slate-200 '>
            <img className='w-[240px]  pt-5' src="https://i.ibb.co/pb83yd7/istockphoto-1419913245-612x612.jpg" alt="" />
           <div className='py-4 shadow-md'>
           <button className='btn bg-white border-x-3  border-blue-600 text-black w-[120px] h-[30px]'>Add To Cart</button>
           </div>
             
           </div>
           <div>
          <div className='flex flex-row justify-center items-center pt-5'>
          <img className='h-8' src="https://i.ibb.co/zZxgr5C/1106992-removebg-preview.png" alt="" />
            <h1 className='text-xl text-center font-medium gap-1' >Product Name</h1>
          </div>
            <h1 className='text-xl font-medium text-center pt-2'>$<span>Price</span></h1>
           </div>

       </div>


    </div>


    </div>




        </div>
    );
};

export default Testing;