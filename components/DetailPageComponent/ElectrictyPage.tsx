


import Navbar from '@/components/HomePage/TopNavigation/Navbar';
import {useRouter} from 'next/router';
import DetailsTable from '@/components/DetailPageComponent/Table';
import {Divider} from '@chakra-ui/react';
import {IoAddCircle} from 'react-icons/io5'
import ViewDataState from '@/modals/DetailsModal';
import {
  RecoilRoot,} from 'recoil';
  import { DataState } from '@/atom/dataState';
  import {useRecoilState} from 'recoil';
import {useEffect,useState} from 'react';


export default function ElectricityPage({}) {

    const {query} = useRouter();
    const {name} = query;
    const [data , setData] = useRecoilState(DataState);
    const [totalUnits , setTotalUnits] = useState(0);
    const [totalBill , setTotalBill] = useState(0);
    const [bills , setBills] = useState([]);

    // FUNCTION TO GET DETAILS OF ELECTRICITY!
    useEffect(() => {

      if(query?.crop){
        fetch('/api/elect?parentId='+query?.crop).then((res:any) => res.json().then((data:any) => {
          // total units!
          let a = data.allBills.filter((b:any) => b?.parentId == query?.crop);
          setBills(a)
          const d = data.allBills.filter((b:any) => b?.parentId == query?.crop);
           const u = d?.reduce((accumulator:any, currentObject:any) => accumulator + currentObject.units, 0);        
          // total amount!
          const db = data.allBills.filter((b:any) => b?.parentId == query?.crop);
          const b = db?.reduce((accumulator:any, currentObject:any) => accumulator + currentObject.bill, 0); 
          
          setTotalUnits(u);
          setTotalBill(b);


        }));
      }
  
    },[query?.crop])


    return(<>
    
    
    <div className="bg-gradient-to-br from-blue-500 to-black h-[calc(100vh-48px)] min-h-screen pt-2 w-full relative">

{/* TOP BOX! */}
 <div className="bg-gradient-to-r px-2  from-teal-400 to-blue-400 h-12 w-[95%] flex mx-auto items-center">
  <div className="w-[20%]">
  <img src="/electric-meter.png" alt="pic" className="w-8 h-8"/>
  </div>

  <div className="w-[60%] ml-2">
  <p className="font-bold text-xl text-white">ELECTRICITY&nbsp;DETAILS</p>
  </div>
 </div>

 {/* TOTAL UNITS && TOTAL PRICE! */}
  <div className="h-24 w-[95%] flex mx-auto gap-6 mt-2">

    {/* TOTAL UNITS! */}
     <div className="w-[47%] h-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg border-1 border-gray-600 rounded-md flex flex-col py-4 ">
       <h2 className="text-white font-semibold text-xl text-center">Units Consumed</h2>
       <p className="text-white font-semibold text-2xl text-center">{totalUnits?.toLocaleString()}</p>
     </div>

     {/* TOTAL AMOUNT! */}
     <div className="w-[47%] h-full  rounded-md flex bg-gradient-to-r from-green-400 to-blue-500 mx-auto justify-between py-4 flex-col">
     
     <h2 className="text-white font-semibold text-xl text-center">Billing Amount</h2>
       <p className="text-white font-semibold text-2xl text-center">{totalBill?.toLocaleString()}</p>
     </div>

  </div>

   <Divider my={3} w={'95%'} display={'flex'} mx={'auto'}/>
  {/* DEATILS & ADD! */}
  <div className=" bg-teal-500 w-[70%] text-gray-600 border-2 border-gray-300 px-2 py-1 shadow-xl align-center justify-between  flex mx-auto rounded-md">
    <IoAddCircle className="w-7 h-7 " />
    <p className="font-semibold text-xl text-center w-full" onClick={() => {data.open ? setData({open:false,view:'ELEC'}) : setData({open:true,view:'ELEC'})}}>Add New Electricity Bill</p>
  </div>

 {/* TABLE! */}
  <DetailsTable bills={bills} setBills={setBills} />


</div>
    
    
    
    </>)
}