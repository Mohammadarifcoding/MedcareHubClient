import React from 'react';
import { useEffect, useState } from "react";
import Cart from "../../../../assets/Icons/Cart.tsx";
import LoveFill from "../../../../assets/Icons/LoveFill.tsx";
import LoveLine from "../../../../assets/Icons/LoveLine.tsx";
import MedicineData from '../../../../Data/Medicine.ts';
import { Link } from 'react-router-dom';

const MedicineItem = ({ filter }) => {
  const [medicine, setMedicine] = useState([...MedicineData]);
  const [filteredMedicine, setFilteredMedicine] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [priceRange, setPriceRange] = useState(90);

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
  };

  // useEffect(() => {
  //   fetch("./medicine.json")
  //     .then((res) => res.json())
  //     .then((data) => setMedicine(data))
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }, []);

  useEffect(() => {
    const debounceFilter = setTimeout(() => {
      let tempFilteredMedicine = [...medicine];
      if (filter.keyword) {
        tempFilteredMedicine = tempFilteredMedicine?.filter((item) =>
          item.Medname.toLowerCase().includes(filter.keyword.toLowerCase())
        );
      }

      if (filter.sortBy === "category_Herbal_Care") {
        tempFilteredMedicine = tempFilteredMedicine?.filter(
          (item) => item.Category === "Herbal Care"
        );
      } else if (filter.sortBy === "category_Womens_Care") {
        tempFilteredMedicine = tempFilteredMedicine?.filter(
          (item) => item.Category === "Women's Care"
        );
      } else if (filter.sortBy === "category_COVID_Special") {
        tempFilteredMedicine = tempFilteredMedicine?.filter(
          (item) => item.Category === "COVID Special"
        );
      } else if (filter.sortBy === "category_Baby_and_Mom_Care") {
        tempFilteredMedicine = tempFilteredMedicine?.filter(
          (item) => item.Category === "Baby and Mom Care"
        );
      } else if (filter.sortBy === "category_Supplements") {
        tempFilteredMedicine = tempFilteredMedicine?.filter(
          (item) => item.Category === "Supplements"
        );
      } else if (filter.sortBy === "category_Nutrition") {
        tempFilteredMedicine = tempFilteredMedicine?.filter(
          (item) => item.Category === "Nutrition"
        );
      } else if (filter.sortBy === "category_Personal_Care") {
        tempFilteredMedicine = tempFilteredMedicine?.filter(
          (item) => item.Category === "Personal Care"
        );
      } else if (filter.sortBy === "price_asc") {
        tempFilteredMedicine = tempFilteredMedicine?.sort(
          (a, b) => a.Price - b.Price
        );
      } else if (filter.sortBy === "price_desc") {
        tempFilteredMedicine = tempFilteredMedicine?.sort(
          (a, b) => b.Price - a.Price
        );
      }

      setFilteredMedicine(tempFilteredMedicine);
    }, 600);
    return () => clearTimeout(debounceFilter);
  }, [filter, medicine]);

  const isFavorite = (id) => favorites.includes(id);
  return (
    <>
      <div className="mx-2 space-y-2 mb-5 -mt-2 mr-5">
        <h1 className="text-xl font-bold text-center text-[#0360D9]">
          Set Price Range
        </h1>
        <input
          className="w-full range range-xs md:range-sm range-primary"
          type="range"
          value={priceRange}
          onChange={handlePriceChange}
          max={90}
          min={0}
          step={15}
        />
        <div className="w-full flex justify-between">
          <span></span>
          {[15, 30, 45, 60, 75, 90].map((step) => (
            <span key={step} className="text-[#021526] text-xs font-bold hover:text-[#0360D9]">
              ${step}
            </span>
          ))}
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3">
        {filteredMedicine?.map((medicine) => (
          <div className="space-y-3 " key={medicine?.ID}>
            <div className="flex items-center justify-center rounded-md border border-[#0360D9]/30 bg-white p-4">
              <img
                className="max-w-[144px] h-40"
                src={medicine?.Image}
                alt={medicine?.Medname}
              />
            </div>
            <div className="space-y-3">
              <div className="space-y-3 pl-2">
                <h4 className="text-lg font-bold lg:text-xl">
                  {medicine?.Medname}
                </h4>
                <p className="text-xs lg:text-sm flex gap-2">
                  <input type="checkbox" name="" id="" checked readOnly />
                  By : <span>{medicine?.Company}</span>
                </p>
                <p className="text-xs lg:text-sm flex gap-2">
                  <input type="checkbox" name="" id="" checked readOnly />
                  Category : <span>{medicine?.Category}</span>
                </p>
                <Link to={`/company/${medicine?.Company}`}>
                <p  className='text-sm mt-2 flex items-center cursor-pointer'>
                  <svg className='w-6' viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M531.8 385v483.3h0.1V385h-0.1z" fill="#343535"></path><path d="M670.9 497.1h86v16h-86zM670.9 625.1h86v16h-86zM233.9 241.1h86v16h-86zM384 241.1h86v16h-86zM233.9 369h86v16h-86zM384 369h86v16h-86zM234 497.5h86v16h-86zM384 497.2h86v16h-86z" fill="#39393A"></path><path d="M398.3 704.4c-11.9-11.9-28.4-19.3-46.5-19.3-36.2 0-65.8 29.6-65.8 65.8v117.4h20V750.9c0-12.2 4.8-23.6 13.5-32.3 8.7-8.7 20.2-13.5 32.3-13.5 12.2 0 23.6 4.8 32.3 13.5 8.7 8.7 13.5 20.2 13.5 32.3v117.4h20V750.9c0-18.1-7.4-34.5-19.3-46.5z" fill="#E73B37"></path><path d="M575.8 429v437.9h0.1V429h-0.1zM286.2 868.3h131.6-131.6z" fill="#343535"></path><path d="M896 868.3V385H575.9V111.6H128v756.7H64v44h896v-44h-64z m-364.1 0H172V155.6h359.9v712.7z m320.1-1.5H575.8V429H852v437.8z" fill="#39393A"></path></g></svg> : {medicine.Company}
                </p>
                </Link>
         

                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold lg:text-xl">
                    Price : ${medicine?.Price}
                  </h4>
                </div>


              </div>
              <div className="flex  gap-3 text-xs lg:text-sm justify-between md:px-2">
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#0360D9] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                  <Cart />
                  Add to Cart
                </button>
                <button
                  onClick={() => handleToggleFavorite(medicine?.ID)}
                  className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md ${isFavorite(medicine?.ID)
                    ? "bg-[#DC2954]/[14%] text-[#0360D9] hover:bg-[#DC2954]/[24%]"
                    : "bg-[#0360D9]/[14%] text-[#1C4336] hover:bg-[#0360D9]/[24%]"
                    } py-1.5 transition-all lg:py-1.5`}
                >
                  {isFavorite(medicine?.ID) ? <LoveFill /> : <LoveLine />}
                  Favourite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>

  );
};

export default MedicineItem;