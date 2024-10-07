import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FareTable from "./booking-sub-component/FareTable";
import OneWay from "./booking-sub-component/OneWay";
import TwoWay from "./booking-sub-component/TwoWay";
import DetailForm from "./booking-sub-component/DetailForm";
import BookingFooter from "./booking-sub-component/BookingFooter";

function Booking() {
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
    <div className="__container">
      <div className="booking__main">
        <h1>Booking Form</h1>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="booking__form__left">
            <OneWay state={state} title="One Way Information" />
            <FareTable charges={charges} state={state} />
          </div>
          <div className="booking__form__right">
            {state.returnDate && <TwoWay state={state} />}
            <DetailForm
              errors={errors}
              onChange={onChange}
              msg={msg}
              formData={formData}
            />
          </div>
        </form>
        <BookingFooter
          newsletter={newsletter}
          handlenewsletter={handlenewsletter}
          privacy={privacy}
          errors={errors}
          handlePrivacy={handlePrivacy}
        />
      </div>
    </div>
  );
}

export default Booking;
