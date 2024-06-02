import React, { useEffect, useState } from "react";
import Graph from "./Dashboard/Graph";
import Catalog from "./Dashboard/Catalog";
import { sanity } from "../../sanity";

const Dashboard = () => {
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [achievement, setAchievements] = useState([]);
  const [oppertunities, setOppertunities] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type=="achievement"]';
    sanity.fetch(skillsQuery).then((data) => {
      setAchievements(data);
    });
  }, []);
  console.log(achievement);

  useEffect(() => {
    const skillsQuery = '*[_type=="oppertunities"]';
    sanity.fetch(skillsQuery).then((data) => {
      setOppertunities(data);
    });
  }, []);
  console.log(oppertunities);

  const fetchUsers = async () => {
    fetch("/user/fetch").then((res) => {
      res.json().then((users) => {
        // console.log(users)
        setTotalUsers(users.length);
      });
    });
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-8 w-full">
      <h1 className="heading text-3xl font-bold mb-4">Dashboard</h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex w-full justify-between">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-2">Total Achievements</h2>
            <p className="text-3xl">{achievement?.length}</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-2">Total Oppertunity</h2>
            <p className="text-3xl">{oppertunities?.length}</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-2">Total Users</h2>
            <p className="text-3xl">{totalUsers}</p>
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
