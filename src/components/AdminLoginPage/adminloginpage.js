import {Button,Text,Image,Input,Heading} from '@chakra-ui/react';
import { Link,useNavigate  } from "react-router-dom";         
import {ChevronRightIcon } from '@chakra-ui/icons';
import { useState} from 'react';

const AdminLoginPage = () => {
    const [username, setusername] = useState([]);
    const [password, setpassword] = useState([]);
    const navigate = useNavigate();
        

    const handleusername = (e) => {
        setusername(e.target.value)
    };
    const handlepassword = (e) => {
        setpassword(e.target.value)
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
            if(username==='admin' && password==='root')
                    {navigate("/adminhomepage")} 
               } ;
    return (
        <div className="AdminLoginPage" style={{'overflow-x': 'hidden'}}>
            <Image src='/assets/login.svg' position={'relative'} height='800px'/>
            <Image src='/assets/Getpass logo.svg' position={'relative'} bottom='760px' left='900px'/>
            <Heading position={'relative'} fontSize='6xl' fontWeight='bold' color={'blue.900'} left="900px" top='-715px'>Welcome</Heading>
            <Heading position={'relative'} fontSize='6xl' fontWeight='bold' color={'blue.900'} left="900px" top='-730px'>back.</Heading>
            <Text position={'relative'} fontSize='18px' fontWeight='normal' color={'blue.700'} left="900px" top='-730px'>Log in to your GetPass Account</Text>
            <Text position={'relative'} fontSize='18px' fontWeight='medium' color={'blue.800'} left="900px" top='-690px'>Username</Text>  
            <Input placeholder='Enter your username' variant={'filled'} size='md' width='500px' left="900px" top='-685px'/>
            <Text position={'relative'} fontSize='18px' fontWeight='medium' color={'blue.800'} left="900px" top='-645px'>Password</Text>  
            <Input type={"password"} placeholder='Enter your password' variant={'filled'} size='md' width='500px' left="900px" top='-640px'/>
            <Link to={'/adminhomepage'}>
                <Button bgColor={'blue.400'} rightIcon={<ChevronRightIcon/>} fontWeight='normal' fontSize='19px' width='500px' top="-545px" left="400px" colorScheme={'gray.500'}>Login</Button>
            </Link>  
         </div>

    );
}

export default AdminLoginPage;