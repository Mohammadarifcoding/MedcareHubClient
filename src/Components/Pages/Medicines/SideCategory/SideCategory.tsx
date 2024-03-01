import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
import { useMedicineContext } from '../MedicineContext/MedicineContext.tsx';

const SideCategory = ({ filter, setFilter }) => {
    const [medicines, setMedicines] = useState([]);
    const { setSelectedCategory } = useMedicineContext();
    // const [isLoading, setISLoading] = useState(true);
    const AxiousPublic = UseAxiosPublic();

    // useEffect(() => {
    //     setISLoading(true);
    //     fetch('http://localhost:5000/Medicines')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setMedicines(data);
    //             setISLoading(false);
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //         });
    // }, []);

    const { data: medicineData = [], isLoading } = useQuery({
        queryKey: ['medicines'],
        queryFn: async () => {
            const result = await AxiousPublic.get('/Medicines');
            return result.data;
        }
    });

    useEffect(() => {
        if (medicineData.length > 0) {
            setMedicines(medicineData);
        }
    }, [medicineData]);

    // console.log(medicineData);
    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        setFilter((previousValue) => ({
            ...previousValue,
            sortBy: category
        }));
    };

    return (
        <div className="flex items-stretch my-4 px-2">
            {!isLoading ? (
                <select
                    className="cursor-pointer w-full rounded-full border border-[#0360D9] focus:outline-none md:px-1 py-2 text-center text-[#0360D9]"
                    name="sortBy"
                    id="sortBy"
                    value={filter.sortBy}
                    onChange={handleCategoryChange}
                >
                    <option value="">Sort By Category</option>
                    {Array.from(new Set(medicines?.map((medicine) => medicine.Category))).map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            ) : (
                <div className=" rounded-md mx-auto max-w-fit ">
                    <div className="animate-pulse">
                        {/* Product Title Skeleton */}
                        <div className=" w-[100px] lg:w-[170px] h-10 rounded-lg bg-[#9FADC2] mb-4"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SideCategory;
