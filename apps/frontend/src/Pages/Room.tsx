import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {Socket,io} from "socket.io-client";

const URL = "http://localhost:3000";

function Room() {
    const [searchParams, setSearchParams] = useSearchParams();  //allows you to read and update the URL query parameters in a React component.
    const name = searchParams.get("name");
    const [socket, setSocket] = useState<Socket | null>(null);
    console.log(name);
    const[lobby,setLobby]=useState(false);
    useEffect(() => {
      const socket = io(URL)
      socket.on("send-offer",({roomId})=>{
          alert("send-offer");
          setLobby(false);
          socket.emit("offer",{
            sdp:"",
            roomId
          })
      })
      socket.on("offer",({sdp,roomId})=>{
          alert("send-answer please");
          setLobby(false);
          socket.emit("answer",{
            roomId,
            sdp
          })
      })
      socket.on("answer",({sdp,roomId})=>{
          alert("connection established");
          setLobby(false);
      })
      socket.on("lobby",()=>{
          alert("lobby");
          setLobby(true);
      })
      setSocket(socket);
    },[name]) 
     
    if(!lobby){
      return <div>Waiting to connect you someone</div>
    }
    return (
      <div>Hii{name}
       <video width={400} height={400} />
       <video width={400} height={400} />

      </div>
     
    )

}

export default Room