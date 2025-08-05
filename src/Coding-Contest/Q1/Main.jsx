import React, { useEffect, useState } from "react";

function Main(){
    const [data,setdata]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setdata(data));
  }, [])


  return(
    <div className="flex flex-col justify-center items-center ">
        <h2 className="border p-2 w-100 rounded-2xl bg-blue-400 text-white hover:shadow-2xl">Posts</h2>

        <div className="p-3 text-left">
            {data.map(x=>(
                <div>
                <li className="border p-1 font-mono" key={x.id}>{x.title} </li> <br />
                </div>
            ))}
        </div>
    </div>
  )

}

export default Main