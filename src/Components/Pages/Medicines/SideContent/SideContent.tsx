import React, { useEffect, useState } from 'react';
import bestPrice from '../../../../assets/Images/best-price.png';
import Authentic from '../../../../assets/Images/brands.png';
import cashon from '../../../../assets/Images/cash-delivery.png';
import freeDelivary from '../../../../assets/Images/free-delivery.png';
import hotDeals from '../../../../assets/Images/hot-deals.png';
import installment from '../../../../assets/Images/installments.png';
import verified from '../../../../assets/Images/verified.png';
const SideContent = () => {
    const [medicines, setMedicines] = useState([]);
    const [isLoading, setISLoading] = useState(true);

    useEffect(() => {
        setISLoading(true);
        fetch('https://medcarehubendgame.vercel.app/Medicines')
            .then((res) => res.json())
            .then((data) => {
                setMedicines(data);
                setISLoading(false);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    return (
        <div className=" space-y-10">
            <div className="mx-2 space-y-3">
                <h1 className="text-xl">Promotion & Services</h1>
                <hr />
                <div className="flex md:flex-col lg:flex-row mt-4 gap-1 ">
                    <div className="flex items-center border w-full  hover:border-[#0360D9] rounded-lg gap-1">
                        <div className="avatar">
                            <div className="w-6 rounded">
                                <img src={freeDelivary} alt="Tailwind-CSS-Avatar-component" />
                            </div>
                        </div>
                        <small className="text-[#2E2E2E]">Free Delivery</small>
                    </div>
                    <div className="flex items-center border w-full px-1  hover:border-[#0360D9] rounded-lg gap-1">
                        <div className="avatar">
                            <div className="w-4 rounded">
                                <img src={hotDeals} alt="Tailwind-CSS-Avatar-component" />
                            </div>
                        </div>
                        <small className="text-[#2E2E2E]">Hot Deals</small>
                    </div>
                </div>
                <div className="flex items-center border w-full px-1  hover:border-[#0360D9] rounded-lg gap-1">
                    <div className="avatar">
                        <div className="w-4 rounded">
                            <img src={bestPrice} alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                    <small className="text-[#2E2E2E]">Best Price Guaranteed</small>
                </div>
                <div className="flex items-center border w-full px-1  hover:border-[#0360D9] rounded-lg gap-1">
                    <div className="avatar">
                        <div className="w-4 rounded">
                            <img src={Authentic} alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                    <small className="text-[#2E2E2E]">Authentic Brands</small>
                </div>
                <div className="flex items-center border w-full px-1  hover:border-[#0360D9] rounded-lg gap-1">
                    <div className="avatar">
                        <div className="w-4 rounded">
                            <img src={verified} alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                    <small className="text-[#2E2E2E]">MediCure Verified</small>
                </div>
                <div className="flex items-center border w-full px-1  hover:border-[#0360D9] rounded-lg gap-1">
                    <div className="avatar">
                        <div className="w-4 rounded">
                            <img src={cashon} alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                    <small className="text-[#2E2E2E]">Cash on Delivery</small>
                </div>
                <div className="flex items-center border w-full px-1  hover:border-[#0360D9] rounded-lg gap-1">
                    <div className="avatar">
                        <div className="w-4 rounded">
                            <img src={installment} alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                    <small className="text-[#2E2E2E]">Installment</small>
                </div>
            </div>

            <div className="mx-2 space-y-3">
                <h1 className="text-xl">Category</h1>
                <hr />
                <ul className="text-[#2E2E2E] opacity-85">
                    {!isLoading ? (
                        Array.from(new Set(medicines?.map((medicine) => medicine.Category))).map((category) => (
                            <li key={category} value={category}>
                                {category}
                            </li>
                        ))
                    ) : (
                        <div className=" rounded-md  mx-auto max-w-fit ">
                            <div className="animate-pulse">
                                {/* Product Title Skeleton */}
                                <div className="w-[150px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Heading Skeleton */}
                                <div className="w-[150px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Description Skeleton */}
                                <div className="w-[150px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                <div className="w-[150px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Heading Skeleton */}
                                <div className="w-[150px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Description Skeleton */}
                                <div className="w-[150px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                <div className="w-[150px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Heading Skeleton */}
                                <div className="w-[150px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Description Skeleton */}
                                <div className="w-[150px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Description Skeleton */}
                                <div className="w-[150px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                <div className="w-[150px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Heading Skeleton */}
                                <div className="w-[150px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Description Skeleton */}
                                <div className="w-[150px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Description Skeleton */}
                                <div className="w-[150px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                <div className="w-[150px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Heading Skeleton */}
                                <div className="w-[150px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                                {/* Product Description Skeleton */}
                                <div className="w-[150px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                            </div>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default SideContent;
