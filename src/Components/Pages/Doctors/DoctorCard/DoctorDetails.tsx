import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DocotrsData from './../../../../Data/Doctor.ts';

const DoctorDetails = () => {
    const [foundData, setFoundData] = useState();
    const { id } = useParams();
    // console.log(id);

    useEffect(() => {
        // console.log(DocotrsData);
        const findData = DocotrsData?.find((item) => item.ID === id);
        // console.log(foundData);
        setFoundData(findData);
    }, [id]);

    return (
        <>

            <div>
                <div className="border max-w-[1500px] mx-auto my-10  bg-[#E1EEFF] p-4 rounded-lg shadow-md">
                    <div className="flex items-center space-x-10">
                        <div className="lg:w-44 lg:h-44 bg-gray-200 rounded-md">
                            <img className='lg:w-44 lg:h-44' src={foundData?.image} alt="" />
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

                            <div className="mt-4 flex space-x-2 lg:block hidden">
                                <button className=" rounded-full lg:px-3 p-1 font-semibold lg:text-lg bg-[#E1EEFF] hover:bg-[#0360D9] text-[#0360D9] hover:text-white border-2 border-[#0360D9]">
                                    {foundData?.specialties[0]}
                                </button>
                                <button className=" rounded-full lg:px-3 p-1 font-semibold lg:text-lg bg-[#E1EEFF] hover:bg-[#0360D9] text-[#0360D9] hover:text-white border-2 border-[#0360D9]">
                                    {foundData?.specialties[1]}
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className='max-w-[1500px] lg:mx-auto mx-5'>
                <div className='text-gray-600'>
                    <h1 className='lg:text-xl font-bold my-2'>About Me</h1>
                    <p>{foundData?.aboutMe}</p>
                </div>


                <div className='lg:flex gap-96 mb-10'>

                    <div className='text-gray-600'>
                        <div className='text-gray-600'>
                            <h1 className='lg:text-xl font-bold my-2'>Education</h1>
                            <p>{foundData?.degree[1]} in {foundData?.degree[0]}</p>
                        </div>
                        <div>
                            <h1 className='lg:text-xl font-bold my-2'>Specializations</h1>
                            <ul className='list-disc mx-5'>
                                <li>{foundData?.specialties[0]}</li>
                                <li>{foundData?.specialties[1]}</li>
                                <li>{foundData?.specialties[2]}</li>
                                <li>{foundData?.specialties[3]}</li>
                            </ul>
                        </div>

                        <div className='mt-6'>
                            <h1 className='lg:text-xl font-bold my-2'>Services</h1>
                            <ul className='list-disc mx-5'>
                                <li>{foundData?.service[0]}</li>
                                <li>{foundData?.service[1]}</li>
                                <li>{foundData?.service[2]}</li>
                                <li>{foundData?.service[3]}</li>

                            </ul>
                        </div>
                    </div>

                    <div >
                        <div className="text-gray-600">
                            <h1 className="text-xl font-bold my-2">Contact info</h1>
                            <h1 className="mt-2">Phone:  {foundData?.Phone}</h1>
                            <h1 className="mt-2">Email: {foundData?.Email}</h1>
                            <h1 className="mt-2">Address: {foundData?.Address}</h1>
                            <h1 className="text-xl font-bold mt-6">Working hours</h1>
                            <div className="flex gap-10">
                                <div>
                                    <h1 className="mt-2">Monday - Friday</h1>
                                    <h1 className="mt-2">Saturday</h1>
                                    <h1 className="mt-2">Monday - Thusday</h1>
                                    <h1 className="mt-2">Monday - Friday</h1>
                                </div>
                                <div>
                                    <h1 className="mt-2">{foundData?.startAvail}.00-{foundData?.endAvail}.00</h1>
                                    <h1 className="mt-2">{foundData?.startAvail}.00-{foundData?.endAvail}.00</h1>
                                    <h1 className="mt-2">{foundData?.startAvail}.00-{foundData?.endAvail}.00</h1>
                                    <h1 className="mt-2 mb-6">{foundData?.startAvail}.00-{foundData?.endAvail}.00</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            {/* <div className="mb-8 w-[95%] sm:w-[90%] md:w-[80%] lg:[70%] mx-auto lg:flex flex-row gap-20">
                <div
                    className="flex flex-col rounded-xl mb-8 w-full lg:w-[30%] border
         border-gray-200"
                >
                    <div className="lg:h-[500px] md:h-[800px]">
                        <img className="object-cover h-full w-full" src={foundData?.image} alt="" />
                    </div>
                    <div className="text-gray-600 mt-8 ml-12">
                        <h1 className="text-xl font-bold">Contact info</h1>
                        <h1 className="mt-2">Call: +01 489 2394 23</h1>
                        <h1 className="mt-2">afsana@gamil.com</h1>
                        <h1 className="mt-2">4th Floor, 408 No chamber</h1>
                        <h1 className="text-xl font-bold mt-6">Working hours</h1>
                        <div className="grid grid-cols-2 gap-16">
                            <div>
                                <h1 className="mt-2">Monday - Friday</h1>
                                <h1 className="mt-2">Saturday</h1>
                                <h1 className="mt-2">Monday - Thusday</h1>
                                <h1 className="mt-2">Monday - Friday</h1>
                            </div>
                            <div>
                                <h1 className="mt-2">{foundData?.startAvail}.00-{foundData?.endAvail}.00</h1>
                                <h1 className="mt-2">{foundData?.startAvail}.00-{foundData?.endAvail}.00</h1>
                                <h1 className="mt-2">{foundData?.startAvail}.00-{foundData?.endAvail}.00</h1>
                                <h1 className="mt-2 mb-6">{foundData?.startAvail}.00-{foundData?.endAvail}.00</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 w-full px-[7%] lg:w-[60%]">
                    <h1 className="text-3xl font-semibold text-black">{foundData?.DocName}</h1>
                    <h1 className="mt-2 mb-4">
                        {foundData?.degree[0]}
                        <br />
                        {foundData?.degree[1]} in {foundData?.degree[0]}
                    </h1>
                    <h1 className="text-3xl font-semibold mb-4 text-blue-600">Biography</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                        commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        <br /> <br />
                        Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                    <h1
                        className="text-3xl font-semibold mb-4 mt-4
                     text-blue-600"
                    >
                        Education
                    </h1>
                    <p>
                        PHD degree in Neorology at University of Mediserv (2006)
                        <br /> Master of Neoro Surgery at University of Mediserv (2002)
                        <br /> MBBS degree in Neurosciences at University of Mediserv (2002)
                        <br /> Higher Secondary Certificate at Mediserv collage (1991)
                    </p>
                    <h1
                        className="text-3xl font-semibold mb-4 mt-4
                     text-blue-600"
                    >
                        Research Interests:
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In addition to an illustrious career in clinical practice, Dr.Doctors Last Name has dedicated substantial time to
                        advancing the field of neurology through groundbreaking research. Their primary research interests include mention specific research areas, e.g., neurodegenerative diseases,
                        neuro-oncology, or neurological disorders in children.
                    </p>
                </div>
            </div> */}
        </>
    );
};

export default DoctorDetails;
