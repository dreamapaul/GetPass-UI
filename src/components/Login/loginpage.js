import { Heading, Image, Text, Input, Button } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie] = useCookies(['login']);
    const [Error, setError] = useState('');


    const handleUsername = (e) => {
        setUsername(e.target.value)
    };
    const handlePassword = (e) => {
        setPassword(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:8000/signin/' + username);
        const data = response.data
        console.log(data)
        if (data.length > 0) {
            if (password === data[0].password) {
                setCookie('username', data[0].username);
                setCookie('name', data[0].name);
                { navigate("/userhomepage"); }
            }

            else { setError('Incorrect Password') }
        }
        else { setError('Incorrect Username') }

    };



    return (
        <div className="Loginpage" style={{ 'overflow-x': 'hidden' }}>
            <Image src='/assets/login.svg' position={'relative'} height='800px' />
            <Image src='/assets/Getpass logo.svg' position={'relative'} bottom='760px' left='900px' />
            <Heading position={'relative'} fontSize='6xl' fontWeight='bold' color={'blue.900'} left="900px" top='-715px'>Welcome</Heading>
            <Heading position={'relative'} fontSize='6xl' fontWeight='bold' color={'blue.900'} left="900px" top='-730px'>back.</Heading>
            <Text position={'relative'} fontSize='18px' fontWeight='normal' color={'blue.700'} left="900px" top='-730px'>Log in to your GetPass Account</Text>
            <form>
                <Text position={'relative'} fontSize='18px' fontWeight='medium' color={'blue.800'} left="900px" top='-690px'>Username</Text>
                <Input type='text' name='username' value={username} onChange={handleUsername} placeholder='Enter your KTU Reg No.' variant={'filled'} size='md' width='500px' left="900px" top='-685px' />
                <Text position={'relative'} fontSize='18px' fontWeight='medium' color={'blue.800'} left="900px" top='-660px'>Password</Text>
                <Input type='password' name='password' value={password} onChange={handlePassword} placeholder='Enter your password' variant={'filled'} size='md' width='500px' left="900px" top='-655px' />
                <Link to={'/userhomepage'}>
                    <Button onClick={handleSubmit} type='submit' bgColor={'blue.400'} rightIcon={<ChevronRightIcon />} fontWeight='normal' fontSize='19px' width='500px' top="-555px" left="400px" colorScheme={'gray.500'}>Log In</Button>
                </Link>
                <Text textAlign={'left'} position={'relative'} fontSize='18px' fontWeight='normal' color={'red.800'} left="900px" top='-640px'>{Error}</Text>
            </form>
            <Link to={'/signinpage'}>
                <Text position={'relative'} fontSize='18px' fontWeight='normal' color={'blue.800'} left="1010px" top='-550px'>Don’t have an account?</Text>
                <Text position={'relative'} fontSize='18px' fontWeight='bold' color={'blue.800'} left="1205px" top='-577px'>Sign up?</Text>
            </Link>
        </div>
    );
}
export default LoginPage;
