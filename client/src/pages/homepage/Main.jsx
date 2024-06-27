import Card from "../../components/Card_opp.jsx";
import CardAchievements from "../../components/Card_ach.jsx";
import Footer from "../../components/Footer.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { sanity } from "../../sanity.js";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createAchievements, createOppertunities } from "../../redux/posts/postSlice.js";

export default function Main() {
  // const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();
  const { achievements, oppertunities } = useSelector(state => state.post);
  const [visAch, setVisAch] = useState(achievements.slice(0, 3));
  const [visOpp, setVisOpp] = useState(oppertunities.slice(0, 3));
  useEffect(() => {
    const skillsQuery = '*[_type=="achievement"]  | order(_createdAt desc)';
    sanity.fetch(skillsQuery).then((data) => {
      console.log(data);
      dispatch(createAchievements(data));
    });
  }, []);

  useEffect(() => {
    const skillsQuery = '*[_type=="oppertunities"]  | order(_createdAt desc)';
    sanity.fetch(skillsQuery).then((data) => {
      dispatch(createOppertunities(data));
    });
  }, []);


  return (
    <div className="min-h-screen bg-gray-100 mt-16">
      <div className="text-center sm:text-3xl text-1.6rem font-semibold">
        SARDAR VALLABHBHAI <br />NATIONAL INSTITUTE OF TECHNOLOGY
      </div>
      <div className="text-center sm:text-3xl text-1.6rem mb-5 mt-2 font-semibold">SURAT</div>
      <div className="text-center sm:text-4xl text-1.6rem mb-5 font-medium text-white bg-[#00A3FF]">ACHIEVEMENT PORTAL</div>
      <center>
      <div className="">
      <div className="w-full flex justify-center p-[6vh]">
  <img 
    src="./assets/image.png" 
    alt="Homepage Image" 
    className="w-full md:w-[1600px] h-auto md:h-[500px] rounded-sm shadow-lg" 
  />
</div>

        <div className="w-full md:w-full text-center px-4 mt-20" >
          <p className="text-gray-800 text-4xl mb-4" >Achievement through effort or skill</p>
          <p className="text-gray-800 text-lg">
            It's possible this refers to a particular writing instruction or activity, like sorting
            persuasive paragraphs based on the strength of their arguments. In such cases the specific
            instructions would outline the sorting criteria and expected outcome.
          </p>
        </div>
      </div>
      </center>
      <div className="text-center text-4xl text-white bg-[#00A3FF] mb-4 mt-16">RECENT ACHIEVEMENT</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 place-items-center">
        {visAch.map((achievement) => (
          <CardAchievements
            key={achievement?._id}
            achievement={achievement}
          />
        ))}
      </div>
      <div className="text-center mb-12">
        <Link to="/Achivements" className="text-white font-bold bg-[#00A3FF] hover:bg-white hover:text-[#00A3FF]  hover:font-bold transition duration-300 ease-in-out px-4 py-2 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          View More
        </Link>

      </div>
      <div className="text-center text-3xl font-bold text-white bg-[#00A3FF] mb-12">OPPORTUNITIES</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 place-items-center">
        {visOpp.map((oppertunity) => (
          <div key={oppertunity?._id} className="">
            <Card
              oppertunity={oppertunity}
            />
          </div>
        ))}
      </div>
      <div className="text-center mb-12">
        <Link to={"/Opportunities"} className="text-white font-bold bg-[#00A3FF] hover:bg-white hover:text-[#00A3FF]  hover:font-bold transition duration-300 ease-in-out px-4 py-2 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          View More
        </Link>
      </div>
      
      <Footer />
      <ToastContainer />
    </div>
  );
}

