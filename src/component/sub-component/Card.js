import React from "react";

function Card({ handleBooking, vehicle }) {
  return (
    <div className="cars__box" key={vehicle.id}>
      <span>{vehicle.vehicle_type}</span>
      <img src={vehicle.images[0].imageUrl} alt={vehicle.vehicle_type} />
      <ul>
        <li>{vehicle.no_passengers} Passengers</li>
        <li>{vehicle.no_suitcases} Suitcases</li>
        <li>{vehicle.cabin_size_cases} Cabin Size Cases</li>
      </ul>
      <p>
        One Way:{" "}
        <b>
          {process.env.REACT_APP_CURRENCY_SYMBOL} {vehicle.fare}
        </b>
      </p>
      <button
        type="submit"
        onClick={() => handleBooking(vehicle.vehicle_type, vehicle.fare)}
      >
        Book Now
      </button>
    </div>
  );
}

export default Card;
