import { Button, Text, Image, Box, Flex, Grid } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { ChevronRightIcon } from '@chakra-ui/icons';
import busData from './bus.json';


const BusDetailsPage = () => {
    const textStyle = {
        transform: 'rotate(270deg)',
    };

    return (
        <div className="BusDetailspage" style={{ 'overflow-x': 'hidden', 'overflow-y': 'hidden', 'marginBottom': '80px' }}>
            <header className="home-header">
                <Box bg={'blue.50'} maxW="1242px" maxH="68px" m='32px' marginLeft="140px" borderColor={'blue.100'} borderWidth={'thin'} borderRadius="md" color={'blue.800'}>
                    <Image src='/assets/Getpass logo.svg' position={'relative'} top='13px' left='30px' />
                    <Text position={'relative'} top="-20px" left="185px" fontSize={'md'} fontWeight='semibold' textColor={'blue.800'}> {">  Bus Details"}</Text>
                    <Link to={'/'}>
                        <Button bgColor={'blue.100'} textColor={'blue.500'} rightIcon={<ChevronRightIcon />} position={'relative'} left="1100px" top='-52px' fontWeight='semibold'>Log Out</Button>
                    </Link>
                    <Link to={'/userhomepage'}>
                        <Button position={'relative'} textColor={'blue.500'} bgColor={'blue.50'} left="900px" top='-52px' fontWeight='semibold'>Back</Button>
                    </Link>
                </Box>
            </header>

            {busData.map((item) => (
                <Flex bgColor={'blue.50'} height='70px' marginTop='20px' width='1228px' marginLeft='148px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' >
                    <Flex>
                        <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus no</Box>
                        <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'} lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>{item.bus_no}</Box>
                    </Flex>
                    <Grid templateColumns='3fr 3fr 1fr' gap={6} width='100%' marginLeft='80px'>
                        <div>
                            <Text position={'relative'} textColor={'gray.400'} top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                            <Text position={'relative'} textColor={'blue.700'} top='10px' fontSize={'lg'} fontWeight='semibold'>{item.from}</Text>
                        </div>
                        <div>
                            <Text position={'relative'} textColor={'gray.400'} top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                            <Text position={'relative'} textColor={'blue.700'} top='10px' fontSize={'lg'} fontWeight='semibold'>{item.destination}</Text>
                        </div>
                        <div>
                            <Text position={'relative'} textColor={'gray.400'} top='10px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
                            <Text position={'relative'} textColor={'blue.700'} top='10px' fontSize={'lg'} fontWeight='semibold'>{item.price}</Text>
                        </div>
                    </Grid>
                </Flex>
            ))}

        </div>
    );
}

export default BusDetailsPage

