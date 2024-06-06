import { Link } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { sanity } from "../sanity";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function CardItem({ oppertunity, onUpdate }) {
  // console.log("oppn");
  // console.log(oppertunity);
  const [likeToggle, setLikeToggle] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const { currentUser } = useSelector(state => state.user);
  const handleLike = () => {
    const updateQuery = oppertunity?._id;
    let newLikeArray = [];
    if (Array.isArray(oppertunity?.like)) {
      if (likeToggle) {
        newLikeArray = oppertunity?.like.filter(
          (userId) => userId !== currentUser?._id
        ); // Remove current user ID
      } else {
        newLikeArray = [...oppertunity?.like, currentUser?._id]; // Add current user ID
      }
    } else {
      newLikeArray = likeToggle ? [] : [currentUser?._id];
    }

    sanity
      .patch(updateQuery)
      .set({ like: newLikeArray })
      .commit()
      .then((response) => {
        console.log("Oppertunity updated successfully:", response);
        setLikeToggle(!likeToggle); // Update local state first
        { likeToggle ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1) }
      })
      .catch((error) => {
        console.error("Error updating oppertunity:", error);
      });

    onUpdate()
  };

  const handleDelete = () => {
    // const deleteQuery = `*[_id == "${achievement._id}"]`;
    const deleteQuery = oppertunity?._id;
    sanity
      .delete(deleteQuery)
      .then((response) => {
        console.log("Oppertunity deleted successfully:", response);
      })
      .catch((error) => {
        console.error("Error deleting oppertunity:", error);
      });
  };

  useEffect(() => {
    if (oppertunity?.like && oppertunity?.like.includes(currentUser?._id)) {
      setLikeToggle(true);
    }
    setLikeCount(oppertunity?.like?.length);
  }, [oppertunity, currentUser]);

  return (
    <div className="mt-6 w-80 shadow-md rounded-md bg-slate-100 p-4">
      <div className="flex justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mb-4 h-12 w-12 text-gray-900"
        >
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clipRule="evenodd"
          />
          <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
        <div className="flex items-center gap-2">
          <h3>{likeCount}</h3>
          <button onClick={handleLike}>
            {likeToggle ? (
              <FaHeart className="text-red-500 text-2xl" />
            ) : (
              <IoIosHeartEmpty className="text-2xl" />
            )}
          </button>
        </div>
      </div>
      <h5 className="mb-2 mx-5 font-semibold uppercase text-blue-gray-700">
        {oppertunity?.title}
      </h5>
      <p className="mb-2 mx-5">
        <b>Posted for: </b> {oppertunity?.participants}
      </p>
      <p className="mb-2 mx-5">
        <b>Apply Link: </b> {oppertunity?.applylink}
      </p>
      <p className="mb-2 mx-5">
        <b>Date: </b> {oppertunity?.openingdate} : {oppertunity?.closingdate}
      </p>
      <p className="mb-2 mx-5">
        <b>Description: </b>{oppertunity?.description}
      </p>
      <div className="pt-0 flex justify-between mx-5">
        <Link to={`/Opp_card_details/${oppertunity?._id}`}>
          <button className="flex items-center gap-2 text-blue-500">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </Link>
        <button onClick={handleDelete}>
          <MdDeleteOutline className="text-2xl text-red-500" />
        </button>
      </div>
    </div>
  );
}
