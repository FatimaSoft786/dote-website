import React from "react";

const Popup = () => {
    return (
      <div className="fixed inset-0 bg-gray-500 opacity-75">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 px-10">Popup Title</h2>
          <p className="mb-4">Popup Content</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Close
          </button>
        </div>
      </div>


    

    );
  }
  
  export default Popup;