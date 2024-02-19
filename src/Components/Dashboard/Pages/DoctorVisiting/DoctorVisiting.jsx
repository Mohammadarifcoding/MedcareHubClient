import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
import UseAuth from '../../../../Hook/UseAuth.tsx';


const DoctorVisiting = () => {
    const axiosPublic = UseAxiosPublic();
    const { user } = UseAuth();

    const {
        data: bookings = [],
        refetch,
        isLoading
    } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/doctor-booking/${user?.email}`);
            return res.data;
        }
    });
    console.log(bookings);
    return (
        <>
            <div className="mt-5 ml-3 md:ml-0 md:my-5">
                <h1 className="text-2xl font-semibold">DoctorVisiting</h1>
                <p>Explore and mange All your Doctor Visiting effortlessly in one place.</p>
            </div>
            <div className="">
                {
                    
                }
            </div>
        </>
    );
};

export default DoctorVisiting;
