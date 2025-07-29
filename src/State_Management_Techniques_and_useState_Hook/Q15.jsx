import React, { useEffect, useState } from "react";


function AttendenceManger(){
    const [Students,setStudents]=useState([
    {
        id:1,
        name:"Balchand",
        present:false
    },
     {
        id:2,
        name:"Bikas",
        present:false
    }, {
        id:3,
        name:"Gotya",
        present:true
    },
     {
        id:4,
        name:"ambadas",
        present:true
    },
     {
        id:5,
        name:"kabeer singh",
        present:true
    }
])
   
const [filter,setfilter]=useState("All")
const [data,setdata]=useState(Students)

function Check(id){
    setStudents(prev=>
        prev.map((x)=>
        x.id==id?{...x,present:!x.present}:x)
    )    
}

 useEffect(()=>{
    let FiltredData=
 
    Students.filter((y)=>{
        if(filter=="present") return y.present
        if(filter=="absent") return !y.present
        return true
        
    })
  setdata(FiltredData)
 },[filter,Students])
 



    return(
        <div> 
            <h1 className="mb-4 text-2xl">Attendence manager</h1>
            <div>

                <select className=" mb-4 border-2 text-2xl font-extralight rounded-4xl bg-gray-300" value={filter} onChange={(e) => setfilter(e.target.value)}>
                    <option value="All">All Students</option>
                    <option value="present">Present Students</option>
                    <option value="absent">Absent Students</option>
                </select>
            </div>

            <ul>
                {data.map((z)=>(
                    <li className=" p-3 mb-2 flex justify-around border" key={z.id}>
                       <p>{z.id}</p>
                       <p>{z.name}</p>
                       <p>{z.present?"present":"absent"}</p>
                       <button className="border p-1 cursor-pointer" onClick={() => Check(z.id)}>Change</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AttendenceManger