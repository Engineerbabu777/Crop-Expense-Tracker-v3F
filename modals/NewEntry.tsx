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
import { AuthState } from '../atom/authState';
import {useRecoilState} from 'recoil';
import NewEntryBody from '@/components/Modals/NewEntry';
import {useState} from 'react';
import useAllCrops from '@/utils/getAllCrops';
import {useSession} from 'next-auth/react';

export default function BasicUsage() {
  const [authState , setAuthState] = useRecoilState(AuthState);
  const {data:Session} = useSession();
  console.log(authState.open);
  const [name  , setName] = useState<string>('');
  const [month , setMonth] = useState('');
  const [year , setYear] = useState('');
  const [date , setDate] = useState<any>(null);
  const {getFreshData} = useAllCrops();

  // SAVING / CREATING DATA!
  const saveDate = async() => {
   // getMonth!
   let d = new Date(date);

   let month = d.toString().split(' ')[1]; // Month_Name (Aug) !!
   let year = d.getFullYear(); // gives full year (2023) !!

   await fetch('/api/crop',{method:'POST',
   headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
   body:JSON.stringify({month , name , year,userId:Session?.user?.id})})
   .then((res) => res.json().then((data) => console.log(data)))
   .catch((err) => console.log(err))

    // Close the Modal!
    setTimeout(() => {

      setAuthState({open:false})
      
      // Get Freshed Data!
       getFreshData();
       
    },3000)

  }

  return (
    <>
      <Modal isOpen={authState?.open} onClose={() => setAuthState({open:false})}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={'1.5rem'} mb={2} color={'red.500'}>New Crop Entry</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NewEntryBody name={name} date={date} 
            setName={setName} setDate={setDate}  />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={() => setAuthState({open:false})}>
              Cancel
            </Button>
            <Button onClick={saveDate} colorScheme='green'>Save Entry</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}