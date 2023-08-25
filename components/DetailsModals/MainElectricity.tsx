
import React, { useState } from 'react';
import EMenuComponent from '../EMenuComponent';

type Props = {
  elect: any;
  setElect: any;
}
export default function MainElectricity({elect , setElect}:Props) {


    
   

    const handleMonthChange = (event:any) => {
       setElect((prev:any) => ({...prev , selectedMonth:event.target.value}));
    };

    const getCurrentDate = (e:any) => {
      const now = new Date();
    

    }

    // FUNCTION TO SAVE DATA OF ELECTRICTY !!
    const saveNewElectBill = () => {
  
    }



    return(<>

    <div className="">

<div className="mt-4 flex gap-2 items-center flex-col ">
    <p className="font-semibold text-xl text-gray-500 text-start w-full">Enter Description:</p>
    <textarea value={elect?.desc} onChange={(e) => setElect((prev:any) => ({...prev, desc:e.target.value})) } 
    className="w-full h-16 rounded-md border-2 border-gray-400 resize-none p-1" name="desc"  
    ></textarea>
</div>

<div className="mt-4 flex gap-2 items-center ">
    <p className="font-semibold text-xl text-gray-500">Enter Date:</p>
    <input type="date" name="date" value={elect?.date} onChange={(e) => setElect((prev:any) => ({...prev, date:e.target.value})) } className="w-full p-2 outline-none border-2 border-green-500 rounded-md" placeholder="Enter Updated Date"/>
</div>


        {/* BILL UNITS! */}
         <div className="mt-4 flex gap-2 items-center ">
          <div className="font-semibold text-xl text-gray-500">Units Consumed: </div>
          <input value={elect.units} onChange={(e) => setElect((prev:any) => ({...prev, units:e.target.value}))} placeholder="Default N/A" className="border-2 border-gray-200 outline-none placeholder:text-gray-300 w-[50%] pl-4 placeholder:font-semibold p-[5px] rounded-md"/>
         </div>

        {/* BILL AMOUNT! */}
        <div className="mt-6 flex gap-2 items-center mb-8 shadow-md p-2 rounded-md">
          <div className="font-semibold text-xl text-gray-500">Billing Amount: </div>
          <input value={elect.bill} onChange={(e) => setElect((prev:any) => ({...prev, bill:e.target.value}))} placeholder="Amount in (pkr)" className="border-2 border-gray-200 outline-none placeholder:text-gray-300 w-[50%] pl-4 placeholder:font-semibold p-[5px] rounded-md"/>
         </div>

         

    </div>
    
    
    
    </>)
}