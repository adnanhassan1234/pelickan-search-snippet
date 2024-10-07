import React from "react";

const FinalPaymentFare = ({ charges, state }) => {
  const { type, fare } = state;
  const {
    congestion_charges,
    drop_off_charges,
    pickup_charges,
    night_charges,
  } = charges;
  return (
    <>
      <h2>Fare Summary</h2>
      <div className="fare_details">
        {type && (
          <h5>
            Vehicle Type <span>{type}</span>
          </h5>
        )}

        {fare && (
          <h5>
            Basic Fare
            <span>
              {process.env.REACT_APP_CURRENCY_SYMBOL} {fare}.00
            </span>
          </h5>
        )}
        {congestion_charges && (
          <h5>
            Congestion Zone
            <span>
              {process.env.REACT_APP_CURRENCY_SYMBOL} {congestion_charges}
            </span>
          </h5>
        )}
        {drop_off_charges && (
          <h5>
            Dropoff Charges
            <span>
              {process.env.REACT_APP_CURRENCY_SYMBOL} {drop_off_charges}
            </span>
          </h5>
        )}
        {pickup_charges && (
          <h5>
            Pickup Charges
            <span>
              {process.env.REACT_APP_CURRENCY_SYMBOL} {pickup_charges}
            </span>
          </h5>
        )}
        {night_charges && (
          <h5>
            Night Charges
            <span>
              {process.env.REACT_APP_CURRENCY_SYMBOL} {night_charges}
            </span>
          </h5>
        )}
      </div>
      <div className="total_price">
        <h6>Total</h6>
        <h1>
          {process.env.REACT_APP_CURRENCY_SYMBOL}
          {(parseInt(fare) || 0) +
            (parseInt(congestion_charges) || 0) +
            (parseInt(night_charges) || 0) +
            (parseInt(drop_off_charges) || 0) +
            (parseInt(pickup_charges) || 0)}
        </h1>
      </div>
    </>
  );
};

export default FinalPaymentFare;
