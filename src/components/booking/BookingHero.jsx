import React from "react";
import logo from "../../assets/logo.svg";

const BookingHero = () => {
  return (
    <section className="bg-booking-hero">
      <div className="w-container px-cx mx-auto pt-[56px] text-white text-center min-h-[600px] xl:text-left">
        <a href="/">
          <img src={logo} alt="logo" className="w-[82.4px] md:w-[103px] mb-[44px] mx-auto md:mx-0 md:mb-[70px]" />
        </a>
        <h1 className="heading1 xl:mt-[153px]">Reservations</h1>
        <p className="paragraph description mt-[21px] mb-[57px] mx-auto md:mx-auto xl:mt-[18px] xl:mx-0">
          We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.
        </p>
        <a href="/booking" className="pb-[152px] cta cta-dark md:hidden">
          RESERVE PLACE
        </a>
      </div>
    </section>
  );
};

export default BookingHero;
