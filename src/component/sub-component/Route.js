import React, { useCallback, useState, useEffect, useRef } from "react";
import Plus2 from "../svg/Plus2";

import DropDown from "./DropDown";
function Route({
  via,
  showVia,
  fromVal,
  setFromVal,
  toVal,
  setToVal,
  setFormData,
  formData,
  errors,
}) {
  // Start Elastic Search States
  // const baseUrl = process.env.REACT_APP_BASE_URL;
  const baseUrl = "https://api.test.pelickandespatch.com:8443";
  const [fromData, setFromData] = useState([]);
  const [toData, setToData] = useState([]);
  const [toggleFrom, setToggleFrom] = useState(false);
  const [toggleTo, setToggleTo] = useState(false);
  const [error, setError] = useState("");
  const [toError, setToError] = useState("");
  // End Elastic Search States
  const [fromRadio, setFromRadio] = useState(false);
  const [toRadio, setToRadio] = useState(false);
  // Keyboard event
  const [selectedOption, setSelectedOption] = useState(0);
  const searchValueFrom = useRef([]);
  const searchValueTo = useRef([]);

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setToggleFrom(false);
      setToggleTo(false);
      setSelectedOption(-1);
    });
  }, []);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 0);
    };
  };
  // From Debounced
  const apiFromRequest = async (e) => {
    try {
      const { value } = e.target;
      const response = await fetch(
        `${baseUrl}/search/search?address=${value}`,
        // `http://192.168.50.56:3310/api/v1/search?address=${value}`,
        {
          method: "POST",
        }
      );
      const data = await response.json();
      if (data.data) {
        setFromData(data.data);
        setError("");
      } else {
        setFromData("");
        setError(data.msg);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const optimizedFromFn = useCallback(debounce(apiFromRequest), []); // eslint-disable-line

  const changeFromValue = async (e) => {
    const { value } = e.target;
    setError("");
    setFromVal(value);
    setFormData({ ...formData, fromVal: value });

    optimizedFromFn(e);
    value.length > 0 ? setFromRadio(true) : setFromRadio(false);
    value.length > 0 ? setToggleFrom(true) : setToggleFrom(false);
  };
  // to Debounced
  const apiToRequest = async (e) => {
    try {
      const { value } = e.target;
      const response = await fetch(
        `${baseUrl}/search/search?address=${value}`,
        // `http://192.168.50.56:3310/api/v1/search?address=${value}`,
        {
          method: "POST",
        }
      );
      const data = await response.json();
      if (data.data) {
        setToData(data.data);
        setToError("");
      } else {
        setToData("");
        setToError(data.msg);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const optimizedToFn = useCallback(debounce(apiToRequest), []); // eslint-disable-line
  const changeToValue = (e) => {
    const { value } = e.target;
    setToError("");
    setToVal(value);
    optimizedToFn(e);
    value.length > 0 ? setToRadio(true) : setToRadio(false);
    value.length > 0 ? setToggleTo(true) : setToggleTo(false);
  };

  // Keyboard event
  const setSelectedThenCloseDropdown = (index, e, lat, long, fromPostCode) => {
    setSelectedOption(0);
    setToggleFrom(false);
    setFromVal(e?.target?.innerText);
    lat !== undefined &&
      long !== undefined &&
      setFormData({ ...formData, fromCoords: lat + "," + long });
    setFormData({ ...formData, fromPostCode: fromPostCode });
  };

  const setSelectedThenCloseDropdownTo = (index, e, lat, long, toPostCode) => {
    setSelectedOption(0);
    setToggleTo(false);
    setToVal(e?.target?.innerText);
    lat !== undefined &&
      long !== undefined &&
      setFormData({ ...formData, toCoords: lat + "," + long });
    setFormData({ ...formData, toPostCode: toPostCode });
  };

  useEffect(() => {
    toggleFrom
      ? searchValueFrom?.current[selectedOption]?.focus()
      : searchValueTo?.current[selectedOption]?.focus();
  }, [selectedOption]); //eslint-disable-line

  const handleKeyDown = (e, index, lat, long, postcode) => {
    switch (e.key) {
      case "Tab":
        e.preventDefault();
        break;
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        toggleFrom
          ? setSelectedThenCloseDropdown(
              selectedOption || index,
              e,
              lat,
              long,
              postcode
            )
          : setSelectedThenCloseDropdownTo(
              selectedOption || index,
              e,
              lat,
              long,
              postcode
            );
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (e) => {
    switch (e.key) {
      case "Tab":
        e.preventDefault();
        break;

      case "ArrowUp":
        e.preventDefault();
        toggleFrom
          ? setSelectedOption(
              selectedOption - 1 >= 0 ? selectedOption - 1 : fromData.length - 1
            )
          : setSelectedOption(
              selectedOption - 1 >= 0 ? selectedOption - 1 : toData.length - 1
            );
        break;
      case "ArrowDown":
        e.preventDefault();
        toggleFrom
          ? setSelectedOption(
              selectedOption === fromData.length - 1 ? 0 : selectedOption + 1
            )
          : setSelectedOption(
              selectedOption === toData.length - 1 ? 0 : selectedOption + 1
            );
        break;
      default:
        break;
    }
  };

  return (
    <div className="form__input">
      <span
        className="form__line__shadow"
        style={{ top: "54px", height: via ? "135px" : "100px" }}
      ></span>
      <div className="form__jointInputBoxes">
        <h4 style={{ color: errors.fromVal && "#d15151" }}>From</h4>
        <div className="form__combineInput">
          <label className="container">
            <input type="radio" checked={fromRadio} readOnly />
            <div className="checkmark"></div>
          </label>
          <input
            style={{ borderBottom: errors.fromVal && "1px solid #d15151" }}
            type="text"
            placeholder="Enter destination postcode, venue or place"
            onChange={changeFromValue}
            value={fromVal ?? ""}
            onKeyDown={handleListKeyDown}
          />
          <DropDown
            toggle={toggleFrom}
            data={fromData}
            selectedOption={selectedOption}
            handleListKeyDown={handleListKeyDown}
            setSelectedThenCloseDropdown={setSelectedThenCloseDropdown}
            handleKeyDown={handleKeyDown}
            searchValue={searchValueFrom}
            error={error}
            val={fromVal}
          />
        </div>

        <div className="form__via">
          <Plus2 via={via} showVia={showVia} />
          <h4>Via</h4>
        </div>
        {via && (
          <input
            placeholder="Enter destination postcode, venue or place"
            type="text"
            style={{ marginLeft: "38px", width: "93%" }}
          />
        )}

        <h4 style={{ marginTop: "10px", color: errors.toVal && "#d15151" }}>
          To
        </h4>
        <div className="form__combineInput">
          <label className="container">
            <input type="radio" checked={toRadio} readOnly />
            <div className="checkmark"></div>
          </label>
          <input
            style={{ borderBottom: errors.toVal && "1px solid #d15151" }}
            type="text"
            placeholder="Enter destination postcode, venue or place"
            onChange={changeToValue ?? ""}
            value={toVal ?? ""}
            onKeyDown={handleListKeyDown}
          />
          <DropDown
            toggle={toggleTo}
            data={toData}
            selectedOption={selectedOption}
            handleListKeyDown={handleListKeyDown}
            setSelectedThenCloseDropdown={setSelectedThenCloseDropdownTo}
            handleKeyDown={handleKeyDown}
            searchValue={searchValueTo}
            error={toError}
            val={toVal}
          />
        </div>
      </div>
    </div>
  );
}

export default Route;
