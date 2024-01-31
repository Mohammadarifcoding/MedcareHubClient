import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DoctorCard = ({ filter, setFilter, isButtonClicked }) => {
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    useEffect(() => {
        fetch('https://medcarehubendgame.vercel.app/Doctors')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setDoctors(data)
            })
            .catch((error) => {
                console.log(error.message);
              });
    }, []);

    useEffect(() => {
        const debounceFilter = setTimeout(() => {
            let tempFilteredDoctors = [...doctors];
            if (filter.keyword) {
                tempFilteredDoctors = tempFilteredDoctors?.filter((item) => item.DocName.toLowerCase().includes(filter.keyword.toLowerCase()));
            }
            if (filter.docTypes.length > 0) {
                tempFilteredDoctors = tempFilteredDoctors?.filter((item) => filter.docTypes.includes(item.DocType));
            }
            if (filter.genders.length > 0) {
                tempFilteredDoctors = tempFilteredDoctors?.filter((item) => filter.genders.includes(item.gender.toLowerCase()));
            }

            if (isButtonClicked) {
                if (filter.priceRange.min !== '' && filter.priceRange.max !== '') {
                    tempFilteredDoctors = tempFilteredDoctors.filter((item) => item.visit >= parseFloat(filter.priceRange.min) && item.visit <= parseFloat(filter.priceRange.max));
                }
            }

            setFilteredDoctors(tempFilteredDoctors);
        }, 600);
        return () => clearTimeout(debounceFilter);
    }, [filter, doctors, isButtonClicked]);

    return (
        <div className="grid w-full xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:gap-6 my-10">
            {filteredDoctors?.map((data) => (
                <div key={data.ID} className=" w-full max-w-[350px] shadow-lg border border-gray-200 rounded-lg overflow-hidden">
                    <Link to={`/doctors/${data.ID}`}>
                        <div className="flex-col space-y-1.5 flex items-center gap-4 p-6 bg-[#E1EEFF] ">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full w-14 h-14">
                                <img src={data.image} alt="" />
                            </span>
                            <div className="space-y-1">
                                <h3 className=" text-lg font-semibold text-[#0360D9]">{data.DocName}</h3>
                                <p className="text-sm text-[#1F2937] ">{data.DocType}</p>
                            </div>
                            LN
                        </div>
                        <div className="grid gap-2 p-6">
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4 text-[#1F2937] dark:text-gray-400"
                                >
                                    <line x1={12} x2={12} y1={2} y2={22} />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                                <span className="text-sm text-[#1F2937] ">${data.visit} per visit</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4 text-[#1F2937] dark:text-gray-400"
                                >
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                </svg>
                                <span className="text-sm text-[#1F2937] ">{data?.gender}</span>
                            </div>
                            <div className="flex items-center gap-2" />
                        </div>
                    </Link>
                </div>
                // <div key={data.ID}>
                //     <div className="max-w-[350px] mx-auto bg-white border  border-gray-200 rounded-lg shadow">
                //         <figure className="px-3 pt-4">
                //             <img className="transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1 rounded-t-lg h-[200px] w-[500px]  lg:w-[700px]" src={data.image} alt="" />
                //         </figure>

                //         <div className="px-3 py-2">
                //             <a href="#">
                //                 <h5 className="lg: lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.DocName}</h5>
                //             </a>
                //             <p className="mb-3 font-normal lg:text-lg text-sm text-gray-700 dark:text-gray-400">{data.DocType}</p>
                //             <hr className="my-4" />

                //             <p className="flex items-center lg:text-lg text-sm gap-3"><SlCalender />Available {data.startAvail >= 12 ? data.startAvail % 12 : data.startAvail} {data.startAvail >= 12 ? 'PM' : 'AM'} to {data.endAvail >= 12 ? data.endAvail % 12 : data.endAvail} {data.endAvail >= 12 ? 'PM' : 'AM'}</p>

                //             <p className="flex items-center gap-3 lg:text-lg text-sm my-2"><TbCoinTaka />{data.serviceFee}</p>

                //             <p className="flex items-center gap-3 lg:text-lg text-sm my-2"><TbGenderGenderqueer /> {data.gender}</p>

                //             <motion.button whileHover="hover"  variants={linkVariants}  className="btn bg-[#0360D9] hover:bg-[#0360D9] text-white  w-full">View Profile</motion.button>
                //         </div>
                //     </div>
                // </div>
            ))}
        </div>
    );
};

export default DoctorCard;
