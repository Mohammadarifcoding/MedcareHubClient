import React from 'react';

const Checkout = ({ priceData }) => {

    const Tax = 14.00

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full" id="3ista3a82nf">
            <div className="flex items-center justify-between flex-col mb-6">
                <label className="font-semibold text-lg text-start flex justify-start mb-2" htmlFor="coupon">
                    Have a coupon?
                </label>
                <div className="flex w-full">
                    <input className="flex h-10 w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border mr-2" id="coupon" placeholder="Add coupon" />
                    <button className="inline-flex items-center justify-center bg-[#0360D9] hover:bg-[#304b6f] text-white whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        Apply
                    </button>
                </div>
            </div>
            <div className="space-y-3 mb-6">
                <div className="flex justify-between text-lg">
                    <span>Subtotal:</span>
                    <span>${priceData}</span>
                </div>
                <div className="flex justify-between text-lg">
                    <span>Discount:</span>
                    <span className="text-[#bd1e59]">- ${'0.00'}</span>
                </div>
                <div className="flex justify-between text-lg">
                    <span>Tax:</span>
                    <span>+ ${priceData > 0 ?  Tax.toFixed(2) : '0.00'}</span>
                </div>
            </div>
            <div className="flex justify-between font-semibold text-xl mb-6">
                <span>Total:</span>
                <span>${priceData > 0 ? (parseInt(priceData) + Tax).toFixed(2) : '0.00'}</span>
            </div>
            <button className="inline-flex scale-100 hover:scale-105 duration-150 items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-[#22c55e]  h-10 px-4 bg-[#22c55e] w-full mb-6 py-2 text-lg">
                Checkout
            </button>
            <div className="flex justify-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <rect width={20} height={14} x={2} y={5} rx={2} />
                    <line x1={2} x2={22} y1={10} y2={10} />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <rect width={20} height={14} x={2} y={5} rx={2} />
                    <line x1={2} x2={22} y1={10} y2={10} />
                </svg>
            </div>
        </div>

    );
};

export default Checkout;