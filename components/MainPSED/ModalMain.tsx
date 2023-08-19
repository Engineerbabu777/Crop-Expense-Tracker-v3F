import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from '@chakra-ui/react';
  import { MainModelState } from '@/atom/showMainModal';
  import {useRecoilState} from 'recoil';
  import NewEntryBody from '@/components/Modals/NewEntry';
  import MainElectricity from '@/components/DetailsModals/MainElectricity';
  import MainFertilizer from '@/components/DetailsModals/MainFertilizers';
  import MainPlough from '@/components/DetailsModals/MainPlough';
  import MainMisc from '@/components/DetailsModals/MainMisc';
  import MainPesticides from '@/components/DetailsModals/MainPesticides';
  import MainDiesel from '@/components/DetailsModals/MainDiesel';
  import {useState , useEffect} from 'react';
  import {useRouter} from 'next/router';
  import SoldBody from './Sold/SoldBody';
  import ExpensesBody from './Expenses/Body';
  import DebtBody from './Debt/DebtBody';
  import ProfitBody from './Profit/ProfitBody';

  type Props = {
    setExpenses: any;
    expenses: any;
    sold:any;
    setSold:any;
    debt:any;
    setDebt:any;
    profit:any;
    setProfit:any;
  }

  export default function ViewDataState({setExpenses , expenses, sold ,setSold,debt,setDebt,profit,setProfit}:Props) {

    const [mainModalState , setMainModalState] = useRecoilState(MainModelState);
    

 

    const router = useRouter();

    useEffect(() => {
        if(router?.query?.crop){
          

            fetch('/api/exp?p_id='+router?.query?.crop).then((response) => response.json().then((data) => {
                let a =  data?.data1?.reduce((acc:any , curr:any) => {if(curr?.bill !== undefined) return acc+curr?.bill},0);
                let b =  data?.data2?.reduce((acc:any , curr:any) => {if(curr?.amount !== undefined) return acc+curr?.amount},0);
                let c =  data?.data3?.reduce((acc:any , curr:any) => {if(curr?.bill !== undefined) return acc+curr?.bill},0);
                let d =  data?.data4?.reduce((acc:any , curr:any) => {if(curr?.amount !== undefined) return acc+curr?.amount},0);
                let e =  data?.data5?.reduce((acc:any , curr:any) => {if(curr?.amount !== undefined) return acc+curr?.amount},0);
                let f =  data?.data6?.reduce((acc :any, curr:any) => {if(curr?.amount !== undefined) return acc+curr?.amount},0);
                let t = Number(a) + Number(b) + Number(c) + Number(d) + Number(e) + Number(f);
                setExpenses({total:t , elect:a , dies:b , fert:c , pest:d , plou:e , misc:f});
            }))

            fetch('/api/sold?p_id='+router?.query?.crop).then((response) => response.json().then((data) => {
              setSold(data?.soldData)
             
            }));

            fetch('/api/debt?p_id='+router?.query?.crop).then((response) => response.json().then((data) => {
               let t =  data?.debtData?.reduce((acc:any , curr:any) => {if(curr?.debtAmount !== undefined) return acc+Number(curr?.debtAmount)},0);
               setDebt(((prev:any) => ({...prev , colDebt:data.debtData , totalDebt:t})));
              

            }));

            fetch('/api/profit?p_id='+router?.query?.crop).then((response) => response.json().then((data) => {
                let a =  data?.expData?.data1?.reduce((acc:any , curr:any) => {if(curr?.bill !== undefined) return acc+curr?.bill},0);
                let b =  data?.expData?.data2?.reduce((acc:any , curr:any) => {if(curr?.amount !== undefined) return acc+curr?.amount},0);
                let c =  data?.expData?.data3?.reduce((acc:any , curr:any) => {if(curr?.bill !== undefined) return acc+curr?.bill},0);
                let d =  data?.expData?.data4?.reduce((acc:any , curr:any) => {if(curr?.amount !== undefined) return acc+curr?.amount},0);
                let e =  data?.expData?.data5?.reduce((acc:any , curr:any) => {if(curr?.amount !== undefined) return acc+curr?.amount},0);
                let f =  data?.expData?.data6?.reduce((acc :any, curr:any) => {if(curr?.amount !== undefined) return acc+curr?.amount},0);
                let expenses_Amount = Number(a) + Number(b) + Number(c) + Number(d) + Number(e) + Number(f);

                // SOLD AMOUNT!
                let sold_amount = data?.soldData[0]?.amount;

                // DEBT AMOUNT!
                let debt_Amount =  data?.debtData?.reduce((acc:any , curr:any) => {if(curr?.debtAmount !== undefined) return acc+Number(curr?.debtAmount)},0);


                console.log(expenses_Amount , sold_amount , debt_Amount);

                if(sold_amount){
                  setProfit((prev:any) => ({...prev, profit:(sold_amount - (expenses_Amount + debt_Amount)), debt:debt_Amount , sold:sold_amount ,expenses:expenses_Amount}))
                }

            }));

        }
        },[router?.query?.crop]);
    

    return (
      <>
        <Modal isOpen={mainModalState?.show} onClose={() => setMainModalState({view:'profit',show:false})}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader >

            {mainModalState?.view === 'expenses' && <>
               <div className="text-center text-3xl text-green-600 font-bold underline -mt-3">
               𝓔𝔁𝓹𝓮𝓷𝓼𝓮𝓼
               </div>
            </> }

            {mainModalState?.view === 'debt' && <>
               <div className="text-center text-3xl text-green-600 font-bold underline -mt-3">
               𝕯𝖊𝖇𝖙
               </div>
            </> }

            {mainModalState?.view === 'profit' && <>
               <div className="text-center text-3xl text-green-600 font-bold underline -mt-3">
               𝓟𝓻𝓸𝓯𝓲𝓽
               </div>
            </> }

            {mainModalState?.view === 'sold' && <>
               <div className="text-center text-3xl text-green-600 font-bold underline -mt-3">
               𝓢𝓸𝓵𝓭
               </div>
            </> }

         
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>

                {mainModalState?.view === 'expenses' && <ExpensesBody expenses={expenses} /> }

                {mainModalState?.view === 'sold' && <SoldBody sold={sold}/> }

                {mainModalState?.view === 'debt' && <DebtBody debt={debt} setDebt={setDebt} /> }

                {mainModalState?.view === 'profit' && <ProfitBody profit={profit} setProfit={setProfit} /> }





            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='red' mr={3} onClick={() => setMainModalState({show:false,view:'profit'})}>
                Close
              </Button>
              {/* <Button colorScheme='green' onClick={() => {}}>
                Save Entry
              </Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }