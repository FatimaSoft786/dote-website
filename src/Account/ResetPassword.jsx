import React from "react";

const ResetPassword = () => {

  

    return (
        <div className="w-full h-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className=" lg:w-1/3 sm:w-full md:w-1/2 h-auto rounded-xl shadow-md shadow-primary items-center mt-60">
            <h2 className="mt-5 text-center text-3xl font-bold text-primary">
              Reset Password
            </h2>
    
            <form
              className="mt-8 space-y-3 lg:mx-20 sm:mx-4"
              action="#"
              method="POST"
            >
              <div className="rounded-md shadow-sm">
                <div>
                  <label htmlFor="newPassword" className="sr-only">
                    New Password
                  </label>
                  <input
                    id="newPassword"
                    name="new"
                    type="new"
                    autoComplete="Password"
                    required
                    className="appearance-none rounded relative bg-white block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-primary focus:bg-white focus:z-10 sm:text-sm"
                    placeholder="New Password"
                  />
                </div>
              </div>
    
              <div className=" rounded-md shadow-sm">
                <div>
                  <label htmlFor="confirmPassword" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirm"
                    type="confirm"
                    autoComplete="confirm-password"
                    required
                    className="appearance-none rounded relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-primary focus:bg-white focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            </form>
    
            
    
            <div className=" flex justify-center items-center lg:mx-20 sm:mx-4 mt-4 bg-primary border text-white mb-3 rounded hover:bg-transparent hover:text-primary hover:border-primary cursor-pointer">
              <span className=" items-center text-lg leading-none font-medium py-3.5">
                Confirm
              </span>
            </div>
    
           
          </div>
        </div>
      );

};

export default ResetPassword;