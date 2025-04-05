import { useState } from "react";

function LandingPage() {
    const[name,setName]=useState("");
  return (
    <div>
        <input type="text"
        onChange={(e)=>setName(e.target.value)}
        placeholder="Enter your name"
        />
        <button onClick={()=>{
            
        }}>Join</button>
    </div>
  )
}

export default LandingPage