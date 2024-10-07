import React, { useEffect } from "react";
import tahnkyou from "../../assets/img/thankyou.png";
import cancelled from "../../assets/img/cancelled.png";
import backHome from "../../assets/img/Vector.png";
import "./bookingStaus.css";
import { useLocation, useNavigate } from "react-router-dom";

const BookingStaus = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const sessionData = sessionStorage.getItem("confirmBooking");
  const bookingData = JSON.parse(sessionData);

  const navigate = useNavigate();
  let { pathname } = useLocation();
  const status = pathname.split("&")[0]?.split("=")[1];
  const handleNavigation = () => {
    if (status === "success") {
      localStorage.clear();
      sessionStorage.clear();
      navigate("/");
    } else if (status === "failed") {
      navigate("/payment");
    }
  };

  const onConfirmBooking = async () => {
    const data = {
      status: "Paid Pending",
    };

    try {
      let bookNow = await fetch(
        baseUrl + `/pelickan-booking/update-booking/${bookingData._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      bookNow = await bookNow.json();
      sessionStorage.setItem("confirmBooking", JSON.stringify(bookNow));
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  useEffect(() => {
    if (status === "success") {
      onConfirmBooking();
    }
  }, []);

  return (
    <div className="confirm_booking">
      <h2>
        {status === "success" ? "Thank You!" : <span>Payment Canceled!</span>}
      </h2>

      <p>
        {status === "success"
          ? "Thank you for Booking Your ride With us."
          : "Your Booking has been canceled"}
      </p>
      <img
        className="confirm_img"
        src={status === "success" ? tahnkyou : cancelled}
        alt=""
      />
      <div className="back_home" onClick={handleNavigation}>
        <img src={backHome} alt="" />
        <h6> {status === "success" ? " Back to Home" : " Back to Payment"} </h6>
      </div>
    </div>
  );
};

export default BookingStaus;
