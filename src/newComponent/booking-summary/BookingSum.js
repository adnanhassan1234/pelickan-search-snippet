import React from "react";
import "./bookingSum.css";
import distances from "../../assets/img/distance.png";
import times from "../../assets/img/time.png";

const BookingSummary = ({ distTime, state }) => {
  const { distance, duration } = distTime;
  const { fromVal, toVal, time } = state;
  return (
    <div className="result__box">
      <div className="booking_box">
        <div className="booking_summary">
          <h4>Booking Summary</h4>
          <div className="distance">
            <div>
              <img src={distances} alt="" />
              <span>Distance {distance} Miles</span>
            </div>
            <div className="margin_left">
              <img src={times} alt="" />
              <span>Time {duration ? duration : time}</span>
            </div>
          </div>
          <div className="location">
            <div className="from_to">
              <h5>
                From <span className="line"></span>
                <span>&nbsp; {fromVal}</span>
              </h5>
            </div>
            <div className="from_to">
              <h5>
                To <span className="line"></span>
                <span> &nbsp; {toVal}</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
