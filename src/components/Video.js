import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useElementOnScreen } from "../App";
import {FaHeart, FaMusic, FaShare, FaComment} from 'react-icons/fa';

const VideoInfo = ({Avatar, idName, nickName, song, content}) =>{
    return (
    <div className="flex">
          <img className="w-[50px] h-[50px] rounded-full" src={Avatar} alt="avt" />
        <div className="ml-3 min-w-[80%]">
            <div>
                <a href="#" className="text-xl font-bold hover:underline">{idName}</a>
                <a href="#"  className="text-xl ml-2">{nickName}</a>
            </div>
            <div>
                {content}
            </div>
            <div className="flex items-center">
               <FaMusic></FaMusic> <span className="ml-3">{song}</span>
            </div>
        </div>
        <div>
            <button className="p-1 pl-3 pr-3 border-2 border-red-400 rounded-md">Follow</button>
        </div>
    </div>
    )
}

const VideoContent = ({video, like, cmt, share}) => {

    const videoRef = useRef()

    const [playing, setPlaying] = useState(false)
    
    const handleVideo = () => {
        if(playing)
        {
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }
    };

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      };

      const isVisibile = useElementOnScreen(options, videoRef);

      useEffect (() => {
        if (isVisibile) {
          if (!playing) {
            videoRef.current.play();
            setPlaying(true);
          }
        } else {
          if (playing) {
            videoRef.current.pause();
            setPlaying(false);
          }
        }
      }, [isVisibile]);
    

    return <div className="flex">
        
        <video ref={videoRef} onClick={handleVideo} className="w-[80%] max-h-[600px] ml-[50px] rounded-md mt-4" src={video} loop></video>
        
        
        <div className = "flex flex-col justify-end ml-7">
            <div className="text-center mb-4">
                <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                    <FaHeart className="text-xl"/>
                </div>
            <span>{like}</span>
            </div>

            <div className="text-center mb-4">
                <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                    <FaComment className="text-xl"/>
                </div>
            <span>{cmt}</span>
            </div>

            <div className="text-center mb-4">
                <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                    <FaShare className="text-xl"/>
                </div>
            <span>{share}</span>
            </div>
        </div>
    </div>
}

function Video({data}) {
    
    return ( 
        <div className="snap-start max-w-[500px] border-b-2 border-gray-200 pb-10 pt-10 bg-white dark:bg-slate-800">
            <VideoInfo {...data}></VideoInfo>
            <VideoContent {...data}></VideoContent>
        </div>
     );
}

export default Video;