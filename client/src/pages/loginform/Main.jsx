import './Main.css'
import {sanity} from '../../sanity';
import React,{useState,useEffect} from 'react';
import { useDispatch} from "react-redux";
import { signInSuccess } from '../../redux/user/userSlice';
import {useNavigate} from 'react-router-dom';

export default function Main (){
    const [user,setUser]=useState([]); 
    const [formData,setFormData]=useState({userid:'',password:''});
    const dispatch=useDispatch();
    const navigate=useNavigate();
     useEffect(() => {
        const skillsQuery='*[_type=="user"]';
        sanity.fetch(skillsQuery).then((data)=>{
         setUser(data);
        })
       }, [])
    console.log(user);
    
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
       const data=user.find((u)=>(u.userid==formData.userid && u.password==formData.password) && u );
       console.log(data);
       dispatch(signInSuccess(data));
       navigate('/Dashboard');
    }

    return(
        <div className="main">
            <div className="content-1">
                <h2 style = {{color : "#1e2530", padding : "10px", fontSize : "2em", position :"relative", zIndex : "1"} }>Achievement Portal</h2>
                <h4 style = {{color : "#1e2530", padding : "10px", fontSize : "2em", position :"relative", zIndex : "1"}}>Login</h4>
                <h4 style= {{position: "absolute", left : "10px", fontSize : "1.5em", color : "#1e2530", bottom : "0px", zIndex : "1"}}>HOME</h4>
                <img src="./assets/forgot.png" alt="" className='image' />
            </div>
            <div className="content-2">
                <div className="intro" >It's possible this refers to a particular writing criteria and expected outcome.
                </div>
                <div className='INPUT'>
                    <div className="input-box">
                    <input type="text" name='userid' onChange={handleChange} placeholder='Email or User Id:' className='email'/>
                    <input type="text" name='password' onChange={handleChange} placeholder='Password' className='password' />
                    </div> 
                </div>
                <div className="signin">
                    <button onClick={handleSubmit} className='sign'>Sign In</button>
                </div>
            </div>
        </div>
    );
}