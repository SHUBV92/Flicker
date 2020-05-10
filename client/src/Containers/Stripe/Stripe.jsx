import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import axios from axios;

const StripeCheckoutButton = ({ price }) => { 
    const priceForStripe = price * 100; 
    const publishableKey ='pl_test_kfeek'

    const onToken = token => {
        axios({
            url:'payment',
            method:'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment successful")
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There was an issue with your paymen. Please sure you use the provided credit card'
            );
        })
    };

    return (
        <StripeCheckout 
        label='Pay Now'
        name=
    )
}

