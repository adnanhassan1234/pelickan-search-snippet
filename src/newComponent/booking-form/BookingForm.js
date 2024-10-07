import React, { useEffect, useState } from "react";
import "./bookingform.css";
import BookingSummary from "../booking-summary/BookingSum";
import Heading from "../Heading/MainHeading";
import OneWay from "./booking-form-component/OneWay";
import ReturnInfo from "./booking-form-component/ReturnInfo";
import PassengerDetails from "./booking-form-component/PassengerDetails";
import { useLocation, useNavigate } from "react-router-dom";
import FareTable from "./booking-form-component/FareTable";

const BookingForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const { fromPostCode, fromVal, toVal, fromHours, fromMins, fare } = state;
  const [charges, setCharges] = useState({});
  const [nCharges, setNCharges] = useState({});
  const [msg, setMsg] = useState("Book Now");
  const [newsletter, setNewsletter] = useState(true);
  const [privacy, setPrivacy] = useState(true);

  const handlePrivacy = () => {
    setPrivacy(!privacy);
  };

  const handlenewsletter = () => {
    setNewsletter(!newsletter);
  };

  useEffect(() => {
    async function getCharges() {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          location_address_to: fromVal.toUpperCase(),
          location_address_from: toVal.toUpperCase(),
          postcode: fromPostCode,
          current_time: fromHours + ":" + fromMins,
        });
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        // const fetchData = async () => {
        // try {
        let response = await fetch(
          baseUrl + "/pelickan-booking/all-charges",
          requestOptions
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        response = await response.json();
        //   } catch (error) {
        //     console.error(error);
        //     throw error;
        //   }
        // };

        setCharges(response);
      } catch (err) {
        console.log(err);
      }
    }
    getCharges();
  }, [fromPostCode, fromVal, toVal, fromHours, fromMins, baseUrl]);

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mNumber: "",
    nCode: "",
    noOfPassengers: state.noOfPassengers,
    laggages: "",
    hLaggages: "",
    notes: "",
  });
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const err = validate(formData);
    setErrors(err);
    console.log(err);
    if (Object.keys(err).length <= 0) {
      const data = {
        ...state,
        ...formData,
        privacy,
        newsletter,
        charges,
        nCharges,
      };
      navigate("/payment", { state: data });

      setMsg("Booking Confirmed");
    }
  };
  const validate = (values) => {
    let error = {};
    if (!values.email) {
      error.email = "*Email is required";
    }
    if (!values.name) {
      error.name = "*Name is required";
    }
    if (!values.mNumber) {
      error.mNumber = "*Number is Required";
    }
    if (!values.noOfPassengers) {
      error.passengers = "*Passengers is Required";
    }
    if (!values.nCode) {
      error.nCode = "*Code is Required";
    }

    if (!privacy) {
      error.privacy = "*Privacy";
    }

    return error;
  };

  return (
    <div>
      <BookingSummary distTime={state} state={state} />
      <section className="booking_form">
        <div className="booking_form__container">
          <form onSubmit={(e) => onSubmit(e)}>
            <div
              className={
                state.returnDate ? "booking__details " : "return__details"
              }
            >
              <div className="one_way__info">
                <Heading title="One Way Information" />
                <OneWay state={state} />
              </div>
              {state.returnDate && (
                <div className="return__info">
                  <Heading title="Return Information" />
                  <ReturnInfo state={state} />
                </div>
              )}
            </div>
            <div className="booking__details__bottom">
              <div className="passengers_detail">
                <Heading title="Passengers Detail" />
                <PassengerDetails
                  errors={errors}
                  onChange={onChange}
                  msg={msg}
                  formData={formData}
                />
              </div>
              {/* Fare Summary*/}
              <div className="fare_summary">
                <Heading title="Fare Summary" />
                <FareTable charges={charges} state={state} />
              </div>
            </div>
            <div className="paypemt__button">
              <div className="preivacy_policy">
                <div className="checkbox_field">
                  <label>
                    <input
                      className="checkbox"
                      type="checkbox"
                      name="newsletter"
                      checked={newsletter}
                      onChange={handlenewsletter}
                    />
                    <span> Subscribe to Newsletter and Offer</span>
                  </label>
                  <label>
                    <input
                      className="checkbox"
                      type="checkbox"
                      name="privacy"
                      checked={privacy}
                      onChange={handlePrivacy}
                    />
                    <span>
                      I accept the terms and conditions & privacy policy
                    </span>
                  </label>
                </div>
                <div className="payment__right">
                  <button type="submit">Continue to Payment</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookingForm;
