import React, { useEffect, useState } from 'react';
import './medi.css';
import UseAuth from '../../../Hook/UseAuth.tsx';
import { useLoaderData, useParams } from 'react-router-dom';
import Review from './Review.tsx';
import axios from 'axios';
import Swal from 'sweetalert2';
// import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';
import UseAxiosPublic from '../../../Hook/UseAxiosPublic.tsx';
import UseCart from '../../../Hook/UseCart.tsx';
import moment from 'moment';
import { useQuery } from '@tanstack/react-query';

const MedicienDetails = () => {
    const [, refetch] = UseCart();
    const AxiousPublic = UseAxiosPublic();
    const { user } = UseAuth();
    const [data, setData] = useState();
    const { id } = useParams();
    // console.log(id);



    const { data: medicineData = [], isLoading } = useQuery({
        queryKey: ['medicines'],
        queryFn: async () => {
            const result = await AxiousPublic.get('/Medicines');
            return result.data;
        }
    });


   
    useEffect(() => {
        fetch(`http://localhost:5000/detailsMed/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [id]);

    const currentDate = new Date(); 

    const year = currentDate.getFullYear(); 
    const month = currentDate.getMonth() + 1; 
    const day = currentDate.getDate();
    const hours = currentDate.getHours(); 
    const minutes = currentDate.getMinutes();
    
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
    
    console.log(formattedDateTime); 

    const handlereview = (result) => {
        result.preventDefault();
        console.log(result.target.description.value); // Corrected "descripton" to "description"
        const RevData = {
            name: user?.displayName,
            ID: uuidv4(),
            date:formattedDateTime,
            email: user?.email,
            description: result.target.description.value, // Corrected "descripton" to "description"
            ProductID: data?.ID,
            companyname: data?.Company
        };

        console.log(RevData);

        axios
            .post(`http://localhost:5000/reviewdata`, RevData)
            .then((res) => {
                console.log(res);
                Swal.fire('You posted a review successfully!');
            })
            .catch((error) => console.error('Error updating status:', error));
    };

    const handleAddtoCart = (item) => {
        const cartItem = {
            medicineId: item?.ID,
            OrderId: uuidv4(),
            email: user?.email,
            medicine: item,
            quantity: 1
        };
        AxiousPublic.post('/CartMedicine', cartItem)
            .then((res) => {
                // console.log(res.data);
                if (res.data) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Medicine added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const relatedServicesData = medicineData.filter((medicine) => medicine.Category === data?.Category && medicine.ID !== data?.ID);

    return (
        <div className="bg-white">
             <div className='flex md:flex-row flex-col justify-center  py-24 '>

  <div className='w-[550px] h-[520px] justify-center items-center flex mx-auto border-x-2 border-blue-950 bg-blue-100' >
 
 <img className='w-[390px] h-[400px]' src={data?.Image} alt="" />

</div>
<div className='w-[700px] mr-24'>




<h1 className='font-bold text-4xl py-7 pb-4' >{data?.Medname} </h1>
 
<div className='flex md:flex-row flex-col items-center gap-24 pb-8' >

<div className='flex md:flex-row flex-col items-center gap-3'>
    <img className='h-10 w-10' src="https://i.ibb.co/2kc8fWc/medical-health-logo-design-for-business-and-company-vector-removebg-preview.png" alt="" />
    <h1 className='text-xl font-medium'><a className='underline' href='hhh'>{data?.Company}</a></h1>
 </div>
 <div className='flex md:flex-row flex-col items-center gap-3'>
    <img className='h-10 w-10' src="https://i.ibb.co/SxtGWHL/office-bag-4-removebg-preview.png" alt="" />
    <h1 className='text-xl font-medium'>{data?.Category}</h1>
 </div>

</div>

<p className='font-medium'>{data?.Description}</p>
 
<div className='flex md:flex-row flex-col items-center py-4 gap-2'>
    <img className='h-12 w-12' src="https://i.ibb.co/18DK7pV/360-F-304050419-e-Lb94-V8-Wbstz-C480-ZBb-W0-A85-Ql-Tk-Fv-Pk-removebg-preview.png" alt="" />
    <h1 className='text-xl font-medium'>$<span>{data?.Price}</span></h1>
 </div>

 <div className='flex md:flex-row gap-4'>
    <button onClick={() => handleAddtoCart(data)} className='btn bg-blue-600 text-white w-[150px] h-[30px]'><div className='flex flex-row justify-center items-center gap-1'>
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
 
 </div>
</div>
</div>


           
            {/* review */}
            <div className='px-36'>
<div className='flex flex-row items-center py-4 gap-2'>
<h1 className='md:text-4xl font-bold  text-blue-600'>Users Feedback</h1> 
<img className='h-10' src="https://i.ibb.co/ynSfLjH/images-4-removebg-preview.png" alt="" />
</div>
<div className='bg-blue-600 h-1 '>
<span></span>
</div>
<div className='pt-4'></div>

                {/* reviewwwwww */}

                <div>
                    <Review id={data?.ID} ></Review>
                </div>

            {/* give */}


                <form action="" onSubmit={handlereview}>
                    <div className="pb-24">
                        <div className="flex flex-row items-center py-4 gap-2">
                            <h1 className="md:text-4xl font-bold  text-blue-600">Reviews</h1>
                            <img className="h-12" src="https://i.ibb.co/ZBLwWth/download-removebg-preview.png" alt="" />
                        </div>
                        <div className="py-3">
                            <input
                                type="text"
                                name="name"
                                value={user?.displayName}
                                placeholder="Customer Name"
                                className="w-full pl-5 md:w-[400px] h-[50px] border-blue-600  text-black font-bold border-x-2 border-y-2 rounded-md"
                            ></input>
                        </div>
                        <div className="py-3">
                            <input
                                type="email"
                                name="email"
                                value={user?.email}
                                placeholder="Customer Email"
                                className=" pl-5 w-full md:w-[400px] h-[50px] border-blue-600  text-black font-bold border-x-2 border-y-2 rounded-md"
                            ></input>
                        </div>
                        <div className="pb-3">
                            <input
                                type="textarea"
                                name="description"
                                placeholder="Put your Review"
                                className=" pl-5 w-full md:w-[600px] h-[150px] border-blue-600  text-black border-x-2 border-y-2 rounded-md  font-bold"
                            ></input>
                        </div>

                        <button type="submit" className="btn bg-blue-600 text-white block w-full md:w-[600px]">
                            Give REVIEW
                        </button>
                    </div>
                </form>
            </div>

            {/* realtive product */}
 
 <div>
<h1 className='text-4xl text-center font-bold pb-16'>Related Services</h1>

<div className='flex md:flex-row flex-col justify-center gap-12 pb-24'>

<div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-12'>

{relatedServicesData.map((service) => (
                    <div key={service.ID} className='w-[300px]  shadow-lg justify-center items-center  border-blue-950'>
                      <div className='w-[300px]  justify-center items-center  border-blue-950'>
<div className='w-[320px]  flex flex-col  mx-auto items-center h-[500px] '>
<img className='w-[290px]  h-[340px] pt-5 ' src={service?.Image} alt="" />
<div className='mt-4'>
<h1 className=' text-center font-bold ' >{service?.Medname}</h1>
<h1 className='text-xl font-medium text-center pt-2'>$<span>{service?.Price}</span></h1>
</div>
<div className='py-4'>
<button  onClick={() => handleAddtoCart(data)} className='btn bg-white border-x-3  border-blue-600 text-black w-[120px] h-[30px]'>Add To Cart</button>
</div>
 
</div>
<div>


</div>

</div>

                    </div>
                ))}

</div>




</div>


</div>


        </div>
    );
};

export default MedicienDetails;
















