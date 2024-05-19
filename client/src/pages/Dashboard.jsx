import React, { useEffect, useState } from "react";
import svnitIcon3 from "../../public/assets/Ellipse 12.png";
import Navbar from "../components/Navbar";
import DashSide from "./dashboard/DashSide";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { urlFor } from "../sanity";
export default function Dashboard() {
  const [credentials, setCredentials] = useState({});
  const {currentUser} = useSelector((state) => state.user);
  console.log(currentUser)
  useEffect(() => {
    setCredentials(currentUser);
  }, [currentUser]);
 
  return (
    <div>
      {/* <Navbar /> */}
      {credentials?(
        <div className="boddy">
          <div className="column1">
            <img
              className="icon"
              src={svnitIcon3}
              alt=""
              style={{ width: "150px", height: "150px" }}
            />
            <DashSide />
          </div>
          <div className="column2">
            <div className="coll">
              <div className="firstline">
                <div className="details">{credentials.name}</div>
                <div className="ver">verified</div>
              </div>
              <div className="secondline">{credentials.rollno}</div>
            </div>
            <div className="thirdline">
              <div className="bd">
                Date of Birth <div>02 Jan 2005</div>
              </div>
              <div className="deg">
                Degree <div>{credentials.degree}</div>
              </div>
            </div>
            <div className="fourthline">
              <div className="email">
                Institute Email <div>{credentials.userid}</div>
              </div>
              <div className="dep">
                Department <div>{credentials.department}</div>
              </div>
            </div>
            <div className="fifthline">
              <div className="pem">
                {" "}
                Personal Email <div>{credentials.email}</div>
              </div>
            </div>
          </div>
        </div>
      ):<div>Please Login to see your dashboard</div>}
    </div>
  );
}
