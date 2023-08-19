
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react';
import {useState , useEffect} from 'react';

type Props ={
  bills: any;
  setBills: any;

}
export default function DetailsTable({bills , setBills}:Props){



    return(<>
    
    <TableContainer bg={'white'}  w={'95%'} mt={4} display={'flex'} mx={'auto'} >
  <Table variant='simple'>
    
    
    <Thead  >
      <Tr  >
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'} >No.</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Billing Month</Th>
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
        <Td>{b?.month}</Td>
        <Td>{b?.units}</Td>
        <Td>41</Td>
        <Td>{b?.bill}</Td>
        <Td>Yes</Td>
        <Td>Edit</Td>
      </Tr>
))

}

    
    </Tbody>

  </Table>
</TableContainer>
    
    
    
    
    
    
    </>);

}