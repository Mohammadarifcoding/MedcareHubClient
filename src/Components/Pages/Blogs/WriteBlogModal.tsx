import React, { useState } from 'react';
import UseAuth from '../../../Hook/UseAuth.tsx';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
const image_hosting_key = '140f2d0db1502e65c2c0ee7bfc66be98';
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const WriteBlogModal = () => {
    const { user } = UseAuth();
    const [openModal, setOpenModal] = useState(false);
    const [refetchData, setRefecthData] = useState(false);

    const { register, handleSubmit } = useForm();

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
            ID: crypto.randomUUID(),
            BlogName: result.BlogName,
            BlogPic: imageUrl,
            BlogWriterName: result.BlogWriterName,
            BlogWriting: result.BlogWriting,
            email: user.email,
            like: 0
        };
        console.log(blogData);
        axios
            .post(`http://localhost:5000/Blog`, blogData)
            .then((res) => {
                console.log(res);
                Swal.fire('You post a blog successfully!');
                setOpenModal(false);
                setRefecthData(!refetchData);
            })
            .catch((error) => console.error('Error updating status:', error));
    };
    return (
        <div>
            <div>
                <div className="bg-[#242526] rounded-lg p-4 flex items-center space-x-4">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <img src={user?.photoURL} alt="" className="aspect-square h-full w-full" />
                    </span>
                    <input onClick={() => setOpenModal(true)}
                        className="flex h-10 w-full border border-input bg-background text-sm flex-1 rounded-full py-2 px-4 cursor-pointer"
                        placeholder="What's on your mind, write a blog......"
                    />
                    <button onClick={() => setOpenModal(true)} className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-[#3A3B3C] text-white flex items-center space-x-2 px-3 py-2 rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="text-[#45BD62]"
                        >
                            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                            <circle cx="12" cy="13" r="3"></circle>
                        </svg>
                        <span>Write</span>
                    </button>

                </div>

                <div className="w-72 mx-auto flex items-center justify-center">
                    <div onClick={() => setOpenModal(false)} className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}>
                        <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full lg:w-[500px] bg-white drop-shadow-2xl rounded-lg ${openModal ? 'opacity-1 duration-300 translate-y-0' : '-translate-y-20 opacity-0 duration-150'}`}>
                            <form className="p-12">
                                <svg onClick={() => setOpenModal(false)} className="w-10 mx-auto mr-0 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#000000"></path></g></svg>
                                <h1 className="backdrop-blur-sm text-2xl pb-8 text-center">Write A blog</h1>
                                <div className='flex items-center gap-1 mb-3'>
                                    <img src={user?.photoURL} className='w-10 rounded-full' alt="" />
                                    <input type="text" className='border-none' value={user?.displayName} name="" id="" />
                                </div>

                                <div>
                                    <textarea {...register('BlogWriting')} placeholder="Write blog" className="border w-full md:h-[150px] p-2 h-[100px]"></textarea>
                                </div>

                                <div className="space-y-5 hidden">
                                    <label htmlFor="email" className="block">
                                        Email
                                    </label>
                                    <input
                                        {...register('email')}
                                        type="text"
                                        value={user?.email}
                                        placeholder="email.."
                                        className="p-3 block w-full  drop-shadow-lg rounded-lg outline-none "
                                    />

                                </div>
                                <button type="button" className="py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* <div className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} duration-300 inset-0 w-full h-full`}>
                    <div
                        onClick={(e_) => e_.stopPropagation()}
                        className={`absolute overflow-x-hidden overflow-y-scroll w-full h-full flex justify-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'translate-y-0 opacity-1 duration-300' : 'translate-y-32 opacity-0 duration-1000'
                            }`}
                    >
                        <main className=" py-8">
                            <div className="space-y-8 lg:mb-6">
                                <div className="rounded-lg border bg-card text-card-foreground lg:w-[900px] shadow-sm px-3">
                                    <div className=" space-y-1.5 lg:p-6 p-2">
                                        <h3 className="text-2xl font-semibold whitespace-nowrap text-center">Write Your Blog</h3>
                                    </div>
                                    <div className="">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="space-y-5">
                                                <div className="flex flex-col lg:flex-row lg:justify-evenly gap-3 w-full">
                                                    <div className="lg:w-1/2">
                                                        <label htmlFor="text" className="block">
                                                            Blog Name
                                                        </label>

                                                        <input {...register('BlogName')} type="text" placeholder="Blog name" className="p-3 block w-full  drop-shadow-lg rounded-lg outline-none " />
                                                    </div>
                                                    <div className="lg:w-1/2">
                                                        <label htmlFor="email" className="block">
                                                            Email
                                                        </label>

                                                        <input
                                                            {...register('email')}
                                                            type="text"
                                                            value={user?.email}
                                                            placeholder="email.."
                                                            className="p-3 block w-full  drop-shadow-lg rounded-lg outline-none "
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="email" className="block">
                                                        Blog Photo
                                                    </label>

                                                    <input
                                                        type="file"
                                                        {...register('BlogPic', { required: true })}
                                                        className="input rounded-r-md  w-full font-medium bg-[#0360D9] p-2 text-white file-input file-input-bordered border-none file-input-info"
                                                        accept="image/*"
                                                        required
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="text" className="block">
                                                        Writer Name
                                                    </label>

                                                    <input
                                                        {...register('BlogWriterName')}
                                                        type="text"
                                                        placeholder="Blog writer name"
                                                        className="p-3 block w-full   drop-shadow-lg rounded-lg outline-none"
                                                        value={user?.displayName}
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="text" className="block">
                                                        Write Blog
                                                    </label>

                                                    <textarea {...register('BlogWriting')} placeholder="Write blog" className="border w-full md:h-[300px] p-2 h-[200px]"></textarea>
                                                </div>
                                            </div>

                                            <div className="flex justify-between">
                                                <button
                                                    className="py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%] before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block"
                                                    type="submit"
                                                >
                                                    Submit
                                                </button>

                                                <button
                                                    onClick={() => {
                                                        setOpenModal(false);
                                                    }}
                                                    className="py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%] before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block"
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default WriteBlogModal;
