import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
function CheckoutPage({ state, onConfirmBooking }) {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const { fare, charges, name, email } = state;
  const {
    congestion_charges,
    drop_off_charges,
    pickup_charges,
    night_charges,
  } = charges;
  const price =
    (parseInt(fare) || 0) +
    (parseInt(congestion_charges) || 0) +
    (parseInt(night_charges) || 0) +
    (parseInt(drop_off_charges) || 0) +
    (parseInt(pickup_charges) || 0);

  const handlePayment = async (e) => {
    e.preventDefault();
    const status = await onConfirmBooking();
    console.log(state);
    localStorage.setItem("state", JSON.stringify(state));
    console.log(status);

    if (!stripe || !elements || !status) {
      return;
    }
    setLoading(true);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      status: "Paid Pending",
      name,
      email,
      price: Math.round(price * 100),
    });

    try {
      let response = await fetch(baseUrl + "/pelickan-booking/stripe-payment", {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const { session_id } = await response.json();
      await stripe.redirectToCheckout({ sessionId: session_id });
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={(e) => handlePayment(e)}>
      <button className="stripe_btn" disabled={!stripe}>
        {loading ? (
          "Processing..."
        ) : (
          <>
            Pay Now {process.env.REACT_APP_CURRENCY_SYMBOL} <b>{price}</b>
          </>
        )}
      </button>
    </form>
  );
}

export default CheckoutPage;
