import React from 'react'
import {GoogleAuthProvider,signInWithPopup,getAuth} from "@firebase/auth"
import { app } from '../../firebase';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/userSlice";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleGoogleClick=async ()=>{
       try {
          const provider=new GoogleAuthProvider();
          const auth=getAuth(app)
          const result=await signInWithPopup(auth,provider)
          console.log(result)
          dispatch(signInStart());
          const res=await fetch('https://svnit-achievement-portal-2.onrender.com/user/google',{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify({
              name:result.user.displayName,
              email:result.user.email,
              photo:result.user.photoURL,
            })
          })
          const data=await res.json();
          console.log('bhai')
          console.log(data)
          dispatch(signInSuccess(data));
          navigate('/Dashboard');
       } catch (error) {
        console.log("Couldn't signin with google")
       }
  }

  return (
    <button type='button'onClick={handleGoogleClick} className='bg-red-700 rounded-lg p-2 text-white uppercase hover:opacity-95 w-full'>Continue With Google</button>
  )
}

export default OAuth