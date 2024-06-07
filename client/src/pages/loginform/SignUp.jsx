import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import {
  signUpStart,
  signUpSuccess,
  signUpFailure,
} from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "./OAuth";

export default function SignUp() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  // const [error, setError] = useState();
  // const [loading, setLoading] = useState();
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    // add proxy at vite.config
    dispatch(signUpStart())
    const res = await fetch("https://svnit-achievement-portal-2.onrender.com/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
    if (data?.token?.length) {
      dispatch(signUpSuccess(data.result));
    } else{
      dispatch(signUpFailure(data))
      return;
    } 
    navigate("/Dashboard");
  };

  return (
    <Card
      color="transparent"
      className="justify-center items-center"
      style={{ width: "430px" }}
    >
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            name="name"
            size="lg"
            placeholder="Your Name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            onChange={handleChange}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
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

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Confirm Password
          </Typography>
          <Input
            name="confirmPassword"
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
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to={'signin'}>
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
