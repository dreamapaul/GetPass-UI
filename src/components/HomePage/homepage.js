import {Button,Text,Image,Heading,Icon,Box} from '@chakra-ui/react';
import { Link } from "react-router-dom";         
import {ChevronRightIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import styles from './homepage.module.css' ;


const HomePage = () => {

  return (
    <div className="Homepage">
      <header>
          <Box className={styles.headerbox} bg={'blue.50'} borderColor={'blue.100'} borderWidth={'thin'} borderRadius="md" color={'blue.800'}>
              <Image className={styles.header_image} src='/assets/Getpass logo.svg'/>
              <Link to={'/adminloginpage'}>
                   <Button className={styles.header_button} type='button' bgColor={'blue.400'} rightIcon={<ChevronRightIcon/>} textAlign={'center'} colorScheme={'blue,100'}> Admin Portal Login</Button>
              </Link>
              <Text className={styles.header_text} fontWeight={'semibold'}>Github</Text>  
          </Box>
      </header>
      <div className={styles.main_body}>
           <Image className={styles.body_image} src='/assets/Sucessful purchase.svg' />
           <Box className={styles.heading_box}>
               <Heading className={styles.line1} fontWeight='bold' color={'blue.800'}>Bus pass<br/>purchasing</Heading>
               <Heading className={styles.line2} fontWeight='bold' color={'blue.400'} >made easy.</Heading>
           </Box>
           <Text className={styles.info} fontWeight='normal' color={'blue.800'}>Introducing GetPass - the free Automated Bus Pass<br/>Purchasing System for FISAT. Say goodbye to long<br/>lines and purchase your pass hassle-free 24/7</Text> 
            <Link to={'/loginpage'}>
              <Button className={styles.body_button} bgColor={'blue.400'} rightIcon={<ChevronRightIcon/>}colorScheme={'blue,100'}>Get Started for free</Button>
            </Link>  
            <Icon as={InfoOutlineIcon} className={styles.body_icon} color={'blue.600'} borderColor={'blue.100'}/> 
        </div>   
    </div>
  );
}

export default HomePage;
