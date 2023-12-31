import { useState,useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause,setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import {SwiperSlide,Swiper} from "swiper/react"
import { FreeMode } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';


const TopChartCard = ({song,i})=>(
  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
{song.title}
  </div>
)


const TopPlay = () => {
  const divRef = useRef(null);
  const dispatch = useDispatch();
  const {activeSong,isPlaying} = useSelector((state)=>state.player);
  const {data} = useGetTopChartsQuery();

useEffect(()=>{
  divRef.current.ScrollIntoView({behavior:"smooth"});
})

const topPlays = data?.tracks?.slice(0,5);

  const handlePauseClick = ()=>{
    dispatch(playPause(false))
  }

  const handlePlayClick = ()=>{
    dispatch(setActiveSong({song,data,i}));
    dispatch(playPause(true))
  }

  return(
  <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex-col">
  <div className="w-full flex flex-col">
    <div className="flex flex-row justify-between items-center">
    <h2 className="text-white font-bold text-2xl">
      Top Charts
    </h2>
      <Link top="/top-charts">
        <p className="text-gray-300 text-base cursor-pointer">See more</p>
      </Link>
    </div>

    <div>
      {topPlays?.map((song,i)=>(
        <TopChartCard key={song.key} song={song} i={i}/>
      ))}
    </div>
  </div>

  </div>
)};

export default TopPlay;
