import {Image,Text,Button,Box,Flex} from '@chakra-ui/react'; 
import {ChevronRightIcon} from '@chakra-ui/icons';
import { Link } from "react-router-dom";
import axios from 'axios';   
import { useState,useEffect} from 'react';         

    const AdminHomePage = () => {
      const [bills, setBills] = useState([]);
      useEffect(() => {
        const fetchBills = async () => {
          try {
            const response = await axios.get('http://localhost:8000/bill');
            setBills(response.data);
          } catch (error) {
            console.error("Error fetching bills:", error);
          }
        };     
        fetchBills();});
      const textStyle = {
        transform: 'rotate(270deg)',}

        return (
          <div className="AdminHomePage" style={{'overflow-x': 'hidden'}}>
            <header className="home-header">
              <Box bg={'blue.50'} maxW="1242px" maxH="68px" m='32px' marginLeft="140px" borderColor={'blue.100'} borderWidth={'thin'} borderRadius="md" color={'blue.800'}>
                 <Image src='/assets/Getpass logo.svg' position={'relative'} top='13px' left='30px'/>
                 <Text  position={'relative'} top="-22px" left="850px" fontSize={'xl'} fontWeight='semibold' textColor={'blue.800'}>Admin</Text>
                 <Link to={'/'}>
                    <Button bgColor={'blue.100'} textColor={'blue.500'} rightIcon={<ChevronRightIcon/>} position={'relative'} left="1100px" top='-57px' fontWeight='semibold'>Log Out</Button>
                 </Link>  
                <Link to={'/studentrecordspage'}>
                 <Button position={'relative'} textColor={'blue.500'} bgColor={'blue.100'} left="820px" top='-57px' fontWeight='semibold'>Student Records</Button>
                </Link> 
              </Box> 
             </header>
             {bills.map((item) => (
                <Flex bgColor={'blue.50'} height='70px' marginTop='20px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>{item.bus_no}</Box>
                <Text position={'relative'} textColor={'gray.400'} left="60px" top='10px' fontSize={'smaller'} fontWeight='normal'>Bill No</Text>
                <Text position={'relative'} textColor={'blue.700'} left="30px" top='30px' fontSize={'lg'} fontWeight='semibold'>{item.bill_no}</Text>
                <Text position={'relative'} textColor={'gray.400'} left="180px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="150px" top='30px' fontSize={'lg'} fontWeight='semibold'>{item.boarding_point}</Text>
                <Text position={'relative'} textColor={'gray.400'} left="320px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="252px" top='30px' fontSize={'lg'} fontWeight='semibold'>{item.destination_point}</Text>
                <Text position={'relative'} textColor={'gray.400'} left="440px" top='10px' fontSize={'smaller'} fontWeight='normal'>Name</Text>
                <Text position={'relative'} textColor={'blue.700'} left="403px" top='30px' fontSize={'lg'} fontWeight='semibold'>{item.name}</Text>
                <Text position={'relative'} textColor={'gray.400'} left="550px" top='10px' fontSize={'smaller'} fontWeight='normal'>No. of tickets</Text>
                <Text position={'relative'} textColor={'blue.700'} left="482px" top='30px' fontSize={'lg'} fontWeight='semibold'>{item.No_of_tickets}</Text>
            </Flex>
          ))}
            
          </div>
       );
    }
    
export default AdminHomePage;
       