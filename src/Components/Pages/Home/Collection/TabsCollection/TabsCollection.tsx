import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { tabsData } from '../../../../../Model/Model';
import Products from '../Products/Products.tsx';
import ProductData from '../../../../../Data/Collections.ts';





// Import Swiper styles




const TabsCollection = () => {

      const collectionItem:tabsData[]=[
        {
            name:'All Furniture',
            id:0
        },
        {
          name:'Bedroom',
          id:1
        },
        {
          name:'Living Room',
          id:2
      },
      {
        name:'Home Office',
        id:3
      },
      {
        name:'Dining Table',
        id:4
      }
      ]
    
     const BedRoom = ProductData.filter(item => item.category === "Bedroom")
     const Living_Room = ProductData.filter(item => item.category === "Living Room")
     const Home_Office = ProductData.filter(item => item.category === "Home Office")
     const Dining_Table = ProductData.filter(item => item.category === "Dining Table")



    return (
        <div className='pb-12'>
             <Tabs>
    <TabList className='flex overflow-auto flex-nowrap pb-5 tabData md:cursor-default cursor-pointer   text-nowrap  gap-3'>
      {collectionItem.map(item => (
                    <Tab className='bg-[#00000026] px-4  py-2 cursor-pointer  rounded-full' key={item.id}>
                        {item.name}
         </Tab>
       ))}

    </TabList>
 
    <TabPanel>
      <Products data={ProductData}></Products>
    </TabPanel>
    <TabPanel>
      <Products data={BedRoom}></Products>
    </TabPanel>
    <TabPanel>
      <Products data={Living_Room}></Products>
    </TabPanel>
    <TabPanel>
      <Products data={Home_Office}></Products>
    </TabPanel>
    <TabPanel>
      <Products data={Dining_Table}></Products>
    </TabPanel>
  </Tabs>

  
        </div>
    );
};

export default TabsCollection;