import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
import UseAuth from '../../../../Hook/UseAuth.tsx';
import DoctorVisitingItem from './DoctorVisitingItem.jsx';

const DoctorVisiting = () => {
    const axiosPublic = UseAxiosPublic();
    const { user } = UseAuth();

    const {
        data: bookings = [],
        refetch,
        isLoading
    } = useQuery({
        queryKey: ['bookings',user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/doctor-booking/${user?.email}`);
            return res.data;
        }
    });

    console.log(bookings);
    return (
        <>
            <div className="mt-5 ml-3 md:ml-0 md:mt-5">
                <h1 className="text-2xl font-semibold">DoctorVisiting</h1>
                <p>Explore and mange All your Doctor Visiting effortlessly in one place.</p>
            </div>
            {!isLoading ? (
                <div className="grid grid-cols-1 my-20 md:grid-cols-2  lg:grid-cols-3 gap-3 md:gap-5 lg:gap-8">
                    {bookings?.map((booking) => (
                        <DoctorVisitingItem booking={booking} refetch={refetch}></DoctorVisitingItem>
                    ))}
                </div>
            ) : (
                <div>
                    <div className="grid grid-cols-1 my-20 md:grid-cols-2  lg:grid-cols-3 gap-3 md:gap-5 lg:gap-8">
                        <div className="w-[400px] md:w-[300px] bg-slate-300/20 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md animate-pulse">
                            <div className="w-full h-[190px] bg-gray-400 rounded-2xl"></div>
                            <div className="space-y-2">
                                <div className="h-6 w-2/3 rounded bg-gray-300"></div>
                                <div className="flex gap-1">
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-between items-center font-medium">
                                <div className="h-6 w-1/4 rounded bg-gray-300"></div>
                                <div className="h-10 w-24  bg-gray-700 rounded-lg"></div>
                            </div>
                        </div>
                        <div className="w-[400px] md:w-[300px] bg-slate-300/20 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md animate-pulse hidden md:block">
                            <div className="w-full h-[190px] bg-gray-400 rounded-2xl"></div>
                            <div className="space-y-2">
                                <div className="h-6 w-2/3 rounded bg-gray-300"></div>
                                <div className="flex gap-1">
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-between items-center font-medium">
                                <div className="h-6 w-1/4 rounded bg-gray-300"></div>
                                <div className="h-10 w-24  bg-gray-700 rounded-lg"></div>
                            </div>
                        </div>
                        <div className="w-[400px] md:w-[300px] bg-slate-300/20 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md animate-pulse hidden lg:block">
                            <div className="w-full h-[190px] bg-gray-400 rounded-2xl"></div>
                            <div className="space-y-2">
                                <div className="h-6 w-2/3 rounded bg-gray-300"></div>
                                <div className="flex gap-1">
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-between items-center font-medium">
                                <div className="h-6 w-1/4 rounded bg-gray-300"></div>
                                <div className="h-10 w-24  bg-gray-700 rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-4 lg:grid-cols-3 gap-6">
                        <div className="w-[400px] md:w-[300px] bg-slate-300/20 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md animate-pulse">
                            <div className="w-full h-[190px] bg-gray-400 rounded-2xl"></div>
                            <div className="space-y-2">
                                <div className="h-6 w-2/3 rounded bg-gray-300"></div>
                                <div className="flex gap-1">
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-between items-center font-medium">
                                <div className="h-6 w-1/4 rounded bg-gray-300"></div>
                                <div className="h-10 w-24  bg-gray-700 rounded-lg"></div>
                            </div>
                        </div>
                        <div className="w-[400px] md:w-[300px] bg-slate-300/20 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md animate-pulse hidden md:block">
                            <div className="w-full h-[190px] bg-gray-400 rounded-2xl"></div>
                            <div className="space-y-2">
                                <div className="h-6 w-2/3 rounded bg-gray-300"></div>
                                <div className="flex gap-1">
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-between items-center font-medium">
                                <div className="h-6 w-1/4 rounded bg-gray-300"></div>
                                <div className="h-10 w-24  bg-gray-700 rounded-lg"></div>
                            </div>
                        </div>
                        <div className="w-[400px] md:w-[300px] bg-slate-300/20 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md animate-pulse hidden lg:block">
                            <div className="w-full h-[190px] bg-gray-400 rounded-2xl"></div>
                            <div className="space-y-2">
                                <div className="h-6 w-2/3 rounded bg-gray-300"></div>
                                <div className="flex gap-1">
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-between items-center font-medium">
                                <div className="h-6 w-1/4 rounded bg-gray-300"></div>
                                <div className="h-10 w-24  bg-gray-700 rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DoctorVisiting;
