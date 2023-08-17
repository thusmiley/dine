import React from "react";
import logo from "../../assets/logo.svg";

const Hero = () => {
  return (
    <section className="bg-home">
      <div className="w-container px-cx mx-auto pt-[120px] text-[#fff] text-center flexCenter flex-col min-h-[784px] sm:pt-[170px] sm:min-h-[950px] lg:min-h-[1200px] xl:min-h-[820px] lg:pt-[250px] xl:pt-[65px] xl:text-left xl:justify-start xl:items-start">
        <img src={logo} alt="logo" className="w-[82.4px] md:w-[103px] mb-[38px]" />
        <h1 className="heading1 xl:mt-[153px]">
          Exquisite dining <br />
          since 1989
        </h1>
        <p className="paragraph description mt-[21px] mb-[57px] xl:mt-[10px] xl:mb-10">
          Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.
        </p>
        <a href="/booking" className="pb-[152px] cta cta-dark">
          BOOK A TABLE
        </a>
      </div>
    </section>
  );
};

export default Hero;
