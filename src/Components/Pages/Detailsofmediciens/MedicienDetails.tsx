import React, { useEffect, useState } from 'react';
import './medi.css';
import UseAuth from '../../../Hook/UseAuth';
import { useLoaderData, useParams } from 'react-router-dom';

const MedicienDetails = () => {


const [data,setData] = useState();
const { id } = useParams();
// console.log(id);

useEffect(() => {
    fetch(`http://localhost:5000/detailsMed/${id}`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            setData(data);
        })
        .catch((error) => {
            console.log(error.message);
          });
}, [id]);

    return (
        <div className='bg-white'>
           

            <div className='flex md:flex-row flex-col justify-center items-center gap-12 py-24'>
              <div className='md:w-[600px]'>
                <img className='md:w-[700px] w-[300px] md:h-[600px]' src={data?.Image} alt="" />
              </div>
              <div className='md:w-[700px] md:h-[650px]'>
                 <div className='flex flex-row  items-center '>

                 <h1 className='md:text-4xl font-bold ml-2  text-blue-600'>{data?.Medname}</h1>
                  <img className='md:w-36' src="https://i.ibb.co/RBpjTyF/Medical-Logo-Design-Symbol-Icon-on-transparent-background-PNG-removebg-preview.png" alt="" />
                 </div>
                  <p className='md:text-2xl text-[#2E2E2E] pb-4 px-4 font-medium '>{data?.Description}</p>
             
                 
                   <div>

                   <div>
                    
                    <div className='flex flex-row  items-center'>
   
   <img className='w-16' src="https://i.ibb.co/Pc5QjmM/images-7-removebg-preview.png" alt="" />
    <h1 className='md:text-2xl text-[#2E2E2E] font-medium '>{data?.Category}</h1>
   
   </div>
   
   
   <div className='flex flex-row  items-center'>
   <img className='h-16' src="https://i.ibb.co/4gC038L/pngtree-wind-global-solution-logo-design-vector-image-291454-removebg-preview.png" alt="" />
   <a href='jj'><h1 className='md:text-2xl text-[#2E2E2E] font-medium '>{data?.Company}</h1></a>
   </div>
    <div className='flex flex-row  items-center ml-3 pb-2'>
    <img className='h-12' src="https://i.ibb.co/XxvTMjc/images-2-removebg-preview-1.png" alt="" />
    <h1 className='md:text-2xl text-[#2E2E2E] font-medium  '> {data?.Price}</h1> 
    </div>
                     </div>
                    


                   



                   </div>
                 
                <div className='pt-5'>
                <button className='bg-[#E1EEFF] text-blue-600 border-blue-600 btn rounded-full h-[60px] p-4 w-[180px] text-xl'>Order Now</button> 
                </div>

              </div>


            </div>



{/* review */}
 <div className='flex md:flex-row flex-col justify-center gap-24 pb-24'>
  
<div className="card md:w-[570px] h-[650px]">
  <div className="card-header">
    <div className="text-header">Give Review About Our Medicines</div>
  </div>
  <div className="card-body">
    <form action="#">
    <div className="form-group ">
        <label htmlFor="email">Name:</label>
        <input required className="form-control  h-14" name="email" id="email" type="text" />
      </div>
      <div className="form-group ">
        <label htmlFor="email">Email:</label>
        <input required className="form-control  h-14" name="email" id="email" type="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Date:</label>
        <input required className="form-control h-14 " name="password" id="password" type="date" />
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password">Give Review</label>
        <input required className="form-control h-36" name="confirm-password" id="confirm-password" type="textarea" />
      </div>
    <div className='py-6'>
    <input type="submit" className="btn2" defaultValue="submit" />
    </div>
    </form>
  </div>
</div>
<div>
    <div className='md:w-[500px] rounded-lg h-[140px] b bg-blue-200'>
     <div className='flex flex-row items-center ml-5 j justify-start gap-2 py-2'>
     <img className='h-10 w-8 rounded-full' src="https://i.ibb.co/x1mH4rK/customer-vector-icon-isolated-on-transparent-background-customer-transparency-logo-concept-R1-R007-r.png" alt="" />
      <h1 className='text-center font-bold text-xl '>Umme homira</h1>
     </div>
      <p className='text-sm text-center font-medium text-orange-900'>good product</p>
    </div>
</div>

 </div>


 




        </div>
    );
};

export default MedicienDetails;