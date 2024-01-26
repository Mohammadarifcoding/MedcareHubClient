import React from 'react';
import Container from '../../Shared/Container/Container.tsx';
import { useParams } from 'react-router';

const CompanyDetails = () => {
    const {companyname} = useParams()
    return (
        <Container>
<div className="md:px-12 pt-12 ">
        {/* banner */}
     <div  className="flex md:flex-row flex-col justify-center  items-center   gap-24 ">
     <div>
          <div className="flex flex-row items-center ">
        
          <img className="h-12" src="https://i.ibb.co/bvF4nmQ/Medical-health-logo-design-on-transparent-background-PNG-removebg-preview.png" alt="" />
          <h1 className="text-4xl font-bold pt-3 text-[#0360D9]">{companyname}</h1>
          </div>
            <p className="text-sm font-medium text-[#2E2E2E] w-[400px] py-4">To obtain the latest and most accurate information about Inhalertach, I recommend checking official business directories, company websites, financial reports, or reliable news sources. Additionally, you may want to specify the industry or sector in which Inhalertach operates to narrow down your search. If it's a relatively new or small company, local business registries or chambers of commerce might also have relevant details.</p>
        
            <p className="pt-1 text-[#2E2E2E] font-medium">Company Email:InhalerTeach@gmail.com</p>
            <p  className="pt-1 text-[#2E2E2E] font-medium">Owner Email:X@gmail.com</p>
            

        </div>
       <div>
       <img className="md:w-[450px] " src="https://i.ibb.co/PmCH0Cg/34392881-s-w800xh800.jpg" alt="" />
       </div>
     </div>
     <div className="flex md:flex-row flex-col justify-center items-center  gap-8 py-24">

       <div className=" bg-[#E1EEFF] flex flex-col w-[200px] shadow-lg h-[130px]  rounded-md justify-center items-center " >

          <h1 className="font-bold text-xl text-[#0360D9] ">+2000</h1>
          <p  className="font-medium">Founded</p>

       </div>
       <div  className=" flex flex-col w-[200px] h-[130px]  shadow-lg  bg-[#E1EEFF] rounded-md justify-center items-center " >
          <h1 className="font-bold text-xl text-[#0360D9] ">+1890</h1>
          <p className="font-medium">Service Patients</p>

       </div>
       <div   className=" flex flex-col w-[200px] h-[130px] bg-[#E1EEFF]  shadow-lg  rounded-md justify-center items-center " >
         <h1 className="font-bold text-xl text-[#0360D9] ">+2300</h1>
         <p  className="font-medium">Customer Served</p>
       </div>
       <div   className=" flex flex-col w-[200px]  shadow-lg  h-[130px] bg-[#E1EEFF] rounded-md justify-center items-center " >
         <h1 className="font-bold text-xl text-[#0360D9] ">+6300</h1>
         <p  className="font-medium">Monthly Active User</p>
       </div>




     </div>

   <div>
    <div className="flex md:flex-row flex-col justify-center  items-center">
    
    <img className="h-16" src="https://i.ibb.co/JnQNvbY/images-2-removebg-preview.png" alt=""></img>
    <h1 className=" md:text-4xl text-[#0360D9] font-bold ">Company <span className="text-black">Medicines</span></h1>
    </div>
   </div>

     <div className="">
       <div className=" flex md:flex-row flex-col  py-12 justify-center gap-10 items-center">
       <img className="w-[150px] h-[160px]" src="https://i.ibb.co/dLb6FBG/81o7yk-RMILL-AC-UF1000-1000-QL80.jpg" alt="" />
       <img className="w-[150px] h-[160px]"  src="https://i.ibb.co/qx25rRB/download.jpg" alt="" />
       <img className="w-[150px] h-[160px]"  src="https://i.ibb.co/PGKtxZp/71-F0-I-M1a-OL-SL1500.jpg" alt="" />
       <img className="w-[150px] h-[160px]"  src="https://i.ibb.co/7gxx7b7/61-MLj5-P3yq-L.jpg" alt="" />
       <img className="w-[150px] h-[160px]"  src="https://i.ibb.co/jbczD6b/download-10.jpg" alt="" />
       </div>
     <div  className=" flex md:flex-row flex-col py-12 justify-center items-center gap-10">
       <img className="w-[150px] h-[160px]"  src="https://i.ibb.co/n13GCWc/image-1024.jpg" alt="" />
       <img className="w-[150px] h-[160px]"  src="https://i.ibb.co/Q70bFjL/612-r-WP4-Zx-L.jpg" alt="" />
       <img className="w-[150px] h-[160px]"  src="https://i.ibb.co/n01BJ2g/Under-the-Weather-Hairball-Gel-for-Cats.png" alt="" />
       <img className="w-[150px] h-[160px]"  src="https://i.ibb.co/HpZQCwq/48325-1.jpg" alt="" />
       <img className="w-[150px] h-[160px]"  src="https://i.ibb.co/KzddsRS/download.jpg" alt="" />
     </div>
     </div>
     </div>
        </Container>
    );
};

export default CompanyDetails;