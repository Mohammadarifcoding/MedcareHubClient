import React, { FC } from 'react';

type newData = {
   children: any
}
 
const Container:FC<newData> = ({children}) => {
    return (
        <div className='max-w-[1550px] xl:px-14 lg:px-12 md:px-6 px-2  mx-auto '>
            {children}
        </div>
    );
};

export default Container;