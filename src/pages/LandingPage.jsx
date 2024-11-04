import React from "react";
import style1 from "../styles/LandingPage.module.css";
import LeftsidebarImage from "../svgs/LeftsidebarImage";
import HeartImage from "../svgs/HeartImage";

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
    </div>
  );
};

export default LandingPage;
