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
      userid:user.currentUser._id,
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
      {/* <Navbar /> */}
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6" id="addAcv">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                   <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Oppertunity Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Achievement Title"
                      onChange={handleChange}
                    />
                  </div>

                   <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      For Whom
                    </label>
                    <input
                      type="text"
                      name="participants"
                      id="participants"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Achievement Title"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                     Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Achievement Title"
                      onChange={handleChange}
                    />
                  </div>

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
                      Closing Date
                    </label>
                    <input
                      type="date"
                      name="closingdate"
                      id="Date"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Apply Link
                    </label>
                    <input
                      type="text"
                      name="applylink"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Achievement Title"
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
