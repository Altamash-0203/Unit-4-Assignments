import { useEffect, useState } from "react";

function Connectivity(){
    const [data,setdata]=useState([])
    const [status,setstatus]=useState(navigator.onLine)


    function check(){
        setstatus(navigator.onLine)
    }

    useEffect(()=>{
        window.addEventListener('online',check)
        window.addEventListener("offline",check)
    },[])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setdata(data))
    })

    return (
        <>
        <div>
            <p>{status? "✅ You are online ":"🔴 No internet connection"}</p>
        </div>

        <div className="text-left">
            {data.map(x=>(
                <div>
                    <li className="border  p-2" key={x.id}>{x.name}</li> <br />
                    </div>
            ))}
        </div>



        </>
    )
}

export default Connectivity