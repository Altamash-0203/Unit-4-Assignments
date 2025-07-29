import React, { useState } from "react";

function FetchandShow(){
    const [data,setdata]=useState([])
      

    function Load(){
        
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then(data=>setdata(data))

    }

    return (
        <div>
        <button className="border rounded p-2 hover:bg-black hover:text-white " onClick={Load}>Load Products</button>
        
        {data.length==0?<p className="mt-50 text-red-500">No Data Click on Button to fetch data</p>:""}
         <div className="grid grid-cols-3 p-5  gap-20 ">
        {data.map((x)=>(
             <div className="w-100 h-110 flex-col justify-baseline items-center border rounded-2xl shadow-2xl hover:shadow-blue-400 p-10 " key={x.id}>
                    <img src={x.image} className="w-70 h-70" alt=""/> <br/>
                    <p>{x.title}</p>  
                    <p>{x.price}</p>  
                </div>
        ))}
        </div>
        


        </div>
    )
}

export default FetchandShow