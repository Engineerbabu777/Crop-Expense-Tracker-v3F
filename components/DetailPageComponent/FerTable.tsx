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
  import {Alert} from '../SweetAlert/FertilizerAlert';
  import {useRouter} from 'next/router';
  import Update from '../SweetAlert/FertilizerUpdate';
  import { DataState } from '@/atom/dataState';
  import {useRecoilState} from 'recoil';

  type Props = {
    fert: any;
    setFert:any;
  }

export default function DetailsTable({fert,setFert}:Props){

  const router = useRouter();
  const MySwal = withReactContent(Swal);



  const test = (f:any) => {

    MySwal.fire({
      title: <p>Deleting ....</p>,
      html: <Alert closeButton={Swal.close} fert={fert} setFert={setFert} f={f} />,
      showCancelButton: false,
      showConfirmButton:false,
      
    })

  }

  const editEntry = (f:any) => {
    MySwal.fire({
      title: <p>Updating...</p>,
      html: <Update closeButton={Swal.close} prevData={f} />,
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
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Packets</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Date</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Description</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Amount</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Actions</Th>

      </Tr>
    </Thead>
    
    <Tbody  fontWeight={'600'} fontSize={'1.10rem'}>
      { fert?.length > 0 && fert?.map((f:any , i:any) => (<Tr key={i}>
        <Td>{i+1}</Td>
        <Td>{f.bags}</Td>
        <Td>{format(new Date(f.date), 'yyyy-MM-dd')}</Td>
        <Td>{f.desc}</Td>
        <Td>{f.bill}</Td>
        <Td>
        <Flex gap={4} justifyContent={'space-evenly'} alignItems={'center'}>
            <BiEdit className="w-5 h-5 text-green-500" onClick={() => editEntry(f)}/>
            <AiFillDelete className="w-5 h-5 text-red-500" onClick={() => {test(f)}}/>
          </Flex>
        </Td>
      </Tr>))
      }
    </Tbody>

  </Table>
</TableContainer>
    
    
    
    
    
    
    </>);

}