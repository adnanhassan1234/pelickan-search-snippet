import React from "react";

function TwoWay({ state }) {
  const { toVal, fromVal, returnDate, toHour, toMins } = state;
  return (
    <div className="booking__form__left booking_return__padding">
      <div style={{ margin: "auto" }}>
        <h2>Return Information</h2>
      </div>
      <div className="booking__input__container">
        <div className="booking__input">
          <label>Return PickUp From</label>
          <input type="text" placeholder="From" value={toVal} readOnly />
        </div>
        <div className="booking__input">
          <label>Return Drop Off</label>
          <input type="text" placeholder="To" value={fromVal} readOnly />
        </div>
        <div className="booking__input">
          <label>*Return Date</label>
          <input
            type="text"
            placeholder="Pick Up Date"
            value={returnDate}
            readOnly
          />
        </div>
        <div className="booking__input__drop booking_select">
          <label>*Pick Up Time</label>
          <select name="hours" value={toHour} readOnly>
            <option value="0">00</option>
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
          </select>

          <select name="mins" value={toMins} readOnly>
            <option value="0">00</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TwoWay;
