import React from "react";

function PaymentForm({ state, title, formData, onChange }) {
  const { email } = state;
  const { cardNumber, month, year, cvvNumber } = formData;

  return (
    <div style={{ width: "81%", margin: "0 auto" }}>
      <div style={{ margin: "auto" }}>
        <h2>{title?.split("_").join(" ")}</h2>
      </div>
      <div className="booking__input__container">
        <div className="booking__input">
          <label>Email</label>
          <input
            type="text"
            placeholder="example@gmail.com"
            value={email}
            name="email"
            onChange={onChange}
          />
        </div>
        <div className="booking__input">
          <label>Card Number</label>
          <input
            type="text"
            placeholder="241-7512-3412-3456"
            name="cardNumber"
            value={cardNumber}
            onChange={onChange}
          />
        </div>
        <div className="booking__input pos">
          <label>*Expiry Data</label>
          <div className="payment__expiry">
            <input
              type="text"
              placeholder="12"
              value={month}
              name="month"
              onChange={onChange}
            />{" "}
            <span>/</span>
            <input
              type="text"
              placeholder="2025"
              value={year}
              name="year"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="booking__input">
          <label>CVV Number</label>
          <input
            type="text"
            placeholder="Enter the 3 or 4 digit number on the card"
            value={cvvNumber}
            name="cvvNumber"
            onChange={onChange}
          />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button type="submit">Pay Now</button>
      </div>
    </div>
  );
}

export default PaymentForm;
