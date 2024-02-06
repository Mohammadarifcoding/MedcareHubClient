import Swal from 'sweetalert2';
import UseAuth from '../../../../Hook/UseAuth.tsx';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';

const AddProduct = () => {
    const { user } = UseAuth();
    const AxiousPublic = UseAxiosPublic();

    const handleAddMedicine = (event) => {
        event.preventDefault();
        const form = event.target;
        const ID = crypto.randomUUID();
        const companyEmail = form.email.value;
        const Medname = form.Medname.value;
        const Image = form.Image.value;
        const Company = form.Company.value;
        const Price = form.Price.value;
        const Category = form.Category.value;
        const Description = form.Description.value;

        const newMedicine = { ID, companyEmail, Image, Price, Medname, Company, Category, Description };
        // console.log(newMedicine);

        // send data to the server
        AxiousPublic.post('/Medicines', newMedicine)
            .then((response) => {
                // console.log('Data sent successfully:', response.data);
                if (response.data) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Medicine has been added!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })
            .catch((error) => {
                console.error('Error sending data:', error);
            });
    };

    return (
        <div className="mx-3">
            <div className="md:py-20 py-10 px-3">
                <h1 className="text-center font-extrabold mb-10 text-[#0360D9] text-2xl md:text-4xl">Add Medicine</h1>
                <form onSubmit={handleAddMedicine}>
                    <div className="md:flex gap-6 justify-center mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Company Email</span>
                            </label>
                            <label className="flex items-center">
                                <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white">Email</span>
                                <input type="text" name="email" defaultValue={user?.email} className="input rounded-r-md rounded-l-none w-full" readOnly />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Medicine Name</span>
                            </label>
                            <label className="flex items-center">
                                <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white">Title</span>
                                <input type="text" name="Medname" placeholder="Your Medicine Title" className="input rounded-r-md rounded-l-none w-full" required />
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
                                <input type="text" name="Image" placeholder="Enter Image URL" className="input rounded-r-md rounded-l-none w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Company Name</span>
                            </label>
                            <label className="flex items-center">
                                <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white">Company</span>
                                <input type="text" name="Company" placeholder="Enter Short description" className="input rounded-r-md rounded-l-none w-full" required />
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
                                <input type="number" name="Price" placeholder="Enter Medicine Price" className="input rounded-r-md rounded-l-none w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Medicine Category Name</span>
                            </label>
                            <label className="flex items-center">
                                <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white">Category</span>
                                <input type="text" name="Category" placeholder="Enter Medicine Category Name" className="input rounded-r-md rounded-l-none w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className="mb-8 w-full">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Medicine Description</span>
                            </label>
                            <textarea className="textarea rounded-md  w-full" name="Description" placeholder="Enter Short description" required></textarea>
                        </div>
                    </div>
                    <input className="btn btn-block bg-[#0360D9] text-white" type="submit" value="Add Medicine" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
