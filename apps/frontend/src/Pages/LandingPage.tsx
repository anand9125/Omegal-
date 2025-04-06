import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
    const[name,setName]=useState("");
    const[localVideoTrack,setLocalVideoTrack]=useState<MediaStreamTrack|null>(null);
    const[localAudioTrack,setLocalAudioTrack]=useState<MediaStreamTrack|null>(null);
    const videoRef=useRef<HTMLVideoElement>(null);  // useRef() hook in React is used to create a mutable reference that persists across re-renders.
    const getCam=async()=>{
      const stream = await window.navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      //stream has acces of mediaStream where all the ausio and videos get savas i want first video and first audio
      
      const videoStream = stream.getVideoTracks()[0];
      const audioStream = stream.getAudioTracks()[0];
      setLocalAudioTrack(audioStream);
      setLocalVideoTrack(videoStream);
      if (!videoRef.current) {
        return;
    }
    videoRef.current.srcObject = new MediaStream([videoStream])
    videoRef.current.play();

    }
    useEffect(()=>{
      if(videoRef.current){
        getCam();
      }
    },[videoRef])

  return (
    <div>
      <video autoPlay ref={videoRef}></video>
        <input type="text" onChange={(e)=>
        setName(e.target.value)}
        placeholder="Enter your name"
        />
        <Link  to={`/room/?name=${name}`} onClick={()=>{}}>Join</Link>
    </div>
  )
}

export default LandingPage