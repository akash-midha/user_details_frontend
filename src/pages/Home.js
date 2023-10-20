import "./Home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Stack } from "@mui/material";
import { MdScience } from "react-icons/md";
import { AiFillMobile, AiOutlineWifi } from "react-icons/ai";
import { BiSolidLayer, BiSolidPhoneCall } from "react-icons/bi";
import { BsFillPuzzleFill, BsLaptop } from "react-icons/bs";

function Home() {
  function clickHandler() {
    alert("Div clicked!");
  }

  const [users, setUsers] = useState([]);
  return (
    <div className="wrapper">
      <div className="p-s rectangle-copy-5">
        <div className="header">
          <div className="products">Products</div>
          <div className="icons">
            <div className="justicon">
              <MdScience />
            </div>
            <div className="justicon">
              <MdScience />
            </div>
            <div className="justicon">
              <MdScience />
            </div>
          </div>
        </div>
        <div className="tabs">
          <div className="p-sview-icons-mobile-selected">
            <div className="icon-circle" onClick={clickHandler}>
              <div className="iconsize">
                <AiFillMobile />
              </div>
            </div>
          </div>
          <div className="p-sview-icons-mobile-selected">
            <div className="icon-circle" onClick={clickHandler}>
              <div className="iconsize">
                <AiOutlineWifi />
              </div>
            </div>
          </div>
          <div className="p-sview-icons-mobile-selected">
            <div className="icon-circle" onClick={clickHandler}>
              <div className="iconsize">
                <BiSolidPhoneCall />
              </div>
            </div>
          </div>
          <div className="p-sview-icons-mobile-selected">
            <div className="icon-circle" onClick={clickHandler}>
              <div className="iconsize">
                <BsLaptop />
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle"></div>

        <select className="subscription-dropdown">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="cherry">Cherry</option>
          <option value="grape">Grape</option>
          <option value="orange">Orange</option>
        </select>

        <div className="price">
          <div className="firstDiv">
            <div className="indicators-tags-default">Active</div>
            <div className="thisprice">$35.5</div>
          </div>
          <div className="secondDiv">
            <icon>
              <BiSolidLayer />
            </icon>
            <icon>
              <BiSolidLayer />
            </icon>
          </div>
        </div>
        <div className="group">
          <icon>
            <BiSolidLayer />
          </icon>
          <span className="grp-des">Silver Mobile Plan Name</span>
          <span className="grp-action" onClick={clickHandler}>
            Change
          </span>
        </div>
        <div className="group">
          <icon>
            <AiFillMobile />
          </icon>
          <span className="grp-des">Silver Mobile Plan Name</span>
          <span className="grp-action" onClick={clickHandler}>
            Change
          </span>
        </div>
        <div className="group">
          <icon>
            <BsFillPuzzleFill />
          </icon>
          <span className="grp-des">Silver Mobile Plan Name</span>
          <span className="grp-action" onClick={clickHandler}>
            Change
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
