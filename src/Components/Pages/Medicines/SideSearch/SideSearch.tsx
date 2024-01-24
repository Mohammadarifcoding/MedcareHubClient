import React from 'react';

const SideSearch = ({ filter, setFilter }) => {
    return (
        <section className=" lg:mb-8 mx-auto  px-2">
        <form>
          <div className="flex">
            <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#0360D9] text-[#0360D9] ">
              <input
                type="search"
                id="search-dropdown"
                className="z-20 block w-full bg-white px-3 py-2.5 pr-10 text-[#0360D9] placeholder:text-[#0360D9] focus:outline-none"
                placeholder="Search Medicine"
                value={filter.keyword}
                required
                onChange={(e) =>
                  setFilter((previousValue) => ({
                    ...previousValue,
                    keyword: e.target.value,
                  }))
                }
              />
              <div className="absolute right-0 top-0 flex h-full items-center">
                <button
                  type="submit"
                  className="mr-1.5 flex items-center space-x-1.5 rounded-full rounded-e-full bg-[#0360D9] px-3 py-2.5 text-sm text-white"
                >
                  <svg
                    className="h-[14px] w-[14px]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
};

export default SideSearch;