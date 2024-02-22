import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAuth from '../../../../Hook/UseAuth.tsx';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';

const DoctorVisitingDetails = () => {
    const { id } = useParams();
    console.log(id);
    const axiosPublic = UseAxiosPublic();
    const navigate = useNavigate();
    const { user } = UseAuth();

    const { data: booking = [], isLoading } = useQuery({
        queryKey: ['bookData'],
        queryFn: async () => {
            if (id) {
                const res = await axiosPublic.get(`/booking/${id}`);
                return res.data;
            }
        }
    });
    console.log('booking', booking);

    const { data: doctor = [] } = useQuery({
        queryKey: ['bookdoctor', booking?.doctor],
        queryFn: async () => {
            if (booking && booking.doctor) {
                const res = await axiosPublic.get(`/Doctor/${booking.doctor}`);
                // console.log(res.data);
                return res.data;
            }
            // Return a default value if booking or booking.doctor is falsy
            return null;
        }
    });
    // console.log('doctor', booking?.doctor);
    console.log('doctorData', doctor);

    const { data: patient = [] } = useQuery({
        queryKey: ['bookpatient', booking?.patient],
        queryFn: async () => {
            if (booking && booking.patient) {
                const res = await axiosPublic.get(`/Patients/${booking.patient}`);
                // console.log(res.data);
                return res.data;
            }
            // Return a default value if booking or booking.patient is falsy
            return null;
        }
    });
    // console.log('patient', booking?.patient);
    console.log('patientData', patient);

    const handleDeleteAppointment = (_id) => {
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
                axiosPublic.delete(`/doctor-booking/${_id}`).then((res) => {
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Your appointment has been deleted.',
                        icon: 'success'
                    });
                    navigate('/dashboard/doctorvisiting');
                });
            }
        });
    };

    return (
        <div className="rounded-lg  p-6 shadow-lg w-full space-y-6">
            <div className="grid gap-2 text-center space-y-6">
                <div className="flex justify-center  md:justify-evenly flex-col md:flex-row  items-center text-center space-y-6">
                    <div className="flex  items-center gap-2">
                        <img
                            className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] bg-slate-500 object-cover rounded-full hover:blur-[1px] duration-500"
                            src={doctor?.image}
                            alt="Doctor"
                        />
                        <h1 className="text-lg font-medium ">Doctor : {doctor?.DocName}</h1>
                    </div>
                    <div className=" border-b-2 h-2 w-60 md:border-b-0 md:border-r-2 border-[#0360D9] md:w-2 md:h-20 lg:h-28">{/* <span>hi</span> */}</div>
                    <div className="flex  items-center gap-2">
                        <img
                            className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] bg-slate-500 object-cover rounded-full hover:blur-[1px] duration-500"
                            src={patient?.Image}
                            alt="Patient"
                        />
                        <h1 className="text-lg font-medium ">Patient : {patient?.patientName}</h1>
                    </div>
                </div>
                <p className="text-sm font-medium  text-gray-500 dark:text-gray-400">Appointment : {booking?.appointmentDate}</p>
                <p className="text-sm font-medium  text-gray-500 dark:text-gray-400">
                    Time : {booking?.weekDay}, {booking?.time}
                </p>
                <p className="text-sm font-medium  text-gray-500 dark:text-gray-400"> Patient Issue : {booking?.description}</p>
                <p className="text-sm font-medium  text-gray-500 dark:text-gray-400">Patient Status : {patient?.status}</p>
            </div>
            <div className="flex gap-4 justify-center">
                <button className="px-6 py-2 bg-[#0360D9] text-white rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-[#032ad9d2]" onClick={() => handleDeleteAppointment(id)}>
                    Cencel
                </button>
            </div>
        </div>
    );
};

export default DoctorVisitingDetails;
