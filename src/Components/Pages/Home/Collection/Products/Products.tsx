import React, { FC } from 'react';
import { tabProduct } from '../../../../../Model/Model';
import ProductItem from './ProductItem.tsx';

interface ProductsProps {
    data: tabProduct[];
}

const Products: FC<ProductsProps> = ({ data }) => {
    return (
        <div className='flex flex-col CollectionProduct'>

            <div className={`mt-10 lg:mb-20 pb-10 CollectionProduct flex md:overflow-none overflow-auto   flex-nowrap gap-7`}>
                {data?.slice(0, 4).map(item => <ProductItem data={item}></ProductItem>)}
            </div>
            {
                data[4]? <div className={` mb-10 pb-10 CollectionProduct flex md:overflow-none overflow-auto   flex-nowrap gap-7`}>
                {data?.slice(4, 8).map(item => <ProductItem data={item}></ProductItem>)}
            </div> : ''
            }
            
        </div>

    );
};

export default Products;