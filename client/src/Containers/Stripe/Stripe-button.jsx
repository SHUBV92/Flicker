import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => { 
    const priceForStripe = price * 100; 
    const publishableKey = 'pk_test_vWcPu1ZmD8qxCRLMuHc1V41h00c9y8gb42'

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
                'There was an issue with your payment. Please sure you use the provided credit card'
            );
        })
    };

    return (
        <StripeCheckout 
        label='Pay Now'
        name='Fragrance & Flickr'
        billingAddress
        shippingAddress
        // image='../assets/images/LogoGold.jpg'
        description={`Your total is £${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />

    )
}

export default StripeCheckoutButton;
