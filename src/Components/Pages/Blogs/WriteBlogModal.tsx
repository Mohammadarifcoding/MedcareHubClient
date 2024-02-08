import React, { useState } from 'react';
import UseAuth from '../../../Hook/UseAuth.tsx';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { BiEditAlt } from "react-icons/bi";
const image_hosting_key = '140f2d0db1502e65c2c0ee7bfc66be98';
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const WriteBlogModal = () => {

    const { user } = UseAuth()
    const [openModal, setOpenModal] = useState(false);
    const [refetchData, setRefecthData] = useState(false)

    const {
        register, 
        handleSubmit,
    } = useForm()

    const onSubmit = async (result) => {
        let imageUrl;

        const formData = new FormData();
        const singleImageFile = result.BlogPic[0];
        formData.append('image', singleImageFile);

        try {
            const response = await axios.post(image_hosting_api, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            imageUrl = response.data.data.url;
        } catch (error) {
            console.error('Error uploading image:', error);
            return;
        }
        const blogData = {
            ID : crypto.randomUUID(),
            BlogName: result.BlogName,
            BlogPic: imageUrl,
            BlogWriterName: result.BlogWriterName,
            BlogWriting: result.BlogWriting,
            email: user.email,
            like: 0
        };
        console.log(blogData);
        axios.post(`http://localhost:5000/Blog`, blogData)
            .then((res) => {
                console.log(res);
                Swal.fire("You post a blog successfully!");
                setOpenModal(false)
                setRefecthData(!refetchData)
            })
            .catch((error) => console.error("Error updating status:", error));
    };
    return (
        <div>
            <div>

                <button onClick={() => setOpenModal(true)} className="text-5xl flex items-center relative z-10 mt-3">
                    <BiEditAlt /><span className='text-lg'> Write</span>
                </button>

                <div className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} duration-300 inset-0 w-full h-full`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute overflow-x-hidden overflow-y-scroll w-full h-full flex justify-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'translate-y-0 opacity-1 duration-300' : 'translate-y-32 opacity-0 duration-1000'}`}>
                        <main className="px-4 sm:px-6 lg:px-8 py-8">

                            <div className="space-y-8 lg:mb-6">
                                <div className="rounded-lg border bg-card text-card-foreground lg:w-[900px] shadow-sm">
                                    <div className=" space-y-1.5 lg:p-6 p-2">
                                        <h3 className="text-2xl font-semibold whitespace-nowrap text-center">Write Your Blog</h3>
                                    </div>
                                    <div className="lg:p-6 p-2">

                                        <form onSubmit={handleSubmit(onSubmit)} className="p-12">

                                            <div className="space-y-5">
                                                <div className='lg:flex gap-3'>
                                                    {/* <div>
                                                        <label htmlFor="text" className="block">ID</label>

                                                        <input {...register('ID')} type="text" placeholder="ID" className="p-3 block md:w-full w-[365px]  drop-shadow-lg rounded-lg outline-none" />
                                                    </div> */}


                                                    <div>
                                                        <label htmlFor="text" className="block">Blog Name</label>

                                                        <input {...register('BlogName')} type="text" placeholder="Blog name" className="p-3 block md:w-full w-[365px]  drop-shadow-lg rounded-lg outline-none" />

                                                    </div>
                                                    <div>
                                                        <label htmlFor="email" className="block">Email</label>

                                                        <input {...register('email')} type="text" value={user?.email} placeholder="email.." className="p-3 block md:w-full  drop-shadow-lg rounded-lg outline-none w-[365px]" />

                                                    </div>
                                                </div>


                                                <div>
                                                    <label htmlFor="email" className="block">Blog Photo</label>

                                                    <input
                                                        type="file"
                                                        {...register('BlogPic', { required: true })}
                                                        className="input rounded-r-md  md:w-full font-medium bg-[#0360D9] p-2 text-white file-input file-input-bordered border-none file-input-info"
                                                        accept="image/*"
                                                        required
                                                    />
                                                </div>






                                                <div>
                                                    <label htmlFor="text" className="block">Writer Name</label>


                                                    <input {...register('BlogWriterName')} type="text" placeholder="Blog writer name" className="p-3 block md:w-full w-[365px]  drop-shadow-lg rounded-lg outline-none" value={user?.displayName} />
                                                </div>




                                                <div>
                                                    <label htmlFor="text" className="block">Write Blog</label>

                                                    <textarea {...register('BlogWriting')} placeholder="Write blog" className='border md:w-full md:h-[300px] w-[365px] h-[200px]'
                                                    >

                                                    </textarea>

                                                </div>



                                            </div>

                                            <div className='flex justify-between'>

                                                <button className="py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%] before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block" type="submit">Submit</button>

                                                <button onClick={() => { setOpenModal(false) }} className="py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%] before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">Close</button>

                                            </div>





                                        </form>
                                    </div>
                                </div>

                            </div>



                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WriteBlogModal;