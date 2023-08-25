

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
  import {format} from 'date-fns';
  import {useState , useEffect} from 'react';
  import {BiEdit} from 'react-icons/bi';
  import {AiFillDelete} from 'react-icons/ai';
  import { confirmAlert } from 'react-confirm-alert';
  import 'react-confirm-alert/src/react-confirm-alert.css'; 
  import toast, {Toaster} from 'react-hot-toast';
  import Swal from 'sweetalert2'
  import withReactContent from 'sweetalert2-react-content'
  import {Alert} from '../SweetAlert/PloughAlert';
  import {useRouter} from 'next/router';
  import Update from '../SweetAlert/PloughUpdate';
  import { DataState } from '@/atom/dataState';
  import {useRecoilState} from 'recoil';


  

  type Props ={
    plough: any;
    setPlough:any;
  }
export default function DetailsTable({plough,setPlough}:Props){


  
  const router = useRouter();
  const MySwal = withReactContent(Swal);



  const test = (p:any) => {

    MySwal.fire({
      title: <p>Deleting ....</p>,
      html: <Alert closeButton={Swal.close} plough={plough} setPlough={setPlough} p={p} />,
      showCancelButton: false,
      showConfirmButton:false,
      
    })

  }

  const editEntry = (p:any) => {
    MySwal.fire({
      title: <p>Updating...</p>,
      html: <Update closeButton={Swal.close} prevData={p} />,
      showCancelButton: false,
      showConfirmButton:false,
      
    })
     
  }



    return(<>
    <Toaster position={'bottom-center'}/>
    
    <TableContainer bg={'white'}  w={'95%'} mt={4} display={'flex'} mx={'auto'} >
  <Table variant='simple'>
    
    
    <Thead  >
      <Tr  >
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'} >No.</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Acers</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Amount</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Date</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Actions</Th>

      </Tr>
    </Thead>
    
    <Tbody  fontWeight={'600'} fontSize={'1.10rem'}>

{ plough?.length> 0 && plough?.map((d:any, i:any) => (
      <Tr key={i}>

        <Td >{i+1}</Td>
        <Td>{d.acers}</Td>
        <Td>{d.amount}</Td>
        <Td>{format(new Date(d.date), 'yyyy-MM-dd')}</Td>
        <Td>Yes</Td>
        <Td>
          <Flex gap={4} justifyContent={'space-evenly'} alignItems={'center'}>
            <BiEdit className="w-5 h-5 text-green-500" onClick={() => editEntry(d)}/>
            <AiFillDelete className="w-5 h-5 text-red-500" onClick={() => {test(d)}}/>
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