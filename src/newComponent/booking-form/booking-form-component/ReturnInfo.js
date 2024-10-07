import React from "react";

const ReturnInfo = ({ state }) => {
  const { toVal, fromVal, returnDate, toHour, toMins } = state;
  return (
    <div className="full">
      <div className="booking_box">
        <div className="input__box">
          <label htmlFor="From">Return Pickup From</label>
          <input type="text" placeholder="From" value={toVal} readOnly />
        </div>
        <div className="input__box">
          <label htmlFor="Off">Return Drop Off</label>
          <input type="text" placeholder="To" value={fromVal} readOnly />
        </div>
        <div className="input__box">
          <label htmlFor="Pickup Date">Pickup Date</label>
          <input
            type="text"
            placeholder="Pick Up Date"
            value={returnDate}
            readOnly
          />
        </div>
        <div className="input__box">
          <div className="booking_box_bottom">
            <div className="input__box">
              <label htmlFor="Pickup Time">Pickup Time</label>
              <select
                name="hours"
                value={toHour}
                readOnly
                className="select_field"
              >
                <option value="0">{toHour}</option>
              </select>
            </div>
            <div className="input__box">
              <br />
              <label htmlFor="Pickup mins"></label>
              <select
                name="mins"
                value={toMins}
                className="select_field"
                readOnly
              >
                <option value="0">{toMins}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnInfo;
