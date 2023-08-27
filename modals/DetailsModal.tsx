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
  import { DataState } from '../atom/dataState';
  import {useRecoilState} from 'recoil';
  import NewEntryBody from '@/components/Modals/NewEntry';
  import MainElectricity from '@/components/DetailsModals/MainElectricity';
  import MainFertilizer from '@/components/DetailsModals/MainFertilizers';
  import MainPlough from '@/components/DetailsModals/MainPlough';
  import MainMisc from '@/components/DetailsModals/MainMisc';
  import MainPesticides from '@/components/DetailsModals/MainPesticides';
  import MainDiesel from '@/components/DetailsModals/MainDiesel';
  import {useState,useEffect} from 'react';
  import {useRouter} from 'next/router';
  import toast from 'react-hot-toast';
  import useElectricity from '@/hooks/useCrop';

   export default function ViewDataState() {
    const [data , setDataState] = useRecoilState(DataState);
    const router = useRouter();

    useEffect(() => {
      
    },[])

    // ELECTRICTY!
    const [elect , setElect] = useState({
      units: 0 , 
      bill: 0,
      date: '',
      desc: '',
    });

    // FERTILIZERS!
    const [fert , setFert] = useState({
      bags: 0 , 
      amount: 0,
      date: '',
      desc:'',
    });

    // PLOUGH!
    const [plough , setPlough] = useState({
      acers: 0, 
      amount: 0,
      date: '',
    });

    // DIESEL!
    const [diesel , setdiesel] = useState({
      liters: 0, 
      amount: 0,
      date: null,
      desc:'',
    });

    // Pesticides!
     const [pesticides , setPesticides] = useState({
      quantity: 0,
      amount: 0,
      desc: '',
      date:null,
     })

     // MISCELLANOUS!
     const [misc , setMisc] = useState({
      date: null ,
      amount: 0,
      purpose: '',
     })

    const saveData = () => {
     if(data.view === 'ELEC'){
      fetch('/api/elect',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({date:elect.date,desc:elect.desc, units:elect.units , bill:elect.bill , parentId:router?.query?.crop})
       }).then((res) => res.json().then((data) => {console.log(data);toast.success("Added Successfully");router.reload()}) )

       setDataState({view:'',open:false})
     }

     if(data.view === 'FERT'){
      fetch('/api/fert',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({date:fert.date , bags:fert.bags , bill:fert.amount ,parentId:router?.query?.crop,desc:fert?.desc})
       }).then((res) => res.json().then((data) => {console.log(data);toast.success("Added Successfully");router.reload();}) )

       setDataState({view:'',open:false})
     }

     if(data.view === 'PLOU'){
      fetch('/api/plou',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({date:plough.date , acers:plough.acers , amount:plough.amount, parentId:router.query.crop})
       }).then((res) => res.json().then((data) => {console.log(data);toast.success("Added Successfully");router.reload();}) );

       setDataState({view:'',open:false})

      console.log(plough)
     }

     
     if(data.view === 'DIES'){
      fetch('/api/dies',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({date:diesel.date , liters:diesel.liters , amount:diesel.amount, parentId:router.query.crop})
       }).then((res) => res.json().then((data) => {console.log(data);toast.success("Added Successfully");router.reload();}) );

       setDataState({view:'',open:false})
      console.log(diesel)
     }

     if(data.view === 'PEST'){
      fetch('/api/pest',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({amount:pesticides.amount , quantity:pesticides.quantity , date:pesticides.date, desc: pesticides.desc, parentId:router.query.crop})
       }).then((res) => res.json().then((data) => {console.log(data);toast.success("Added Successfully");router.reload();}) );

       setDataState({view:'',open:false})
      console.log(pesticides)
     }

     if(data.view === 'MISC'){
      fetch('/api/misc',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({date:misc.date , purpose:misc.purpose , amount:misc.amount, parentId:router.query.crop})
       }).then((res) => res.json().then((data) => {console.log(data);toast.success("Added Successfully");router.reload();}) );

       setDataState({view:'',open:false})
      console.log(pesticides)
     }


     
     
    }

    
    // ELECTRICITY !!


    // PLOUGH !!


    // FERTILIZERS !!


    // PESTICIDES !!


    // MISCILLINOUS !!


    // DESEAL !!

    

    return (
      <>
        <Modal isOpen={data?.open} onClose={() => setDataState({view:'',open:false})}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize={'1.5rem'} mb={2} color={'red.500'}>
              {/* DEPANDS UPON VIEW STATE! */}
               {data.view === 'ELEC' && "ADD NEW ELECTRICITY BILL"}
               {data.view === 'FERT' && "ADD NEW FERTILIZER BILL"}
               {data.view === 'PEST' && "ADD NEW PESTICIDES BILL"}
               {data.view === 'PLOU' && "ADD NEW PLOUGH BILL"}
               {data.view === 'MISC' && "ADD NEW MISCILLINOUS AMOUNT"}
               {data.view === 'DIES' && "ADD NEW DESEIAL AMOUNT"}


            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>

             {/* ELECTRICITY! */}
             {data.view === 'ELEC' &&  <MainElectricity elect={elect} setElect={setElect} /> }

             {/* PLOUGH! */}
             {data.view === 'PLOU' &&  <MainPlough plough={plough} setPlough={setPlough} /> }

             {/* FERTILIZERS! */}
             {data.view === 'FERT' &&  <MainFertilizer fert={fert} setFert={setFert} /> }

             {/* DIESEL! */}
             {data.view === 'DIES' &&  <MainDiesel diesel={diesel} setDiesel={setdiesel}  /> }

             {/* PESTICIDES! */}
             {data.view === 'PEST' &&  <MainPesticides pesticides={pesticides} setPesticides={setPesticides} /> }

             {/* MISCILINOUS! */}
             {data.view === 'MISC' &&  <MainMisc misc={misc} setMisc={setMisc} /> }

             {/* ANNUAL RENT! */}

            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='red' mr={3} onClick={() => setDataState({open:false,view:'DIES'})}>
                Cancel
              </Button>
              <Button colorScheme='green' onClick={saveData}>
                Save Entry
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }