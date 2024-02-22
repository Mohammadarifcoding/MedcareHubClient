import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
import OrdersRow from './OrdersRow';

const Orders = () => {
    const axiosPublic = UseAxiosPublic();

    const {
        data: orders = [],
        refetch,
        isLoading
    } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/orders`);
            return res.data;
        }
    });
    // console.log(orders[0]);

    const handleDeleteOrder = (id) => {
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
            if (result.isConfirmed) {
                axiosPublic.delete(`/order/${id}`).then((res) => {
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Your Order has been deleted.',
                        icon: 'success'
                    });
                    refetch();
                });
            }
        });
    };

    return (
        <>
            <div className="mt-5 ml-3 md:ml-0 md:my-5">
                <h1 className="text-2xl font-semibold">All Orders</h1>
                <p>Explore and mange All your Orders effortlessly in one place.</p>
            </div>
            {!isLoading ? (
                orders?.length ? (
                    <div className="md:pt-0 pt-8 md:ml-4">
                        <div className="overflow-x-auto w-full rounded-lg">
                            <table className="table w-full ">
                                <thead className="bg-[#fafafad5] h-12 md:h-14 text-black text-sm lg:text-lg ">
                                    <tr className="text-center">
                                        <th> Name</th>
                                        <th> Mobile</th>
                                        <th>Order Address</th>
                                        <th>Products Name</th>
                                        <th>Quentity</th>
                                        <th className="text-center">Cencel</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-base-300 text-center">
                                    {orders?.map((user) => (
                                        <OrdersRow key={user?._id} user={user} handleDeleteOrder={handleDeleteOrder}></OrdersRow>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="text-center mx-auto col-span-1 md:col-span-2 lg:col-span-3 my-20 md:my-32 lg:my-40">
                        <h1 className="font-bold loading-10  text-3xl">
                            <span className="font-extrabold text-red-600"> Oops, </span> <br />
                            it seems like there are currently no <br /> Order has been added. Please <br /> Order to see them.
                        </h1>
                    </div>
                )
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

export default Orders;
