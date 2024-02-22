import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import UseAuth from '../../../../Hook/UseAuth.tsx';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
import MyProductRow from './MyProductRow.tsx';

const MyProduct = () => {
    const AxiousPublic = UseAxiosPublic();
    const { user } = UseAuth();

    const {
        data: medicineData = [],
        isLoading,
        refetch
    } = useQuery({
        queryKey: ['userMedicines', user?.email],
        queryFn: async () => {
            if (user?.email) {
                const result = await AxiousPublic.get(`/Medicines`);
                const findData = await result.data.filter((medicine) => medicine.companyEmail === user?.email);
                return findData;
            }
        }
    });

    const handleDeleteMedicine = (id) => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result?.isConfirmed) {
                AxiousPublic.delete(`/Medicines/${id}`)
                    .then((res) => {
                        console.log(res.data);
                        if (res?.data?.deletedCount > 0) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: `Deleted!`,
                                text: `Medicine has been deleted`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        refetch();
                    })
                    .catch((error) => {
                        console.error('Error deleting CartMedicine:', error);
                    });
            }
        });
    };

    return (
        <>
            <div className="mt-5 ml-3 md:ml-0 md:my-5">
                <h1 className="text-2xl font-semibold">My Medicine</h1>
                <p>Explore and mange your medicine inventory effortlessly in one place.</p>
            </div>
            {!isLoading ? (
                <div className="md:pt-0 pt-8 md:ml-4">
                    {medicineData?.length !== 0 ? (
                        <div className="overflow-x-auto w-full rounded-lg">
                            <table className="table w-full ">
                                <thead>
                                    <tr className="bg-[#fafafad5] h-12 md:h-14 text-black text-sm lg:text-lg ">
                                        <th>Medicine Name</th>
                                        <th>Category</th>
                                        <th>Company</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className=" bg-base-300 ">
                                    {medicineData?.map((medicine) => (
                                        <MyProductRow key={medicine._id} medicine={medicine} handleDeleteMedicine={handleDeleteMedicine}></MyProductRow>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="text-center mx-auto col-span-1 md:col-span-2 lg:col-span-3 my-20 md:my-32 lg:my-40">
                            <h1 className="font-bold loading-10  text-3xl">
                                <span className="font-extrabold text-red-600"> Oops, </span> <br />
                                it seems like there are currently no <br /> Medicine has been added. Please <br /> add new Medicine to see them.
                            </h1>
                        </div>
                    )}
                </div>
            ) : (
                <div className="space-y-14">
                    <div className=" w-full animate-pulse bg-[#657287] flex justify-center flex-col items-start mx-auto p-6 rounded-md shadow-xl">
                        {/* User profile  Skeleton */}
                        <div className="w-full flex gap-2 items-center">
                            <div className="w-16 h-16 rounded-full bg-[#9FADC2] animate-pulse"></div>
                            <div className="w-[80%]">
                                <div className="w-[30%] rounded-full bg-[#9FADC2] h-[15px] mb-3"></div>
                                <div className="w-[40%] rounded-full bg-[#9FADC2] h-[15px]"></div>
                            </div>
                        </div>
                        {/* user post skeleton */}
                        <div className="mt-8 w-full">
                            <div className="w-full rounded-full bg-[#9FADC2] h-[15px] mb-3"></div>
                            <div className="w-[90%] rounded-full bg-[#9FADC2] h-[15px]"></div>
                        </div>
                    </div>
                    <div className=" w-full animate-pulse bg-[#657287] flex justify-center flex-col items-start mx-auto p-6 rounded-md shadow-xl">
                        {/* User profile  Skeleton */}
                        <div className="w-full flex gap-2 items-center">
                            <div className="w-16 h-16 rounded-full bg-[#9FADC2] animate-pulse"></div>
                            <div className="w-[80%]">
                                <div className="w-[30%] rounded-full bg-[#9FADC2] h-[15px] mb-3"></div>
                                <div className="w-[40%] rounded-full bg-[#9FADC2] h-[15px]"></div>
                            </div>
                        </div>
                        {/* user post skeleton */}
                        <div className="mt-8 w-full">
                            <div className="w-full rounded-full bg-[#9FADC2] h-[15px] mb-3"></div>
                            <div className="w-[90%] rounded-full bg-[#9FADC2] h-[15px]"></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MyProduct;
