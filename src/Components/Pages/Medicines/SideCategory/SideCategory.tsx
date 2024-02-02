import React from 'react';

const SideCategory = ({ filter, setFilter }) => {
  return (
    <div className="flex items-stretch my-4 px-2">
      <select
        className="cursor-pointer  w-full rounded-md border  md:px-1 py-2  focus:outline-none"
        name="sortBy"
        id="sortBy"
        value={filter.sortBy}
        onChange={(e) =>
          setFilter((previousValue) => ({
            ...previousValue,
            sortBy: e.target.value,
          }))
        }
      >
        <option value="">Sort By Category</option>
        <option value="category_Herbal_Care">Herbal Care</option>
        <option value="category_Womens_Care">Womens Care</option>
        <option value="category_COVID_Special">COVID Special</option>
        <option value="category_Baby_and_Mom_Care">Baby and Mom Care</option>
        <option value="category_Supplements">Supplements</option>
        <option value="category_Nutrition">Nutrition</option>
        <option value="category_Personal_Care">Personal Care</option>
        <option value="price_asc">Price (Lower to Higher)</option>
        <option value="price_desc">Price (Higher to Lower)</option>
      </select>
    </div>
  );
};

export default SideCategory;