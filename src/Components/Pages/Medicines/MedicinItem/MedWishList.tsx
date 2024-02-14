import React, { useEffect, useState } from 'react';
import { base_URL } from '../../../../utills/BaseURL.ts';
import UseAuth from '../../../../Hook/UseAuth.tsx';
import Cart from '../../../../assets/Icons/Cart.tsx';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
import UseCart from '../../../../Hook/UseCart.tsx';
import Swal from 'sweetalert2';
import { uuidv4 } from '@firebase/util';
import { Link } from 'react-router-dom';
const MedWishList = () => {
    const [wishFilter, setWishFilter] = useState()
    const { user } = UseAuth();
    const AxiousPublic = UseAxiosPublic();
    const [, refetch] = UseCart();
    useEffect(() => {
        fetch(`${base_URL}/Medicines?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // Filter the data where wishList is true
                const filteredData = data.filter(item => item.wishList === true);
                setWishFilter(filteredData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [])
    console.log(wishFilter);

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

    const handleRemove = (id) => {
        AxiousPublic.delete(`/Medicines/${id}`)
            .then(res => {
                console.log(res.data)
                refetch()
            })
    }
    return (
        <div>
            <h1 className='lg:text-3xl my-10 sm:text-2xl max-w-[1350px] mx-auto text-xl font-medium'>Your Wishlist</h1>
            <div className="bg-white p-6 rounded-lg pt-5 shadow-md max-w-[1400px] mx-auto ">
                <h2 className="text-lg font-semibold border-b pb-2">My Wishlist ({wishFilter?.length})</h2>
                {
                    wishFilter?.map((item) => (
                        <div key={item?._id} className="flex flex-row items-center gap-8 sm:min-w-[500px] space-y-4 md:space-y-0 md:space-x-4 border-b pb-2 my-2 ">
                            <img
                                alt="T-shirt"
                                className="w-16 h-16 bg-gray-200 rounded object-cover"
                                src={item?.Image}
                            />
                            <div>
                                <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                                    {item?.Medname}
                                </h3>
                                <p className="md:text-sm sm:text-[14px] text-[12px]  text-gray-600">Category: {item?.Category}</p>
                                <p className="md:text-sm sm:text-[14px] text-[12px] text-gray-600">Seller: {item?.Company}</p>
                                <div className="flex space-x-2 mt-3">
                                    <button onClick={() => handleRemove(item?._id)} className="md:px-4 px-2 md:py-2 py-1 md:text-sm sm:text-[14px] text-[12px] bg-red-600 hover:scale-110 scale-100 rounded transition-all duration-200 text-white text-sm">
                                        Remove
                                    </button>

                                    <button
                                        className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#0360D9] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5"
                                        onClick={() => handleAddtoCart(item)}
                                    >
                                        <Cart />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <Link to='/medicines'>
                    <button className="justify-center whitespace-nowrap bg-[#0360D9] hover:bg-[#365885] text-white rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:text-accent-foreground h-10 px-4 py-2 flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="m12 19-7-7 7-7" />
                            <path d="M19 12H5" />
                        </svg>
                        <span>Back to shop</span>
                    </button></Link>
            </div>
        </div>
    );
};

export default MedWishList;