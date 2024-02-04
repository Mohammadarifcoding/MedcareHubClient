import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Modal = () => {

    const [openModal, setOpenModal] = useState(false);
    const [refetchData, setRefecthData] = useState(false)

    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    const onSubmit = (result) => {
        const formData = {
            ID: result.ID,
            BlogName: result.BlogName,
            BlogPic: result.BlogPic,
            BlogWriterName: result.BlogWriterName,
            BlogWriterImage: result.BlogWriterImage,
            BlogWriting: result.BlogWriting,
            BlogTime: result.BlogTime
        };
        console.log(formData);
        axios.post(`http://localhost:5000/blog`, formData)
            .then((res) => {
                console.log(res);
                Swal.fire("You post a blog successfully!");
                setOpenModal(false)
                setRefecthData(!refetchData)
            })
            .catch((error) => console.error("Error updating status:", error));
    };
    return (
        <>
            <div className="w-72 mx-auto flex items-center justify-center">
                {/* Pay Button */}
                <button onClick={() => setOpenModal(true)} className=" mt-5 text-xl w-60 h-16 text-white bg-sky-600 overflow-hidden relative z-10 group hover:text-sky-900 duration-700">Write Your Own Blog</button>
                {/* <button onClick={() => setOpenModal(true)} className="bg-black text-white p-2 rounded-lg">Pay Now</button> */}
                <div className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} duration-300 inset-0 w-full h-full`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute overflow-x-hidden overflow-y-scroll w-full h-full flex justify-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'translate-y-0 opacity-1 duration-300' : 'translate-y-32 opacity-0 duration-1000'}`}>
                        <main className="px-4 sm:px-6 lg:px-8 py-8">


                            <div className="space-y-8 lg:mb-6">
                                <div className="rounded-lg border bg-card text-card-foreground w-[650px] shadow-sm">
                                    <div className=" space-y-1.5 lg:p-6 p-2">
                                        <h3 className="text-2xl font-semibold whitespace-nowrap">Write Your Blog</h3>
                                    </div>
                                    <div className="lg:p-6 p-2">

                                        <form onSubmit={handleSubmit(onSubmit)} className="p-12">

                                            <div className="space-y-5">
                                                <div className='lg:flex gap-3'>
                                                    <div>
                                                        <label htmlFor="email" className="block">ID</label>

                                                        <input {...register('ID')} type="text" placeholder="ID" className="p-3 block w-full   drop-shadow-lg rounded-lg outline-none" />
                                                    </div>


                                                    <div>
                                                        <label htmlFor="text" className="block">Blog Name</label>

                                                        <input {...register('BlogName')} type="text" placeholder="Blog name" className="p-3 block w-full  drop-shadow-lg rounded-lg outline-none" />

                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="email" className="block">Blog Photo</label>

                                                    <input {...register('BlogPic')} type="text" placeholder="Blog photo" className="p-3 block w-full  drop-shadow-lg rounded-lg outline-none" />
                                                </div>



                                                <div className='lg:flex gap-3'>


                                                    <div>
                                                        <label htmlFor="text" className="block">Writer Name</label>


                                                        <input {...register('BlogWriterName')} type="text" placeholder="Blog writer name" className="p-3 block w-full  drop-shadow-lg rounded-lg outline-none" />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="text" className="block"> Writer Photo</label>

                                                        <input {...register('BlogWriterImage')} type="text" placeholder="Blog writer name" className="p-3 block w-full  drop-shadow-lg rounded-lg outline-none" />

                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="text" className="block">Write Blog</label>

                                                    <input {...register('BlogWriting')} type="text" placeholder="Write blog" className="p-3 block w-full  drop-shadow-lg rounded-lg outline-none" />
                                                </div>




                                                <div>
                                                    <label htmlFor="text" className="block"> Time</label>

                                                    <input {...register('BlogTime')} type="date" placeholder="Blog time" className="p-3 block w-full  drop-shadow-lg rounded-lg outline-none" />
                                                </div>



                                            </div>

                                            <div className='lg:flex justify-between'>

                                                <button className="py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%] before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block" type="submit">Submit</button>
                                                <button onClick={() => { setOpenModal(false) }} className="py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%] before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block" type="submit">Close</button>

                                            </div>





                                        </form>
                                    </div>
                                </div>

                            </div>



                        </main>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Modal;