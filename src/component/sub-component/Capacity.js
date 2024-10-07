import React, { useState, useEffect } from "react";
import Cross from "../svg/Cross";
import Luggage from "../svg/Luggage";
import People from "../svg/People";
import DataList from "./DataList";

function Capacity({ onChange, errors }) {
  const [showDataList, setDataList] = useState(false);
  const [objValue, setObjValue] = useState([]);
  const [luggage, setLuggage] = useState([]);

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setDataList(false);
    });
  }, []);

  useEffect(() => {
    let uniqueSpan = Array.from(
      objValue.reduce((map, obj) => map.set(obj.value, obj), new Map()).values()
    );
    setLuggage(uniqueSpan);
  }, [objValue]);

  const deleteObjVal = (id) => {
    const deleteValue = luggage.filter((el) => {
      return el.id !== id;
    });

    setLuggage(deleteValue);
    setObjValue(deleteValue);
  };
  return (
    <>
      <div className="form__capacity">
        <div className="form__loading">
          <div>
            <People errors={errors} />
            <select
              name="noOfPassengers"
              onChange={(e) => onChange(e)}
              style={{
                borderBottom: errors.noOfPassengers && "1px solid #d15151",
              }}
            >
              <option value="00">0</option>
              <option value="01">1</option>
              <option value="02">2</option>
              <option value="03">3</option>
              <option value="04">4</option>
              <option value="05">5</option>
              <option value="06">6</option>
              <option value="07">7</option>
              <option value="08">8</option>
              <option value="09">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
            </select>
          </div>
          <h4>Passengers</h4>
        </div>
        <div style={{ position: "relative", cursor: "pointer" }}>
          <div className="form__loading">
            <div
              onClick={() => {
                setDataList(!showDataList);
              }}
            >
              <Luggage />
              <input type="text" value="None" readOnly />
            </div>
            <h4>Luggage</h4>
          </div>
          {showDataList && (
            <DataList
              objValue={objValue}
              setObjValue={setObjValue}
              setDataList={setDataList}
              uniqueValue={luggage}
            />
          )}
        </div>
      </div>
      <div className="form__dropDownValue">
        {luggage?.map((item) => (
          <div key={item.id}>
            <span style={{ display: "flex", justifyContent: "flex-end" }}>
              <Cross deleteObjVal={deleteObjVal} id={item.id} />
            </span>
            <p>
              {item.quantity} x {item.value}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Capacity;
