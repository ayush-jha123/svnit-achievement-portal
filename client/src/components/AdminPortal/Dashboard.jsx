import React, { useEffect, useState } from 'react';
import Graph from './Dashboard/Graph'
import Catalog from './Dashboard/Catalog'

const Dashboard = () => {
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    // Fetch total posts and total users from your backend
    fetch('https://your-api-url/posts')
      .then((response) => response.json())
      .then((data) => setTotalPosts(data.totalPosts));

    fetch('https://your-api-url/users')
      .then((response) => response.json())
      .then((data) => setTotalUsers(data.totalUsers));
  }, []);

  return (
    <div className="p-8">
      <h1 className="heading text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-xl font-bold mb-2">Total Posts</h2>
          <p className="text-3xl">{totalPosts}</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-xl font-bold mb-2">Total Users</h2>
          <p className="text-3xl">{totalUsers}</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg col-span-2">
          <div>
            <Graph />
            <br />
            <Catalog /></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;