import React from "react";
import newsIllustration from "../assets/newsdash-illustration.png";
import customStyle from "../StyleSheets/Styles.module.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <div className={`${customStyle.containdiv} ${customStyle.containdivbg}`}>
        <img
          src={newsIllustration}
          alt="Illustration"
          className={customStyle.illusimg}
        />
        <p className={customStyle.appTitle}>NewsDash</p>
        <p className={customStyle.appDesc}>
          Hello! This is my personal React.js skill improvement project. I'm
          working on a news app to enhance my proficiency in React.js. Through
          this project, I'm exploring different aspects of building a news app.
        </p>
        <Link to="/tell-name" className={customStyle.linkclass}>
          <div className={customStyle.divwrap}>
            <button className={customStyle.goBtn}>
              <span>GO!</span>
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Welcome;
