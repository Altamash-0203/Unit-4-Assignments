import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Home(){
const [confirm,setconfirm]=useState(false)
const [time,settime]=useState(10)
const nav=useNavigate()


useEffect(()=>{
    let set
    if(confirm && time>0){
        set=setTimeout(()=>settime(t=>t-1),1000)
    }
    else if(time==0) {
          setconfirm(false)
          settime(10)
    }
    return ()=>clearTimeout(set)
},[confirm,time])

function fetch(){
    setconfirm(true)
    settime(10)
}

function yes(){
    nav("/main")
}
function no(){
   setconfirm(false)
   settime(10)
}

return(
    
     <div>
        {!confirm ? (<button className="border p-2 w-100 rounded-2xl bg-violet-400 text-white hover:shadow-2xl" onClick={fetch}>Fetch</button>):(
            <div className=" flex flex-col justify-center items-center ">
                <p className="bg-amber-100">To Fetch Data Click On Yes</p>
                <h1 className="text-3xl">{time}</h1>
                <button className="border p-2 w-100 rounded-2xl bg-violet-400 text-white hover:shadow-2xl" onClick={yes}>Yes</button>
                <button className="border p-2 w-100 rounded-2xl bg-violet-400 text-white hover:shadow-2xl" onClick={no}>No</button>
                </div>
        )}
     </div>
    
)
}

export default Home