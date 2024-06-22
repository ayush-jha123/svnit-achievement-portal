import React, { useEffect, useState } from "react";
import Graph from "./Dashboard/Graph";
import Catalog from "./Dashboard/Catalog";

const Dashboard = () => {

  return (
    <div className="p-8 w-full mt-12">
      <h1 className="heading text-3xl font-bold mb-4">Dashboard</h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex w-full justify-between">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-2">Total Achievements</h2>
            <p className="text-3xl">a.length</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-2">Total Oppertunity</h2>
            <p className="text-3xl">0.length</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-2">Total Users</h2>
            <p className="text-3xl">total user length</p>
          </div>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg col-span-2">
          <div>
            <Graph />
            <br />
            <Catalog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
