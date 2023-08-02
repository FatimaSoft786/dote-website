import React from "react";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const navigate = useNavigate();

  const navigateToReset = () => {
    navigate("/reset");
  };
    

    return (
        <div className="w-full h-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className=" lg:w-1/3 sm:w-full md:w-1/2 h-auto rounded-xl shadow-md shadow-primary items-center mt-60">
            <h2 className="mt-5 text-center text-3xl font-bold text-primary">
              Forgot Password
            </h2>
            <h1 className=" mt-1 text-center text-sm text-pr
            ">Please enter the emai address for password </h1>
    
            <form
              className="mt-8 space-y-3 lg:mx-20 sm:mx-4"
              action="#"
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
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded relative bg-white block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-primary focus:bg-white focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
              </div>
    
            </form>
    
            <div className=" flex justify-center items-center lg:mx-20 sm:mx-4 mt-6 bg-primary border text-white mb-6 rounded hover:bg-transparent hover:text-primary hover:border-primary cursor-pointer">
          <span className=" items-center text-lg leading-none font-medium py-3.5" onClick={navigateToReset}>
            Forgot Password
          </span>
        </div>

          </div>
        </div>
      );
};

export default ForgotPassword;