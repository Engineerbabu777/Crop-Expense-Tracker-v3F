
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,Flex
  } from '@chakra-ui/react';
import {useState , useEffect} from 'react';
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import toast, {Toaster} from 'react-hot-toast';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {Alert} from '../SweetAlert/ElectricityAlert';
import {useRouter} from 'next/router';
import Update from '../SweetAlert/ElectricityUpdate';
import { DataState } from '@/atom/dataState';
import {useRecoilState} from 'recoil';
import {format} from 'date-fns';

type Props = {
  bills:any;
  setBills:any;
}

export default function DetailsTable({bills,setBills}:Props){
  
  const router = useRouter();
  const MySwal = withReactContent(Swal);



  const test = (b:any) => {

    MySwal.fire({
      title: <p>Deleting ....</p>,
      html: <Alert closeButton={Swal.close} bills={bills} setBills={setBills} b={b} />,
      showCancelButton: false,
      showConfirmButton:false,
      
    })

  }

  const editEntry = (b:any) => {
    MySwal.fire({
      title: <p>Updating...</p>,
      html: <Update closeButton={Swal.close} prevData={b} />,
      showCancelButton: false,
      showConfirmButton:false,
      
    })
     
  }



    return(<>
    <Toaster position="bottom-center" />
    <TableContainer bg={'white'}  w={'95%'} mt={4} display={'flex'} mx={'auto'} >
  <Table variant='simple'>
    
    
    <Thead  >
      <Tr  >
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'} >No.</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Date/Month</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Units</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>@/rate unit</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Billing Amount</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Paid</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Actions</Th>

      </Tr>
    </Thead>
    
    <Tbody  fontWeight={'600'} fontSize={'1.10rem'}>

{ bills?.length >0 && bills?.map((b:any , i:any) => (
      <Tr key={i}>
        <Td >{i+1}</Td>
        <Td>{b?.date ? (<> {format(new Date(b?.date),'yyyy-MM-dd')} </>) : ('N/A')}</Td>
        <Td>{b?.units}</Td>
        <Td>41</Td>
        <Td>{b?.bill}</Td>
        <Td>Yes</Td>
        <Td>
          <Flex gap={4} justifyContent={'space-evenly'} alignItems={'center'}>
            <BiEdit className="w-5 h-5 text-green-500" onClick={() => editEntry(b)}/>
            
            <AiFillDelete className="w-5 h-5 text-red-500" onClick={() => {test(b)}}/>
            
          </Flex>
        </Td>
      </Tr>
))

}

    
    </Tbody>

  </Table>
</TableContainer>
    
    
    
    
    
    
    </>);

}