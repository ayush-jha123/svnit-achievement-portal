import React, { useEffect, useState } from "react";
import "./Card_ach.css";
import batman from "../../public/assets/bat.jpeg";
import { MdDelete } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiFillLike } from "react-icons/ai";
import { sanity } from "../sanity";
import { Typography } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardAchievements = ({ achievement, onUpdate }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [likeToggle, setLikeToggle] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  
  const likeadded = () => toast("Like Added successfully");
  const likeremoved = () => toast("Like removed successfully");
  const handlelike = () => {
    const updateQuery = achievement?._id;
    let newLikeArray = [];
    if (Array.isArray(achievement?.like)) {
      if (likeToggle) {
        newLikeArray = achievement?.like.filter(
          (userId) => userId !== currentUser?._id
        ); // Remove current user ID
      } else {
        newLikeArray = [...achievement?.like, currentUser?._id]; // Add current user ID
      }
    } else {
      newLikeArray = likeToggle ? [] : [currentUser?._id];
    }

    sanity
      .patch(updateQuery)
      .set({ like: newLikeArray })
      .commit()
      .then((response) => {
        console.log("Achievement updated successfully:", response);
        setLikeToggle(!likeToggle); // Update local state first
        {
          likeToggle
            ? setLikeCount(likeCount - 1)
            : setLikeCount(likeCount + 1);
            {likeToggle?likeremoved():likeadded()}
        }
      })
      .catch((error) => {
        console.error("Error updating achievement:", error);
      });
      onUpdate();
  };


  useEffect(() => {
    if (achievement?.like && achievement?.like.includes(currentUser?._id)) {
      setLikeToggle(true);
    }
    if(achievement?.like){
      setLikeCount(achievement?.like?.length);
    }
  }, [achievement, currentUser]);

  const handledelete = () => {
    // const deleteQuery = `*[_id == "${achievement._id}"]`;
    const deleteQuery = achievement?._id;
    sanity
      .delete(deleteQuery)
      .then((response) => {
        console.log("Achievement deleted successfully:", response);
        onUpdate()
      })
      .catch((error) => {
        console.error("Error deleting achievement:", error);
      });
  };
  console.log(achievement?.like?.length);
  console.log(likeCount);
  return (
    <div className="card4">
      <div className="bar">
        <div className="photo2">
          <img className="image3" src={batman} />
        </div>
        <Link to={`/Ach_card_details/${achievement?._id}`}>
          <span>{achievement?.title}</span>
        </Link>
      </div>
      <p className="mt-3 mx-5">Posted By:{achievement?.postedby}</p>
      <div className="card_info">
        <p id="font">
          <b>Name: </b>
          {achievement?.body}
        </p>
        <p id="font">
          <b>Date: </b>
          {achievement?.date}
        </p>
        <p id="font">
          <b>Achievement :</b> {achievement?.description}{" "}
        </p>
      </div>
      {/* <a id='view'>View more</a> */}
      <div className="flex justify-between">
        <div style={{ display: "flex", gap: "4px" }}>
          <button onClick={handlelike}>
            {likeToggle ? <AiFillLike /> : <AiOutlineLike />}
          </button>
          <p>{likeCount}</p>
        </div>
        <button onClick={handledelete}>
          {currentUser?._id === achievement?.userid ? <MdDelete /> : ""}
        </button>
      </div>
    </div>
  );
};

export default CardAchievements;
