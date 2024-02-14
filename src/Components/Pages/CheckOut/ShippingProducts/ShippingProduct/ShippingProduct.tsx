import React from 'react';

const ShippingProduct = ({item}) => {
    const { Medname, Image, Price, Category, Company , _id } = item.medicine
    return (
        <div key={item._id}>
        <div>
         <img src={Image} alt="" />
        </div>
     </div>
    );
};

export default ShippingProduct;