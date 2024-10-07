import React from "react";
import CCodes from "../../../component/sub-component/CCodes";

const PassengerDetails = ({ errors, onChange, msg, formData }) => {
  const { name, email, nCode, mNumber, noOfPassengers, notes } = formData;
  return (
    <div className="full">
      <div className="booking_box__bottom">
        <div className="input__box">
          <label style={{ color: errors.name ? "red" : "#000" }}>Name</label>
          <input
            style={{ border: errors.name && "1px solid red" }}
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="input__box">
          <label style={{ color: errors.email ? "red" : "#000" }}>Email</label>
          <input
            style={{ border: errors.email && "1px solid red" }}
            type="text"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="input__box">
          <label
            style={{
              color: errors.mNumber && errors.nCode ? "red" : "#000",
            }}
          >
            Mobile Number
          </label>
          <div className="booking__input">
            <div className="booking__input__drop booking__numbers">
              <CCodes nCode={nCode} onChange={onChange} />
              <input
                style={{ border: errors.nCode && "1px solid red" }}
                type="number"
                placeholder="Mobile Number"
                name="mNumber"
                value={mNumber}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
        </div>
        <div className="input__box">
          <label
            style={{
              color: errors.noOfPassengers ? "red" : "#000",
            }}
          >
            Passenger
          </label>
          <select
            className="select_field"
            style={{ border: errors.noOfPassengers && "1px solid red" }}
            name="noOfPassengers"
            onChange={(e) => onChange(e)}
            value={noOfPassengers ?? ""}
          >
            <option value="">{noOfPassengers}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
          </select>
        </div>
        <div className="input__box">
          <label htmlFor="Hand Luggages">Hand Luggages</label>
          <select
            className="select_field"
            name="hLaggages"
            onChange={(e) => onChange(e)}
          >
            <option value="0">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className="input__box">
          <label htmlFor="Luggages">Luggages</label>
          <select className="select_field" onChange={(e) => onChange(e)}>
            <option value="0">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>
      <div className="input__box m_top">
        <label htmlFor="Additional Notes">Additional Notes</label>
        <input
          type="text"
          placeholder="Additional Notes"
          name="notes"
          value={notes}
          onChange={(e) => onChange(e)}
        />
      </div>
    </div>
  );
};

export default PassengerDetails;
