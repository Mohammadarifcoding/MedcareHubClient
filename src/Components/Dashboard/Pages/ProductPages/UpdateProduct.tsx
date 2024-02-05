import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const { id } = useParams();
    const AxiousPublic = UseAxiosPublic();
    const navigate = useNavigate();

    const { data: matchData = [] } = useQuery({
        queryKey: ['matchMedicine', id],
        queryFn: async () => {
            const result = await AxiousPublic.get(`/Medicine/${id}`);
            return result.data;
        }
    });

    // console.log(matchData);

    const handleUpdateMedicine = (event) => {
        event.preventDefault();
        const form = event.target;
        const Medname = form.Medname.value;
        const Image = form.Image.value;
        const Company = form.Company.value;
        const Price = form.Price.value;
        const Category = form.Category.value;
        const Description = form.Description.value;

        const updateMedicine = { Image, Price, Medname, Company, Category, Description };
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
                    <input className="btn btn-block bg-[#0360D9] text-white" type="submit" value="Update Medicine" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
