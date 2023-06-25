import {Button,Text,Image,Box,Flex} from '@chakra-ui/react';
import { Link } from "react-router-dom";         
import {ChevronRightIcon } from '@chakra-ui/icons';


const BusDetailsPage = () => {
    const textStyle = {
        transform: 'rotate(270deg)',};

    return (
      <div className="BusDetailspage" style={{'overflow-x': 'hidden'}}>
        <header className="home-header">
              <Box bg={'blue.50'} maxW="1242px" maxH="68px" m='32px' marginLeft="140px" borderColor={'blue.100'} borderWidth={'thin'} borderRadius="md" color={'blue.800'}>
                 <Image src='/assets/Getpass logo.svg' position={'relative'} top='13px' left='30px'/>
                 <Text  position={'relative'} top="-22px" left="910px" fontSize={'md'} fontWeight='semibold' textColor={'blue.800'}>Bus Details</Text>
                 <Link to={'/'}>
                    <Button bgColor={'blue.100'} textColor={'blue.500'} rightIcon={<ChevronRightIcon/>} position={'relative'} left="1100px" top='-52px' fontWeight='semibold'>Log Out</Button>
                 </Link>  
                <Link to={'/userhomepage'}>
                 <Button position={'relative'} textColor={'blue.500'} bgColor={'blue.100'} left="900px" top='-52px' fontWeight='semibold'>Back</Button>
                </Link> 
              </Box> 
             </header>

             <Flex bgColor={'blue.50'} height='70px' marginTop='20px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>02</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Panampilly Nagar(Via vytilla)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='110px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>03</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Kumbalam toll-Vytila</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='190px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>04</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>High Court(Via Kaloor)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='270px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>05</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Trippunithura(via Irimpanam)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='350px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>06</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Koonammavu(via Aluva Paravur JN.)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='430px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>07</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Kakkanad</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='510px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>08</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Mannuthy(via Chalakudy)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='590px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>09</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Kottapady(via Neeliswaram)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='670px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>11</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Kizhakkambalam(via Aluva)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='750px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>12</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Thrissur(via Chalakudy)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='830px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>13</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Thoppumpady(via Kaloor)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='910px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>14</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Pariyaram(via Chalakudy)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='990px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>
     
            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>15</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Njarakkal-N.Paravur(via Aluva)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='1070px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>16</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Kothamangalam(via Perumbavoor)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left='1200px' top='1150px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>18</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Muppathadom</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='1230px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>19</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Aluva</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='1310px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>20</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Pettah(via Vytilla)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='1390px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>21</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Irinjalakuda(via Chalakudy)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='1470px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>23</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Pattimattom(via Perumbavoor)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='1550px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>24</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Kothamangalam(via Perumbavoor)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='1630px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>25</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Thrissur(via Chalakudy)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='1710px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>26</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Paravur(via Manjaly)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='1790px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>27</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Kodungaloor(via Aluva,Paravur JN.)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='1870px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>28</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Muvattupuzha(via perumbavoor)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='1950px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='10px' width='1242px' marginLeft='140px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>29</Box>
                <Text position={'relative'} textColor={'gray.400'} left="100px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="70px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="340px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="272px" top='30px' fontSize={'lg'} fontWeight='semibold'>Mala(via Koratty)</Text>
                <Text position={'absolute'} textColor={'gray.400'} left="1200px" top='2030px' fontSize={'smaller'} fontWeight='normal'>Price</Text>
            </Flex>
     
     </div>
    );
}  

export default BusDetailsPage

