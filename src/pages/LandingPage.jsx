import React, { useEffect, useState } from "react";
import style1 from "../styles/LandingPage.module.css";
import LeftsidebarImage from "../svgs/LeftsidebarImage";
import HeartImage from "../svgs/HeartImage";
import { carouselData, services } from "../constants";
import RightbarImage from "../svgs/RightbarImage";
import BackgroundFrame from "../svgs/BackgroundFrame";
import LeadingHealthCare from "../svgs/LeadingHealthCare";
import { FaArrowDownLong } from "react-icons/fa6";
import AppsImage from "../svgs/AppsImage";
import Rightdots from "../svgs/Rightdots";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { GoDot, GoDotFill } from "react-icons/go";

const LandingPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselData.length]);

  const nextClickHandler = () => {
    if (activeIndex === carouselData.length - 1) {
      setActiveIndex(0);
    }
    setActiveIndex((prev) => prev + 1);
  };
  const previousClickHandler = () => {
    if (activeIndex === 0) {
      setActiveIndex(carouselData.length - 1);
    }
    setActiveIndex((prev) => prev - 1);
  };
  console.log(activeIndex, "check index");

  return (
    <div className={style1.landingpage}>
      <div className={style1.headerDiv}>
        <nav className={style1.topnavbar}>
          <div className={style1.logonav}>
            <div>T</div>
            <span>Trafalgar</span>
          </div>
          <div className={style1.rightmenu}>
            {["Home", "Find a doctor", "Apps", "Testimonials", "About us"].map(
              (navitem) => (
                <span
                  key={navitem}
                  style={{ fontWeight: navitem === "Home" && "bold" }}
                >
                  {navitem}
                </span>
              )
            )}
          </div>
        </nav>
        <div className={style1.leftsideicon}>
          <LeftsidebarImage />
        </div>
        <div className={style1.headerImageDiv}>
          {/* virtualtext div */}
          <div className={style1.headerText}>
            <h4>Virtual healthcare for you</h4>
            <p>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <button>Consult today</button>
          </div>
          {/* healthcare image */}
          <div style={{ marginLeft: "2rem" }}>
            <HeartImage />
          </div>
        </div>
      </div>
      {/* Our service div */}
      <div className={style1.serviceDiv}>
        <div className={style1.titlediv}>
          <h4>Our Services</h4>
          <div className={style1.underline}></div>
          <p>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>
        <div className={style1.diffService}>
          {services?.map(({ Icon, name, text }) => {
            return (
              <div className={style1.card}>
                <div>
                  <div>{<Icon />}</div>
                  <h5 className={style1.servicename}>{name}</h5>
                  <p className={style1.servicetext}>{text}</p>
                </div>
              </div>
            );
          })}
          <div className={style1.servicedots}>
            <RightbarImage />
          </div>
          <div className={style1.bgFrame}>
            <BackgroundFrame />
          </div>
        </div>
        <div className={style1.buttondiv}>
          <button className={style1.learnmoreBtn}>Learn more</button>
        </div>
      </div>
      {/*  leading healthcare provider */}
      <div className={style1.healthcareDiv}>
        <div className={style1.healthcareImage}>
          <LeadingHealthCare />
        </div>
        <div className={style1.detailsDiv} style={{ position: "relative" }}>
          <h4>Leading healthcare providers</h4>
          <span
            className={style1.underline}
            style={{ top: "37%", left: "0%" }}
          ></span>
          <p className={style1.healthcareText}>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <button className={style1.learnmoreBtn}>Learn more</button>
        </div>
      </div>
      {/*  download our mobile apps */}
      <div
        className={style1.healthcareDiv}
        style={{
          flexDirection: "row-reverse",
          width: "85%",
        }}
      >
        <div className={style1.healthcareImage}>
          <AppsImage />
        </div>
        <div className={style1.detailsDiv} style={{ position: "relative" }}>
          <h4 style={{ width: "254px" }}>Download our mobile apps</h4>
          <span
            className={style1.underline}
            style={{ top: "37%", left: "0%" }}
          ></span>
          <p className={style1.healthcareText}>
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <button className={style1.learnmoreBtn}>
            Download <FaArrowDownLong />
          </button>
        </div>
      </div>
      {/*  gradient wala div */}
      <div className={style1.gradientDiv}>
        <div className={style1.innerDiv} style={{ position: "relative" }}>
          <h4>What our customer are saying</h4>
          <span
            className={style1.underline}
            style={{ top: "25%", left: "47%", border: "2px solid white" }}
          ></span>
          {carouselData?.map(
            (data, index) =>
              activeIndex === index && (
                <div className={`${style1.testimonialDetails}`} key={data.name}>
                  <div className={style1.imageDiv}>
                    <div>
                      <img src={data.img} alt="client_image" />
                    </div>
                    <div className={style1.details}>
                      <span className={style1.founder}>{data.name}</span>
                      <span className={style1.designation}>
                        {data.designation}
                      </span>
                    </div>
                  </div>
                  <div className={style1.detailsclient}>
                    <p>{data.text}</p>
                  </div>
                </div>
              )
          )}
          <div style={{ top: "2.5%", position: "absolute", right: "-4.8%" }}>
            <Rightdots />
          </div>
          <div
            style={{
              bottom: "10%",
              position: "absolute",
              left: "-6%",
              zIndex: "-3",
            }}
          >
            <LeftsidebarImage />
          </div>
        </div>
        <div className={style1.navigation}>
          <FaArrowLeftLong
            style={{
              marginRight: "3rem",
              opacity: activeIndex === 0 && "0.4",
              cursor: activeIndex === 0 && "not-allowed",
            }}
            onClick={activeIndex !== 0 ? previousClickHandler : () => null}
          />
          {[0, 1, 2, 3].map((number) => {
            return number === activeIndex ? (
              <GoDotFill key={number} />
            ) : (
              <GoDot key={number} />
            );
          })}
          <FaArrowRightLong
            style={{
              marginLeft: "3rem",
              opacity: activeIndex === carouselData.length - 1 && "0.4",
              cursor: activeIndex === carouselData.length - 1 && "not-allowed",
            }}
            onClick={
              activeIndex !== carouselData.length - 1
                ? nextClickHandler
                : () => null
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
