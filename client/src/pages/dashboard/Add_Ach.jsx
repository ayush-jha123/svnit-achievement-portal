import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useDropzone } from "react-dropzone";
import { sanity } from "../../sanity";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Add_Ach() {
  const [formData, setFormData] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const toggle = useSelector((state) => state.post);
  const navigate = useNavigate();

  const onDropImage = useCallback((acceptedFiles) => {
    setImageFile(acceptedFiles[0]);
    setFormData({ ...formData, imageurl: acceptedFiles[0] });
  }, [formData]);

  const { getRootProps: getImageRootProps, getInputProps: getImageInputProps } = useDropzone({
    onDrop: onDropImage,
    accept: 'image/*',
    maxSize: 10485760, // 10MB
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const achieve = {
      _type: "achievement",
      postedby: currentUser?.name,
      userid: currentUser?.userid,
      userPicture: currentUser?.profilePicture,
      title: formData.title,
      body: formData.body,
      description: formData.description,
      date: formData.date,
      accredation: formData.accredation,
      achievementdetails: formData.achievementdetails,
      tags: formData.tags,
    };
    console.log(achieve);
    sanity
      .create(achieve)
      .then(() => {
        navigate("/Achivements", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-3 md:gap-6" id="addAcv">
          <div className="md:col-span-3">
            <h2 className="text-lg font-medium leading-6 text-gray-900">Add Achievement</h2>
            <p className="mt-1 text-sm text-gray-600">
              Fill out the form below to add a new achievement.
            </p>
          </div>
          <div className="md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">

                  <div>
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Achievement Title
                    </label>
                    <input required
                      type="text"
                      name="title"
                      id="title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Achievement Title"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="body"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Recognizing Body
                    </label>
                    <input required
                      type="text"
                      name="body"
                      id="body"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Recognizing Body"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="tags"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tags
                    </label>
                    <div className="w-72">
                      <select required
                        id="tags"
                        name="tags"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleChange}
                      >
                        <option value="" disabled selected>
                          Select a tag
                        </option>
                        <option value="Placement">Placement</option>
                        <option value="Academics">Academics</option>
                        <option value="Extracurricular">Extracurricular</option>
                        <option value="StartUp">StartUp</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Description
                    </label>
                    <textarea required
                      name="description"
                      id="description"
                      rows="3"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write description within 100 words"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date of Achievement
                    </label>
                    <input required
                      type="date"
                      name="date"
                      id="date"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>
                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Document of Accreditation
                    </label>
                    <div
                      {...getImageRootProps()}
                      className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
                    >
                      <input {...getImageInputProps()} />
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                    {imageFile && (
                      <div className="mt-2">
                        <img
                          src={URL.createObjectURL(imageFile)}
                          alt="Uploaded cover"
                          className="h-20 w-auto"
                        />
                      </div>
                    )}
                  </div> */}
                  <p className="text-lg">AchievementDetails</p>
                  <ReactQuill theme="snow" onChange={(data) => setRecipe({ ...formData, achievementdetails: data })} className="w-full" />
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
