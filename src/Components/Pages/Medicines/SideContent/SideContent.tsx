import React from 'react';

const SideContent = () => {
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
          <li className="hover:text-[#0360D9]">Herbal Care</li>
          <li className="hover:text-[#0360D9]">Womens Care</li>
          <li className="hover:text-[#0360D9]">COVID Special</li>
          <li className="hover:text-[#0360D9]">Baby and Mom Care</li>
          <li className="hover:text-[#0360D9]">Supplements</li>
          <li className="hover:text-[#0360D9]">Nutrition</li>
          <li className="hover:text-[#0360D9]">Personal Care</li>
        </ul>
      </div>
    </div>
    );
};

export default SideContent;