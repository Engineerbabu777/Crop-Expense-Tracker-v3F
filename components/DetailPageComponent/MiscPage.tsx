
import Navbar from '@/components/HomePage/TopNavigation/Navbar';
import {useRouter} from 'next/router';

import {Divider,Flex} from '@chakra-ui/react';
import {IoAddCircle} from 'react-icons/io5'


  import {useState , useEffect} from 'react';
  import {BiEdit} from 'react-icons/bi';
  import {AiFillDelete} from 'react-icons/ai';
  import { confirmAlert } from 'react-confirm-alert';
  import 'react-confirm-alert/src/react-confirm-alert.css'; 
  import toast, {Toaster} from 'react-hot-toast';
  import Swal from 'sweetalert2'
  import withReactContent from 'sweetalert2-react-content'
  import {Alert} from '../SweetAlert/MiscAlert';
  import Update from '../SweetAlert/MiscUpdate';
  import { DataState } from '@/atom/dataState';
  import {useRecoilState} from 'recoil';
  
  
import {format} from 'date-fns'

export default function MiscPage() {

    const router = useRouter();
    const {name} = router?.query;
    const [data , setData] = useRecoilState(DataState);

    const [misc , setMisc] = useState([]);
    const [totalAmount , setTotalAmount] = useState(0);

    const MySwal = withReactContent(Swal);
  
  
    const test = (m:any) => {
  
      MySwal.fire({
        title: <p>Deleting ....</p>,
        html: <Alert closeButton={Swal.close} misc={misc} setMisc={setMisc} m={m} />,
        showCancelButton: false,
        showConfirmButton:false,
        
      })
  
    }
  
    const editEntry = (m:any) => {
      MySwal.fire({
        title: <p>Updating...</p>,
        html: <Update closeButton={Swal.close} prevData={m} />,
        showCancelButton: false,
        showConfirmButton:false,
        
      })
       
    }
  




    // Make a fecth Request!
    useEffect(() => {
  
      fetch('/api/misc').then((res:any) => res.json().then((data:any) => {
      
        setMisc(data.allMisc.filter((m:any) => m.parentId == router?.query?.crop));

        const b = data.allMisc.filter((m:any) => m.parentId == router?.query?.crop);
        const amount = b.reduce((accumulator:any, currentObject:any) => accumulator + currentObject.amount, 0);     
        setTotalAmount(amount);
        console.log(amount)
      }));

      
  
    },[])


    return(<>

    <Toaster position="bottom-center"/>
    
    
    <div className="bg-gradient-to-br from-blue-500 to-black min-h-screen max-h-full pt-2 w-full relative example">

{/* TOP BOX! */}
 <div className="bg-gradient-to-r px-2  from-teal-400 to-blue-400 h-12 w-[95%] flex mx-auto items-center">
  <div className="w-[20%]">
  <img src="/miscellaneous.png" alt="pic" className="w-8 h-8"/>
  </div>

  <div className="w-[60%] ml-2">
  <p className="font-bold text-xl text-white uppercase">miscellaneous</p>
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

<div className="mt-4 example">
   {/* DISPLAY ! */}
   <div className="flex flex-col gap-2 mt-4 w-[95%] mx-auto h-[52vh] overflow-auto example" >
            {misc?.length>0 && misc?.map((m:any , i:any) => (<div key={i} className="example p-1 border-2 bg-gray-200 border-gray-300 rounded-md flex flex-col gap-2">
              <div className="">
                <p className="text-xl text-black text-semibold">{m?.purpose}</p>
                <p className="w-full text-end">
                <Flex gap={4} justifyContent={'flex-end'}>
                 <BiEdit className="w-7 h-7 text-green-500 bg-gray-300 p-2 rounded-md" onClick={() => editEntry(m)}/>
                 <AiFillDelete className="w-7 h-7 text-red-500 bg-gray-300 p-2 rounded-md" onClick={() => {test(m)}}/>
               </Flex>
                </p>
              </div>
              <div className=" flex justify-between">
               <p className="bg-blue-300 text-black p-2 text-sm">Date: {format(new Date(m?.date),'MMM dd yyyy')}</p>
               <p className="bg-red-500 text-white p-2 text-sm">Amount: {m?.amount?.toLocaleString()} pkr</p>
              </div>
            </div>))}
            
    </div>

   
</div>

 


</div>
    
    
    
    </>)
}