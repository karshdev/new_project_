"use client"
import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const BhajanCard = ({ title, description, audioSrc, imgSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;
      setDuration(audioElement.duration);

   

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
    };

    const handleAudioEnded = () => {
      setCurrentTime(0);
      setIsPlaying(false);
    };

    audioElement.addEventListener("timeupdate", handleTimeUpdate);
    audioElement.addEventListener("ended", handleAudioEnded);

    return () => {
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      audioElement.removeEventListener("ended", handleAudioEnded);
    };
  }, []);

  const togglePlay = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 + "%" : "0%";
console.log("Duration",duration,"currenttime",currentTime)
  return (
    <div className="bg-white w-[100%] sm:w-[45%] shadow-lg rounded-lg">
      <div className="flex p-4 flex-col sm:flex-row">
        <div>
          <img
            className="h-[250px] w-[650px]  rounded "
            src={imgSrc}
            alt="Album Pic"
          />
        </div>
        <div className="w-full p-4 ">
          <div className="flex justify-between">
            <div>
              <h3 className="text-2xl text-grey-darkest font-medium">
                {title}
              </h3>
              <p className="text-sm text-grey mt-1">{description}</p>
            </div>
            <div className="text-red-lighter">
              <FaHeart />
            </div>
          </div>
          <div className="flex justify-center items-center mt-8">
            <div
              className="text-grey-darker rounded-full cursor-pointer"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <FaPause className="text-[30px]" />
              ) : (
                <FaPlay className="text-[30px]" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-8 py-4">
        <div className="flex items-center gap-5 justify-between text-sm text-grey-darker">
          <p>{formatTime(currentTime)}</p>
          <div className="relative w-full bg-gray-600 h-[2px] cursor-pointer">
            <div
              className="absolute left-0 top-[-2px]  h-[5px] bg-blue-500 rounded-full shadow cursor-pointer"
              style={{
                width: progress,
              }}
            ></div>
          </div>
          <p>{formatTime(duration)}</p>
        </div>
      </div>
      <audio ref={audioRef} src={audioSrc}></audio>
    </div>
  );
};

export default BhajanCard;
