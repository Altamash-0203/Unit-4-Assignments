import React, { useState } from "react";

function FetchandPrint(){
    const [data,setdata]=useState([])
    function Load(){
        
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then(data=>setdata(data))

    console.log(data)
    confirm("Data is printed Check Console")
    }

    return (
        <button className="border rounded p-2 hover:bg-black hover:text-white " onClick={Load}>Fetch And print data in console</button>
    )
}

export default FetchandPrint