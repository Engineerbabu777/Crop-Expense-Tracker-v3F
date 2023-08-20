
import Navbar from '@/components/HomePage/TopNavigation/Navbar';
import {BsExclamationDiamondFill} from 'react-icons/bs';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect , useState} from 'react';
import {format} from 'date-fns';
import toast,{Toaster} from 'react-hot-toast';
import { MainModelState } from '@/atom/showMainModal';
import {useRecoilState} from 'recoil';
import ViewDataState from '@/components/MainPSED/ModalMain';


export default function Index({}) {

  const router = useRouter();

  const [cropDetails , setCropDetails] = useState({
    name: '',
    month:'',
    year: '',
    created: '',
  });

  const [expenses , setExpenses]= useState({
    total:0 ,
    elec: 0 ,
    plou: 0,
    fert: 0,
    dies: 0,
    misc: 0,
  });

  const [sold , setSold] = useState({
    amount:0,
    desc:'',
    date:null,
    colSold:[],
    totalSold:0,
    edit:false,
    totalCrop:0,
  });

  


  const [debt , setDebt] = useState({
    totalDebt:0,
    colDebt:[],
    desc:'',
    amount:0,
    date: null,
    edit:false,
  });

  const [profit , setProfit] = useState({
    profit:0,
    expenses:0,
    sold:0,
    debt:0,
  });




  const [mainModalState , setMainModalState] = useRecoilState(MainModelState);



  useEffect(() => {
     // Fetch data for the specific id!
     if(router?.query?.crop){
       fetch('/api/crop?crop_id='+router?.query?.crop).then((response) => response.json().then((data) => {
         let createdDate = new Date(data?.crop?.createdAt);             
         let d = format(createdDate, 'MMM dd yyyy'); 
         setCropDetails({name:data.crop.name , year:data.crop.year , month:data.crop.month , created:d});

       }));
     }

  },[router?.query.crop]);

    return(<>

    
    <Toaster />
    
     {/* NAVBAR! */}
     <Navbar />

     <ViewDataState 
      expenses={expenses} setExpenses={setExpenses}
      sold={sold} setSold={setSold} 
      debt={debt} setDebt={setDebt}
      profit={profit} setProfit={setProfit} 
     />
    
     {/* MAIN BODY! */}
      <div className="">
        {/* TOP! */}
         <div className="bg-gradient-to-r items-center flex-col from-[#749BC2] justify-center to-[#4682A9] h-14 w-[95%] flex mx-auto mt-2 rounded-xl">
          <h2 className="text-xl text-white font-[700]">{cropDetails?.name} ({cropDetails?.month} - {cropDetails?.year})</h2>
          <p className="flex text-sm font-semibold items-center gap-2">Created on: <p className="text-xs text-red-800">{cropDetails?.created}</p></p>
         </div>

         <div className=" w-full h-48 flex justify-between flex-col items-center mt-1  ">
           <div className="h-[49%] justify-between w-[95%] flex rounded-xl">
            <div onClick={() => setMainModalState({view:'profit',show:true})} className="cursor-pointer rounded-xl flex bg-gradient-to-r gap-2 from-green-400 to-green-500 items-center w-[49%] overflow-hidden">
                <div className="px-1">
                <img src="/moneybag.png" className="w-10 h-10" alt="img"/>
                </div>
                <div className="flex flex-col gap-3">
                    {/* NAME! */}
                     <h2 className="font-[700] text-xl text-white underline">Profit</h2>

                    {/* AMOUNT! */}
                     <p className="font-semibold text-white">{profit?.profit?.toLocaleString()}/-Rs</p>
                </div>
            </div>
            <div onClick={() => setMainModalState({view:'sold',show:true})} className=" cursor-pointer rounded-xl flex items-center gap-2  bg-gradient-to-r from-gray-400 to-gray-500 w-[49%] overflow-hidden">
            <div className="px-1">
                <img src="/deal.png" className="w-10 h-10" alt="img"/>
                </div>
                <div className="flex flex-col gap-3">
                    {/* NAME! */}
                    <h2 className="font-[700] text-xl text-white underline">Sold</h2>

                    {/* AMOUNT! */}
                    <p className="font-semibold text-white">{sold?.totalSold?.toLocaleString()}/-Rs</p>
                     
                </div>
            </div>
           </div>
           <div className="h-[49%] flex  w-[95%] justify-between">
            <div onClick={() => setMainModalState({view:'expenses',show:true})} className=" cursor-pointer rounded-xl flex items-center gap-2 bg-gradient-to-r from-blue-400 to-blue-500 w-[49%]">
            <div className="px-1">
                <img src="/calculator.png" className="w-10 h-10" alt="img"/>
                </div>
                <div className="flex flex-col gap-3">
                    {/* NAME! */}
                    <h2 className="font-[700] text-xl text-white underline">Expenses</h2>

                    {/* AMOUNT! */}
                    <p className="font-semibold text-white">{expenses?.total?.toLocaleString()}/-Rs</p>
                     
                </div>
            </div>
            <div onClick={() => setMainModalState({view:'debt',show:true})} className="cursor-pointer rounded-xl flex items-center gap-2 bg-gradient-to-r from-red-400 to-red-500 w-[49%]">
            <div className="px-1">
                <img src="/coin.png" className="w-10 h-10" alt="img"/>
                </div>
                <div className="flex flex-col gap-3">
                    {/* NAME! */}
                    <h2 className="font-[700] text-xl text-white underline">Debt</h2>

                    {/* AMOUNT! */}
                    <p className="font-semibold text-white">{(Math.abs(debt?.totalDebt - profit?.debt)).toLocaleString()}/-Rs</p>

                </div>
            </div>
           </div>
         </div>

         {/* ELECTRICTY! */}
          <div className="w-[95%] gap-2 items-center flex mx-auto bg-gradient-to-r from-teal-300 to-teal-400 text-white mt-2 rounded-md px-1">
            <BsExclamationDiamondFill className="w-4 h-4 text-red-500" />
            <h2 className="font-semibold text-md py-1">Check out all crop deatils below</h2>
          </div>

{/* ELECTRICTY! */}
          <div className="h-16 w-[95%] gap-2 items-center justify-between flex mx-auto rounded-md px-2 shadow-md mt-1 bg-gradient-to-r from-blue-500 to-black">
            
            <Link href={'/'+router?.query?.username+'/'+router?.query?.crop+'/electricity'} className="">
            <p className="font-semibold text-white text-2xl">Electricity (بجلی)</p>
            </Link>

            <div className="">
             <img src={"/electric-meter.png"} alt={"img"} className="w-10 h-10" />
            </div>
          </div>
{/* FERTILIZERS! */}
          <div className="h-16 w-[95%] flex items-center justify-between px-2 mx-auto rounded-md bg-gradient-to-r from-green-600 to-yellow-300 mt-1">

          <Link href={'/'+router?.query?.username+'/'+router?.query?.crop+'/fertilizer'} className="">
            <p className="font-semibold text-white text-2xl">Fertilizers (کھاد)</p>
            </Link>

            <div className="">
             <img src={"/fertilizer.png"} alt={"img"} className="w-10 h-10" />
            </div>

          </div>
        
{/* PLOUGH! */}
<div className="h-16 w-[95%] flex items-center justify-between px-2 mx-auto rounded-md bg-gradient-to-r from-[#765827] to-green-600 mt-1">

<Link href={'/'+router?.query?.username+'/'+router?.query?.crop+'/plough'} className="">
  <p className="font-semibold text-white text-2xl">Plough (ہل)</p>

  </Link>

  <div className="">
   <img src={"/cultivator.png"} alt={"img"} className="w-10 h-10" />
  </div>

</div>


{/* DIESEL! */}
<div className="h-16 w-[95%] flex items-center justify-between px-2 mx-auto rounded-md bg-gradient-to-r from-orange-400 to-gray-600 mt-1">

<Link href={'/'+router?.query?.username+'/'+router?.query?.crop+'/diesel'} className="">
  <p className="font-semibold text-white text-2xl">Diesel (ڈیزل)</p>

  </Link>

  <div className="">
   <img src={"/oil.png"} alt={"img"} className="w-10 h-10" />
  </div>

</div>



{/* MISCELLINOUS! */}
<div className="h-16 w-[95%] flex items-center justify-between px-2 mx-auto rounded-md bg-gradient-to-r from-sky-400 via-teal-400 to-lime-400 mt-1">

<Link href={'/'+router?.query?.username+'/'+router?.query?.crop+'/misc'} className="">
  <p className="font-semibold text-white text-2xl">Miscellinous(اضافی)</p>

  </Link>

  <div className="">
   <img src={"/miscellaneous.png"} alt={"img"} className="w-10 h-10" />
  </div>

</div>



{/* PESTICIDES! */}
<div className="h-16 w-[95%] flex items-center justify-between px-2 mx-auto rounded-md bg-gradient-to-r  from-purple-400 via-indigo-500 to-blue-500 mt-1">

<Link href={'/'+router?.query?.username+'/'+router?.query?.crop+'/pest'} className="">
  <p className="font-semibold text-white text-2xl">Pesticides(کیڑے مار ادویات)</p>

  </Link>

  <div className="">
   <img src={"/pesticide.png"} alt={"img"} className="w-10 h-10" />
  </div>

</div>


      </div>

    </>)
}