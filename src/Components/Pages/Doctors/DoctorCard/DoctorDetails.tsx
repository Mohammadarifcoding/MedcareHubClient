import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DoctorDetails = () => {
    const [foundData, setFoundData] = useState();
    const { id } = useParams();
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

    return (
        <>

            <div className="bg-white p-8">
                <img src={foundData?.image} alt="" />
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
                    <button class=" items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-gray-200 text-gray-500">
                        Dental Filling
                    </button>
                    <button class=" items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-gray-200 text-gray-500">
                        Teeth Whitening
                    </button>
                </div>



                <div className="grid lg:grid-cols-2 gap-8 mt-10">
                    <div>
                        <h2 className="text-lg font-semibold mb-4">About Me</h2>
                        <p className="text-sm mb-4">
                            {foundData?.aboutMe}
                        </p>

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
                            {/* <li>{foundData?.service[0]}</li>
                                <li>{foundData?.service[1]}</li>
                                <li>{foundData?.service[2]}</li>
                                <li>{foundData?.service[3]}</li> */}

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

           
        </>
    );
};

export default DoctorDetails;