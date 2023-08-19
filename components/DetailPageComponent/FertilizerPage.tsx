


import Navbar from '@/components/HomePage/TopNavigation/Navbar';
import {useRouter} from 'next/router';
import DetailsTable from '@/components/DetailPageComponent/FerTable';
import {Divider} from '@chakra-ui/react';
import {IoAddCircle} from 'react-icons/io5'
import ViewDataState from '@/modals/DetailsModal';
import {
  RecoilRoot,} from 'recoil';
  import { DataState } from '@/atom/dataState';
  import {useRecoilState} from 'recoil';
import {useEffect , useState} from 'react';
import {format} from 'date-fns';

export default function FertilizerMain({}) {

    const {query} = useRouter();
    const {name} = query;
    const [data , setData] = useRecoilState(DataState);

    const [totalBags , setTotalBags] = useState(0);
    const [totalAmount , setTotalAmount] = useState(0);
    const [date , setDate] = useState(null);

    const [fertilizerDetails , setFertilizerDetails] = useState([]);

    // FUNCTION TO GET DETAILS OF ELECTRICITY!
    useEffect(() => {

      fetch('/api/fert').then((res:any) => res.json().then((data:any) => {
        // total units!
        const b = data.allFert.filter((b:any) => b?.parentId == query?.crop);
         const bag = b.reduce((accumulator:any, currentObject:any) => accumulator + currentObject.bags, 0);        
        // total amount!
        const a = data.allFert.filter((b:any) => b?.parentId == query?.crop);
        const amount = a.reduce((accumulator:any, currentObject:any) => accumulator + currentObject.bill, 0); 
        
        setTotalBags(bag);
        setTotalAmount(amount);

        setFertilizerDetails(data.allFert.filter((b:any) => b?.parentId == query?.crop));

        console.log(data.allFert);

      }));
  
    },[])

    


    return(<>
    
    
    <div className="bg-gradient-to-br from-blue-500 to-black h-[calc(100vh-48px)] pt-2 w-full relative">

{/* TOP BOX! */}
 <div className="bg-gradient-to-r px-2  from-teal-400 to-blue-400 h-12 w-[95%] flex mx-auto items-center">
  <div className="w-[20%]">
  <img src="/fertilizer.png" alt="pic" className="w-8 h-8"/>
  </div>

  <div className="w-[60%] ml-2">
  <p className="font-bold text-xl text-white">FERTILIZERS&nbsp;DETAILS</p>
  </div>
 </div>

 {/* TOTAL UNITS && TOTAL PRICE! */}
  <div className="h-24 w-[95%] flex mx-auto gap-6 mt-2">

    {/* TOTAL UNITS! */}
     <div className="w-[47%] h-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg border-1 border-gray-600 rounded-md flex flex-col py-4 ">
       <h2 className="text-white font-semibold text-xl text-center">Total Packets</h2>
       <p className="text-white font-semibold text-2xl text-center">{totalBags}</p>
     </div>

     {/* TOTAL AMOUNT! */}
     <div className="w-[47%] h-full  rounded-md flex bg-gradient-to-r from-green-400 to-blue-500 mx-auto justify-between py-4 flex-col">
     
     <h2 className="text-white font-semibold text-xl text-center">Total Amount</h2>
       <p className="text-white font-semibold text-2xl text-center">{totalAmount}</p>
     </div>

  </div>

   <Divider my={3} w={'95%'} display={'flex'} mx={'auto'}/>
  {/* DEATILS & ADD! */}
  <div className=" bg-teal-500 w-[70%] text-gray-600 border-2 border-gray-300 px-2 py-1 shadow-xl align-center justify-between  flex mx-auto rounded-md">
    <IoAddCircle className="w-7 h-7 " />
    <p className="font-semibold text-xl text-center w-full" onClick={() => {data.open ? setData({open:false,view:'FERT'}) : setData({open:true,view:'FERT'})}}>Add New Fertilizer Detail</p>
  </div>

 {/* TABLE! */}
  <DetailsTable fertilizerDetails={fertilizerDetails}  />

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