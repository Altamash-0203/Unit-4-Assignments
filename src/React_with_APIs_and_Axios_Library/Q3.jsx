import { useState } from "react"
import axios from 'axios';


function FetchApiWithAxios(){
        let [memes,setmemes]=useState([])
        let [loading,setloading]=useState(false)
        let [find,setfind]=useState("")
        let [bg,setbg]=useState('light')
      
        function fetchmeme(){
            setloading(true)

            axios.get("https://api.imgflip.com/get_memes")
            .then((res)=>{
                setmemes(res.data.data.memes)
                setloading(false)
            })
            .catch(()=>{
                setloading(false)
                alert("something went wrong")
            })
        }

        function chnagebg(){
            let newbg= bg=="light"?"dark":"light"
            setbg(newbg)
            document.body.className=newbg
        }

            let filtered=memes.filter((meme)=>{
               return meme.name.includes(find)
            })
        
      return(
         <div>
          <div className="flex justify-evenly">
              <input  className="border rounded text-center p-1 w-50" type="text" placeholder="enter meme name" value={find} onChange={(e)=>setfind(e.target.value)}/>
              <button className="border rounded text-center p-1 w-50" onClick={fetchmeme}>Load meme</button>
              <button className="border rounded text-center p-1 w-50" onClick={chnagebg}>Background</button>
            </div>
            
            {loading && <p>Loading....</p>}
                <div className="grid grid-cols-2 gap-20 ">
                     {filtered.map((meme)=>(
                        <div key={meme.id} className=" border rounded-2xl p-10 flex-col justify-center items-center shadow-2xl hover:shadow-blue-900">
                            <img src={meme.url} alt={meme.name} className="w-100 h-80"/>
                            <b style={{backgroundColor:"whitesmoke"}}>{meme.name}</b>
                            </div>
                     ))}
                    </div>
        </div>
        )
    }

export default FetchApiWithAxios