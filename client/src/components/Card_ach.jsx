import React, { useEffect, useState } from "react";
import batman from "../../public/assets/forgot.png";
import { MdDelete } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiFillLike } from "react-icons/ai";
import { sanity } from "../sanity";
import { Typography } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateAchievements } from "../redux/posts/postSlice";

const CardAchievements = ({ achievement}) => {
  const { currentUser } = useSelector((state) => state.user);
  const [likeToggle, setLikeToggle] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const dispatch=useDispatch();

  const likeadded = () => toast("Like Added successfully");
  const likeremoved = () => toast("Like removed successfully");
  const deleted = () => toast("Deleted Successfully");
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
        dispatch(updateAchievements(response));
        setLikeToggle(!likeToggle); // Update local state first
        {
          likeToggle
            ? setLikeCount(likeCount - 1)
            : setLikeCount(likeCount + 1);
          { likeToggle ? likeremoved() : likeadded() }
        }
      })
      .catch((error) => {
        console.error("Error updating achievement:", error);
      });
  };


  useEffect(() => {
    if (achievement?.like && achievement?.like.includes(currentUser?._id)) {
      setLikeToggle(true);
    }
    if (achievement?.like) {
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
        deleted();
      })
      .catch((error) => {
        console.error("Error deleting achievement:", error);
      });
      onUpdate();
  };
  console.log(achievement?.like?.length);
  console.log(likeCount);
  return (
    <div className="bg-white rounded-xl shadow-lg m-7 p-0 h-auto w-full max-w-md flex flex-col">
      <div className="bar flex items-center h-16 bg-[#9ed8ff] rounded-t-xl p-4 text-lg">
        <div className="rounded-full overflow-hidden w-20 h-20 bg-cover bg-center mr-2">
          <img className="w-full h-full" src={currentUser?.profilePicture} />
        </div>
        <Link to={`/Ach_card_details/${achievement?._id}`}>
          <span className="uppercase font-semibold">{achievement?.title}</span>
        </Link>
      </div>
      <p className="mt-3 mx-5 hover:no-underline">Posted by: {achievement?.postedby}</p>
      <div className="ml-4 mt-2 text-base flex-grow">
        <p id="font" className="mb-2">
          <b>Name: </b>
          {achievement?.body}
        </p>
        <p id="font" className="mb-2">
          <b>Date: </b>
          {achievement?.date}
        </p>
        <p id="font" className="mb-2">
          <b>Achievement: </b> {achievement?.description}{" "}
        </p>
      </div>
      {/* <a id='view'>View more</a> */}
      <div className="flex justify-between items-center mx-4">
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
