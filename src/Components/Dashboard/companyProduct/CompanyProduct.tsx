import React from 'react';

const CompanyProduct = () => {
    return (
        <div className='md:pt-0 pt-8'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
        {/* row 1 */}
      <tr className='bg-blue-600 text-white md:text-2xl h-[60px] text-center'>
        <th>Image</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Type</th>
        <th>Edit</th>
        <th>Delete</th>
       
      </tr>
    </thead>
    <tbody className=' bg-base-300 text-center md:text-xl '>
      {/* row 1 */}
      <tr>
      <td className='items-center justify-center flex mx-auto'>
            
            <img className='w-24 h-20 rounded-md' src="https://i.ibb.co/6JZMKrD/71m5-N6h-4-JL-AC-UF1000-1000-QL80.jpg" alt="" />
        </td>
        <td>
            <div>
              <div className="font-bold">Echinacea Extract</div>
             
            </div>
        
        </td>
        
        <td className='font-bold'>
        19.99
          
        </td>
        <td className='font-bold'>Herbal Care</td>
        <th>
          <button className="btn bg-orange-500 text-white ">Edit</button>
        </th>
        <th>
          <button className="btn bg-red-600 text-white ">Delete</button>
        </th>
      </tr>
      {/* row2 */}
      <tr>
      <td className='items-center justify-center flex mx-auto'>
            
            <img className='w-24 h-20 rounded-md' src="https://i.ibb.co/8NKrrSt/download-5.jpg" alt="" />
        </td>
        <td>
            <div>
              <div className="font-bold">Turmeric Capsules</div>
             
            </div>
        
        </td>
        
        <td className='font-bold'>
        24.99
          
        </td>
        <td className='font-bold'>Herbal Care</td>
        <th>
          <button className="btn bg-orange-500 text-white ">Edit</button>
        </th>
        <th>
          <button className="btn bg-red-600 text-white ">Delete</button>
        </th>
      </tr>

        {/* row3 */}
        <tr>
      <td className='items-center justify-center flex mx-auto'>
            
            <img className='w-24 h-20 rounded-md' src="https://i.ibb.co/1qvg3yG/images-2.jpg" alt="" />
        </td>
        <td>
            <div>
              <div className="font-bold">Ginger Tea</div>
             
            </div>
        
        </td>
        
        <td className='font-bold'>
        9.99
          
        </td>
        <td className='font-bold'>Herbal Care</td>
        <th>
          <button className="btn bg-orange-500 text-white ">Edit</button>
        </th>
        <th>
          <button className="btn bg-red-600 text-white ">Delete</button>
        </th>
      </tr>

        {/* row4*/}
        <tr>
      <td className='items-center justify-center flex mx-auto'>
            
            <img className='w-24 h-20 rounded-md' src="https://i.ibb.co/bRqBTFh/download-6.jpg" alt="" />
        </td>
        <td>
            <div>
              <div className="font-bold">Peppermint Oil</div>
             
            </div>
        
        </td>
        
        <td className='font-bold'>
        14.99
          
        </td>
        <td className='font-bold'>Herbal Care</td>
        <th>
          <button className="btn bg-orange-500 text-white ">Edit</button>
        </th>
        <th>
          <button className="btn bg-red-600 text-white ">Delete</button>
        </th>
      </tr>
    
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
        </div>
    );
};

export default CompanyProduct;