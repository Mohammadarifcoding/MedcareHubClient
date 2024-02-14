import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import MedicineData from '../../../../Data/Medicine.ts';
import UseAuth from '../../../../Hook/UseAuth.tsx';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
import UseCart from '../../../../Hook/UseCart.tsx';
import Cart from '../../../../assets/Icons/Cart.tsx';
import LoveFill from '../../../../assets/Icons/LoveFill.tsx';
import LoveLine from '../../../../assets/Icons/LoveLine.tsx';
import { useMedicineContext } from '../MedicineContext/MedicineContext.tsx';
import { uuidv4 } from '@firebase/util';
import axios from 'axios';
import { base_URL } from '../../../../utills/BaseURL.ts';

const MedicineItem = ({ filter }) => {
    const { user } = UseAuth();
    const [, refetch] = UseCart();
    const navigate = useNavigate();
    const [medicine, setMedicine] = useState([]);
    const [filteredMedicine, setFilteredMedicine] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [priceRange, setPriceRange] = useState(90);
    // const [isLoading, setISLoading] = useState(false);
    const { selectedCategory } = useMedicineContext();
    const AxiousPublic = UseAxiosPublic();


    const handlePriceChange = (event) => {
        setPriceRange(event.target.value);
    };

    useEffect(() => {
        const rangeMedicine = MedicineData.filter((item) => item.Price <= priceRange);
        setMedicine(rangeMedicine);
    }, [priceRange]);

    const handleToggleFavorite = (id) => {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter((medicineId) => medicineId !== id));
        } else {
            setFavorites([...favorites, id]);
        }
        axios.put(`${base_URL}/MedicineWish/${id}`)
            .then((res) => {
                console.log(res);
                Swal.fire("You added this in your wish List");

            })
            .catch((error) => console.error("Error updating status:", error));
    };

    const { data: medicineData = [], isLoading } = useQuery({
        queryKey: ['medicines'],
        queryFn: async () => {
            const result = await AxiousPublic.get('/Medicines');
            return result.data;
        }
    });

    useEffect(() => {
        if (medicineData.length > 0) {
            setMedicine(medicineData);
        }
    }, [medicineData]);


    useEffect(() => {
        const debounceFilter = setTimeout(() => {
            let tempFilteredMedicine = [...medicine];
            if (filter.keyword) {
                tempFilteredMedicine = tempFilteredMedicine?.filter((item) => item.Medname.toLowerCase().includes(filter.keyword.toLowerCase()));
            }
            if (selectedCategory) {
                tempFilteredMedicine = tempFilteredMedicine?.filter((item) => item.Category === selectedCategory);
            }

            if (filter.sortBy === 'price_asc') {
                tempFilteredMedicine = tempFilteredMedicine?.sort((a, b) => a.Price - b.Price);
            } else if (filter.sortBy === 'price_desc') {
                tempFilteredMedicine = tempFilteredMedicine?.sort((a, b) => b.Price - a.Price);
            }

            setFilteredMedicine(tempFilteredMedicine);
        }, 600);
        return () => clearTimeout(debounceFilter);
    }, [filter, medicine, selectedCategory]);


    const handleAddtoCart = (item) => {

        const cartItem = {
            medicineId: item?.ID,
            OrderId: uuidv4(),
            email: user?.email,
            medicine: item,
            quantity: 1
        };
        AxiousPublic.post('/CartMedicine', cartItem)
            .then((res) => {
                // console.log(res.data);
                if (res.data) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Medicine added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            }).catch(err => {
                console.log(err)
            })

    };

    const isFavorite = (id) => favorites.includes(id);


    const handleWishList = (data) => {
        console.log(data);

    }
    return (
        <>
            <div className="mx-2 space-y-2 mb-5 -mt-2 mr-5">
                <h1 className="text-xl font-bold text-center text-[#0360D9]">Set Price Range</h1>
                <input className="w-full range range-xs md:range-sm range-primary" type="range" value={priceRange} onChange={handlePriceChange} max={90} min={0} step={15} />
                <div className="w-full flex justify-between">
                    <span></span>
                    {[15, 30, 45, 60, 75, 90].map((step) => (
                        <span key={step} className="text-[#021526] text-xs font-bold hover:text-[#0360D9]">
                            ${step}
                        </span>
                    ))}
                </div>
            </div>
            {!isLoading ? (
                <div className="container mx-auto grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3">
                    {filteredMedicine?.map((medicine) => (
                        <div className="space-y-3 " key={medicine?._id}>
                            <div className="flex items-center justify-center rounded-md border border-[#0360D9]/30 bg-white p-4">
                                <Link to={`/detailsMed/${medicine.ID}`}>   <img className="max-w-[144px] h-40" src={medicine?.Image} alt={medicine?.Medname} /></Link>
                            </div>
                            <div className="space-y-3">
                                <div className="space-y-3 pl-2">
                                    <h4 className="text-lg font-bold lg:text-xl">{medicine?.Medname}</h4>
                                    <p className="text-xs lg:text-sm flex gap-2">
                                        <input type="checkbox" name="" id="" checked readOnly />
                                        By : <span>{medicine?.Company}</span>
                                    </p>
                                    <p className="text-xs lg:text-sm flex gap-2">
                                        <input type="checkbox" name="" id="" checked readOnly />
                                        Category : <span>{medicine?.Category}</span>
                                    </p>
                                    <Link to={`/company/${medicine?.Company}`}>
                                        <p className="text-sm mt-2 flex items-center cursor-pointer  hover:text-[#0360D9] hover:bg-white hover:rounded-xl hover:px-5">
                                            <svg viewBox="0 0 1024 1024" className="icon w-6 h-6 hover:bg-white" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M531.8 385v483.3h0.1V385h-0.1z" fill="#343535"></path>
                                                    <path
                                                        d="M670.9 497.1h86v16h-86zM670.9 625.1h86v16h-86zM233.9 241.1h86v16h-86zM384 241.1h86v16h-86zM233.9 369h86v16h-86zM384 369h86v16h-86zM234 497.5h86v16h-86zM384 497.2h86v16h-86z"
                                                        fill="#39393A"
                                                    ></path>
                                                    <path
                                                        d="M398.3 704.4c-11.9-11.9-28.4-19.3-46.5-19.3-36.2 0-65.8 29.6-65.8 65.8v117.4h20V750.9c0-12.2 4.8-23.6 13.5-32.3 8.7-8.7 20.2-13.5 32.3-13.5 12.2 0 23.6 4.8 32.3 13.5 8.7 8.7 13.5 20.2 13.5 32.3v117.4h20V750.9c0-18.1-7.4-34.5-19.3-46.5z"
                                                        fill="#E73B37"
                                                    ></path>
                                                    <path d="M575.8 429v437.9h0.1V429h-0.1zM286.2 868.3h131.6-131.6z" fill="#343535"></path>
                                                    <path
                                                        d="M896 868.3V385H575.9V111.6H128v756.7H64v44h896v-44h-64z m-364.1 0H172V155.6h359.9v712.7z m320.1-1.5H575.8V429H852v437.8z"
                                                        fill="#39393A"
                                                    ></path>
                                                </g>
                                            </svg>{' '}
                                            : {medicine.Company}
                                        </p>
                                    </Link>

                                    <div className="flex items-center justify-between">
                                        <h4 className="text-lg font-bold lg:text-xl">Price : ${medicine?.Price}</h4>
                                    </div>
                                </div>
                                <div className="flex  gap-3 text-xs lg:text-sm justify-between md:px-2">
                                    <button
                                        className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#0360D9] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5"
                                        onClick={() => handleAddtoCart(medicine)}
                                    >
                                        <Cart />
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={() => handleToggleFavorite(medicine?._id)}
                                        className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md ${isFavorite(medicine?._id) ? 'bg-[#DC2954]/[14%] text-[#0360D9] hover:bg-[#DC2954]/[24%]' : 'bg-[#0360D9]/[14%] text-[#1C4336] hover:bg-[#0360D9]/[24%]'
                                            } py-1.5 transition-all lg:py-1.5`}
                                    >
                                        {isFavorite(medicine?._id) ? <LoveFill /> : <LoveLine />}
                                        Favourite
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="w-[400px] md:w-[300px] bg-slate-300/20 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md animate-pulse">
                            <div className="w-full h-[190px] bg-gray-400 rounded-2xl"></div>
                            <div className="space-y-2">
                                <div className="h-6 w-2/3 rounded bg-gray-300"></div>
                                <div className="flex gap-1">
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-between items-center font-medium">
                                <div className="h-6 w-1/4 rounded bg-gray-300"></div>
                                <div className="h-10 w-24  bg-gray-700 rounded-lg"></div>
                            </div>
                        </div>
                        <div className="w-[400px] md:w-[300px] bg-slate-300/20 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md animate-pulse hidden md:block">
                            <div className="w-full h-[190px] bg-gray-400 rounded-2xl"></div>
                            <div className="space-y-2">
                                <div className="h-6 w-2/3 rounded bg-gray-300"></div>
                                <div className="flex gap-1">
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-between items-center font-medium">
                                <div className="h-6 w-1/4 rounded bg-gray-300"></div>
                                <div className="h-10 w-24  bg-gray-700 rounded-lg"></div>
                            </div>
                        </div>
                        <div className="w-[400px] md:w-[300px] bg-slate-300/20 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md animate-pulse hidden lg:block">
                            <div className="w-full h-[190px] bg-gray-400 rounded-2xl"></div>
                            <div className="space-y-2">
                                <div className="h-6 w-2/3 rounded bg-gray-300"></div>
                                <div className="flex gap-1">
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-between items-center font-medium">
                                <div className="h-6 w-1/4 rounded bg-gray-300"></div>
                                <div className="h-10 w-24  bg-gray-700 rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-4 lg:grid-cols-3 gap-6">
                        <div className="w-[400px] md:w-[300px] bg-slate-300/20 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md animate-pulse">
                            <div className="w-full h-[190px] bg-gray-400 rounded-2xl"></div>
                            <div className="space-y-2">
                                <div className="h-6 w-2/3 rounded bg-gray-300"></div>
                                <div className="flex gap-1">
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-between items-center font-medium">
                                <div className="h-6 w-1/4 rounded bg-gray-300"></div>
                                <div className="h-10 w-24  bg-gray-700 rounded-lg"></div>
                            </div>
                        </div>
                        <div className="w-[400px] md:w-[300px] bg-slate-300/20 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md animate-pulse hidden md:block">
                            <div className="w-full h-[190px] bg-gray-400 rounded-2xl"></div>
                            <div className="space-y-2">
                                <div className="h-6 w-2/3 rounded bg-gray-300"></div>
                                <div className="flex gap-1">
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-between items-center font-medium">
                                <div className="h-6 w-1/4 rounded bg-gray-300"></div>
                                <div className="h-10 w-24  bg-gray-700 rounded-lg"></div>
                            </div>
                        </div>
                        <div className="w-[400px] md:w-[300px] bg-slate-300/20 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md animate-pulse hidden lg:block">
                            <div className="w-full h-[190px] bg-gray-400 rounded-2xl"></div>
                            <div className="space-y-2">
                                <div className="h-6 w-2/3 rounded bg-gray-300"></div>
                                <div className="flex gap-1">
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                    <div className="h-4 w-4 rounded bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-between items-center font-medium">
                                <div className="h-6 w-1/4 rounded bg-gray-300"></div>
                                <div className="h-10 w-24  bg-gray-700 rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MedicineItem;
