import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import UseAuth from '../../../../Hook/UseAuth.tsx';

const workdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
const DoctorDetails = () => {
    const [foundData, setFoundData] = useState();
    const { id } = useParams();
    const { user } = UseAuth();
    const [appointmentDate, setAppointmentDate] = useState("")
    const [patientInfo, setpatientInfo] = useState({})
    const navigate = useNavigate();
    console.log(user?.email)
    // console.log(id);
    console.log(foundData);

    useEffect(() => {
        fetch(`http://localhost:5000/Doctor/${id}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setFoundData(data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [id]);

    const handleCheckPatient = async () => {
        const res = await fetch(`http://localhost:5000/getPatient/${user?.email}`)
        const data = await res.json()

        if (!data.status)
            return;

        setpatientInfo(data?.data)
        document.getElementById('my_modal_5').showModal()

    } // Book korle arif bolsena patient and time r data eksathey add korte, kothay add korbo? I mean kon collection ey add korbo eta ask koro

    const handleAppointment = async () => {
        // Parse the selected appointment date
        const selectedDate = new Date(appointmentDate);

        // Get the selected day of the week
        const selectedDay = selectedDate.toLocaleDateString("en-US", { weekday: "long" });

        // Get the selected time
        const selectedTime = selectedDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });


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
        const patientData = {
            patient: patientInfo?._id,
            time: selectedTime,
            weekDay: selectedDay,
            doctor: foundData?._id
        }

        try {
            const res = await fetch("http://localhost:5000/doctor-booking", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(patientData)
            })
            const data = await res.json();

        } catch (error) {
            console.log(error);
        }

    };

    return (
        <>

            <div className="bg-white p-8">

                <div>

                    <div className="text-center">
                        <h1 className="text-4xl font-semibold">{foundData?.DocName}</h1>
                        <p className="text-xl">{foundData?.degree[1]} in {foundData?.degree[0]}</p>
                        <div className="flex justify-center items-center space-x-2 my-2">
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
                                className="text-yellow-400"
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
                                className="text-yellow-400"
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
                                className="text-yellow-400"
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
                                className="text-yellow-400"
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
                                className="text-gray-300"
                            >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <span>(35)</span>
                        </div>
                        <p className="text-sm text-gray-500">
                            {foundData?.Address} -{" "}
                            <a href="#" className="text-blue-600">
                                Get Directions
                            </a>
                        </p>
                    </div>
                </div>

                <div className="flex justify-center space-x-4">
                    <button className=" items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-gray-200 text-gray-500">
                        {foundData?.service[1]}
                    </button>
                    <button className=" items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-gray-200 text-gray-500">
                        {foundData?.service[2]}
                    </button>
                </div>



                <div className='lg:mx-[100px]'>
                    <div className='flex justify-between'>
                        <div>
                            <h2 className="text-lg font-semibold mb-4">About Me</h2>
                            <p className="text-sm mb-4">
                                {foundData?.aboutMe}
                            </p>
                        </div>
                        <div>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn w-28 bg-[#E1EEFF]" onClick={handleCheckPatient}>
                                Book Now</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h2 className='font-semibold text-xl mb-4'>Choose your Appointment Time</h2>
                                    <label htmlFor="description" className="mt-5">Describe your health status</label>
                                    <textarea name="" id="description" className="w-full min-h-[150px] border-2 border-gray-100 mt-2 pl-2 pt-2" placeholder="Description"></textarea>
                                    <label htmlFor="date" className='block mb-4'>Appointment Date</label>
                                    <input type="datetime-local" onChange={(e) => setAppointmentDate(e.target.value)} name="" id="date" className="" />
                                    <div className="modal-action">
                                        <form method="dialog" className='flex justify-between w-full'>
                                            <div>
                                                <button onClick={handleAppointment} className="btn bg-[#E1EEFF]">Appointment</button>
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

                    <div className='lg:flex justify-between'>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Contact</h3>
                            <p><span className='font-bold'>Phone:</span> {foundData?.Phone}</p>
                            <p><span className='font-bold'>Email:</span> {foundData?.Email}</p>
                            <p><span className='font-bold'>Address:</span> {foundData?.Address}</p>
                            <p><span className='font-bold'>Service Fee:</span> {foundData?.serviceFee} tk</p>

                            <h3 className="text-lg font-semibold my-2">Working Hour</h3>
                            <div className="flex gap-16 text-sm ">
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


                        <div>
                            <h3 className="text-lg font-semibold mb-2">Education</h3>
                            <p className="text-sm mb-4">
                                {foundData?.degree[1]} in {foundData?.degree[0]}
                            </p>
                            <h3 className="text-lg font-semibold mb-2">Services</h3>
                            <ul className="list-disc list-inside text-sm">
                                <li>{foundData?.service[0]}</li>
                                <li>{foundData?.service[1]}</li>
                                <li>{foundData?.service[2]}</li>
                                <li>{foundData?.service[3]}</li>

                            </ul>

                            <h2 className="text-lg font-semibold mb-4">Specializations</h2>
                            <ul className="list-disc list-inside text-sm">
                                <li>{foundData?.specialties[0]}</li>
                                <li>{foundData?.specialties[1]}</li>
                                <li>{foundData?.specialties[2]}</li>
                                <li>{foundData?.specialties[3]}</li>

                            </ul>
                        </div>
                    </div>

                </div>

            </div>


        </>
    );
};

export default DoctorDetails;