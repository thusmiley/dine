import React from "react";

const CTA = () => {
  return (
    <section className="cta-bg">
      <div className="w-container px-cx mx-auto text-center min-h-[328px] text-white flexCenter flex-col md:min-h-[272px] xl:min-h-[240px] xl:flex-row xl:justify-between">
        <h2 className="heading2">Ready to make a reservation?</h2>
        <a href="/booking" className="cta cta-dark mt-5 md:mt-6 xl:mt-0">
          BOOK A TABLE
        </a>
      </div>
    </section>
  );
};

export default CTA;
