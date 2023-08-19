

import React, { useState } from 'react';
import EMenuComponent from '../EMenuComponent';
import {format} from 'date-fns';

type Props = {
    diesel: any;
    setDiesel: any;
}
export default function MainDiesel({diesel , setDiesel}:Props) {


    
    const [selectedMonth, setSelectedMonth] = useState('');


    const handleMonthChange = (event:any) => {
        setSelectedMonth(event.target.value);
    };

    const getCurrentDate = (e:any) => {
    //   const now = new Date();
    //   if(e?.target?.checked){
    //    const t = date.format(now, 'YYYY/MM/DD HH:mm:ss');    // => '2015/01/02 23:14:05';
    //    console.log(t);
    //   }

    }



    return(<>

    <div className="">

        {/* BILLING MONTH! */}
        <div className="flex gap-2 items-center ">
            <div className="font-semibold text-xl text-gray-500">Select Date: </div>
             <input value={diesel?.date} onChange={(e) => setDiesel((prev:any) => ({...prev,date:e.target.value}))} type={"date"} className="border-2 border-gray-200 outline-none placeholder:text-gray-300 w-[50%] pl-4 placeholder:font-semibold p-[5px] rounded-md"/>
         </div>
        
        {/* AUTO SELECT MONTH! */}
         {/* <div className="h-8 w-full  mt-2 flex gap-2 items-center ">
          <p className="font-semibold text-xl text-gray-500">Select Auto Date: </p>
          <input type="checkbox" className="w-5 h-5" onChange={(e) => getCurrentDate(e)} />
         </div> */}

        {/* BILL UNITS! */}
         <div className="mt-4 flex gap-2 items-center ">
          <div className="font-semibold text-xl text-gray-500">Liters Used: </div>
          <input
          value={diesel?.liters} onChange={(e) => setDiesel((prev:any) => ({...prev,liters:e.target.value}))}
           placeholder="0 ltrs" className="border-2 border-gray-200 outline-none placeholder:text-gray-300 w-[50%] pl-4 placeholder:font-semibold p-[5px] rounded-md"/>
         </div>

        {/* BILL AMOUNT! */}
        <div className="mt-6 flex gap-2 items-center mb-8 shadow-md p-2 rounded-md">
          <div className="font-semibold text-xl text-gray-500">Total Amount: </div>
          <input 
          value={diesel?.amount} onChange={(e) => setDiesel((prev:any) => ({...prev,amount:e.target.value}))}
          placeholder="Amount in (pkr)" className="border-2 border-gray-200 outline-none placeholder:text-gray-300 w-[50%] pl-4 placeholder:font-semibold p-[5px] rounded-md"/>
         </div>

         

    </div>
    
    </>)
}