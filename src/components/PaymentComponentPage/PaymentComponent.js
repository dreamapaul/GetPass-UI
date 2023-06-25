import {React } from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

const PaymentComponent = () => {
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = displayPaymentForm;
      document.body.appendChild(script);
    } catch (error) {
      console.log(error);
    }
  };

  const displayPaymentForm = () => {
    if (typeof window.Razorpay === 'undefined') {
      console.log('Razorpay script not loaded');
      return;
    }

    const options = {
      key: 'rzp_test_dsqpBlsd93gkpG',
      amount: 5000,
      currency: 'INR',
      name: 'GetPass',
      description: 'Test payment',
      // order_id: orderId,
      handler: (response) => {
        if (response.razorpay_payment_id) {
          console.log('Payment successful!');
          navigate("/userhomepage")
        } else {
          console.log('Payment failed!');
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <Flex bgColor={'blue.50'} height='100px' marginTop='300px' width='700px' marginLeft='400px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' >
        <Text position={'relative'} left='180px' top='10px' textColor={'blue.700'}>Click on 'Pay Now' to redirect to payment page</Text>
        <Button bgColor={'blue.100'} position={'relative'} left='-10px' top='40px' textColor={'blue.700'} onClick={handlePayment}>Pay Now</Button>
      </Flex>


    </div>

  );
};

export default PaymentComponent;
