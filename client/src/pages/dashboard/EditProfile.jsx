import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashSide from './DashSide.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { signInFailure, signInSuccess } from '../../redux/user/userSlice.js';
import { useRef } from 'react';
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage';
import {app} from '../../firebase';

export default function EditProfile() {
  const fileRef=useRef();
  const [image,setImage]=useState(undefined);
  const [imagePercent,setImagePercent]=useState(0);
  const [imageError,setIamgeError]=useState(false);
  const {currentUser}=useSelector(state=>state.user);
  const [formData,setFormData]=useState(currentUser);
  const navigate=useNavigate();
  console.log(formData)
  const dispatch=useDispatch();
  const handleChange=(e)=>{
     setFormData({...formData,[e.target.name]:e.target.value})
  }

  useEffect(()=>{
    if(image){
      handleFileUpload(image);
    }
  },[image]);

  const handleFileUpload=async (image)=>{
    const storage=getStorage(app);
    const fileName=new Date().getTime()+ image.name;
    const storageRef=ref(storage,fileName);
    const uploadTask=uploadBytesResumable(storageRef,image);
    uploadTask.on('state_changed',(snapshot)=>{
      const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100; 
      setImagePercent(Math.round(progress));
    },
    (error)=>{
      setIamgeError(true);
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
          setFormData({...formData,profilePicture:downloadURL});
      })
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // add proxy at vite.config
    try {
      // dispatch(signInStart());
      const res=await fetch('/user/update',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      });
      const data=await res.json();
      dispatch(signInSuccess(data));
      navigate('/Dashboard')
      
      console.log(data);
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
  return (
    <div className="grid grid-flow-col grid-cols-auto mt-12 gap-2">
      <DashSide />
      <div className="flex-col col-span-2 md:col-span-3 mx-auto w-11/12 md:w-3/4 lg:w-2/3">
        <div className='flex justify-between'>
          <header className="bg-transparent">
            <div className="max-w-7xl mx-auto py-6">
              <h1 className="text-3xl font-bold text-gray-900">Edit Profile</h1>
            </div>
          </header>
        </div>
        <form>
          <div >
            <input
              type="file"
              id="avatar"
              ref={fileRef}
              name="profilePicture"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={e=>setImage(e.target.files[0])}
              hidden
            />
            <div className='flex justify-center h-[153px]'>
            <img
              className="icon w-36 h-36 mb-[-3.25rem] z-10 rounded-full border-4 border-white shadow-lg"
              src={formData.profilePicture}
              alt=""
              style={{ width: "150px", height: "150px" }}
              onClick={()=>fileRef.current.click()}
            />
            </div>
            <p className='text-sm text-center'>
              {imageError?(
                <span className='text-red-700'>Error uploading image(file size must be less than 2MB)</span>
              ):imagePercent>0 && imagePercent<100 ?(
                  <span className='text-slate-700'>{`uploading:${imagePercent} %`}</span>
              ):imagePercent===100?(
                <span className='text-green-700'>Image Uploaded successfully</span>
              ):('')}
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData?.name}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="degree">
              Degree
            </label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={formData?.degree}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
              Department
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData?.department}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dateOfBirth"
              value={formData?.dateOfBirth}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              LinkedIn Profile
            </label>
            <input
              type="email"
              id="email"
              name="linkedIn"
              value={formData.linkedIn}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSubmit}
            >
              Save Changes
            </button>
            <Link to="/dashside">
              <button
                type="button"
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Go to Dashboard
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
