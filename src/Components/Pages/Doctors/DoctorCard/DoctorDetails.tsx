import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAuth from '../../../../Hook/UseAuth.tsx';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';

const workdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const DoctorDetails = () => {
    const [foundData, setFoundData] = useState();
    const { id } = useParams();
    const { user } = UseAuth();
    const [appointmentDate, setAppointmentDate] = useState('');
    const [description, setDescription] = useState('');
    const [patientInfo, setpatientInfo] = useState({});
    const navigate = useNavigate();
    const axiosPublic = UseAxiosPublic();
    // console.log(user?.email)
    console.log(id);

    useEffect(() => {
        if (id) {
            fetch(`https://medcarehubserverwebsite.vercel.app/Doctor/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    setFoundData(data);
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    }, [id]);
    console.log(foundData);

    const handleCheckPatient = async () => {
        const res = await fetch(`https://medcarehubserverwebsite.vercel.app/getPatient/${user?.email}`);
        const data = await res.json();

        if (!data.status) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You are not a patient',
                footer: '<a href="http://localhost:3000/dashboard/addpatient">Want to register as a patient?</a>'
            });
            return;
        }

        setpatientInfo(data?.data);
        document.getElementById('my_modal_5').showModal();
    }; // Book korle arif bolsena patient and time r data eksathey add korte, kothay add korbo? I mean kon collection ey add korbo eta ask koro
    console.log(patientInfo);


    function generateRandomId() {
        const min = 10000;
        const max = 60000;
        const number = Math.floor(Math.random() * (max - min + 1)) + min
        return number.toString();
    }
    
    // Example usage:
    const handleAppointment = async () => {
        // Parse the selected appointment date
        const selectedDate = new Date(appointmentDate);

        // Get the selected day of the week
        const selectedDay = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });

        // Get the selected time
        const selectedTime = selectedDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

        console.log(selectedDay, selectedTime, appointmentDate);
        // Check if the doctor is available on the selected day and time
        // const isAvailable = workdays.includes(selectedDay) &&
        //     selectedTime >= foundData?.startAvail + '.00' &&
        //     selectedTime <= foundData?.endAvail + '.00';

        // if (isAvailable) {
        //     alert("Appointment scheduled successfully!");
        // } else {
        //     alert("Doctor is not available at the selected date and time.");
        // }
        // console.log(patientInfo[0]?._id);
        const patientData = {
            patient: patientInfo[0]?._id,
            patientEmail: user?.email,
            time: selectedTime,
            weekDay: selectedDay,
            doctor: foundData?._id,
            ID: crypto.randomUUID(),
            MeetingId:generateRandomId(),
            appointmentDate: appointmentDate,
            description: description,
        };
        // console.log(patientData);
        try {
            const forumRes = await axiosPublic.post('/doctor-booking', patientData);
            // console.log(forumRes);
            if (forumRes.data) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `patient Booking successful!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.log(error.message);
        }
        // try {
        //     const res = await fetch("https://medcarehubserverwebsite.vercel.app/doctor-booking", {
        //         method: "POST",
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(patientData)
        //     });

        //     if (res.ok) {
        //         // If the response is successful, show a SweetAlert
        //         Swal("Success!", "Booking successful!", "success");
        //     } else {
        //         // If the response is not successful, handle the error
        //         Swal("Error!", "Booking failed!", "error");
        //     }

        //     // const data = await res.json();
        // } catch (error) {
        //     console.log(error);
        // }
    };

    return (
        <>
            <div>
                <div className="border max-w-[1500px] mx-auto my-10  bg-[#E1EEFF] p-4 rounded-lg shadow-md">
                    <div className="flex flex-col items-center space-x-10">
                        <div className="lg:w-44 lg:h-44 bg-gray-200 rounded-md">
                            <img className="lg:w-44 lg:h-44" src={foundData?.image} alt="" />
                        </div>
                        <div className="">
                            <div>
                                <h5 className="text-lg font-semibold my-2">{foundData?.DocName}</h5>
                                <p className="text-sm text-gray-500">{foundData?.DocType}</p>
                            </div>
                            <div className="flex items-center my-2">
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
                                    className="text-yellow-400 w-5 h-5"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
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
                                    className="text-yellow-400 w-5 h-5"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
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
                                    className="text-yellow-400 w-5 h-5"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
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
                                    className="text-yellow-400 w-5 h-5"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
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
                                    className="text-gray-300 w-5 h-5"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                                <span className="text-xs text-gray-500 ml-2">(16)</span>
                            </div>
                            <div className="text-xs text-gray-500">
                                <span>{foundData?.Address}</span>
                            </div>

                            <div className="flex justify-center space-x-4">
                                <button className=" items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-gray-200 text-gray-500">
                                    {foundData?.service[1]}
                                </button>
                                <button className=" items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-gray-200 text-gray-500">
                                    {foundData?.service[2]}
                                </button>
                            </div>

                            <div className='ml-24 mt-3 '>
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn w-28 bg-[#0360D9] text-white" onClick={handleCheckPatient}>
                                    Book Now
                                </button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h2 className="font-semibold text-xl mb-4">Choose your Appointment Time</h2>
                                        <label htmlFor="description" className="mt-5">
                                            Describe your health status
                                        </label>
                                        <textarea name="" id="description" className="w-full min-h-[150px] border-2 border-gray-100 mt-2 pl-2 pt-2" placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
                                        <label htmlFor="date" className="block mb-4">
                                            Appointment Date
                                        </label>
                                        <input type="datetime-local" onChange={(e) => setAppointmentDate(e.target.value)} name="" id="date" className="" />
                                        <div className="modal-action">
                                            <form method="dialog" className="flex justify-between w-full">
                                                <div>
                                                    <button onClick={handleAppointment} className="btn bg-[#E1EEFF]">
                                                        Appointment
                                                    </button>
                                                </div>
                                                {/* if there is a button in form, it will close the modal */}
                                                <div>
                                                    <button className="btn bg-[#E1EEFF]">Back</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>


                        </div>

                        <div className="max-w-[1500px] lg:mx-auto mx-5">

                            <div className='flex justify-between items-center text-gray-600' >
                                <div>
                                    <h2 className="lg:text-xl font-bold my-2 ">About Me</h2>
                                    <p className="text-sm mb-4  ">{foundData?.aboutMe}</p>
                                </div>

                            </div>

                            <div className="text-gray-600">
                                <h1 className="lg:text-xl font-bold my-2">Education</h1>
                                <p> {foundData?.degree[0]}</p>
                            </div>

                            <div className="lg:flex gap-96">
                                <div>
                                    <div className="text-gray-600">
                                        <h1 className="text-xl font-bold my-2">Contact info</h1>
                                        <h1 className="mt-2">Call: {foundData?.Phone}</h1>
                                        <h1 className="mt-2">{foundData?.Email}</h1>
                                        <h1 className="mt-2">{foundData?.Address}</h1>
                                        <h1 className="text-xl font-bold mt-6">Working hours</h1>
                                        <div className="flex gap-10">
                                            <div>
                                                <h1 className="mt-2">Monday - Friday</h1>
                                                <h1 className="mt-2">Saturday</h1>
                                                <h1 className="mt-2">Monday - Thusday</h1>
                                                <h1 className="mt-2">Monday - Friday</h1>
                                            </div>
                                            <div>
                                                <h1 className="mt-2">
                                                    {foundData?.startAvail}.00-{foundData?.endAvail}.00
                                                </h1>
                                                <h1 className="mt-2">
                                                    {foundData?.startAvail}.00-{foundData?.endAvail}.00
                                                </h1>
                                                <h1 className="mt-2">
                                                    {foundData?.startAvail}.00-{foundData?.endAvail}.00
                                                </h1>
                                                <h1 className="mt-2 mb-6">
                                                    {foundData?.startAvail}.00-{foundData?.endAvail}.00
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-gray-600">
                                    <div>
                                        <h1 className="lg:text-xl font-bold my-2">Specializations</h1>
                                        <ul className="list-disc mx-5">
                                            <li>{foundData?.specialties[0]}</li>
                                            <li>{foundData?.specialties[1]}</li>
                                            <li>{foundData?.specialties[2]}</li>
                                            <li>{foundData?.specialties[3]}</li>
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <h1 className="lg:text-xl font-bold my-2">Services</h1>
                                        <ul className="list-disc mx-5">
                                            <li>{foundData?.service[0]}</li>
                                            <li>{foundData?.service[1]}</li>
                                            <li>{foundData?.service[2]}</li>
                                            <li>{foundData?.service[3]}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DoctorDetails;
