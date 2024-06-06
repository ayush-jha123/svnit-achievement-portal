import Card from "../../components/Card_opp.jsx";
import CardAchievements from "../../components/Card_ach.jsx";
import Footer from "../../components/Footer.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { sanity } from "../../sanity.js";
import { ToastContainer, toast } from "react-toastify";

export default function Main() {
  const [achievements, setAchievements] = useState([]);
  const [oppertunity, setOppertunity] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const skillsQuery = '*[_type=="achievement"]';
    sanity.fetch(skillsQuery).then((data) => {
      setAchievements(data);
    });
  }, [update]);

  useEffect(() => {
    const skillsQuery = '*[_type=="oppertunities"]';
    sanity.fetch(skillsQuery).then((data) => {
      setOppertunity(data);
    });
  }, [update]);

  const toggle = () => {
    setUpdate(!update);
  };

  console.log(achievements);

  return (
    <div className="min-h-screen bg-gray-100 mt-16">
      <div className="text-center text-5xl">
        SARDAR VALLABHBHAI NATIONAL INSTITUTE OF TECHNOLOGY
      </div>
      <div className="text-center text-3xl mb-5">SURAT</div>
      <div className="text-center text-4xl font-bold">ACHIEVEMENT PORTAL</div>
      <div className="flex flex-col md:flex-row items-center justify-center mb-12">
        <div className="w-full md:w-2/3 flex justify-center">
          <img src="./assets/homepage.jpg" alt="" className="w-2/3 md:w-3/4 h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-full text-center md:text-left px-4">
          <p className="text-gray-800 text-4xl mb-4">Achievement through effort or skill</p>
          <p className="text-gray-800 text-lg">
            It's possible this refers to a particular writing instruction or activity, like sorting
            persuasive paragraphs based on the strength of their arguments. In such cases the specific
            instructions would outline the sorting criteria and expected outcome.
          </p>
        </div>
      </div>
      <div className="text-center text-4xl text-gray-700 mb-4">RECENT</div>
      <div className="text-center text-3xl font-bold text-gray-800 mb-12">Achievements</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 place-items-center">
        {achievements.map((achievement) => (
          <CardAchievements
            key={achievement._id}
            achievement={achievement}
            onUpdate={toggle}
          />
        ))}
      </div>
      <div className="text-center mb-12">
        <Link to="/Achivements" className="text-black bg-gray-400 hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out px-4 py-2 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          View More
        </Link>

      </div>
      <div className="text-center text-3xl font-bold text-gray-800 mb-12">Opportunities</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 place-items-center">
        {oppertunity.map((oppertunity) => (
          <div key={oppertunity._id} className="">
            <Card
              oppertunity={oppertunity}
              onUpdate={toggle}
            />
          </div>
        ))}
      </div>
      <div className="text-center mb-12">
        <Link to={"/Opportunities"} className="text-black bg-gray-400 hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out px-4 py-2 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          View More
        </Link>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
