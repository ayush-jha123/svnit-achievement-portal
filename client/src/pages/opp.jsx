import React from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card_opp';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Footer from '../components/Footer'
import { sanity } from '../sanity';

const Oppertunity = () => {
  const [tag, setTag] = useState(null)
  const [oppertunity, setOppertunity] = useState([]);
  const [filterOppertunity, setFilterOppertunity] = useState([]);
  const [update, setUpdate] = useState(false)
  useEffect(() => {
    const skillsQuery ='*[_type=="oppertunities"]  | order(_createdAt desc)';
    sanity.fetch(skillsQuery).then((data) => {
      setOppertunity(data);
      setFilterOppertunity(data)
    })
  }, [update])
  //  console.log(oppertunity);

  useEffect(() => {
    // console.log(tag)
    if (tag) {
      const filteredOppertunity = oppertunity.filter((opp) => opp.tags === tag);
      setFilterOppertunity(filteredOppertunity)
    }
  }, [tag])

  const handleSetTag = (newTag) => {
    setTag(newTag);
  };
  const toggle = () => {
    setUpdate(!update)
  }
  return (
    <div>
      <div className=" mt-20 w-full min-h-screen bg-[url('/assets/AchivementPageBG.svg')] bg-contain bg-no-repeat bg-top mb-0">
        <div className="text-4xl bg-transparent flex justify-evenly mb-3">
          <h1>Opportunities</h1>
        </div>
        <div className="flex p-[2vw] -mt-[2%]">
          <Sidebar handler={handleSetTag} />
          <div>
            <div className="flex flex-wrap gap-5 -mt-[2vh] ml-5">
              {filterOppertunity.map((oppertunity) => (
                <div className=''>
                  <Card key={oppertunity?._id} oppertunity={oppertunity} onUpdate={toggle} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[-3%] text-lg ml-[80%] mb-3">
          <Link to={"/opportunities"}>
            <button>
              <u>View more</u>
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    </div>

  );
};

export default Oppertunity;
