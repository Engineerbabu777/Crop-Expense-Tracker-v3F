

import React, { useState } from 'react';
import EMenuComponent from '../EMenuComponent';


type Props = {
  setPesticides: any;
  pesticides: any;
}
export default function MainPesticides({setPesticides , pesticides}:Props) {


    const handleMonthChange = (event:any) => {
       setPesticides((prev:any) => ({...prev, month:event.target.value}));
    };

    const getCurrentDate = (e:any) => {
      const now = new Date();
   

    }



    return(<>

    <div className="">

        {/* BILLING MONTH! */}
      
        
        {/* AUTO SELECT MONTH! */}
         {/* <div className="h-8 w-full  mt-2 flex gap-2 items-center ">
          <p className="font-semibold text-xl text-gray-500">Select Auto Date: </p>
          <input type="checkbox" className="w-5 h-5" onChange={(e) => getCurrentDate(e)} />
         </div> */}

        {/* BILL UNITS! */}
         <div className="mt-4 flex gap-2 items-center ">
          <div className="font-semibold text-xl text-gray-500">Quantity Used: </div>
          <input  value={pesticides.quantity} onChange={(e) => setPesticides((prev:any) => ({...prev , quantity:e.target.value}))} placeholder="0" className="border-2 border-gray-200 outline-none placeholder:text-gray-300 w-[50%] pl-4 placeholder:font-semibold p-[5px] rounded-md"/>
         </div>

         <div className="mt-4 flex gap-2 items-center ">
          <div className="font-semibold text-xl text-gray-500">Name: </div>
          <input value={pesticides.name} onChange={(e) => setPesticides((prev:any) => ({...prev , name:e.target.value}))}   
          placeholder="Default N/A" className="border-2 border-gray-200 outline-none placeholder:text-gray-300 w-[50%] pl-4 placeholder:font-semibold p-[5px] rounded-md"/>
         </div>

         <div className="mt-4 flex gap-2 items-center ">
          <div className="font-semibold text-xl text-gray-500">Date: </div>
          <input type="date" value={pesticides.date} onChange={(e) => setPesticides((prev:any) => ({...prev , date:e.target.value}))}   
          placeholder="Default N/A" className="border-2 border-gray-200 outline-none placeholder:text-gray-300 w-[50%] pl-4 placeholder:font-semibold p-[5px] rounded-md"/>
         </div>

        {/* BILL AMOUNT! */}
        <div className="mt-6 flex gap-2 items-center mb-8 shadow-md p-2 rounded-md">
          <div className="font-semibold text-xl text-gray-500">Billing Amount: </div>
          <input type="number" value={pesticides.amount} onChange={(e) => setPesticides((prev:any) => ({...prev , amount:e.target.value}))}
           placeholder="Amount in (pkr)" className="border-2 border-gray-200 outline-none placeholder:text-gray-300 w-[50%] pl-4 placeholder:font-semibold p-[5px] rounded-md"/>
         </div>

         

    </div>
    
    
    
    </>)
}