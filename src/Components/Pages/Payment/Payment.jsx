
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm2"

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51MaMmFSFEfD8S93681oUSpe4nbPsPHSEt3x00aP44C3xJuRQ014bOL3CE7E6abhc9KWpUCvjosHicCgtWS270o9B00Oh0v4mgO');

export default function Payment() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'pi_3MtGBdSFEfD8S9360c3UjllC_secret_9YPvimNGpmCxBFRMF8TfSdT8z',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};