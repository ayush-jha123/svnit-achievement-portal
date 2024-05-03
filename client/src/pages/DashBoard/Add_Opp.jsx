import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { sanity } from "../../sanity";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Add_Ach() {
  const [formData, setFormData] = useState({});
  const user=useSelector(state=>state.user)
  console.log(user.currentUser.name)
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const achieve = {
      _type: "oppertunities",
      postedby:user.currentUser.name,
      title: formData.title,
      participants: formData.participants,
      description: formData.description,
      applylink: formData.applylink,
      openingdate: formData.openingdate,
      closingdate: formData.closingdate,
    };

    sanity
      .create(achieve )
      .then(() => {
        navigate('/Opportunities', { replace: true })
      })
      .catch((err) => console.log(err));
    
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6" id="addAcv">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="achievementTitle"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Opportunities Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="achievementTitle"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="achievementTitle"
                      className="block text-sm font-medium text-gray-700"
                    >
                      ForWhom
                    </label>
                    <input
                      type="text"
                      name="participants"
                      id="achievementTitle"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="Description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <p className="mt-2 text-sm text-gray-500">
                      (Write a description about your opportunities)
                    </p>
                    <div className="mt-1">
                      <textarea
                        id="Description"
                        name="description"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder=""
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/*Date input */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="Date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Opening date/Tenure
                    </label>
                    <input
                      type="date"
                      name="openingdate"
                      id="Date"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="Date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      End date/Tenure
                    </label>
                    <input
                      type="date"
                      name="closingdate"
                      id="Date"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                      Apply Link
                    </label>
                     <input
                         type="email"
                         name="applylink"
                         id="Email"
                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                         onChange={handleChange}
                     />
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
