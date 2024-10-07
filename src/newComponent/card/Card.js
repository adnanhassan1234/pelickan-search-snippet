import React from "react";
import "./card.css";
import medium from "../../assets/img/medium.png";
import small from "../../assets/img/small.png";
import passenger from "../../assets/img/user.png";
import car1 from "../../assets/img/f1.png";
import star from "../../assets/img/Star 1.png";

function Card({ fare, handleBooking }) {
  return (
    <>
      {fare?.map((itm, index) => (
        <div className="cars__box" key={index}>
          <div className="title">
            <h5>{itm.vehicle_type}</h5>
          </div>
          <div className="booking_card">
            {itm.images[0].imageUrl == null ? (
              <img src={car1} alt="Avatar" />
            ) : (
              <img src={itm.images[0].imageUrl} alt="Avatar" />
            )}
            <h4>{itm.vehicle_type}</h4>
            <div className="star">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div className="feature">
              <div className="box">
                <img src={passenger} alt="" />
                <span>
                  &nbsp; Passengers
                  <span className="bold"> {itm.no_passengers}</span>
                </span>
              </div>
              <div className="box">
                <img src={medium} alt="" />
                <span>
                  &nbsp; Medium <span className="bold">{itm.no_suitcases}</span>
                </span>
              </div>
              <div className="box">
                <img src={small} alt="" />
                <span>
                  &nbsp; Small{" "}
                  <span className="bold">{itm.cabin_size_cases}</span>
                </span>
              </div>
            </div>
            <div className="booking_price">
              <h2>EUR {itm.fare || "0.00"}</h2>
              <button
                className="btn"
                onClick={() => handleBooking(itm.vehicle_type, itm.fare)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
