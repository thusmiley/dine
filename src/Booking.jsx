import React from "react";
import Footer from "./components/Footer";
import BookingHero from "./components/booking/BookingHero";
import BookingForm from "./components/booking/BookingForm";

const Booking = () => {
  return (
    <div>
      <BookingHero />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Booking;
