import "./Home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Stack } from "@mui/material";
import { MdScience } from "react-icons/md";
import { AiFillMobile, AiOutlineWifi } from "react-icons/ai";
import { BiSolidLayer, BiSolidPhoneCall } from "react-icons/bi";
import { BsFillPuzzleFill, BsLaptop, BsBoxArrowInUpRight, BsThreeDotsVertical } from "react-icons/bs";
import { RiIncreaseDecreaseFill } from "react-icons/ri";

function Home() {


  function clickHandler(val) {
    setShow(val);
  }


  const [show, setShow] = useState(0)
  const [users, setUsers] = useState([])
  const fetchInfo = async () => {
    try {
      await axios.get('http://localhost:8080/api/user/allUser').then((res) => {
        // console.log("Ayush",res.data)
        fetchInfoByID(res.data[0].id)
        setUsers(res.data);
      });
    } catch {
      window.alert("Error 404 page not found")
      console.log();
    }
  }
  const [userById, setUserById] = useState({
    name: "",
    device: "",
    phone: "",
    pid: "",
    plan: {
      name: "",
      price: ""
    }
  });
  const fetchInfoByID = async (value) => {
    try {
      await axios.get(`http://localhost:8080/api/user/userById/${value}`).then((res) => {
        // console.log("AyushbyId",res.data)
        setUserById(res.data);
      });
    } catch {
      window.alert("Error 404 page not found")
      console.log();
    }
  }
  useEffect(() => {
    fetchInfo();
  }, [])

  var currId;
  const handle = (e) => {
    console.log(e.target.value)
    currId = e.target.value;
    fetchInfoByID(e.target.value);

  }

  console.log(users);
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
              <RiIncreaseDecreaseFill />
            </div>
            <div className="justicon">
              <BsBoxArrowInUpRight />
            </div>
          </div>
        </div>
        <div className="tabs">
          <div className="p-sview-icons-mobile-selected">
            <div className="icon-circle" onClick={(e)=>clickHandler(0)}>
              <div className="iconsize">
                <AiFillMobile />
              </div>
            </div>
          </div>
          <div className="p-sview-icons-mobile-selected">
            <div className="icon-circle" onClick={(e)=>clickHandler(1)}>
              <div className="iconsize">
                <AiOutlineWifi />
              </div>
            </div>
          </div>
          <div className="p-sview-icons-mobile-selected">
            <div className="icon-circle" onClick={(e)=>clickHandler(2)}>
              <div className="iconsize">
                <BiSolidPhoneCall />
              </div>
            </div>
          </div>
          <div className="p-sview-icons-mobile-selected">
            <div className="icon-circle" onClick={(e)=>clickHandler(3)}>
              <div className="iconsize">
                <BsLaptop />
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle"></div>

        {show==0 &&
        <div className="container">
          <select className="subscription-dropdown" onChange={handle}>
            {
              users.length > 0 && users.map((curUser, index) => {
                return <option key={index} value={curUser.id}>{<AiFillMobile /> }{curUser.phone} | {curUser.name}</option>
              })

            }
          </select>
          <div className="price">
            <div className="firstDiv">
              <div className="indicators-tags-default">Active</div>
              <div className="thisprice">${userById.plan.price}</div>
            </div>
            <div className="secondDiv">
              <icon>
                <BsThreeDotsVertical />
              </icon>
              <icon>
                <BsBoxArrowInUpRight />
              </icon>
            </div>
          </div>
          <div className="group">
            <icon>
              <BiSolidLayer />
            </icon>
            <span className="grp-des">{userById.plan.name}</span>
            <span className="grp-action" onClick={clickHandler}>
              <u>Change</u>
            </span>
          </div>
          <div className="group">
            <icon>
              <AiFillMobile />
            </icon>
            <span className="grp-des">{userById.device}</span>
            <span className="grp-action" onClick={clickHandler}>
              <u>Upgrade</u>
            </span>
          </div>
          <div className="group">
            <icon>
              <BsFillPuzzleFill />
            </icon>
            <span className="grp-des">Add-ons(5)</span>
            <span className="grp-action" onClick={clickHandler}>
              <u>Manage</u>
            </span>
          </div>
        </div>
      }
      {show==1 && <h3 className="diiii">Coming soon!</h3>}
      {show==2 && <h3 className="diiii">Coming soon!</h3>}
      {show==3 && <h3 className="diiii">Coming soon!</h3>}
      </div>
          
    </div>
          
  );
}

export default Home;
