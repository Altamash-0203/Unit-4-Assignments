import { useState } from "react"


function TaskManager(){

    let [tasks,settasks]=useState([])
    let [newtask,setnewtask]=useState("")
    let [tid,settid]=useState(1)
    let [level,setlevel]=useState("")

 
    function addtask(){
        if(newtask && level){
            settasks([...tasks,{id:tid,title:newtask,complated:false,priority:level}])

            settid(tid+1)
            setnewtask("")
        }
    }

    function complateTask(id){
       settasks(tasks.map(task=>task.id==id ?{...task,complated:!task.complated}:task))
    }

    function deleteTask(id){
        settasks(tasks.filter(task=>task.id!=id))
    }

 return(
    <div>
        <div className="flex justify-around"> 
            <input className="border" type="text" value={newtask} onChange={(e) => setnewtask(e.target.value)} placeholder="enter Task"/>
        <select className="border" value={level} onChange={(e) => setlevel(e.target.value)}>
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        <button  className="border" onClick={addtask}>add task</button>  
        </div>
        
        <ul className="p-10 gap-1 m-1">
           {tasks.map((task)=>(
            <li className="flex justify-around items-center font-extrabold p-2 " key={task.id} style={{backgroundColor:task.complated?"lightgreen":"brown"}}>
                 <b>{task.title}</b>
                 <p>{task.priority}</p>
                 <button onClick={()=>deleteTask(task.id)}>delete</button>
                 <button className="border-1 rounded p-1" onClick={()=>complateTask(task.id)}>Complated</button>     
            </li>
           ))}  
           
        </ul>
    </div>
 )


}

export default TaskManager