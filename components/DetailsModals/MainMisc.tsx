

import React, { useState } from 'react';


type Props ={
  misc: any;
  setMisc: any;
}

export default function MainMisc({misc  ,setMisc}:Props) {


    return(<>

    <div className="">

      {/* PURPOSE! */}
      <div className="relative">
       <textarea value={misc.purpose} onChange={(e) => setMisc((prev:any) => ({...prev , purpose:e.target.value}))} className="w-full font-semibold h-24 text-lg text-blue-800 border-2 border-gray-200 rounded-md p-1 resize-none outline-none placeholder:pl-16" placeholder="اس ادائیگی کا مقصد درج کریں۔"/>
       <p className="absolute rounded-full bottom-4 right-2 font-semibold text-green-600">70/70</p>
      </div>

      {/* AMOUNT! */}
      <div className="mt-2 flex flex-col gap-1">
      <p className="w-full text-end font-semibold text-lg">اپنی رقم درج کریں۔</p>
       <input value={misc.amount} onChange={(e) => setMisc((prev:any) => ({...prev , amount:e.target.value}))} 
       type="number" className="pl-3 placeholder:font-semibold w-full p-1 border-2 border-gray-200 rounded-md outline-none" placeholder="13000"/>
      </div>


      {/* DATE! */}
      <div className="mt-2 flex flex-col gap-1">
        <p className="w-full text-end font-semibold text-lg">اپنی تاریخ درج کریں۔</p>
       <input value={misc.date} onChange={(e) => setMisc((prev:any) => ({...prev , date:e.target.value}))} 
        type="date" className="w-full p-1 border-2 border-gray-200 rounded-md outline-none" placeholder="رقم یہاں درج کریں۔"/>
      </div>



    </div>
    
    
    
    </>)
}