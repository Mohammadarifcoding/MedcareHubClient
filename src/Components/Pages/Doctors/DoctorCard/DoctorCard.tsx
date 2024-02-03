import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
import { useQuery } from '@tanstack/react-query';

const DoctorCard = ({ filter, setFilter, isButtonClicked }) => {
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const AxiousPublic = UseAxiosPublic();

    const { data: doctorData = [], isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const result = await AxiousPublic.get('/Doctors');
            return result.data;
        }
    });
  
    useEffect(() => {
        const debounceFilter = setTimeout(() => {
            let tempFilteredDoctors = [...doctorData];
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
                    tempFilteredDoctors = tempFilteredDoctors.filter((item) => item.serviceFee >= parseFloat(filter.priceRange.min) && item.serviceFee <= parseFloat(filter.priceRange.max));
                }
            }

            setFilteredDoctors(tempFilteredDoctors);
        }, 600);
        return () => clearTimeout(debounceFilter);
    }, [filter, doctorData, isButtonClicked]);
    //    console.log(filteredDoctors)

    return (
        <>
            {!isLoading ? (
                <div className="container mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:gap-6 my-10 ">
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
                                        <span className="text-sm text-[#1F2937] ">${data.serviceFee} per visit</span>
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
                    ))}
                </div>
            ) : (
                <div className="grid w-full xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:gap-6 my-10">
                    <div className="p-6 rounded-md shadow-md mx-auto max-w-fit bg-[#657287] ">
                        <div className="animate-pulse">
                            <div className="w-[200px] lg:h-52 md:h-52 h-48 rounded-lg bg-[#9FADC2] mb-6"></div>
                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                        </div>
                    </div>
                    <div className="p-6 rounded-md shadow-md mx-auto max-w-fit bg-[#657287] ">
                        <div className="animate-pulse">
                            <div className="w-[200px] lg:h-52 md:h-52 h-48 rounded-lg bg-[#9FADC2] mb-6"></div>
                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                        </div>
                    </div>
                    <div className="p-6 rounded-md shadow-md mx-auto max-w-fit bg-[#657287] ">
                        <div className="animate-pulse">
                            <div className="w-[200px] lg:h-52 md:h-52 h-48 rounded-lg bg-[#9FADC2] mb-6"></div>
                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                        </div>
                    </div>
                    <div className="p-6  rounded-md shadow-md mx-auto max-w-fit bg-[#657287]  hidden xl:block">
                        <div className="animate-pulse">
                            <div className="w-[200px] lg:h-52 md:h-52 h-48 rounded-lg bg-[#9FADC2] mb-6"></div>
                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DoctorCard;
