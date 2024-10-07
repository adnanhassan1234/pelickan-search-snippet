import React from "react";

const FareTable = ({ charges, state }) => {
  const { type, fare } = state;
  const {
    congestion_charges,
    drop_off_charges,
    pickup_charges,
    night_charges,
  } = charges;
  return (
    <div className="table">
      <table>
        <tbody>
          {type && (
            <tr>
              <th>Vehicle Type</th>
              <td className="vehicle_types">{type}</td>
            </tr>
          )}
          {fare && (
            <tr>
              <th>Basic Fare</th>
              <td>
                {process.env.REACT_APP_CURRENCY_SYMBOL} {fare}.00
              </td>
            </tr>
          )}
          {congestion_charges && (
            <tr>
              <th>Congestion Zone Charges</th>
              <td>
                {process.env.REACT_APP_CURRENCY_SYMBOL} {congestion_charges}
              </td>
            </tr>
          )}
          {drop_off_charges && (
            <tr>
              <td>Dropoff Charges</td>
              <td>
                {process.env.REACT_APP_CURRENCY_SYMBOL} {drop_off_charges}
              </td>
            </tr>
          )}
          {pickup_charges && (
            <tr>
              <td>Pickup Charges</td>
              <td>
                {process.env.REACT_APP_CURRENCY_SYMBOL} {pickup_charges}
              </td>
            </tr>
          )}
          {night_charges && (
            <tr>
              <td>Night Charges</td>
              <td>
                {process.env.REACT_APP_CURRENCY_SYMBOL} {night_charges}
              </td>
            </tr>
          )}
        </tbody>
        <tr className="bottom">
          <th>Total</th>
          <th>
            {process.env.REACT_APP_CURRENCY_SYMBOL}{" "}
            {(parseInt(fare) || 0) +
              (parseInt(congestion_charges) || 0) +
              (parseInt(night_charges) || 0) +
              (parseInt(drop_off_charges) || 0) +
              (parseInt(pickup_charges) || 0)}
          </th>
        </tr>
      </table>
    </div>
  );
};

export default FareTable;
