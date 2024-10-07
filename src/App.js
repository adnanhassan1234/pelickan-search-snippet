import "./css/App.css";
import React from "react";
import Snippet from "./component/Snippet";
import Results from "./component/Results";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./component/Booking";
import Payment from "./component/Payment";
import BookingForm from "./newComponent/booking-form/BookingForm";
import BookingStaus from "./newComponent/booking-status/BookingStaus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Snippet />} />
        <Route path="/results" element={<Results />} />
        {/*  <Route path="/booking" element={<Booking />} />  */}
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment/:status" element={<BookingStaus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
