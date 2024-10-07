import React, { useEffect, useState } from "react";
import Card from "../newComponent/card/Card";
import { useLocation, useNavigate } from "react-router-dom";
import BookingSummary from "../newComponent/booking-summary/BookingSum";

import Spinner from "./svg/Spinner";

function Result() {
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [distTime, setDistTime] = useState({});
  const [threshold, setThreshold] = useState(0);
  const [vehicleType, setVehicleType] = useState([]);
  const [fare, setFare] = useState([]);
  const { state } = useLocation();
  const { fromCoords, toCoords, fromPostCode, toPostCode, fromVal, toVal } =
    state;
  useEffect(() => {
    async function getThreshold() {
      try {
        const data = new FormData();
        data.append("api_key", process.env.REACT_APP_API_KEY);
        data.append("company_id", "1");
        let threshold = await fetch(
          baseUrl + "/pelickan-booking/get-all-threshold",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-length": data.length,
            },
            // body: data,
          }
        );

        threshold = await threshold.json();
        setThreshold(threshold.data[0].threshold);
      } catch (err) {
        console.log(err);
      }
    }
    getThreshold();
  }, [baseUrl]);

  useEffect(() => {
    async function getVehiclesType() {
      try {
        const data = new FormData();
        data.append("api_key", process.env.REACT_APP_API_KEY);
        let vType = await fetch(
          baseUrl + "/pelickan-booking/get-all-vehicleType",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-length": data.length,
            },
            // body: data,
          }
        );
        vType = await vType.json();
        setVehicleType(vType.data);
      } catch (err) {
        console.log(err);
      }
    }
    getVehiclesType();
  }, [distTime, fromVal, toVal, baseUrl]);

  useEffect(() => {
    async function getDistTime() {
      try {
        let timeDist = await fetch(
          baseUrl +
            `/pelickan-booking/distance_time?startLat=${
              fromCoords.split(",")[0]
            }&startLng=${fromCoords.split(",")[1]}&endLat=${
              toCoords.split(",")[0]
            }&endLng=${
              toCoords.split(",")[1]
            }&postcode1=${fromPostCode}&postcode2=${toPostCode}`,
          // `/pelickan-booking/distance_time?lat1=51.481587176817335&lon1=0.16935096673490327&lat2=51.465200858550645&lon2=-0.26122847219383794`,
          {
            method: "post",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              latlong1: fromCoords,
              latlong2: toCoords,
              postcode1: fromPostCode,
              postcode2: toPostCode,
            }),
          }
        );
        timeDist = await timeDist.json();
        console.log(timeDist[0]);
        setDistTime(timeDist[0]);
      } catch (err) {
        console.log(err);
      }
    }
    getDistTime();
  }, [fromCoords, toCoords, fromPostCode, toPostCode, baseUrl]);
  useEffect(() => {
    async function getVehicleWithFare() {
      try {
        if (
          distTime &&
          threshold &&
          parseFloat(distTime.distance) < parseFloat(threshold)
        ) {
          const data = new FormData();
          data.append("api_key", process.env.REACT_APP_API_KEY);
          let vFare = await fetch(
            baseUrl + "/pelickan-booking/get-all-mileageCal",
            {
              method: "get",
              headers: {
                Accept: "application/json",
                "Content-length": data.length,
              },
              // body: data,
            }
          );
          vFare = await vFare.json();
          const fareWithtype =
            vehicleType &&
            vehicleType.map((type) => {
              const data = {
                ...type,
                fare: vFare.data
                  .map((vFare) => {
                    if (type._id === vFare?.vehicle_type_id) {
                      return vFare?.fare;
                    }
                    return "";
                  })
                  .join(""),
              };
              return data;
            });
          setFare(fareWithtype);
          // } else {
        } else if (vehicleType?.length > 0 && distTime.distance) {
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          const raw = JSON.stringify({
            From: fromVal.toUpperCase(),
            To: toVal.toUpperCase(),
            Miles: distTime.distance,
            Threshold: threshold,
          });

          const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };
          // const data = new FormData();
          // data.append("api_key", process.env.REACT_APP_API_KEY);
          // data.append("from", fromVal.toUpperCase());
          // data.append("to", toVal.toUpperCase());
          // data.append("miles", distTime.Distance && distTime.Distance);

          const response = await fetch(
            baseUrl + "/pelickan-booking/vehicle-type-plus-fare",
            requestOptions
          );
          const vFare = await response.json();

          const fareWithtype =
            vehicleType &&
            vehicleType.map((type) => {
              const data = {
                ...type,
                fare: vFare
                  .map((vFare) => {
                    if (type._id === vFare?.vehicle_type_id) {
                      return vFare?.fare;
                    }
                    return "";
                  })
                  .join(""),
              };
              return data;
            });
          setFare(fareWithtype);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getVehicleWithFare();
  }, [distTime, fromVal, toVal, threshold, vehicleType, baseUrl]);

  const handleBooking = (type, fare) => {
    const data = {
      ...state,
      type,
      fare,
      distance: distTime.distance,
      time: distTime.duration,
    };
    navigate("/booking", { state: data });
  };
  return (
    <>
      {fare.length <= 0 ? (
        <p className="loading__spinner">
          <Spinner />
        </p>
      ) : (
        <>
          <BookingSummary distTime={distTime} state={state} />
          <div className="booking_car">
            <div className="booking_car__container">
              <div className="result__cars__box">
                <Card handleBooking={handleBooking} fare={fare} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Result;
