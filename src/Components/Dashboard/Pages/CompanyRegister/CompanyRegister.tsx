import React from 'react';
// import useAuth from '../../../../Hook/UseAuth.tsx';
import Swal from "sweetalert2";
import { v4 as uuidv4 } from 'uuid';

const CompanyRegister = () => {
    // const { createUser } = useAuth();
    const handleSubmit = (event) => {
        event.preventDefault();

        // get field values
        const comname = event.target.comname.value;
        const comemail = event.target.comemail.value;
        const owneremail = event.target.owneremail.value;
        const comimage = event.target.comimage.value;
        const comdetails = event.target.comdetails.value;

        const newCompany = {
            comname, comemail, owneremail, comimage, comdetails, ID: uuidv4(),
            cominteraction: [{
                interaction1: event.target.interaction1.value,
                interaction2: event.target.interaction2.value,
                interaction3: event.target.interaction3.value,
                interaction4: event.target.interaction4.value
            }]
        }
        console.log(newCompany)

        // send data to the server
        fetch('http://localhost:5000/Company', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCompany)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.inserteId) {
                    Swal.fire('added successfully')
                }
            })
    }


    return (
        <div>
            <div className='mb-4'>
                <img className='md:h-[300px] md:w-[760px] lg:w-full' src="https://img.freepik.com/free-photo/laboratory-personnel-wearing-mask-inspects-test-tubes-conducts-microscopic-analysis_157027-2382.jpg?t=st=1707315442~exp=1707319042~hmac=0d257f32565bfc87880a7abb8acd19e40708c5003e2ea27e2f7770c326da0f07&w=1480"
                    alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='flex justify-center items-center'>
                    <h2 className='lg:text-3xl text-xl lg:w-[50%] w-[65%] 
                    font-bold'>Please fillup the Company <span className='text-[#0360D9]'>Registration Form</span></h2>
                </div>
                <div className='mt-8'>
                    <form onSubmit={handleSubmit}>
                        <label className="label font-semibold">
                            <span className="label-text text-xl">Company Name</span>
                        </label>
                        <input type="text" name='comname' placeholder="company name"
                            className="lg:w-[70%] w-[98%] shadow-xl input input-bordered" required />
                        <label className="label font-semibold">
                            <span className="label-text text-xl">Company Photo</span>
                        </label>
                        <input type="text" name='comimage' required placeholder="Photo URL"
                            className="lg:w-[70%] w-[98%] shadow-xl input input-bordered" />
                        <label className="label font-semibold">
                            <span className="label-text text-xl">Company Email</span>
                        </label>
                        <input type="email" name='comemail' placeholder="company email" className="lg:w-[70%] w-[98%] shadow-xl 
                        input input-bordered" required />
                        <label className="label font-semibold">
                            <span className="label-text text-xl">Owner Email</span>
                        </label>
                        <input type="email" name='owneremail' placeholder="owner email"
                            className="lg:w-[70%] w-[98%] shadow-xl input input-bordered" required />
                        <label className="label font-semibold">
                            <span className="label-text text-xl">Company Interaction</span>
                        </label>
                        <input type="text" name='interaction1' placeholder="Founded"
                            className="lg:w-[70%] w-[98%] mb-1 shadow-xl input input-bordered" required />
                        <input type="text" name='interaction2' placeholder="Service Patients"
                            className="lg:w-[70%] w-[98%] mb-1 shadow-xl input input-bordered" required />
                        <input type="text" name='interaction3' placeholder="Cutomer Served"
                            className="lg:w-[70%] w-[98%] mb-1 shadow-xl input input-bordered" required />
                        <input type="text" name='interaction4' placeholder="Monthly Active User"
                            className="lg:w-[70%] w-[98%] mb-1 shadow-xl input input-bordered" required />
                        <label className="label font-semibold">
                            <span className="label-text text-xl">Company Details</span>
                        </label>
                        <textarea name="comdetails" placeholder="company details" className="text-[#0360D9] rounded-md shadow-xl focus:outline-none lg:w-[70%] w-[98%]
                         p-2" />
                        <br />
                        <div className='flex justify-center lg:block'>
                            <button type="submit" className='btn mx-auto hover:bg-blue-400 w-36 bg-[#0360D9]
                          text-white mt-4'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CompanyRegister;