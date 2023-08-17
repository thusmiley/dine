import React from 'react'
import logo from "../assets/logo.svg";


const Footer = () => {
  return (
    <footer className="bg-coldGray">
      <div className="w-container px-cx mx-auto text-center flexCenter flex-col py-20 md:py-[66px] md:flex-row md:justify-start md:items-start xl:py-[78px]">
        <img src={logo} alt="logo" className="w-[82.4px] mb-[42px] md:w-[103px]" />
        <div className='md:text-left md:ml-[130px] lg:ml-[260px] xl:flex'>
          <div className='xl:mr-[260px]'>
            <p className="footer-font">
              Marthwaite, Sedbergh <br />
              Cumbria
            </p>
            <p className="footer-font">+00 44 123 4567</p>
          </div>

          <div className='mt-8 xl:mt-0'>
            <p className="footer-font">OPEN TIMES</p>
            <p className="footer-font">MON - FRI: 09:00 AM - 10:00 PM</p>
            <p className="footer-font">SAT - SUN: 09:00 AM - 11:30 PM</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer