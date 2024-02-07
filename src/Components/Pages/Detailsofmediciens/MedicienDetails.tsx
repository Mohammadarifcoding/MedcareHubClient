import React, { useEffect, useState } from 'react';
import './medi.css';
import UseAuth from '../../../Hook/UseAuth.tsx';
import { useLoaderData, useParams } from 'react-router-dom';
import Review from './Review.tsx';
import axios from 'axios';
import Swal from 'sweetalert2';
// import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';


const MedicienDetails = () => {

const{user}=UseAuth()
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

const handlereview = (result) => {
  result.preventDefault();
  console.log(result.target.description.value); // Corrected "descripton" to "description"
  const RevData = {
      name: user?.displayName,
      ID: uuidv4(),
      email: user?.email,
      description: result.target.description.value, // Corrected "descripton" to "description"
      ProductID: data?.ID,
      companyname: data?.Company
  };

  console.log(RevData);

  axios.post(`http://localhost:5000/reviewdata`, RevData)
      .then((res) => {
          console.log(res);
          Swal.fire("You posted a review successfully!");
      })
      .catch((error) => console.error("Error updating status:", error));
};


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
                <button className='bg-[#E1EEFF] text-blue-600 border-blue-600 btn rounded-full h-[60px] p-4 w-[180px] text-xl'>Add to Cart</button> 
                <button className='bg-[#E1EEFF] text-blue-600 border-blue-600 btn rounded-full h-[60px] p-4 w-[200px] text-xl'>Add to Favorite</button> 
                </div>

              </div>


            </div>



{/* review */}
 
       <div className='px-24'>
           <div className='flex flex-row items-center py-4 gap-2'>
           <h1 className='md:text-4xl font-bold  text-blue-600'>Users Feedback</h1> 
           <img className='h-12' src="https://i.ibb.co/ynSfLjH/images-4-removebg-preview.png" alt="" />
           </div>
           <div className='bg-blue-600 h-1 '>
            <span></span>
           </div>
           <div className='pt-4'></div>

           {/* reviewwwwww */}

           <div>
            
        <Review id={data?.ID} ></Review>


           </div>

           {/* give review */}
         <form action="" onSubmit={handlereview}>

         <div className='pb-24'>
           <div className='flex flex-row items-center py-4 gap-2'>
           <h1 className='md:text-4xl font-bold  text-blue-600'>Reviews</h1> 
           <img className='h-12' src="https://i.ibb.co/ZBLwWth/download-removebg-preview.png" alt="" />
           </div>
           <div className='py-3'>
          <input type='text' name='name' value={user?.displayName} placeholder='Customer Name' className=' pl-5 md:w-[400px] h-[50px] border-blue-600  text-black font-bold border-x-2 border-y-2 rounded-md'></input>
          </div>
          <div className='py-3'>
          <input type='email' name='email' value={user?.email} placeholder='Customer Email' className=' pl-5 md:w-[400px] h-[50px] border-blue-600  text-black font-bold border-x-2 border-y-2 rounded-md'></input>
          </div>
           <div className='pb-3'>

           <input type='textarea' name='description' placeholder='Put your Review' className=' pl-5 md:w-[600px] h-[150px] border-blue-600  text-black border-x-2 border-y-2 rounded-md  font-bold'></input>
           </div>
             
             <button type='submit' className='btn bg-blue-600 text-white'>Give REVIEW</button>
             <button type='submit' className='btn bg-blue-600 text-white'>Give REVIEW</button>
           </div>
         </form>

        </div>
    

        </div>
    );
};

export default MedicienDetails;