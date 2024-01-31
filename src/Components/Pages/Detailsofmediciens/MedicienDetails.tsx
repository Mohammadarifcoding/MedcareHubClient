import React from 'react';

const MedicienDetails = () => {
    return (
        <div className='bg-white'>
           

            <div className='flex md:flex-row flex-col justify-center items-center gap-12 py-24'>
              <div className='md:w-[600px]'>
                <img className='md:w-[700px] w-[300px] md:h-[600px]' src="https://i.ibb.co/6JZMKrD/71m5-N6h-4-JL-AC-UF1000-1000-QL80.jpg" alt="" />
              </div>
              <div className='md:w-[700px] md:h-[650px]'>
                 <div className='flex flex-row  items-center '>

                 <h1 className='md:text-5xl font-bold ml-2  text-blue-600'>Echinacea Extract</h1>
                  <img className='md:w-36' src="https://i.ibb.co/RBpjTyF/Medical-Logo-Design-Symbol-Icon-on-transparent-background-PNG-removebg-preview.png" alt="" />
                 </div>
                  <p className='md:text-2xl text-[#2E2E2E] pb-4 px-4 font-medium '>Echinacea extract is known for its immune-boosting properties. It supports the body's natural defense mechanisms and helps maintain overall well-being.</p>
             
                 
                   <div>

                   <div>
                    
                    <div className='flex flex-row  items-center'>
   
   <img className='w-16' src="https://i.ibb.co/Pc5QjmM/images-7-removebg-preview.png" alt="" />
    <h1 className='md:text-2xl text-[#2E2E2E] font-medium '>Herbal Care</h1>
   
   </div>
   
   
   <div className='flex flex-row  items-center'>
   <img className='h-16' src="https://i.ibb.co/4gC038L/pngtree-wind-global-solution-logo-design-vector-image-291454-removebg-preview.png" alt="" />
   <a href='jj'><h1 className='md:text-2xl text-[#2E2E2E] font-medium '>GreenBotanicals</h1></a>
   </div>
    <div className='flex flex-row  items-center ml-3 pb-2'>
    <img className='h-12' src="https://i.ibb.co/XxvTMjc/images-2-removebg-preview-1.png" alt="" />
    <h1 className='md:text-2xl text-[#2E2E2E] font-medium  '> 19.99</h1> 
    </div>
                     </div>
                    


                   



                   </div>
                 
                <div className='pt-5'>
                <button className='bg-[#E1EEFF] text-blue-600 border-blue-600 btn rounded-full h-[60px] p-4 w-[180px] text-xl'>Order Now</button> 
                </div>

              </div>


            </div>











        </div>
    );
};

export default MedicienDetails;