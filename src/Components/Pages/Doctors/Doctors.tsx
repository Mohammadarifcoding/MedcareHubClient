import React, { useState } from 'react';

// import component 👇
import { motion } from 'framer-motion';
import Drawer from 'react-modern-drawer';
//import styles 👇
import { useQuery } from '@tanstack/react-query';
import 'react-modern-drawer/dist/index.css';
import UseAxiosPublic from '../../../Hook/UseAxiosPublic.tsx';
import DoctorCard from './DoctorCard/DoctorCard.tsx';

const Doctors = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [filter, setFilter] = useState({
        keyword: '',
        docTypes: [],
        genders: [],
        priceRange: {
            min: '',
            max: ''
        }
    });

    const AxiousPublic = UseAxiosPublic();

    const { data: doctorData = [], isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const result = await AxiousPublic.get('/Doctors');
            return result.data;
        }
    });

    const linkVariants = {
        hover: {
            scale: 1.1,
            transition: { duration: 0.2 }
        }
    };

    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleCheckboxChange = (docType) => {
        setFilter((prevFilter) => {
            const updatedDocTypes = prevFilter.docTypes.includes(docType) ? prevFilter.docTypes.filter((type) => type !== docType) : [...prevFilter.docTypes, docType];

            return {
                ...prevFilter,
                docTypes: updatedDocTypes
            };
        });
    };

    const handleGenderCheckboxChange = (gender) => {
        setFilter((prevFilter) => {
            const updatedGenders = gender === 'all' ? [] : prevFilter.genders.includes(gender) ? prevFilter.genders.filter((gen) => gen !== gender) : [...prevFilter.genders, gender];

            return {
                ...prevFilter,
                genders: updatedGenders
            };
        });
    };

    return (
        <div className="flex container lg:mx-auto  gap-10 justify-between">
            <div className="mt-10 xl:w-[20%] w-0 xl:block hidden">
                <h1 className="text-2xl font-semibold text-[#0360D9] ">Filters</h1>
                <hr className="my-4" />
                <h1 className="text-xl font-medium ">Category</h1>
                <hr className="my-4" />
                <div className="mb-3">
                    {!isLoading ? (
                        Array.from(new Set(doctorData?.map((doctor) => doctor.DocType)))?.map((docType) => (
                            <div key={docType} className="flex gap-2">
                                <input type="checkbox" name={docType} id={docType} checked={filter.docTypes.includes(docType)} onChange={() => handleCheckboxChange(docType)} />
                                <p>{docType}</p>
                            </div>
                        ))
                    ) : (
                        <div className="p-6 rounded-md  mx-auto max-w-fit ">
                            <div className="animate-pulse">
                                {/* Product Title Skeleton */}
                                <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Heading Skeleton */}
                                <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Description Skeleton */}
                                <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Heading Skeleton */}
                                <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Description Skeleton */}
                                <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Heading Skeleton */}
                                <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Description Skeleton */}
                                <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Description Skeleton */}
                                <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Heading Skeleton */}
                                <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Description Skeleton */}
                                <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Description Skeleton */}
                                <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Heading Skeleton */}
                                <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Description Skeleton */}
                                <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                            </div>
                        </div>
                    )}
                </div>
                <h1 className="text-xl font-medium ">Session Price</h1>
                <hr className="my-4" />
                <div className="flex items-center my-3">
                    <input
                        placeholder="min"
                        className="border focus:outline-none px-2 rounded-lg w-[70px]"
                        type="text"
                        name="minPrice"
                        id="minPrice"
                        value={filter.priceRange.min}
                        onChange={(e) => setFilter((prevFilter) => ({ ...prevFilter, priceRange: { ...prevFilter.priceRange, min: e.target.value } }))}
                    />

                    <p className="mx-3">-</p>

                    <input
                        placeholder="max"
                        className="border focus:outline-none px-2 rounded-lg w-[70px]"
                        type="text"
                        name="maxPrice"
                        id="maxPrice"
                        value={filter.priceRange.max}
                        onChange={(e) => setFilter((prevFilter) => ({ ...prevFilter, priceRange: { ...prevFilter.priceRange, max: e.target.value } }))}
                    />
                    <motion.button whileHover="hover" variants={linkVariants} className="bg-[#0360D9] ml-3 p-2 rounded-lg text-white" onClick={() => setIsButtonClicked(true)}>
                        Apply
                    </motion.button>
                </div>
                <div>
                    <h1 className="text-xl font-medium">Gender</h1>
                    <hr className="my-4" />
                    <div className="mb-3">
                        {['Male', 'Female', 'All'].map((gender) => (
                            <div key={gender} className="flex gap-2">
                                <input
                                    type="checkbox"
                                    name={gender}
                                    id={gender}
                                    checked={filter.genders.includes(gender.toLowerCase())}
                                    onChange={() => handleGenderCheckboxChange(gender.toLowerCase())}
                                />
                                <p>{gender}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="xl:w-[80%] w-full">
                <div className="mt-10 mx-5 flex items-center">
                    <fieldset className="w-full space-y-1 ">
                        <label className="hidden">Search</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 text-[#0360D9]  flex items-center pl-2">
                                <button type="button" title="search" className="p-1">
                                    <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 ">
                                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                    </svg>
                                </button>
                            </span>
                            <input
                                type="search"
                                name="Search"
                                placeholder="Search doctor..."
                                value={filter.keyword}
                                required
                                onChange={(e) =>
                                    setFilter((previousValue) => ({
                                        ...previousValue,
                                        keyword: e.target.value
                                    }))
                                }
                                className="w-48 py-2 pl-10 text-sm rounded-full border-[#0360D9] text-[#0360D9] focus:outline-none lg:w-[400px] border"
                            />
                        </div>
                    </fieldset>

                    <button onClick={toggleDrawer} className="w-36 h-10 ml-3 border-2 lg:hidden border-sky-300 text-sky-800 font-black rounded-full hover:text-white duration-300 relative group">
                        <span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>
                        Filter
                    </button>

                    {/* <button onClick={toggleDrawer} className="btn-sm lg:hidden bg-[#0360D9]  rounded-full text-white">
                        Filter
                    </button> */}
                    <Drawer open={isOpen} onClose={toggleDrawer} direction="left" className="bla bla bla">
                        <div className="mt-5 ml-5 lg:hidden">
                            <h1 className="text-2xl font-semibold">Filters</h1>
                            <hr className="my-4" />
                            <h1 className="text-xl font-medium ">Category</h1>
                            <hr className="my-4" />
                            <div className="mb-3">
                                {!isLoading ? (
                                    Array.from(new Set(doctorData?.map((doctor) => doctor.DocType)))?.map((docType) => (
                                        <div key={docType} className="flex gap-2">
                                            <input type="checkbox" name={docType} id={docType} checked={filter.docTypes.includes(docType)} onChange={() => handleCheckboxChange(docType)} />
                                            <p>{docType}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-6 rounded-md  mx-auto max-w-fit ">
                                        <div className="animate-pulse">
                                            {/* Product Title Skeleton */}
                                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                            {/* Product Heading Skeleton */}
                                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                            {/* Product Description Skeleton */}
                                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                            {/* Product Heading Skeleton */}
                                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                            {/* Product Description Skeleton */}
                                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                            {/* Product Heading Skeleton */}
                                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                            {/* Product Description Skeleton */}
                                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                            {/* Product Description Skeleton */}
                                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                            {/* Product Heading Skeleton */}
                                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                            {/* Product Description Skeleton */}
                                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                            {/* Product Description Skeleton */}
                                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                            {/* Product Heading Skeleton */}
                                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                            {/* Product Description Skeleton */}
                                            <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <h1 className="text-xl font-medium ">Session Price</h1>
                            <hr className="my-4" />
                            <div className="flex items-center my-3">
                                <input placeholder="mini" className="border rounded-lg w-[70px]" type="text" name="" id="" />
                                <p className="mx-3">-</p>
                                <input placeholder="maxi" className="border rounded-lg w-[70px]" type="text" name="" id="" />
                            </div>
                            <button className="bg-[#0360D9]  p-2 btn-sm rounded-lg text-white">Apply</button>

                            <div>
                                <h1 className="text-xl font-medium mt-2">Gender</h1>
                                <hr className="my-4" />
                                <div className="flex gap-2">
                                    <input type="checkbox" name="" id="" />
                                    <p>Male</p>
                                </div>
                                <div className="flex gap-2">
                                    <input type="checkbox" name="" id="" />
                                    <p>Female</p>
                                </div>
                            </div>
                        </div>
                    </Drawer>
                </div>
                <div className="text-center my-10">
                    <h1 className="lg:text-4xl text-2xl font-bold ">Our Expert Doctors</h1>
                    <p className="text-lg">Meet our doctor—a beacon of knowledge, a guardian of health, and a partner in your wellness journey.</p>
                </div>
                <div className="md:mx-4 xl:w-[100%] w-full ">
                    <DoctorCard filter={filter} setFilter={setFilter} isButtonClicked={isButtonClicked}></DoctorCard>
                </div>
            </div>
        </div>
    );
};

export default Doctors;
