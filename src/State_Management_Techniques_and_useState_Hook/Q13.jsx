import { useState } from "react";

function SimpleCounterApp(){
let [count,setcount]=useState(0)

   function inc(){
    setcount(count+1)

   }

   function dec(){
    if(count==0) return alert("can't go back")
    setcount(count-1)
    
   }

   function reset(){
    setcount(0)
   }

    if(count==10) confirm("Goal reached!!!!!!!!")
    
 return(
    <div className="counter">
        <h3>react counter</h3> <br />
        <b>Count:{count}</b> <br />
         <div className="flex justify-between ">
            <button className="w-60 border rounded-2xl p-1 bg-black text-white " onClick={inc}>increment</button> 
         <button className="w-60 border rounded-2xl p-1 bg-black text-white " onClick={dec}>decrement</button>
         <button className="w-60 border rounded-2xl p-1 bg-black text-white " onClick={reset}>reset</button>
         </div>
    </div>
 )


}

export default  SimpleCounterApp