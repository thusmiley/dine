import React from "react";
import arrow from "../../assets/icons/icon-arrow.svg";
import lines from "../../assets/patterns/pattern-lines.svg";

const BookingForm = () => {
  function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const month = document.getElementById("month");
    const day = document.getElementById("day");
    const year = document.getElementById("year");
    const hour = document.getElementById("hour");
    const minute = document.getElementById("minute");
    const border = document.getElementsByTagName("input");

    // if (!name || !email || !month || !day || !year || !hour || !minute || isNaN(month) || isNaN(day) || isNaN(year) || isNaN(hour) || isNaN(minute)) {
    //   alert("This field is required");
    // }

    //   if (email !== "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/") {
    //     alert("This field is required");
    //   }
  }
  function numOfPeople() {
    const add = document.getElementById("add");
    const minus = document.getElementById("minus");
    let people = document.getElementById("people");
    let num = 4;

    add.addEventListener("click", () => {
      num++;
      people.innerHTML = num;
    });
    minus.addEventListener("click", () => {
      num--;
      people.innerHTML = num;
    });
  }
  numOfPeople();

  return (
    <section className="h-[534px] md:h-[435px] xl:h-[320px] bg-booking-form">
      <div className="w-container px-cx mx-auto flexCenter relative">
        <img src={lines} alt="pattern" className="hidden xl:block xl:absolute xl:top-[150px] xl:z-[-2]" />
        <form
          name="bookingForm"
          onsubmit={validateForm()}
          className="flexCenter flex-col text-left boxshadow h-[585px] mt-[-150px] bg-white py-[34px] px-8 text-[20px] leading-[28px] text-coldGray max-w-[327px] md:max-w-[540px] md:px-[48px] md:py-[50px] md:h-[545px] md:mt-[-200px] xl:absolute xl:h-[560px] xl:top-[-150px] xl:right-0"
        >
          {/* name */}
          <input type="text" id="name" placeholder="Name" required />

          {/* email */}
          <input type="email" id="email" placeholder="Email" required className="mt-[34px]" />

          {/* date */}
          <div className="mt-[34px] w-[100%] md:flex md:items-center">
            <p className="mb-2 md:mb-0 md:w-[30%]">Pick a date</p>
            <div className="flexBetween md:w-[70%]">
              <input type="number" id="month" placeholder="MM" min="1" max="12" required className="mr-[14px]" />
              <input type="number" id="day" placeholder="DD" min="1" max="31" required className="mr-[14px]" />
              <input type="number" id="year" placeholder="YYYY" min="2023" required />
            </div>
          </div>

          {/* time */}
          <div className="mt-[34px] w-[100%] md:flex md:items-center">
            <p className="mb-2  md:mb-0 md:w-[30%]">Pick a time</p>
            <div className="flexStart md:w-[70%]">
              <input type="number" id="hour" placeholder="09" min="1" max="12" required className="mr-[14px]" />
              <input type="number" id="minute" placeholder="00" min="0" max="55" step="5" required className="mr-[14px]" />
              <select defaultValue="AM" className="bg-arrow">
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>

          {/* people */}
          <div className="mt-[34px] flexBetween w-full font-bold px-4 border-b-[1px] border-b-[#979797] pb-[14px]">
            <button className="text-beaver cursor-pointer" id="minus">
              -
            </button>
            <p>
              <span id="people">4</span> people
            </p>
            <button className="text-beaver cursor-pointer" id="add">
              +
            </button>
          </div>

          {/* submit */}
          <input type="submit" value="MAKE RESERVATION" className="form-cta cta-dark mt-[34px]" />
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
