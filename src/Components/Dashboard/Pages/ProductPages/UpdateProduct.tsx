import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
import Swal from 'sweetalert2';
import { useState } from 'react';
import axios from 'axios';

const image_hosting_key = '140f2d0db1502e65c2c0ee7bfc66be98';
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = () => {
    const { id } = useParams();
    const AxiousPublic = UseAxiosPublic();
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const { data: matchData = [] } = useQuery({
        queryKey: ['matchMedicine', id],
        queryFn: async () => {
            const result = await AxiousPublic.get(`/Medicine/${id}`);
            return result.data;
        }
    });

    // console.log(matchData);

    const handleUpdateMedicine = async (event) => {
        event.preventDefault();
        const form = event.target;
        const Medname = form.Medname.value;
        const Image = form.Image.value;
        const Company = form.Company.value;
        const Price = form.Price.value;
        const Category = form.Category.value;
        const Description = form.Description.value;

        let imageUrl = Image; 

        
        if (selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);

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
        }

        const updateMedicine = { Image: imageUrl, Price, Medname, Company, Category, Description };

        // console.log(updateMedicine);

        AxiousPublic.put(`/Medicine/${id}`, updateMedicine)
            .then((res) => {
                // console.log(res.data);
                if (res?.data?.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Success!`,
                        text: `Medicine Edited Successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/myproduct');
                }
            })
            .catch((error) => {
                console.error('Error deleting CartMedicine:', error);
            });
    };

    return (
        <div className="mx-3">
            <div className="md:py-20 py-10 px-3">
                <h1 className="text-center font-extrabold mb-10 text-purple-500 text-2xl md:text-4xl">Edit Medicine</h1>
                <form onSubmit={handleUpdateMedicine}>
                    <div className="md:flex gap-6 justify-center mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Company Email</span>
                            </label>
                            <label className="flex items-center">
                                <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white">Email</span>
                                <input type="text" name="email" defaultValue={matchData?.companyEmail} className="input rounded-r-md rounded-l-none w-full" readOnly />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Medicine Name</span>
                            </label>
                            <label className="flex items-center">
                                <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white">Title</span>
                                <input type="text" name="Medname" placeholder="Your Medicine Title" className="input rounded-r-md rounded-l-none w-full" required defaultValue={matchData?.Medname} />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-6 justify-center mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Medicine Image URL</span>
                            </label>
                            <label className="flex items-center">
                                <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white">URL</span>
                                <input type="text" name="Image" placeholder="Enter Image URL" className="input rounded-r-md rounded-l-none w-full" required defaultValue={matchData?.Image} />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Company Name</span>
                            </label>
                            <label className="flex items-center">
                                <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white">Company</span>
                                <input
                                    type="text"
                                    name="Company"
                                    placeholder="Enter Short description"
                                    className="input rounded-r-md rounded-l-none w-full"
                                    required
                                    defaultValue={matchData?.Company}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-6 justify-center mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Medicine Price</span>
                            </label>
                            <label className="flex items-center">
                                <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white">Price</span>
                                <input type="number" name="Price" placeholder="Enter Medicine Price" className="input rounded-r-md rounded-l-none w-full" required defaultValue={matchData?.Price} />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Medicine Category Name</span>
                            </label>
                            <label className="flex items-center">
                                <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white">Category</span>
                                <input
                                    type="text"
                                    name="Category"
                                    placeholder="Enter Medicine Category Name"
                                    className="input rounded-r-md rounded-l-none w-full"
                                    required
                                    defaultValue={matchData?.Category}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="mb-8 w-full">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Medicine Description</span>
                            </label>
                            <textarea className="textarea rounded-md  w-full" name="Description" placeholder="Enter Short description" required defaultValue={matchData?.Description}></textarea>
                        </div>
                    </div>

                    <div className="py-3 justify-center flex">
                        <label htmlFor="file" className="custum-file-upload">
                            <div className="icon">
                                <svg viewBox="0 0 24 24" fill xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        {' '}
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                                            fill
                                        />{' '}
                                    </g>
                                </svg>
                            </div>
                            <div className="text">
                                {selectedFile === null ? <span>Click to Change Medicine image</span> : <span className=" bg-[#0360D9] px-3 rounded-full">You have selected an image</span>}
                            </div>
                            <input id="file" type="file" onChange={handleFileChange} />
                        </label>
                    </div>

                    <input className="btn btn-block bg-[#0360D9] text-white" type="submit" value="Update Medicine" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
