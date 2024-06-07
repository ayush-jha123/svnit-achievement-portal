import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { useState } from "react";
  import {
    signInStart,
    signInSuccess,
    signInFailure,
  } from "../../redux/user/userSlice";
  import { useDispatch } from "react-redux";
  import { Link, useNavigate } from "react-router-dom";
import OAuth from "./OAuth";
  
  export default function SignIn() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});
    // const [error, setError] = useState();
    // const [loading, setLoading] = useState();
    const navigate=useNavigate();
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // add proxy at vite.config
      try {
        dispatch(signInStart());
        const res=await fetch('https://svnit-achievement-portal-2.onrender.com/user/signin',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify(formData),
        });
        const data=await res.json();
        if(data?.token?.length){
            dispatch(signInSuccess(data.result));
            navigate('/Dashboard')
        }else{
          dispatch(signInFailure(data))
          return;
        }
      } catch (error) {
        dispatch(signInFailure(error));
      }
    };
  
    return (
     <div className="w-screen flex justify-center mt-40">
      <Card
        color="transparent"
        className="justify-center items-center"
        style={{ width: "430px" }}

      >
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to Login.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              name="email"
              size="lg"
              placeholder="name@mail.com"
              onChange={handleChange}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              name="password"
              type="password"
              size="lg"
              placeholder="********"
              onChange={handleChange}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <OAuth/>
          <Button className="mt-6 bg-black" fullWidth onClick={handleSubmit}>
            sign in
          </Button>
        </form>
      </Card>
      </div>
    );
  }
  