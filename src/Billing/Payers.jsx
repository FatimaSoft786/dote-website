import React from "react";
import DataTable from "react-data-table-component"
import { useState, useEffect } from "react"
import ReactTable from 'react-table';
const Payers = () => {

    // const data = [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }];

    // const columns = [
    //     {
    //         name: "Name",
    //         selector: (row) => row.name
    //     },
    //     {
    //         name: "Age",
    //         selector: (row) => row.age
    //     }
    // ]

//     const [data, setData] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [perPage, setPerPage] = useState(10)


    // const columns = [
    //     {
    //       name: "User ID",
    //       selector: (row) => row.userId,
    //     },
    //     {
    //       name: "Title",
    //       selector: (row) => row.title,
    //     },
    //     {
    //       name: "Completed",
    //       selector: (row) => (row.completed ? "Yes" : "No"),
    //     },
    //   ]

    //   useEffect(() => {
    //     fetchTableData()
    //   }, [])
    
    //   async function fetchTableData() {
    //     setLoading(true)
    //     const URL = "https://jsonplaceholder.typicode.com/todos"
    //     const response = await fetch(URL)
    
    //     const users = await response.json()
    //     setData(users)
    //     setLoading(false)
    //   }

    


  return (
    <div className=" w-full h-full bg-slate-100">
      <div className=" flex flex-row px-10 pt-10">
        <span className=" font-poppins font-bold text-2xl">
          Add Payers & Charges
        </span>
      </div>

      <div className=" mx-10 shadow-lg bg-white rounded-lg">
        <div className=" flex flex-row justify-start px-5">
          <div className="flex items-center mx-5 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
            <input
              type="text"
              placeholder="Type"
              className="focus: outline-none text-black1 placeholder:text-black1 font-poppins font-medium text-xs bg-transparent"
            />
          </div>

          <div className="flex items-center mx-5 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
            <input
              type="text"
              placeholder="Description"
              className="focus: outline-none text-black1 placeholder:text-black1 font-poppins font-medium text-xs bg-transparent"
            />
          </div>

          <div className="flex items-center mx-5 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
            <input
              type="text"
              placeholder="Amount"
              className="focus: outline-none text-black1 placeholder:text-black1 font-poppins font-medium text-xs bg-transparent"
            />
          </div>

          <button className="font-poppins font-medium text-base leading-none bg-transparent text-primary border border-primary rounded-lg h-10 my-5 px-10">
            Apply
          </button>
        </div>

  <div className=" mx-10">
  <table className=" w-full">
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Action</th>
        </tr>
    </thead>

    <tbody>
        <tr >
            <td className=" text-center">Shahzaib</td>
            <td className="text-center">Parent</td>
            <td className=" text-center">$100</td>
            <td className=" justify-center flex"><button className=" items-center">Delete</button></td>
        </tr>
    </tbody>
   </table>
  </div>

  


        {/* <DataTable columns={columns} data={data}/> */}

       

       {/* <div className=" mx-5">
       <DataTable
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
      />
       </div> */}


      </div>
    </div>
  );
};
export default Payers;
