import React from "react";
import enjoymobile from "../../assets/homepage/enjoyable-place-mobile.jpg";
import enjoytablet from "../../assets/homepage/enjoyable-place-tablet.jpg";
import enjoytabletx2 from "../../assets/homepage/enjoyable-place-tablet@2x.jpg";
import enjoydesktop from "../../assets/homepage/enjoyable-place-desktop.jpg";
import localfoodmobile from "../../assets/homepage/locally-sourced-mobile.jpg";
import localfoodtablet from "../../assets/homepage/locally-sourced-tablet.jpg";
import localfoodtabletx2 from "../../assets/homepage/locally-sourced-tablet@2x.jpg";
import localfooddesktop from "../../assets/homepage/locally-sourced-desktop.jpg";
import divider from "../../assets/patterns/pattern-divide.svg";
import lines from "../../assets/patterns/pattern-lines.svg";

const Features = () => {
  return (
    <section className="mt-[-60px] sm:mt-[-80px] lg:mt-[-100px] xl:mt-[-60px] features-bg">
      <div className="w-container px-cx mx-auto flexCenter flex-col text-center mb-[100px] md:mb-[118px] xl:flex-row xl:justify-between xl:text-left xl:mb-[121px]">
        <picture className="">
          <source media="(max-width: 680px)" srcset={enjoymobile} />
          <source media="(max-width: 1024px)" srcset={enjoytablet} />
          <source media="(max-width: 1200px)" srcset={enjoytabletx2} />
          <source media="(min-width: 1201px)" srcset={enjoydesktop} />
          <img src={enjoymobile} className="boxshadow xl:mb-[-180px]" />
        </picture>

        <div className="xl:ml-[125px]">
          <img src={divider} alt="divider" className="mt-[48px] mb-9 mx-auto xl:mx-0" />
          <h2 className="heading2 xl:mt-[55px]">
            Enjoyable place
            <br /> for all the family
          </h2>
          <p className="paragraph description mt-[13px] md:mt-[27px]">
            Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </div>

      <div className="w-container px-cx mx-auto flexCenter flex-col text-center pb-[100px] md:pb-[118px] xl:flex-row-reverse xl:justify-between xl:text-left">
        <picture className="">
          <source media="(max-width: 680px)" srcset={localfoodmobile} />
          <source media="(max-width: 1024px)" srcset={localfoodtablet} />
          <source media="(max-width: 1200px)" srcset={localfoodtabletx2} />
          <source media="(min-width: 1201px)" srcset={localfooddesktop} />
          <img src={localfoodmobile} alt="locally sourced food" className="boxshadow xl:mb-[-180px]" />
        </picture>
        <div className="relative xl:mr-[125px] ">
          <img src={lines} alt="pattern" className="hidden md:block absolute top-[-120px] right-[-120px] xl:top-[70%] xl:right-[-170%]" />
          <img src={divider} alt="divider" className="mt-[48px] mb-9 mx-auto xl:mx-0" />
          <h2 className="heading2 xl:mt-[55px]">
            The most locally
            <br /> sourced food
          </h2>
          <p className="paragraph description mt-[13px] md:mt-[27px]">
            All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
