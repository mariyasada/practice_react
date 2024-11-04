import React from "react";
import style1 from "../styles/LandingPage.module.css";
import LeftsidebarImage from "../svgs/LeftsidebarImage";
import HeartImage from "../svgs/HeartImage";
import { services } from "../constants";
import RightbarImage from "../svgs/RightbarImage";
import BackgroundFrame from "../svgs/BackgroundFrame";
import LeadingHealthCare from "../svgs/LeadingHealthCare";
import { FaArrowDownLong } from "react-icons/fa6";
import AppsImage from "../svgs/AppsImage";

const LandingPage = () => {
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
    </div>
  );
};

export default LandingPage;
