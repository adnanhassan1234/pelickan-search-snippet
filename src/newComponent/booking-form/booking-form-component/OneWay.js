import React from "react";

function OneWay({ state, title }) {
  const { fromVal, toVal, oneWayDate, fromHours, fromMins } = state;
  return (
    <div className="full">
      <div className="booking_box">
        <div className="input__box">
          <label htmlFor="From">From</label>
          <input type="text" placeholder="From" value={fromVal} readOnly />
        </div>
        <div className="input__box">
          <label htmlFor="To">To</label>
          <input type="text" placeholder="To" value={toVal} readOnly />
        </div>
        <div className="input__box">
          <label htmlFor="Pickup Date">Pickup Date</label>
          <input
            type="text"
            placeholder="Pick Up Date"
            value={oneWayDate}
            readOnl
          />
        </div>
        <div className="input__box">
          <div className="booking_box_bottom">
            <div className="input__box">
              <label htmlFor="Pickup Time">Pickup Time</label>
              <select
                className="select_field"
                name="hours"
                value={fromHours}
                readOnly
              >
                <option value="0">{fromHours}</option>
              </select>
            </div>
            <div className="input__box">
              <br />
              <label htmlFor="Pickup mins"></label>
              <select
                className="select_field"
                name="mins"
                value={fromMins}
                readOnly
              >
                <option value="0">{fromMins}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneWay;
