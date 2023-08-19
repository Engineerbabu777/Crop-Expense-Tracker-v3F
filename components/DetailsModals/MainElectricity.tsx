
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

        {/* BILLING MONTH! */}
         <div className="flex gap-2 items-center ">
            <div className="font-semibold text-xl text-gray-500">Select Month: </div>
            <div className="flex-1 ">
              <EMenuComponent handleMonthChange={handleMonthChange} selectedMonth={elect.selectedMonth} />
            </div>
         </div>
        
        {/* AUTO SELECT MONTH! */}
         {/* <div className="h-8 w-full  mt-2 flex gap-2 items-center ">
          <p className="font-semibold text-xl text-gray-500">Select Auto Date: </p>
          <input type="checkbox" className="w-5 h-5" onChange={(e) => getCurrentDate(e)} />
         </div> */}

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