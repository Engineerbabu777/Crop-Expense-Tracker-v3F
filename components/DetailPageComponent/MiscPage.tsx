
import Navbar from '@/components/HomePage/TopNavigation/Navbar';
import {useRouter} from 'next/router';

import {Divider} from '@chakra-ui/react';
import {IoAddCircle} from 'react-icons/io5'

  import { DataState } from '@/atom/dataState';
  import {useRecoilState} from 'recoil';
  import {useState , useEffect} from 'react';

import {format} from 'date-fns'

export default function MiscPage() {

    const {query} = useRouter();
    const {name} = query;
    const [data , setData] = useRecoilState(DataState);

    const [misc , setMisc] = useState([]);
    const [totalAmount , setTotalAmount] = useState(0);

    // Make a fecth Request!
    useEffect(() => {
  
      fetch('/api/misc').then((res:any) => res.json().then((data:any) => {
      
        setMisc(data.allMisc.filter((m:any) => m.parentId == query?.crop));

        const b = data.allMisc.filter((m:any) => m.parentId == query?.crop);
        const amount = b.reduce((accumulator:any, currentObject:any) => accumulator + currentObject.amount, 0);     
        setTotalAmount(amount);
        console.log(amount)
      }));

      
  
    },[])


    return(<>
    
    
    <div className="bg-gradient-to-br from-blue-500 to-black h-[calc(100vh-48px)] pt-2 w-full relative">

{/* TOP BOX! */}
 <div className="bg-gradient-to-r px-2  from-teal-400 to-blue-400 h-12 w-[95%] flex mx-auto items-center">
  <div className="w-[20%]">
  <img src="/miscellaneous.png" alt="pic" className="w-8 h-8"/>
  </div>

  <div className="w-[60%] ml-2">
  <p className="font-bold text-xl text-white">MISCILLINOUS&nbsp;DETAILS</p>
  </div>
 </div>

 {/* TOTAL UNITS && TOTAL PRICE! */}
  <div className="h-24 w-[95%] flex mx-auto gap-6 mt-2">

    {/* TOTAL UNITS! */}
     <div className="w-[100%] h-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg border-1 border-gray-600 rounded-md flex flex-col py-4 ">
       <h2 className="text-black font-semibold text-2xl text-center"> Total Amount Spend Yet</h2>
       <p className="text-white font-semibold text-xl text-center">{totalAmount.toLocaleString()} Pakistani Rupees</p>
     </div>

    

  </div>

   <Divider my={3} w={'95%'} display={'flex'} mx={'auto'}/>
  {/* DEATILS & ADD! */}
  <div className=" bg-teal-500 w-[70%] text-gray-600 border-2 border-gray-300 px-2 py-1 shadow-xl align-center justify-between  flex mx-auto rounded-md">
    <IoAddCircle className="w-7 h-7 " />
    <p className="font-semibold text-xl text-center w-full" onClick={() => {data.open ? setData({open:false,view:'MISC'}) : setData({open:true,view:'MISC'})}}>Add New Misc Amount</p>
  </div>


  {/* Boxes! */}

<div className="mt-4">
   {/* DISPLAY ! */}
   { misc.length > 0 && misc.map((m:any , i ) => (<div key={i}>
       <Divider width={'95%'} display={'flex'} mx={'auto'} my={2} />
       <div key={i} className=" w-[95%] flex mx-auto mb-2 h-content rounded-md p-1 bg-gradient-to-r from-black to-blue-700">
       <div  className="h-full w-full flex px-1 gap-2 ">
         {/* PURPOSE! */}
         <div className="w-[60%] h-[12] items-center   flex">
         <p className="font-semibold text-md text-white">{m?.purpose}</p>
         </div>
         {/* DATE + AMOUNT! */}
         <div className="flex flex-col gap-1 w-[45%] justify-evenly">
           <div className="bg-white rounded-md p-1 flex gap-2 items-center justify-between px-2">
             <p className="font-bold text-red-600">Rs-/ {m?.amount.toLocaleString()} </p>
             <p className="font-bold text-lg">: رقم</p>
           </div>
   
           <div className="bg-white rounded-md p-1 flex gap-2 items-center justify-between px-2">
             <p className="font-bold text-red-600">{format(new Date(m?.date),'yyyy-MM-dd')}</p>
             <p className="font-bold text-lg">: تاریخ</p>
           </div>
         </div>
       </div>
      </div>
  </div> ))

   }
</div>

 

  {/* ABOUT APP! */}
   <div className="mt-[5rem] bg-white absolute bottom-0 left-0 right-0 text-center  ">
    {/* <p className="text-sm">Stay informed about your electricity usage patterns and make informed decisions to optimize costs, all within our user-friendly electricity billing table for efficient farm management.</p> */}
   <p className="text-md text-gray-500">
   All rights reserved © Crop Expenses Tracker 2023. Unauthorized reproduction or distribution of any content from this website is strictly prohibited.
   </p>
   </div>

</div>
    
    
    
    </>)
}