import React, { useState, useEffect } from "react";
function Detail({ via, setFormData, formData, onChange, errors }) {
  const [splitOneWayDate, setSplitOneWayDate] = useState("");
  const [splitReturnDate, setSplitReturnDate] = useState("");
  const [minDate, setMinDate] = useState("");
  const [checkReturn, setCheckReturn] = useState(false);
  const { oneWayDate, returnDate } = formData;
  useEffect(() => {
    var date = new Date(Date.now());
    const YYYY = date.getFullYear();
    let MM = date.getMonth() + 1;
    MM = MM.toString().length > 1 ? MM : "0" + MM;
    let DD = date.getDate();
    DD = DD.toString().length > 1 ? DD : "0" + DD;
    let minDate = YYYY + "-" + MM + "-" + DD;
    setMinDate(minDate);
  }, []);

  const enableDiv = () => {
    setCheckReturn(!checkReturn);
  };
  const oneWayDateValue = (e) => {
    const dt = new Date(e.target.value + "T12:00:00");
    setSplitOneWayDate(dt.toString().split(" ").slice(0, 3).join(" "));
    // setOneWayDate(e.target.value);
    setFormData({ ...formData, oneWayDate: e.target.value });
  };
  const returnDateValue = (e) => {
    const dt = new Date(e.target.value + "T12:00:00");
    setSplitReturnDate(dt.toString().split(" ").slice(0, 3).join(" "));
    // setReturnDate(e.target.value);
    setFormData({ ...formData, returnDate: e.target.value });
  };

  return (
    <div className="form__input" style={{ marginTop: "40px" }}>
      <span
        className="form__line__shadow"
        style={{ top: via === true ? "270px" : "240px", height: "200px" }}
      ></span>
      <div className="form__jointInputBoxes" style={{ padding: "5px 20px" }}>
        <div className="form__heading">
          <label className="container">
            <input type="radio" checked="checked" readOnly />
            <div className="checkmark"></div>
          </label>
          <h4>One Way</h4>
        </div>
        <div className="form__combineInput form__extra">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "65%",
            }}
          >
            <input
              type="text"
              value={splitOneWayDate.split(" ")[0] ?? ""}
              className="form__date"
              readOnly
              style={{ borderBottom: errors.oneWayDate && "1px solid #d15151" }}
            />
            <input
              type="text"
              value={splitOneWayDate.split(" ")[2] ?? ""}
              className="form__date"
              readOnly
              style={{ borderBottom: errors.oneWayDate && "1px solid #d15151" }}
            />
            <input
              type="text"
              value={splitOneWayDate.split(" ")[1] ?? ""}
              className="form__date"
              readOnly
              style={{ borderBottom: errors.oneWayDate && "1px solid #d15151" }}
            />
            <input
              type="date"
              style={{ width: "120px", padding: "5px" }}
              value={oneWayDate ?? ""}
              min={minDate} //"2022-08-09" //{new Date(Date.now())}
              name="date"
              onChange={(e) => oneWayDateValue(e)}
            />
          </div>
          <div className="form__time">
            <select
              name="fromHours"
              id="fromHours"
              onChange={(e) => onChange(e)}
              style={{ borderBottom: errors.fromHours && "1px solid #d15151" }}
            >
              <option value="">HH</option>
              <option value="00">00</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
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
            <div style={{ marginTop: "8px", color: "#fff" }}>:</div>

            <select
              name="fromMins"
              id="fromMins"
              onChange={(e) => onChange(e)}
              style={{ borderBottom: errors.fromMins && "1px solid #d15151" }}
            >
              <option value="">MM</option>
              <option value="00">00</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form__jointInputBoxes" style={{ padding: "5px 20px" }}>
        <div
          className={`form__combineInput form__extra ${
            !checkReturn && "disabledbutton"
          }`}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "65%",
            }}
          >
            {/* Date Here */}
            <input
              type="text"
              value={splitReturnDate.split(" ")[0] ?? ""}
              className="form__date"
              readOnly
            />
            <input
              type="text"
              value={splitReturnDate.split(" ")[2] ?? ""}
              className="form__date"
              readOnly
            />
            <input
              type="text"
              value={splitReturnDate.split(" ")[1] ?? ""}
              className="form__date"
              readOnly
            />
            <input
              type="date"
              style={{ width: "120px", padding: "5px" }}
              min={minDate} //"2022-06-29" //{new Date(Date.now())}
              value={returnDate ?? ""}
              name="returnDate"
              onChange={(e) => returnDateValue(e)}
            />
          </div>

          <div className="form__time">
            <select name="toHour" id="toHour" onChange={(e) => onChange(e)}>
              <option value="">HH</option>
              <option value="00">00</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
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
            <div style={{ marginTop: "8px", color: "#fff" }}>:</div>

            <select name="toMins" id="toMins" onChange={(e) => onChange(e)}>
              <option value="">MM</option>
              <option value="0">00</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
        <div className="form__heading">
          <label className="container">
            <input
              type="radio"
              checked={checkReturn}
              onClick={() => enableDiv()}
              readOnly
            />
            <div className="checkmark"></div>
          </label>
          <h4>Return</h4>
        </div>
      </div>
    </div>
  );
}

export default Detail;
