import { useState } from "react";

function BasicTodo(){
let [todos,settodos]=useState(["buy milk","study react"])
    let [newtodo,setnewtodo]=useState("")
 
    function addtodo(){
        if(newtodo=="") return alert("Enter task ")

            settodos([...todos,newtodo ])
        
    }

    function resettodo(){
       settodos([])
    }

    let zero=todos.length==0 ?"no tasks add some task":""

 return(
    <div>
        <div className="flex justify-around items-center border rounded h-20" >
          <input className="border rounded bg-black text-white p-2 " type="text" value={newtodo} onChange={(e) => setnewtodo(e.target.value)} placeholder="enter todo"/>
        <button className="border rounded bg-black text-white p-2 " onClick={addtodo}>Add Todo</button>  
        <button className="border rounded bg-black text-white p-2 " onClick={resettodo}>Clear Todo's</button>    
        </div>
        
        <div className= "flex flex-col justify-center items-center">
            <ul>
            {zero && <p>{zero}</p>}
           {todos.map((todo,i)=>(
            <li className="border rounded bg-amber-900 text-gray-50 w-50" key={i} >
                 <b className="font-mono">{todo}</b>
            </li>
            
           ))}    
        </ul>
        </div>
    </div>
 )

}
export default BasicTodo