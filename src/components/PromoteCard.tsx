'use client'
import {useState} from 'react'
import VideoPlayer from './VideoPlayer'
import {useWindowListener} from "@/hooks/useWindowListener"
export default function PromoteCard(){
    const [playing,setPlaying] = useState(true)
    const [pointerPosition,setPointerPosition] = useState({x:0,y:0})

    useWindowListener('contextmenu',(e)=>{
      e.preventDefault();})
    

    return(
    <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row">
    <VideoPlayer vdoSrc="/videos/venue.mp4" isPlaying={playing}/>
    <div className='ml-[20px]'>Book your venue today
                <button className="block mt-[30%] rounded-[100px] bg-sky-600
                hover:bg-indigo-600 px-3 py-2"
                onClick={()=>{
                    setPlaying(!playing)
                }}  
                >
                    {playing? "Pause" : "Play"}
                </button>
                </div>
</div>
)
}