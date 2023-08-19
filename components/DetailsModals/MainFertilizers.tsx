
import {useState} from 'react';
import EMenuComponent from '../EMenuComponent';


type Props = {
  fert: any;
  setFert: any;
}

export default function MainFertilizer({fert, setFert}:Props) {

    const getCurrentDate = (e:any) => {
   
    }



    return(<>

    <div className="">

        {/* BILLING MONTH! */}
         <div className="flex gap-2 items-center ">
            <div className="font-semibold text-xl text-gray-500">Select Date: </div>
             <input value={fert.date} onChange={(e) => setFert((prev:any) => ({...prev,date:e.target.value}))} type={"date"} className="border-2 border-gray-200 outline-none placeholder:text-gray-300 w-[50%] pl-4 placeholder:font-semibold p-[5px] rounded-md"/>
         </div>
        
        {/* AUTO SELECT MONTH! */}
         {/* <div className="h-8 w-full  mt-2 flex gap-2 items-center ">
          <p className="font-semibold text-xl text-gray-500">Select Auto Date: </p>
          <input type="checkbox" className="w-5 h-5" onChange={(e:any) => getCurrentDate(e)} />
         </div> */}

        {/* BILL UNITS! */}
         <div className="mt-4 flex gap-2 items-center ">
          <div className="font-semibold text-xl text-gray-500">No. of Sacks: </div>
          <input
           value={fert.bags} onChange={(e) => setFert((prev:any)=> ({...prev,bags:e.target.value}))}
           placeholder="Default 0" className="border-2 border-gray-200 outline-none placeholder:text-gray-300 w-[50%] pl-4 placeholder:font-semibold p-[5px] rounded-md"/>
         </div>

        {/* BILL AMOUNT! */}
        <div className="mt-6 flex gap-2 items-center mb-8 shadow-md p-2 rounded-md">
          <div className="font-semibold text-xl text-gray-500">Total Amount: </div>
          <input value={fert.amount} onChange={(e) => setFert((prev:any) => ({...prev,amount:e.target.value}))} placeholder="Amount in (pkr)" className="border-2 border-gray-200 outline-none placeholder:text-gray-300 w-[50%] pl-4 placeholder:font-semibold p-[5px] rounded-md"/>
         </div>

         

    </div>
    
    
    
    </>)
}