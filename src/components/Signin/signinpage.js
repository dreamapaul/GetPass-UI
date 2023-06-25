import {Heading, Image,Text,Input,Button} from '@chakra-ui/react'; 
import {ChevronRightIcon} from '@chakra-ui/icons';
import { Link, useNavigate} from "react-router-dom"; 
import axios from 'axios';
import { useState } from 'react';

const SigninPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleName = (e) => {
       setName(e.target.value)
    };
    const handleUsername = (e) => {
        setUsername(e.target.value)
    };
    const handlePassword = (e) => {
        setPassword(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            'name': name,
            'password': password,
            'username': username
        }

        console.log(JSON.stringify(formData))
    
        axios.post('http://localhost:8000/signin', formData)
        .then(response => {
            navigate("/loginpage")
        })
        .catch(error => {
            console.error(error);
        });
    };    

    return (
        <div className="Signinpage" style={{'overflow-x': 'hidden'}}>
        <Image src='/assets/login.svg' position={'relative'} height='800px'/>
        <Image src='/assets/Getpass logo.svg' position={'relative'} bottom='760px' left='900px'/>

        <Heading position={'relative'} fontSize='6xl' fontWeight='bold' color={'blue.900'} left="900px" top='-720px'>Create your</Heading>
        <Heading position={'relative'} fontSize='6xl' fontWeight='bold' color={'blue.900'} left="900px" top='-740px'>account.</Heading>

        <Text position={'relative'} fontSize='18px' fontWeight='normal' color={'blue.700'} left="900px" top='-730px'>Sign in to get Started</Text>
        <form>
            <Text position={'relative'} fontSize='18px' fontWeight='medium' color={'blue.800'} left="900px" top='-700px'>Name</Text>  
            <Input type='text' name='name' value={name} onChange={handleName} placeholder='Enter your name' variant={'filled'} size='md' width='500px' left="900px" top='-695px'/>

            <Text position={'relative'} fontSize='18px' fontWeight='medium' color={'blue.800'} left="900px" top='-670px'>Username</Text>  
            <Input type='text' name='username' value={username} onChange={handleUsername} placeholder='Enter your username' variant={'filled'} size='md' width='500px' left="900px" top='-665px'/>
        
            <Text position={'relative'} fontSize='18px' fontWeight='medium' color={'blue.800'} left="900px" top='-640px'>Password</Text>  
            <Input type='text' name='password' value={password} onChange={handlePassword} placeholder='Enter your password' variant={'filled'} size='md' width='500px' left="900px" top='-635px'/>
            <Link to={'/loginpage'}>
                <Button onClick={handleSubmit} type='submit' bgColor={'blue.400'} rightIcon={<ChevronRightIcon/>} fontWeight='normal' fontSize='19px' width='500px' top="-560px" left="400px" colorScheme={'gray.500'}>Sign In</Button>
            </Link>  
            </form>   
        </div>
    );
}     
export default SigninPage;
