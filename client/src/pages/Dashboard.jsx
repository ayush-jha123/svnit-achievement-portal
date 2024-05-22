import React, { useEffect, useState } from "react";
import svnitIcon3 from "../../public/assets/Ellipse 12.png";
import DashSide from "./dashboard/DashSide";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { urlFor } from "../sanity";
export default function Dashboard() {
  const [credentials, setCredentials] = useState({});
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser)
  useEffect(() => {
    setCredentials(currentUser);
  }, [currentUser]);

  return (
    <div className="mt-16">
      {credentials ? (
        <div className="flex justify-around items-center bg-[#0d2445] shadow-lg p-6 pb-3">
          <div className="w-1/3 relative right-30 rounded-lg flex flex-col items-center">
            <img
              className="icon w-36 h-36 mb-[-3.25rem] z-10 rounded-full border-4 border-white shadow-lg"
              src={svnitIcon3}
              alt=""
              style={{ width: "150px", height: "150px" }}
            />
            <DashSide />
          </div>
          <div className="w-2/3 flex flex-col items-center bg-[#0d2445] p-2 rounded-lg">
            <div className="w-full bg-gradient-to-b from-transparent to-black/25 shadow-lg p-6 rounded-lg mb-4">
              <div className="flex items-center justify-between w-full">
                <div className="details text-5xl font-normal leading-[4.5625rem] text-[#75b7e5] ">{credentials.name}</div>
                <div className="bg-[#d0e3f2]/[0.23] rounded-md px-3 text-xs">verified</div>
              </div>
              <div className="text-4xl font-normal leading-[3.25rem] text-[#d0e3f2] mt-2">{credentials.rollno}</div>
            </div>
            <div className="flex justify-between w-full mb-10">
              <div className="text-2xl font-normal leading-tight text-[#75b7e5]">
                Date of Birth <div className="text-xl font-normal leading-tight text-[#d2e5f3]">02 Jan 2005</div>
              </div>
              <div className="deg text-2xl font-normal leading-tight text-[#75b7e5]">
                Degree <div className="text-xl font-normal leading-tight text-[#d2e5f3]">{credentials.degree}</div>
              </div>
            </div>
            <div className="flex justify-between w-full mb-7">
              <div className="email text-2xl font-normal leading-tight text-[#75b7e5]">
                Institute Email <div className="text-xl font-normal leading-tight text-[#d2e5f3]">{credentials.userid}</div>
              </div>
              <div className="dep text-2xl font-normal leading-tight text-[#75b7e5] ml-auto">
                Department <div className="text-xl font-normal leading-tight text-[#d2e5f3]">{credentials.department}</div>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="pem text-2xl font-normal leading-tight text-[#75b7e5]">
                {" "}
                Personal Email <div className="text-xl font-normal leading-tight text-[#d2e5f3]">{credentials.email}</div>
              </div>
            </div>
          </div>
        </div>
      ) : <div className="text-center text-xl text-red-600">Please Login to see your dashboard</div>}
    </div>
  );
}
