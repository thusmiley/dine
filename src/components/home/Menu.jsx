import React from "react";
import divider from "../../assets/patterns/pattern-divide.svg";
import line from "../../assets/patterns/line.png";
import salmonmobile from "../../assets/homepage/salmon-mobile.jpg";
import salmontablet from "../../assets/homepage/salmon-desktop-tablet.jpg";
import salmondesktop from "../../assets/homepage/salmon-desktop-tablet@2x.jpg";
import beefmobile from "../../assets/homepage/beef-mobile.jpg";
import beeftablet from "../../assets/homepage/beef-desktop-tablet.jpg";
import beefdesktop from "../../assets/homepage/beef-desktop-tablet@2x.jpg";
import chocomobile from "../../assets/homepage/chocolate-mobile.jpg";
import chocotablet from "../../assets/homepage/chocolate-desktop-tablet.jpg";
import chocodesktop from "../../assets/homepage/chocolate-desktop-tablet@2x.jpg";

function Menu() {
  return (
    <section className="bg-coldGray text-white">
      <div className="w-container px-cx mx-auto pt-[72px] md:pt-[96px] pb-[102px] md:pb-[96px] text-center flexCenter flex-col xl:flex-row xl:justify-start xl:pt-[180px] xl:pb-[120px] xl:text-left">
        <div className="xl:mr-[80px]">
          <img src={divider} alt="divider" className="mx-auto xl:mx-0" />
          <h2 className="mt-9 heading2 xl:mt-[55px]">
            A few highlights from <br className="xl:hidden" />
            our menu
          </h2>
          <p className="paragraph description mt-[13px] md:mt-[27px]">
            We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.
          </p>
        </div>
        <div>
          {/* salmon */}
          <div>
            <div className="mt-[85px] border-b border-[#979797] pb-[54px] md:mt-[54px] md:flex md:justify-start md:items-center md:text-left md:pb-6">
              <picture>
                <source media="(max-width: 680px)" srcset={salmonmobile} />
                <source media="(max-width: 1024px)" srcset={salmontablet} />
                <source media="(min-width: 1025px)" srcset={salmondesktop} />
                <img src={salmonmobile} alt="salmon" className="mx-auto md:w-[160px]" />
              </picture>
              <img src={line} alt="line" className="hidden md:block md:mt-[-65px]" />
              <div className="md:ml-[30px]">
                <h3 className="heading3 mt-9 md:mt-0">Seared Salmon Fillet</h3>
                <p className="paragraph description mt-[13px] md:mt-[6px]">Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
              </div>
            </div>
          </div>
          {/* beef */}
          <div>
            <div className="mt-6 border-b border-[#979797] pb-[54px] md:pb-6 md:text-left md:flex md:justify-start md:items-center">
              <picture>
                <source media="(max-width: 680px)" srcset={beefmobile} />
                <source media="(max-width: 1024px)" srcset={beeftablet} />
                <source media="(min-width: 1025px)" srcset={beefdesktop} />
                <img src={beefmobile} alt="beef" className="mx-auto md:w-[160px]" />
              </picture>
              <img src={line} alt="line" className="hidden md:block md:mt-[-65px]" />
              <div className="md:ml-[30px]">
                <h3 className="heading3 mt-9 md:mt-0">Rosemary Filet Mignon</h3>
                <p className="paragraph description mt-[13px]">Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
              </div>
            </div>
          </div>
          {/* mousse */}
          <div>
            <div className="mt-6 md:flex md:justify-start md:items-center  md:text-left">
              <picture>
                <source media="(max-width: 680px)" srcset={chocomobile} />
                <source media="(max-width: 1024px)" srcset={chocotablet} />
                <source media="(min-width: 1025px)" srcset={chocodesktop} />
                <img src={chocomobile} alt="chocolate mousse" className="mx-auto md:w-[160px]" />
              </picture>
              <img src={line} alt="line" className="hidden md:block md:mt-[-65px]" />
              <div className="md:ml-[30px]">
                <h3 className="heading3 mt-9 md:mt-0">Summer Fruit Chocolate Mousse</h3>
                <p className="paragraph description mt-[13px]">Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
