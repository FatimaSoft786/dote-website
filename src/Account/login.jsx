
import { useNavigate } from "react-router-dom";
import React, { useRef,useEffect,useState } from 'react'
import { LinearProgress } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "../constant/BaseUrl";


const Login = ({ setIsLoggedIn }) => {

  const [showProgress, setShowProgress] = useState(false)
  const [progress, setProgress] = useState(20)

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/register");
  };

  const navigateToForgot = () => {
    navigate("/forgot");
  };
  const navigateToDashboard = () => {
    navigate("/sidebar");
    handleLogin();
  };

  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };


  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    } 
    return errors;
  };


  const STUDENT_LOGIN = "/studentLogin";

  const studentLogin = async () => {
    setProgress(50)
    setShowProgress(true) 
    try {
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };
      setProgress(70)
       await axios
        .post(
          STUDENT_LOGIN,
          {
            email: formValues.email,
            password: formValues.password
          },
          headers
        )
        .then(response => {
          if(response.status === 200){
            console.log(response.data.token);
            setShowProgress(false) 
            setProgress(100)
          }else{
            console.error("Error retreiving:",response.status);
          }
         
        })
        .catch(error => {
          setProgress(0)
          setShowProgress(false)
          console.error('Error retrieving response:',error.message);
        });
       
    } catch (error) {
      setProgress(0)
          setShowProgress(false)
          console.error('Error retrieving data:', error.status);
    }
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className=" lg:w-1/3 sm:w-full md:w-1/2 h-auto rounded-xl shadow-md shadow-primary items-center mt-60">

      {showProgress ?
      <div className=" h-0.5 rounded-tl-xl rounded-tr-lg mx-0.5">
      <Box sx={{ width: '100%', color: '#FF0000'}}>
   <LinearProgress color='inherit'  />
</Box>
      </div> : null
     
      }
        <h2 className="mt-5 text-center text-3xl font-bold text-primary">
          Login
        </h2>

        <form
          className="mt-8 space-y-3 lg:mx-20 sm:mx-4"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="text"
                value={formValues.email}
                autoComplete="email"
                onChange={handleChange}
                required
                className="appearance-none rounded relative bg-white block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-primary focus:bg-white focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
          </div>
          <span className=" w-full h-auto text-primary font-light text-xs leading-none">{formErrors.email}</span>

          <div className=" rounded-md shadow-sm">
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formValues.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                className="appearance-none rounded relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-primary focus:bg-white focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <span className=" w-full h-auto text-primary font-light text-xs leading-none">{formErrors.password}</span>

          <div className=" flex flex-row items-end justify-end lg:mx-0 sm:mx-4 mt-2">
          <div className="text-sm items-end">
            <span
              className="font-medium text-primary hover:text-primary cursor-pointer"
              onClick={navigateToForgot}
            >
              Forgot your password?
            </span>
          </div>
        </div>
  
        <button type="submit" onClick={()=>{
            //  studentLogin()
            navigateToDashboard()
   

        }} className=" text-lg leading-none font-medium flex justify-center w-full h-auto py-3.5 hover:bg-transparent hover:text-primary bg-primary text-white">Login </button>
      
        </form>

        <div className=" flex justify-center flex-row lg:mx-20 sm:mx-4 mt-2 mb-5">
          <span className=" font-regular font-poppins text-black text-sm items-center">
            Don't have an account?
          </span>
          <span
            className=" text-primary font-poppins font-medium text-lg leading-none cursor-pointer"
            onClick={navigateToRegister}
          >
            SignUp
          </span>
        </div>
      </div>
    </div>
  );
};
export default Login;


