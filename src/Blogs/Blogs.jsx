import React, { useState } from "react";
import Staff from "../Blogs/Staff";
const Blogs = () => {
  const [activeButton, setActiveButton] = useState(null);
  return (
    <div className="w-full h-auto">
      <div className=" w-full h-auto flex flex-col items-center justify-center">
        <h1 className=" w-1/2 text-center text-black text-6xl font-extrabold items-center">
          Ideas and inspiration to help you run an amazing early education
          center
        </h1>
      </div>

      <div className=" flex justify-center items-center mt-14">
        <button
          className=" mr-20 bg-white text-primary py-2 px-10 rounded-lg border  shadow-sm hover:shadow-lg hover:bg-transparent hover:text-primary hover:border-primary hover:shadow-rose-300  w-30 h-10"
          onClick={() => setActiveButton(1)}
        >
          Child development
        </button>
        <button className=" mr-20 bg-white text-primary py-2 px-10 rounded-lg border  shadow-sm hover:shadow-lg hover:bg-transparent hover:text-primary hover:border-primary hover:shadow-rose-300  w-30 h-10">
          Staff development
        </button>
        <button className=" mr-20 bg-white text-primary py-2 px-10 rounded-lg border  shadow-sm hover:shadow-lg hover:bg-transparent hover:text-primary hover:border-primary hover:shadow-rose-300  w-30 h-10">
          Family engagement
        </button>
      </div>

      <div>
        {activeButton === 1 && <Staff />}
        {activeButton === 2 && <Staff/>}
        
        </div>

    </div>
  );
};

export default Blogs;
