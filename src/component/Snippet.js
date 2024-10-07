import React, { useState } from "react";
import Detail from "./sub-component/Detail";
import Route from "./sub-component/Route";
import Capacity from "./sub-component/Capacity";
import { useNavigate } from "react-router-dom";

function Snippet() {
  const [via, setVia] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    oneWayDate: "",
    returnDate: "",
    fromCoords: "",
    toCoords: "",
    toPostCode: "",
    fromPostCode: "",
    fromHours: "",
    fromMins: "",
    toHour: "",
    toMins: "",
    noOfPassengers: "",
  });
  const [errors, setErrors] = useState({});
  //  elastic Search Value
  const [fromVal, setFromVal] = useState("");
  const [toVal, setToVal] = useState("");

  const showVia = () => {
    setVia(!via);
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      fromVal,
      toVal,
    };
    const err = validate(data);
    setErrors(err);
    if (Object.keys(err).length <= 0) {
      navigate("/results", { state: data });
    }
  };
  const validate = (values) => {
    let error = {};
    if (!values.fromVal) {
      error.fromVal = "*Required";
    }
    if (!values.toVal) {
      error.toVal = "*Required";
    }
    if (!values.oneWayDate) {
      error.oneWayDate = "*Required";
    }
    if (!values.fromHours) {
      error.fromHours = "*Required";
    }
    if (!values.fromMins) {
      error.fromMins = "*Required";
    }
    if (!values.noOfPassengers) {
      error.noOfPassengers = "*Required";
    }
    if (fromVal && fromVal === toVal) {
      error.address = "Invalid address";
    }

    return error;
  };
  return (
    <div className="form__container">
      <form className="form__main" onSubmit={(e) => onSubmit(e)}>
        <Route
          via={via}
          showVia={showVia}
          fromVal={fromVal}
          setFromVal={setFromVal}
          toVal={toVal}
          setToVal={setToVal}
          setFormData={setFormData}
          formData={formData}
          errors={errors}
        />
        <Detail
          via={via}
          setFormData={setFormData}
          formData={formData}
          onChange={onChange}
          errors={errors}
        />
        <Capacity onChange={onChange} errors={errors} />
        <div className="form__button">
          <button type="submit">
            {errors.address ? (
              <span style={{ color: "#d15151" }}>{errors.address}</span>
            ) : (
              "Get a Quotes"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Snippet;
