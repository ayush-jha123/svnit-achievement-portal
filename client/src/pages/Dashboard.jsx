import React, { useEffect, useState } from "react";
import DashSide from "./dashboard/DashSide";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { urlFor } from "../sanity";
import moment from "moment";
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
      <div className="flex flex-col md:flex-row justify-around items-center bg-[#0d2445] shadow-lg p-6 md:p-8 rounded-lg">
        <div className="w-full md:w-1/3 flex flex-col items-center mb-6 md:mb-0">
          <img
            className="w-36 h-36 rounded-full border-4 border-white shadow-lg"
            src={credentials.profilePicture}
            alt=""
            style={{ width: "150px", height: "150px" }}
          />
          <DashSide />
        </div>
        <div className="w-full md:w-2/3 flex flex-col bg-[#0d2445] px-6 pb-6 rounded-lg">
          <div className="w-full bg-gradient-to-b from-transparent to-black/25 shadow-lg px-6 pb-6 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
              <div className="text-4xl md:text-5xl font-semibold leading-snug md:leading-[4.5625rem] text-[#75b7e5]">
                {credentials.name}
              </div>
              <div className="bg-[#d0e3f2]/[0.23] rounded-md px-3 text-xs text-white mt-2 md:mt-0">Verified</div>
            </div>
            <div className="text-3xl md:text-4xl font-semibold leading-snug md:leading-[3.25rem] text-[#d0e3f2] mt-2">{credentials.rollno}</div>
          </div>
          <div className="w-full mb-8">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="text-3xl font-semibold leading-tight text-[#75b7e5]">
                Personal Email 
                <div className="text-xl font-normal leading-tight text-[#d2e5f3]">{credentials.email}</div>
              </div>
              <div className="text-3xl font-semibold leading-tight text-[#75b7e5] mt-4 md:mt-0">
                Department 
                <div className="text-xl font-normal leading-tight text-[#d2e5f3]">{credentials.department}</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-4">
              <div className="text-3xl font-semibold leading-tight text-[#75b7e5]">
                Date of Birth 
                <div className="text-xl font-normal leading-tight text-[#d2e5f3]">{moment(credentials.dateOfBirth).utc().format('YYYY-MM-DD')}</div>
              </div>
              <div className="text-3xl font-semibold leading-tight text-[#75b7e5] mt-4 md:mt-0">
                Degree 
                <div className="text-xl font-normal leading-tight text-[#d2e5f3]">{credentials.degree}</div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="text-2xl font-semibold leading-tight text-[#75b7e5]">
                LinkedIn 
                <div className="text-xl font-normal leading-tight text-[#d2e5f3]">{credentials.linkedIn}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="text-center text-xl text-red-600">Please Login to see your dashboard</div>
    )}
  </div>
  

  );
}
