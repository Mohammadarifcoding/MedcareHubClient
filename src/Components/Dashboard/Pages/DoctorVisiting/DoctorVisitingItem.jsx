import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const DoctorVisitingItem = ({ booking, refetch }) => {
    const { _id, doctor, patient, patientEmail, time, weekDay, appointmentDate } = booking;
    const axiosPublic = UseAxiosPublic();

    const { data: doctorData = [] } = useQuery({
        queryKey: ['doctor',doctor],
        queryFn: async () => {
            const res = await axiosPublic.get(`/Doctor/${doctor}`);
            // console.log(res.data);
            return res.data;
        }
    });
    // console.log('doctor', doctor);
    // console.log('doctorData', doctorData);
    const { data: patientData = [] } = useQuery({
        queryKey: ['Patient',patient],
        queryFn: async () => {
            const res = await axiosPublic.get(`/Patients/${patient}`);
            // console.log(res.data);
            return res.data;
        }
    });
    // console.log('patient', patient);
    // console.log('patientData', patientData);

    const handleDeleteAppointment = (id) => {
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
                axiosPublic.delete(`/doctor-booking/${id}`).then((res) => {
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Your appointment has been deleted.',
                        icon: 'success'
                    });
                    refetch();
                });
            }
        });
    };

    return (
        <div className=" space-y-4 rounded-lg  p-6 shadow-lg w-full bg-white">
            <img alt="Product" className="w-[350px] h-[275px] object-cover  rounded-lg " src={doctorData?.image} />
            <div className="grid gap-2">
                <h1 className="text-lg font-medium ">Doctor Name: {doctorData?.DocName}</h1>
                <h1 className="text-lg font-medium ">Patient Name: {patientData?.patientName}</h1>
                <p className="text-sm font-medium  text-gray-500 dark:text-gray-400">Appointment Date: {appointmentDate}</p>
                <p className="text-sm font-medium  text-gray-500 dark:text-gray-400">
                    Time: {weekDay}, {time}
                </p>
                <p className="text-sm font-medium  text-gray-500 dark:text-gray-400">Patient Status: {patientData?.status}</p>
            </div>
            <div className="flex gap-4">
                <button className="px-6 py-2 bg-[#0360D9] text-white rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-[#032ad9d2]" onClick={() => handleDeleteAppointment(_id)}>
                    Cencel
                </button>
                <Link to={`/dashboard/doctorvisiting/${_id}`}>
                    <button className="px-4 py-2 bg-white hover:bg-[#0360D9] hover:text-white border-black border duration-300 rounded-md">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default DoctorVisitingItem;
