import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useMatch } from "react-router-dom";
import Paypal from "../assets/img/pngwing 4.png";
// import ApplePay from "../assets/img/apple_pay.png";
// import GooglePay from "../assets/img/google_pay.png";
import Stripe from "../assets/img/stripe_pay.png";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./stripe-sub-component/CheckoutForm/index";
import Modal from "./modal/Modal";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import FinalPaymentFare from "../newComponent/FinalPaymentFare";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHED_KEY);

function Payment() {
  let { state } = useLocation();
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const match = useMatch({
    path: "/payment/:status",
  });
  const { status } = match?.params || "";
  state = state === null ? JSON.parse(localStorage.getItem("state")) : state;
  const [payment, setPayment] = useState("");

  const handlePayment = (e) => {
    setPayment(e.target.alt || e.target.querySelector("img").alt);
  };
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [orderID, setOrderID] = useState("");
  const [booking, setBooking] = useState({});

  const onConfirmBooking = useCallback(async () => {
    const data = {
      order_id: !orderID ? status?.split("&")[1]?.split("=")[1] : orderID,
      status: "Cash Pending",
      payment_type: payment ? "Paypall" : "Stripe",
      distance: state.distance,
      time: state.time,
      from: state.fromVal,
      to: state.toVal,
      one_way_date: state.oneWayDate,
      return_date: state.returnDate,
      from_coordinates: state.fromCoords,
      to_coordinates: state.toCoords,
      to_post_code: state.toPostCode,
      from_post_code: state.fromPostCode,
      from_time: state.fromHours + ":" + state.fromMins,
      to_time: state.toHour + ":" + state.toMins,
      no_of_passengers: state.noOfPassengers,
      vehicle_type: state.type,
      fare_summary:
        (parseInt(state.fare) || 0) +
        (parseInt(state.charges.congestion_charges) || 0) +
        (parseInt(state.charges.night_charges) || 0) +
        (parseInt(state.charges.drop_off_charges) || 0) +
        (parseInt(state.charges.pickup_charges) || 0),
      name: state.name,
      email: state.email,
      mobile_number: state.nCode + " " + state.mNumber,
      laggages: state.laggages,
      hand_laggages: state.hLaggages,
      notes: state.notes,
      privacy_policy: state.privacy,
      newsletter: state.newsletter,
      congestion_zone_charges: state?.charges?.congestion_charges || "",
      pickup_charges: state?.charges?.pickup_charges || "",
      drop_off_charges: state?.charges?.drop_off_charges || "",
      night_charges: state?.charges?.night_charges || "",
      flight_number: state.flight_number,
      flight_landing_date: state.flight_landing_date,
      flight_landing_time: state.flight_landing_time,
      basic_fare: state.fare,
    };

    try {
      let bookNow = await fetch(baseUrl + "/pelickan-booking/new-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      bookNow = await bookNow.json();
      setBooking(bookNow.data);
      sessionStorage.setItem("confirmBooking", JSON.stringify(bookNow.data));

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }, []);

  // useEffect(() => {
  //   if (!status?.split("&")[0]?.split("=")[1]) return;
  //   if (status?.split("&")[0]?.split("=")[1] === "success") setSuccess(true);
  //   return;
  // }, [status, onConfirmBooking]);

  // useEffect(() => {
  //   if (!success) return;

  //   onConfirmBooking();
  // }, [success, onConfirmBooking]);

  const createOrder = async (data, actions) => {

    return actions.order
      .create({
        purchase_units: [
          {
            description: process.env.REACT_APP_PAYMENT_DESCRIPTION,
            amount: {
              currency_code: process.env.REACT_APP_PAYPALL_CURRENCY,
              value:
                (parseInt(state.fare) || 0) +
                (parseInt(state.charges.congestion_charges) || 0) +
                (parseInt(state.charges.night_charges) || 0) +
                (parseInt(state.charges.drop_off_charges) || 0) +
                (parseInt(state.charges.pickup_charges) || 0),
            },
          },
        ],
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      // const { payer } = details;
      setSuccess(true);
      setPayment("paypal");
    });
  };

  const onError = (data, actions) => {
    setError(true);
  };
  return (
    <>
      {((status !== "" && status?.split("&")[0]?.split("=")[1] === "failed") ||
        error) && (
        <Modal
          status="Failed !"
          msg="There is Some Probelem with Your Payment"
          color="red"
        />
      )}
      <div className="payment__method">
        <div
          className="payment_method_container"
          style={{
            filter:
              (success ||
                status?.split("&")[0]?.split("=")[1] === "success" ||
                error ||
                status?.split("&")[0]?.split("=")[1] === "failed") &&
              "blur(5px)",
          }}
        >
          <div className="payment_details">
            <div className="payment_button">
              <h3>Select Payment Method</h3>
              <span
                className="method_img payment__card"
                style={{
                  border:
                    payment === "paypal"
                      ? "1px solid #D48C00"
                      : "1px solid #dcdcdc",
                }}
                value="Buy"
                onClick={(e) => handlePayment(e)}
              >
                <img src={Paypal} alt="paypal" />
              </span>
              <span
                className="method_img payment__card"
                style={{
                  border:
                    payment === "stripe"
                      ? "1px solid #D48C00"
                      : "1px solid #dcdcdc",
                }}
                onClick={(e) => handlePayment(e)}
              >
                <img src={Stripe} alt="stripe" />
              </span>
              <div className="paymemt_method__buttons">
                {payment === "stripe" && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm
                      state={state}
                      onConfirmBooking={onConfirmBooking}
                    />
                  </Elements>
                )}

                {payment === "paypal" && (
                  <PayPalScriptProvider
                    options={{
                      "client-id": process.env.REACT_APP_PAYPALL_CLIENT_ID,
                    }}
                  >
                    <PayPalButtons
                      style={{
                        layout: "vertical",
                        color: "black",
                        shape: "rect",
                        label: "paypal",
                        width: "20px",
                      }}
                      createOrder={createOrder}
                      onApprove={onApprove}
                      onError={onError}
                    />
                  </PayPalScriptProvider>
                )}
              </div>
            </div>
            <div className="fare_sumary">
              <FinalPaymentFare
                charges={state.charges}
                nCharges={state.nCharges}
                state={state}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;

/*/*<FareTable
charges={state.charges}
nCharges={state.nCharges}
state={state}
/> */
