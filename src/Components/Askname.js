import React from "react";
import customStyle from "../StyleSheets/Styles.module.css";
import mainImg from "../assets/ask-name-img.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Askname() {
  const [userName, setUserName] = useState("");

  function saveValue(event) {
    setUserName(event.target.value);
  }

  let content;

  if (userName === "") {
    content = (
      <div className={customStyle.divwrap}>
        <button className={customStyle.goBtnasknamedisabled}>
          <span>Done</span>
        </button>
      </div>
    );
  } else {
    content = (
      <Link to={`/Home/${userName}`} className={customStyle.linkclass}>
        <div className={customStyle.divwrap}>
          <button className={customStyle.goBtnaskname}>
            <span>Done</span>
          </button>
        </div>
      </Link>
    );
  }

  return (
    <>
      <div className={customStyle.containdiv}>
        <img className={customStyle.mainimg} src={mainImg} alt="Main Img" />
        <p className={customStyle.titletext}>What should we call you?</p>
        <p className={customStyle.subtitletext}>
          Please provide your name below
        </p>
        <input
          type="text"
          className={customStyle.nametaker}
          placeholder="Enter Your Name"
          onChange={saveValue}
        />
        {content}
      </div>
    </>
  );
}

export default Askname;
