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
  import {format} from 'date-fns';


  type Props = {
    fertilizerDetails: any;
  }

export default function DetailsTable({fertilizerDetails}:Props){


    return(<>
    
    <TableContainer bg={'white'}  w={'95%'} mt={4} display={'flex'} mx={'auto'} >
  <Table variant='simple'>
    
    
    <Thead  >
      <Tr  >
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'} >No.</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Packets</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Date</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Amount</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Actions</Th>

      </Tr>
    </Thead>
    
    <Tbody  fontWeight={'600'} fontSize={'1.10rem'}>
      { fertilizerDetails?.length > 0 && fertilizerDetails?.map((f:any , i:any) => (<Tr key={i}>
        <Td>{i+1}</Td>
        <Td>{f.bags}</Td>
        <Td>{format(new Date(f.date), 'yyyy-MM-dd')}</Td>
        <Td>{f.bill}</Td>
        <Td>Edit</Td>
      </Tr>))
      }
    </Tbody>

  </Table>
</TableContainer>
    
    
    
    
    
    
    </>);

}