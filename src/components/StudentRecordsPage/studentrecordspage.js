import { Image, Text, Button, Box, Input, Flex, Grid } from '@chakra-ui/react';
import { ChevronRightIcon, SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';


const StudentRecordsPage = () => {
  const [name, setname] = useState('')
  const [bills, setBills] = useState([]);
  const [results,setResults] = useState([])

  const handlename = (e) => {
    setname(e.target.value)
  };

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await axios.get('http://localhost:8000/bill/');
        setBills(response.data);
      } catch (error) {
        console.error("Error fetching bills:", error);
      }
    };
    fetchBills();
  }, []);

  const handleSearch = () => {
    let matches = []
    console.log(bills.length)
    for(let item of bills) {
      if (item.name.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(item.name.toLowerCase())) {
        matches.push(item)
      }
    }
    setResults(matches)
  };

  const textStyle = {
    transform: 'rotate(270deg)',
  };

  return (
    <div className="StudentRecordsPage" style={{ 'overflow-x': 'hidden' }}>
      <header className="home-header">
        <Box bg={'blue.50'} maxW="1242px" maxH="68px" m='32px' marginLeft="140px" borderColor={'blue.100'} borderWidth={'thin'} borderRadius="md" color={'blue.800'}>
          <Image src='/assets/Getpass logo.svg' position={'relative'} top='13px' left='30px' />
          <Link to="/">
            <Button bgColor={'blue.100'} rightIcon={<ChevronRightIcon />} top="-27px" left="1110px" textColor={'blue.500'}>Log Out</Button>
          </Link>
          <Link to="/adminhomepage">
            <Button position={'relative'} bgColor={'blue.100'} left="920px" top='-27px' fontWeight='semibold' color={'blue.600'}>Back</Button>
          </Link>
          <Text position={'relative'} left='860px' top='-58px' fontSize={'lg'} fontWeight='semibold'>Student Records</Text>
          <Input type='text' name='name' value={name} onChange={handlename} placeholder='Enter username' size='md' width="400px" bgColor={'gray.100'} position={'relative'} left="210px" top="-95px" />
          <Button onClick={handleSearch} rightIcon={<SearchIcon />} bgColor={'blue.50'} boxSize={6} position={'relative'} left="220px" top="-95px"></Button>
        </Box>
      </header>

      {results.map((item) => (
        <Flex bgColor={'blue.50'} height='70px' marginTop='20px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' >
          <Flex>
            <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
            <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'} lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>{item.bus_no}</Box>
          </Flex>

          <Grid templateColumns='2fr 3fr 3fr 3fr 3fr' gap={6} width='100%' marginLeft='64px'>
            <div>
              <Text position={'relative'} textColor={'gray.400'} top='10px' fontSize={'smaller'} fontWeight='normal'>Bill No</Text>
              <Text position={'relative'} textColor={'blue.700'} top='10px' fontSize={'lg'} fontWeight='semibold'>{item.bill_no}</Text>
            </div>
            <div>
              <Text position={'relative'} textColor={'gray.400'} top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
              <Text position={'relative'} textColor={'blue.700'} top='10px' fontSize={'lg'} fontWeight='semibold'>{item.boarding_point}</Text>
            </div>
            <div>
              <Text position={'relative'} textColor={'gray.400'} top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
              <Text position={'relative'} textColor={'blue.700'} top='10px' fontSize={'lg'} fontWeight='semibold'>{item.destination_point}</Text>
            </div>
            <div>
              <Text position={'relative'} textColor={'gray.400'} top='10px' fontSize={'smaller'} fontWeight='normal'>Name</Text>
              <Text position={'relative'} textColor={'blue.700'} top='10px' fontSize={'lg'} fontWeight='semibold'>{item.name}</Text>
            </div>
            <div>
              <Text position={'relative'} textColor={'gray.400'} top='10px' fontSize={'smaller'} fontWeight='normal'>No. of tickets</Text>
              <Text position={'relative'} textColor={'blue.700'} top='10px' fontSize={'lg'} fontWeight='semibold'>{item.No_of_tickets}</Text>
            </div>
          </Grid>
        </Flex>
      ))}

    </div>
  );
}

export default StudentRecordsPage;