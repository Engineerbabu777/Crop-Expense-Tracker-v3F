import Navbar from '@/components/HomePage/TopNavigation/Navbar';
import {useRouter} from 'next/router';
import DetailsTable from '@/components/DetailPageComponent/DieselTable';
import {Divider} from '@chakra-ui/react';
import {IoAddCircle} from 'react-icons/io5'
import ViewDataState from '@/modals/DetailsModal';
import {
  RecoilRoot,} from 'recoil';
  import { DataState } from '@/atom/dataState';
  import {useRecoilState} from 'recoil';
import  {useState , useEffect} from 'react';



export default function DieselPage() {

    const {query} = useRouter();
    const {name} = query;
    const [data , setData] = useRecoilState(DataState);
    
    const [totalLiters , setTotalLiters] = useState(0);
    const [totalBill , setTotalBill] = useState(0);

    const [DIESEL , setDIESEL] = useState([]);

    // FUNCTION TO GET DETAILS OF ELECTRICITY!
    useEffect(() => {


      fetch('/api/dies').then((res:any) => res.json().then((data:any) => {
        
        // total liters!
         const d = data.allDiesel;
         const l = d.reduce((accumulator:any, currentObject:any) => accumulator + currentObject.liters, 0);        
        // total amount!
         const db = data.allDiesel;
         const a = db.reduce((accumulator:any, currentObject:any) => accumulator + currentObject.amount, 0); 
        
        setTotalLiters(l);
        setTotalBill(a);

        setDIESEL(data.allDiesel);

        // console.log(data);

      }));
  
    },[])


    return(<>
    
    
    <div className="bg-gradient-to-br from-blue-500 to-black min-h-screen max-h-full pt-2 w-full relative">

{/* TOP BOX! */}
 <div className="bg-gradient-to-r px-2  from-teal-400 to-blue-400 h-12 w-[95%] flex mx-auto items-center">
  <div className="w-[20%]">
  <img src="/oil.png" alt="pic" className="w-8 h-8"/>
  </div>

  <div className="w-[60%] ml-8">
  <p className="font-bold text-xl text-white">DIESEL&nbsp;DETAILS</p>
  </div>
 </div>

 {/* TOTAL UNITS && TOTAL PRICE! */}
  <div className="h-24 w-[95%] flex mx-auto gap-6 mt-2">

    {/* TOTAL UNITS! */}
     <div className="w-[47%] h-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg border-1 border-gray-600 rounded-md flex flex-col py-4 ">
       <h2 className="text-white font-semibold text-xl text-center">Liters Used</h2>
       <p className="text-white font-semibold text-2xl text-center">{totalLiters}</p>
     </div>

     {/* TOTAL AMOUNT! */}
     <div className="w-[47%] h-full  rounded-md flex bg-gradient-to-r from-green-400 to-blue-500 mx-auto justify-between py-4 flex-col">
     
     <h2 className="text-white font-semibold text-xl text-center">Total Price</h2>
       <p className="text-white font-semibold text-2xl text-center">{totalBill.toLocaleString()}</p>
     </div>

  </div>

   <Divider my={3} w={'95%'} display={'flex'} mx={'auto'}/>
  {/* DEATILS & ADD! */}
  <div className=" bg-teal-500 w-[70%] text-gray-600 border-2 border-gray-300 px-2 py-1 shadow-xl align-center justify-between  flex mx-auto rounded-md">
    <IoAddCircle className="w-7 h-7 " />
    <p className="font-semibold text-xl text-center w-full" onClick={() => {data.open ? setData({open:false,view:'DIES'}) : setData({open:true,view:'DIES'})}}>Add New Diesel Bill</p>
  </div>

 {/* TABLE! */}
  <DetailsTable diesel={DIESEL} setDiesel={setDIESEL} />

  

</div>
    
    
    
    </>)
}