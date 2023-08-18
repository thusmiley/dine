import React from "react";
import familymobile from "../../assets/homepage/family-gathering-mobile.jpg";
import familytablet from "../../assets/homepage/family-gathering-tablet.jpg";
import familydesktop from "../../assets/homepage/family-gathering-desktop.jpg";
import specialmobile from "../../assets/homepage/special-events-mobile.jpg";
import specialtablet from "../../assets/homepage/special-events-tablet.jpg";
import specialdesktop from "../../assets/homepage/special-events-desktop.jpg";
import socialmobile from "../../assets/homepage/social-events-mobile.jpg";
import socialtablet from "../../assets/homepage/social-events-tablet.jpg";
import socialdesktop from "../../assets/homepage/social-events-desktop.jpg";
import lines from "../../assets/patterns/pattern-lines.svg";

const Events = () => {
  const handleClick = (e) => {
    const btns = Array.from(document.querySelectorAll(".tab"));
    const familyTab = document.querySelector(".family");
    const specialTab = document.querySelector(".special");
    const socialTab = document.querySelector(".social");
    const familyCard = document.getElementById("family");
    const specialCard = document.getElementById("special");
    const socialCard = document.getElementById("social");

    if (e.target.classList.contains("family")) {
      // show/hide active state of the event buttons
      specialTab.classList.remove("active");
      socialTab.classList.remove("active");
      familyTab.classList.add("active");
      // show/hide event card's info: heading, description, image, divider
      specialCard.classList.add("hide-event");
      socialCard.classList.add("hide-event");
      familyCard.classList.remove("hide-event");
    }

    if (e.target.classList.contains("special")) {
      // show/hide active state of the event buttons
      specialTab.classList.add("active");
      socialTab.classList.remove("active");
      familyTab.classList.remove("active");
      // show/hide event card's info: heading, description, image, divider
      specialCard.classList.remove("hide-event");
      socialCard.classList.add("hide-event");
      familyCard.classList.add("hide-event");
    }

    if (e.target.classList.contains("social")) {
      // show/hide active state of the event buttons
      specialTab.classList.remove("active");
      socialTab.classList.add("active");
      familyTab.classList.remove("active");
      // show/hide event card's info: heading, description, image, divider
      specialCard.classList.add("hide-event");
      socialCard.classList.remove("hide-event");
      familyCard.classList.add("hide-event");
    }
  };

  return (
    <section className="events-bg transition-all duration-500">
      <div className="w-container px-cx mx-auto flexCenter flex-col text-center pt-[520px] mb-[124px] relative md:pt-[550px] xl:flex-col-reverse xl:text-left xl:pt-[160px] xl:mb-[160px]">
        <div className="md:flex md:justify-between md:items-center xl:flex-col xl:justify-start xl:absolute xl:left-[58.8%] xl:top-[75%]">
          <div className="relative h-[28px] w-[326px] mx-auto md:h-[36px] md:w-[223px] md:mx-0">
            <button className="heading4 tab active family" onClick={handleClick}>
              FAMILY GATHERING
            </button>
          </div>
          <div className="relative my-4 h-[28px] w-[326px] mx-auto md:h-[36px] md:w-[223px] md:mx-0">
            <button className="heading4 tab special" onClick={handleClick}>
              SPECIAL EVENTS
            </button>
          </div>
          <div className="relative h-[28px] w-[326px] mx-auto md:h-[36px] md:w-[223px] md:mx-0">
            <button className="heading4 tab social" onClick={handleClick}>
              SOCIAL EVENTS
            </button>
          </div>
        </div>

        {/* family gathering */}
        <div id="family">
          <div className="xl:flex">
            <img src={lines} alt="pattern" className="hidden md:block md:absolute md:top-[85px] md:left-[2%] md:z-10 xl:top-[130px] xl:left-[-30px]" />
            <picture className="img-active absolute top-20 md:top-[120px] left-0 right-0 xl:relative xl:top-0 xl:mr-[125px]">
              <source media="(max-width: 680px)" srcset={familymobile} />
              <source media="(max-width: 1200px)" srcset={familytablet} />
              <source media="(min-width: 1201px)" srcset={familydesktop} />
              <img src={familymobile} alt="family gathering" className="boxshadow mx-auto xl:mx-0" />
            </picture>
            <div>
              <h2 className="heading2 mt-[27px]">Family Gathering</h2>
              <p className="paragraph description mt-[13px] mb-[40px] md:mt-[19px] md:mb-[60px]">
                We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.
              </p>
              <a href="/booking" className="cta cta-light">
                BOOK A TABLE
              </a>
            </div>
          </div>
        </div>

        {/* special events */}
        <div id="special" className="hide-event">
          <div className="xl:flex">
            <img src={lines} alt="pattern" className="hidden md:block md:absolute md:top-[85px] md:left-[2%] md:z-10 xl:top-[130px] xl:left-[-30px]" />
            <picture className="img-active absolute top-20 md:top-[120px] left-0 right-0 xl:relative xl:top-0 xl:mr-[125px]">
              <source media="(max-width: 680px)" srcset={specialmobile} />
              <source media="(max-width: 1200px)" srcset={specialtablet} />
              <source media="(min-width: 1201px)" srcset={specialdesktop} />
              <img src={specialmobile} alt="special events" className="imgBoxshadow mx-auto xl:mx-0" />
            </picture>
            <div>
              <h2 className="heading2 mt-[27px]">Special Events</h2>
              <p className="paragraph description mt-[13px] mb-[40px] md:mt-[19px] md:mb-[60px]">
                Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable
                meal.
              </p>
              <a href="/booking" className="cta  cta-light">
                BOOK A TABLE
              </a>
            </div>
          </div>
        </div>

        {/* social events */}
        <div id="social" className="hide-event">
          <div className="xl:flex">
            <img src={lines} alt="pattern" className="hidden md:block md:absolute md:top-[85px] md:left-[2%] md:z-10 xl:top-[130px] xl:left-[-30px]" />
            <picture className="img-active absolute top-20 md:top-[120px] left-0 right-0 xl:relative xl:top-0 xl:mr-[125px]">
              <source media="(max-width: 680px)" srcset={socialmobile} />
              <source media="(max-width: 1200px)" srcset={socialtablet} />
              <source media="(min-width: 1201px)" srcset={socialdesktop} />
              <img src={socialmobile} alt="social events" className="imgBoxshadow mx-auto xl:mx-0" />
            </picture>
            <div>
              <h2 className="heading2 mt-[27px]">Social Events</h2>
              <p className="paragraph description mt-[13px] mb-[40px]">
                Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with
                everyone.
              </p>
              <a href="/booking" className="cta  cta-light">
                BOOK A TABLE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
